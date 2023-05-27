const mongoose = require('mongoose');

// Define o esquema de pedido
const orderSchema = new mongoose.Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
        required: true
      },
      products: [{
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true
        },
        quantidade: {
          type: Number,
          required: true
        }
      }],
      total: {
        type: Number,
        required: true
      },
      date: {
        type: Date,
        default: Date.now
      }
});

// Exporta o modelo 'Order' com base no esquema definido
module.exports = mongoose.model('Order', orderSchema);
