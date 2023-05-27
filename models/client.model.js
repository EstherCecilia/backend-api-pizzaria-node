const mongoose = require('mongoose');

// Define o esquema do cliente
const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true // Adiciona a opção unique: true para tornar o campo email único
  },
  password: {
    type: String,
    required: true
  },  
  token: {
    type: String,
  },
  cellphone: {
    type: String,
    required: true
  }
});

// Exporta o modelo 'Client' com base no esquema definido
module.exports = mongoose.model('Client', clientSchema);
