import {model, Schema} from 'mongoose'

const roleSchema = new Schema({
  name: {
    type: String,
    unique: true
  }
},
{
  versionKey: false
});

roleSchema.set('toJSON', {
  transform: (_, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
  }
});

export default model('Role',roleSchema);