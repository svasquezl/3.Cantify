module.exports = (app) => {
  const cancion = require('../controllers/cancion.controller.js');

  app.post('/cancion', cancion.create);
  app.get("/canciones", cancion.getAll);
  app.get("/letracancion", cancion.getLetraCancion);

 }