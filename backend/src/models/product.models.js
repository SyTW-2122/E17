import {model, Schema} from 'mongoose'

const productSchema = new Schema({
  category: String,
  name: String,
  price: Number,
  imgURL: String,
  discount: Boolean,
  espec: [String]
},
{
  versionKey : false
});

productSchema.set('toJSON', {
  transform: (_, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
  }
})

export default model('Product',productSchema);