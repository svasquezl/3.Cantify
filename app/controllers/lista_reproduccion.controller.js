const ListaReproduccion = require('../models/lista_reproduccion.model');

exports.create = (req, res) => {

  if(Object.keys(req.body).length === 0) {
    return res.status(400).send({
    message: "Se deben enviar datos del Usuario"
    });
  }
  // Create a new Product with request's data
  const listaReproduccion = new ListaReproduccion({
    Nombre: req.body.Nombre,
    Canciones: req.body.Canciones
  });
  // Save the Product in the database
  listaReproduccion.save().then(data => {
    res.status(200).send(data);
    }).catch(err => {
      res.status(500).send({
      message: err.message
      })
    })
 }

 exports.getAll = (req, res)=>{
  ListaReproduccion.find().populate({ path: 'Cancion', model: 'cancion.model' }).then(data =>{
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

 exports.getAll = (req, res)=>{
  ListaReproduccion.find().then(data =>{
    if(!data){
      return res.status(404).send({
        message: "No hay Lista de reproduccion disponibles"
        });
    }
    return res.status(200).send(data);
  }).catch(err =>{
    res.status(500).send({
      message: err.message
      })
  })
 }

 exports.getlistaById = (req, res)=>{

  let id = req.body._id
  if(!id){
   return res.status(404).send({
     message: "El UserName es requerido"
     });
 }
  ListaReproduccion.findOne({_id: id}).populate({ path: 'Cancion', model: 'cancion.model' }).then(data =>{
    if(!data){
      return res.status(404).send({
        message: "No existe lista de reproduccion"
        });
    }
    return res.status(200).send(data.Canciones);
  }).catch(err =>{
    res.status(500).send({
      message: err.message
      })
  })
 }

 exports.addcancionlistareproduccion =async (req, res) =>{

  let id = req.body._id
  let canciones = req.body.Canciones
    if(!id){
      return res.status(404).send({
        message: "El identificador de la lista es requerido"
        });
    }
    if(!canciones){
      return res.status(404).send({
        message: "No se enviaron canciones para adicionar"
        });
    }
      let listaReproduccion = await ListaReproduccion.findOne({_id: id})
      if(!listaReproduccion) {
        return res.status(404).send({
          message: "No existe lista de reproduccion"
          });
      }
    await canciones.forEach(cancion => {
        console.log(cancion)
        listaReproduccion.Canciones.push(cancion)
      });

  ListaReproduccion.findOneAndUpdate({_id: id}, listaReproduccion, {new: true}).then(data =>{
    if(!data){
      return res.status(404).send({
        message: "No se puedo adicionar la cancion a la lista de reproduccion"
        });
    }
    return res.status(200).send(data);
  }).catch(err =>{
    res.status(500).send({
      message: err.message
      })
  })

 }

 exports.removecancionlistareproduccion =async (req, res) =>{

  let id = req.body._id
  let canciones = req.body.Canciones
    if(!id){
      return res.status(404).send({
        message: "El identificador de la lista es requerido"
        });
    }
    if(!canciones){
      return res.status(404).send({
        message: "No se enviaron canciones para adicionar"
        });
    }
      let listaReproduccion = await ListaReproduccion.findOne({_id: id})
      if(!listaReproduccion) {
        return res.status(404).send({
          message: "No existe lista de reproduccion"
          });
      }
      await canciones.forEach(cancion => {
        console.log(cancion);
        const pos = listaReproduccion.Canciones.indexOf(cancion)
        listaReproduccion.Canciones.splice(pos, 1)
      });

  ListaReproduccion.findOneAndUpdate({_id: id}, listaReproduccion, {new: true}).then(data =>{
    if(!data){
      return res.status(404).send({
        message: "No se puedo adicionar la cancion a la lista de reproduccion"
        });
    }
    return res.status(200).send(data);
  }).catch(err =>{
    res.status(500).send({
      message: err.message
      })
  })

 }

