import Product from '../models/product.models';
import Category from '../models/category.models';
import User from '../models/user.models';

export const reset = async (request, response) => {
  await Product.deleteMany({})
  await Category.deleteMany({})
  await User.deleteMany({})

  response.status(204).end()
}