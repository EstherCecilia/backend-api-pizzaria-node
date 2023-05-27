const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.contoller');

// Rotas para autenticação de cliente
router.post('/', authController.autheticationClient);

module.exports = router;
