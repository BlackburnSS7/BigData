const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
  Nomdupropriétaire: String,
  CIN: String,
  NEPH: String,
  Marque: String,
  Type: String,
  Genre: String,
  Modele: String,
  Immatriculation: String,
  Typedecarburant: String,
  Numerodechassis: String,
  Nombredecylindres: String,
  Puissancefiscal: String,
  Nombredeplace: String,
  status: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('tasks', TaskSchema);
