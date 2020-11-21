module.exports = (app) => {
  const usuario = require('../controllers/usuario.controller.js');

  app.post('/usuario', usuario.create);
  app.post('/login', usuario.login);

 }

