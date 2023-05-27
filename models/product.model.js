const mongoose = require('mongoose');

// Define o esquema do produto
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

// Exporta o modelo 'Product' com base no esquema definido
module.exports = mongoose.model('Product', productSchema);
