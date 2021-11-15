import mongoose from 'mongoose'
import password from './pass-db';

const connectionString = `mongodb+srv://StackParts:${password}@stackpartsdb.0htt5.mongodb.net/StackParts?retryWrites=true&w=majority`;

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