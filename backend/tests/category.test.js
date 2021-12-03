const mongoose = require('mongoose')
const supertest = require('supertest')
const {app, server} = require('../src/index')

import Category from '../src/models/category.models';

const api = supertest(app)

const initCategory = [
  {
    name: "CategoriaA",
    imgURL: "Imagen Cateogria 1 Test"
  },
  {
    name: "CategoriaB",
    imgURL: "Imagen Cateogria 2 Test"
  }
]

beforeEach(async () => {
  await Category.deleteMany({})

  await new Category(initCategory[0]).save()
  await new Category(initCategory[1]).save()
})

// Gets
test('Category returned as JSON', async () => {
  await api
    .get('/category')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('There is one Category', async () => {
  const response =  await api.get('/category');
  expect(response.body).toHaveLength(initCategory.length)  
})

test('The first Cateogry', async () => {
  const response =  await api.get('/category');
  const names = response.body.map(category => category.name)
  expect(names).toContain("CategoriaA")  
})

// Posts
test("A valid category can be added", async () => {
  
  const userData = {
    "email": "admin@test.com",
    "password": "test12345"
  }
  let tmp_token = await api
    .post("/auth/signin")
    .send(userData)

  const token = tmp_token.body.token

  // Creamos una categoria
  const newCategory = {
    name: "CategoriaC",
    imgURL: "Imagen Cateogria 3 Test"
  }

  // Hacemos el post con la categoria
  await api
    .post("/category")
    .set('x-access-token', token)
    .send(newCategory)
    .expect(201)
    .expect('Content-Type', /application\/json/);
  

  // Comprobamos que la categoria se haya añadido
  const response =  await api.get('/category');
  const names = response.body.map(category => category.name)
  expect(response.body).toHaveLength(initCategory.length + 1) 
  expect(names).toContain(newCategory.name.toUpperCase())
})

afterAll(() => {
  mongoose.connection.close()
  server.close()
})