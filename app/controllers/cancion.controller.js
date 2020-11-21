const Cancion = require('../models/cancion.model.js');

exports.create = (req, res) => {

  if(Object.keys(req.body).length === 0) {
    return res.status(400).send({
    message: "Se deben enviar datos del Usuario"
    });
  }
  // Create a new Product with request's data
  const cancion = new Cancion({
    Nombre: req.body.Nombre,
    Album: req.body.Album,
    Artista: req.body.Artista,
    Genero: req.body.Genero,
    Anio: req.body.Anio,
    Letra: req.body.Letra
  });
  // Save the Product in the database
  cancion.save().then(data => {
    res.status(200).send(data);
    }).catch(err => {
      res.status(500).send({
      message: err.message
      })
    })
 }

 exports.getAll = (req, res)=>{
  Cancion.find().then(data =>{
    if(!data){
      return res.status(404).send({
        message: "No hay canciones disponibles"
        });
    }
    return res.status(200).send(data);
  }).catch(err =>{
    res.status(500).send({
      message: err.message
      })
  })
 }

 exports.getLetraCancion = (req, res) =>{
   let id = req.body._id
   if(!id){
    return res.status(404).send({
      message: "El UserName es requerido"
      });
  }
  Cancion.findOne({_id: id}).then(data =>{
    if(!data){
      return res.status(404).send({
        message: "No hay canciones con ese Identificador"
        });
    }
    return res.status(200).send(data.Letra);
  }).catch(err =>{
    res.status(500).send({
      message: err.message
      })
  })
 }