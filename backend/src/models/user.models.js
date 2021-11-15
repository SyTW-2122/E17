import {model, Schema} from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new Schema({
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  role: {
    ref: 'Role',
    type: Schema.Types.ObjectId
  }
},
{
  versionKey: false
});

userSchema.set('toJSON', {
  transform: (_, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
  }
});

userSchema.statics.encryptPassword = (password) => {
  return bcrypt.genSalt(10)
    .then(salt => {
      return bcrypt.hash(password, salt)
        .then(result => {
          return result;
        });
    });
}
userSchema.statics.comparePassword = (password, receivedPassword) => {
  return bcrypt.compare(password, receivedPassword)
    .then(result => {
      return result;
    });
}


export default model('User',userSchema);