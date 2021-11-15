import Product from '../models/product.models';

export const createProduct = (request, response) => {
  const content = request.body;
  
  const newProduct = new Product({
    category: content.category.toUpperCase(),
    name: content.name,
    price: content.price,
    imgURL: content.imgURL,
    discount: content.discount,
    espec: content.espec
  })

  newProduct.save()
  .then(result => {
    response.status(201).json(result);
  })
  .catch(err => {
    console.error(err);
  });
}

export const getProduct = (request, response) => {
  Product.find()
  .then(result => {
    response.status(200).json(result);
  })
  .catch(err => {
    console.error(err);
  });
}

export const getProductById = (request, response) => {
  const {productId} = request.params;
  Product.findById(productId)
  .then(result => {
    response.status(200).json(result);
  })
  .catch(err => {
    console.error(err);
  });
}

export const getProductByDiscount = (request,response) => {
  const {status} = request.params;
  Product.find({'discount': status})
  .then(result => {
    response.status(200).json(result);
  })
  .catch(err => {
    console.error(err);
  });
}

export const getProductByCategory = (request, response) => {
  const {category} = request.params;
  const cat = category.toUpperCase()
  Product.find({"category": cat})
  .then(result => {
    response.status(200).json(result);
  })
  .catch(err => {
    console.error(err);
  });
}

export const updateProductById = (request, response) => {
  const content = request.body;
  const {productId} = request.params;
  Product.findByIdAndUpdate(productId,content,{
    new : true
  })
  .then(result => {
    response.status(200).json(result);
  })
}

export const deleteProductById = (request, response) => {
  const {productId} = request.params;
  Product.findByIdAndDelete(productId)
  .then(() => {
    response.status(200).json("Producto Eliminado");
  })
}