const mongoose = require('mongoose')
const supertest = require('supertest')
const {app, server} = require('../src/index')

const api = supertest(app)

test('Category returned as JSON', async () => {
  await api
    .get('/category')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

afterAll(() => {
  mongoose.connection.close()
  server.close()
})