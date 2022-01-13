import './database';
import app from './app';

const server = app.listen(4000, () => {
  console.log('Server listen on port', 4000);
});

module.exports = {app, server}