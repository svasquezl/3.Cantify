module.exports = (app) => {
  const listaReproduccion = require('../controllers/lista_reproduccion.controller');

  app.post('/listareproduccion', listaReproduccion.create);
  app.get("/listasreproduccion", listaReproduccion.getAll);
  app.get("/listareproduccion", listaReproduccion.getlistaById);
  app.post('/addcancionlistareproduccion', listaReproduccion.addcancionlistareproduccion);
  app.post('/removecancionlistareproduccion', listaReproduccion.removecancionlistareproduccion);


 }