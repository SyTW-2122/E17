const mongoose = require('mongoose')
const supertest = require('supertest')
const {app, server} = require('../src/index')

import Product from '../src/models/product.models';
import User from '../src/models/user.models';

const api = supertest(app)

let tokenAdmin

const initProduct = [
  {
    "category": "CategoryA",
    "name": "Name Product1",
    "price": 15,
    "imgURL": "Imagen del Producto1",
    "discount": true,
    "espec": ["Espec0", "Espec1"]
  },
  {
    "category": "CategoryB",
    "name": "Name Product2",
    "price": 125,
    "imgURL": "Imagen del Producto2",
    "discount": false,
    "espec": ["Espec2", "Espec3"]
  }
]

beforeEach(async () => {
  await Product.deleteMany({})

  await new Product(initProduct[0]).save()
  await new Product(initProduct[1]).save()

  await User.deleteMany({})
  const userData = {
    "email": "admin@test.com",
    "password": "test12345",
    "name": "Admin",
    "surname": "Test",
    "role": "admin"
  }
  const response = await api
    .post("/auth/signup")
    .send(userData)

  tokenAdmin = response.body.token
})

// Post
test("Post one Product", async () => {
  const newProduct = {
    "category": "CategoryC",
    "name": "Name Product3",
    "price": 200,
    "imgURL": "Imagen del Producto3",
    "discount": false,
    "espec": ["Espec4", "Espec5"]
  }

  // Hacemos el post con la categoria
  await api
    .post("/product")
    .set('x-access-token', tokenAdmin)
    .send(newProduct)
    .expect(201)
    .expect('Content-Type', /application\/json/);
  
  // Comprobamos que la categoria se haya añadido
  const response =  await api.get('/product');
  const names = response.body.map(product => product.name)
  expect(response.body).toHaveLength(initProduct.length + 1) 
  expect(names).toContain(newProduct.name)
})

// Delete
test("Delete first Product", async () => {
  const response =  await api.get('/product');
  const deleteProductId = response.body[0].id
  
  await api
    .delete(`/product/${deleteProductId}`)
    .set('x-access-token', tokenAdmin)
    .expect(200)
    .expect('Content-Type', /application\/json/);
  
  const response_ =  await api.get('/product');
  expect(response_.body).toHaveLength(initProduct.length - 1)  
})

// Put
test("Update first Product", async () => {
  const response =  await api.get('/product');
  const updateProductId = response.body[0].id
  const newDataProduct = {
    "price": 98,
    "imgURL": "Imagen especial del Producto1",
  }
  await api
    .put(`/product/${updateProductId}`)
    .set('x-access-token', tokenAdmin)
    .send(newDataProduct)
    .expect(200)
    .expect('Content-Type', /application\/json/);

  const response_ =  await api.get('/product');
  const names = response_.body.map(product => product.imgURL)
  const prices = response_.body.map(product => product.price)
  expect(response.body).toHaveLength(initProduct.length) 
  expect(names).toContain(newDataProduct.imgURL)
  expect(prices).toContain(newDataProduct.price)
})

afterAll(() => {
  mongoose.connection.close()
  server.close()
})