const mongoose = require('mongoose');
const _cancion = require('./cancion.model')
const Schema = mongoose.Schema
const ListaReproduccionSchema = mongoose.Schema({
  Nombre:{
    type: String,
    required: true
  },
  Canciones: [{
    type: Schema.Types.ObjectId, ref: _cancion
  }],
  }, {
    timestamps: true
  });
  module.exports = mongoose.model('ListaReproduccion', ListaReproduccionSchema);