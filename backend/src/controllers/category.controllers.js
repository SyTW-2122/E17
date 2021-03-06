import Category from '../models/category.models';

export const createCategory = async (request, response) => {
  const content = request.body;

  const oldCategory = await Category.findOne({"name": content.name.toUpperCase()});
  if(oldCategory) return response.status(409).json({message: "Categoria ya existente"})

  const newCategory = new Category({
    name: content.name.toUpperCase(),
    imgURL: content.imgURL
  });

  newCategory.save()
  .then(result => {
    response.status(201).json(result);
  })
  .catch(err => {
    console.error(err);
  })
}

export const getCategory = (_, response) => {
  Category.find()
  .then(result => {
    response.status(200).json(result);
  })
  .catch(err => {
    console.error(err);
  });
}

export const updateCategoryById = (request,response) => {
  const content = request.body;
  const {categoryId} = request.params;
  Category.findByIdAndUpdate(categoryId,content,{
    new : true
  })
  .then(result => {
    response.status(200).json(result);
  })
}

export const deleteCategoryById = (request, response) => {
  const {categoryId} = request.params;
  Category.findByIdAndDelete(categoryId)
  .then(() => {
    response.status(200).json("Categoria Eliminada");
  })
}