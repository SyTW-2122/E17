import {Schema, model} from 'mongoose'

const categorySchema = new Schema({
  name: String,
  imgURL: String
},
{
  versionKey : false
});

categorySchema.set('toJSON', {
  transform: (_, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    // delete returnedObject.__v
  }
})

export default model('Category',categorySchema);