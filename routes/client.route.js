const express = require('express');
const router = express.Router();
const clientController = require('../controllers/client.contoller');

// Rotas para clientes
router.get('/', clientController.listClients);
router.post('/', clientController.createClient);
router.get('/:id', clientController.getClient);
router.put('/:id', clientController.updateClient);
router.delete('/:id', clientController.removeClient);

module.exports = router;
