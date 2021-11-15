import express from 'express';
import morgan from 'morgan';
import {createRoles} from './libs/initialRoles'

const app = express();
createRoles();

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (_,response) => {
  response.send('<h1 style="text-align:center;margin-top:50px">Backend Funcionando</h1>');
});

import categoryRoutes from './routes/category.routes'
app.use('/category', categoryRoutes);

import productRoutes from './routes/product.routes'
app.use('/product', productRoutes);

import authRoutes from './routes/auth.routes'
app.use('/auth', authRoutes);

export default app;