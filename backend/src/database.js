import mongoose from 'mongoose'
import password from './pass-db';

const {NODE_ENV} = process.env
let connectionString;

if(NODE_ENV === "test") {
  connectionString  = `mongodb+srv://StackParts:${password}@stackpartsdb.0htt5.mongodb.net/StackPartsTest?retryWrites=true&w=majority`;
} else {
  connectionString = `mongodb+srv://StackParts:${password}@stackpartsdb.0htt5.mongodb.net/StackParts?retryWrites=true&w=majority`;
}

mongoose.connect(connectionString, {
  useNewUrlParser : true,
  useUnifiedTopology:true,
})
.then(() => {
  console.log("DataBase connected");
})
.catch(err => {
  console.error(err);
});