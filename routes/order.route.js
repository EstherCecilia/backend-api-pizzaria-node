const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order.controller');

// Rotas para pedidos
router.get('/', orderController.listOrders);
router.post('/', orderController.createOrder);
router.get('/:id', orderController.getOrder);
router.put('/:id', orderController.updateOrder);
router.delete('/:id', orderController.removeOrder);

module.exports = router;