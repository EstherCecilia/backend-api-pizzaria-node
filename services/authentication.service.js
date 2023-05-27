const Client = require('../models/client.model');
const comparePassword = require('./compare-hash.service');

// Função para autenticar o cliente
const authenticationClient = async (email, password) => {
  try {
    // Procura o cliente pelo email fornecido
    const client = await Client.findOne({ email });

    if (!client) {
      throw new Error('Cliente não encontrado!');
    }
    
    // Verifica se a senha criptografada coincide com a senha armazenada no banco de dados
    const match = await comparePassword(password, client.password);
    if (!match) {
      throw new Error('Cliente não autenticado!');
    }

  } catch (error) {
    throw new Error('Erro ao autenticar o cliente');
  }
};


module.exports = authenticationClient;
