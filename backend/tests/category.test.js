const mongoose = require('mongoose')
const supertest = require('supertest')
const {app, server} = require('../src/index')

import Category from '../src/models/category.models';

const api = supertest(app)

const initCategory = [
  {
    name: "Categoria 1 Test",
    imgURL: "Imagen Cateogria 1 Test"
  },
  {
    name: "Categoria 2 Test",
    imgURL: "Imagen Cateogria 2 Test"
  }
]

beforeEach(async () => {
  await Category.deleteMany({})

  await new Category(initCategory[0]).save()
  await new Category(initCategory[1]).save()
})


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
  expect(names).toContain("Categoria 2 Test")  
})

afterAll(() => {
  mongoose.connection.close()
  server.close()
})