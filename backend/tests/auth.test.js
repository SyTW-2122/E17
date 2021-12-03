const mongoose = require('mongoose')
const supertest = require('supertest')
const {app, server} = require('../src/index')

import User from '../src/models/user.models';

const api = supertest(app)

beforeEach(async () => {
  await User.deleteMany({})

  await new User({
    "email": "user0@test.com",
    "password": await User.encryptPassword("user0test"),
    "name": "User0",
    "surname": "Test"
  }).save()
  await new User({
    "email": "user1@test.com",
    "password": await User.encryptPassword("user1test"),
    "name": "User1",
    "surname": "Test"
  }).save()
})

test("SignIn", async () => {
  const dataUser = {
    "email": "user0@test.com",
    "password": "user0test"
  }

  await api
    .post("/auth/signIn")
    .send(dataUser)
    .expect(201)
    .expect('Content-Type', /application\/json/);
})

test("SignUp", async () => {
  const userData = {
    "email": "user2@test.com",
    "password": "user2test",
    "name": "User2",
    "surname": "Test"
  }
  await api
    .post("/auth/signup")
    .send(userData)
    .expect(201)
    .expect('Content-Type', /application\/json/);
})

test("Profile Data", async () => {
  const dataUser = {
    "email": "user0@test.com",
    "password": "user0test"
  }

  const response_ = await api
    .post("/auth/signIn")
    .send(dataUser)

  const tokenUser = response_.body.token

  const response = await api
    .post("/auth/profile")
    .send({"token": tokenUser})
    .expect(200)
    .expect('Content-Type', /application\/json/);

  expect(response.body.email).toBe("user0@test.com")
  expect(response.body.name).toBe("User0")
  expect(response.body.surname).toBe("Test")
})

afterAll(() => {
  mongoose.connection.close()
  server.close()
})