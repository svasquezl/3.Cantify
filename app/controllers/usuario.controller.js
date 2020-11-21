const Usuario = require('../models/usuario.model.js');

exports.create = (req, res) => {

  if(Object.keys(req.body).length === 0) {
    return res.status(400).send({
    message: "Se deben enviar datos del Usuario"
    });
  }
  // Create a new Product with request's data
  const usuario = new Usuario({
    UserName: req.body.UserName,
    Name: req.body.Name,
    Apellidos1: req.body.Apellidos1,
    Apellidos2: req.body.Apellidos2,
    Email: req.body.Email,
    Password: req.body.Password
  });
  // Save the Product in the database
  usuario.save().then(data => {
    res.status(200).send(data);
    }).catch(err => {
      res.status(500).send({
      message: err.message || "Something wrong occurred while creating the record."
      })
    })
 }

 exports.login = (req, res) =>{

  if(Object.keys(req.body).length === 0) {
    return res.status(400).send({
    message: "Deben de enviar datos validos para autenticarce"
    });
  }

  let usuario = req.body.UserName
  let password = req.body.Password
    if(!usuario){
      return res.status(404).send({
        message: "El UserName es requerido"
        });
    }

    if(!password){
      return res.status(404).send({
        message: "Por favor envie el Password"
        });
    }
  Usuario.findOne({UserName: usuario, Password: password}).then(usuario => {
      if(!usuario) {
          return res.status(404).send({
          message: "No existe usuario, Verifique los datos"
          });
      }
 return res.status(200).send(usuario);
 }).catch(err => {
  if(err.kind === 'ObjectId') {
  return res.status(404).send({
  message: "Usuario not found with id:" + req.params.id
  });
  }
  return res.status(500).send({
  message: "Something wrong ocurred while retrieving the record with id:"+ req.params.id
  });
 });


 }
