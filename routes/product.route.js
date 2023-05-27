const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

// Rotas para produtos
router.get('/', productController.listProducts);
router.post('/', productController.createProduct);
router.get('/:id', productController.getProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.removeProduct);

module.exports = router;