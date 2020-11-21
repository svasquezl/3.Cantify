const mongoose = require('mongoose');
const UsuarioSchema = mongoose.Schema({
  UserName: {
    type: String,
    unique: true,
    required: true
  },
  Name: {
    type: String,
    required: true
  },
  Apellidos1: {
    type: String,
    required: true
  },
  Apellidos2: {
    type: String,
    required: true
    },
  Email: {
    type: String,
    required: true
  },
  Password: {
    type: String,
    required: true
  }
}, {
 timestamps: true
});
module.exports = mongoose.model('Usuario', UsuarioSchema);