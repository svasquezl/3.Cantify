const mongoose = require('mongoose');
const CancionSchema = mongoose.Schema({
Nombre:{
  type: String,
  required: true
},
Album:{
  type: String,
  required: true
},
Artista: {
  type: String,
  required: true
},
Genero: {
  type: String,
  required: true
},
Anio: {
  type: String,
  required: true
},
Letra: {
  type: String
}
}, {
  timestamps: true
});
module.exports = mongoose.model('Cancion', CancionSchema);
