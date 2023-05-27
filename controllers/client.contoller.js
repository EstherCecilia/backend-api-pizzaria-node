const Client = require('../models/client.model');
const hashPassword = require('../services/generate-hash.service');

// Listar todos os clientes
exports.listClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    console.log({error})
    res.status(500).json({ error: 'Erro ao listar clientes' });
  }
};

// Criar um novo cliente
exports.createClient = async (req, res) => {
  try {
    const client = new Client(req.body);
    client.password = await hashPassword(req.body.password)
    await client.save();
    res.status(201).json(client);
  } catch (error) {
    console.log({error})
    res.status(500).json({ error: 'Erro ao criar cliente' });
  }
};

// Obter um cliente por ID
exports.getClient = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    if (!client) {
      return res.status(404).json({ error: 'Cliente não encontrado' });
    }
    res.json(client);
  } catch (error) {
    console.log({error})
    res.status(500).json({ error: 'Erro ao obter cliente' });
  }
};

// Atualizar um cliente
exports.updateClient = async (req, res) => {
  try {
    const client = await Client.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!client) {
      return res.status(404).json({ error: 'Cliente não encontrado' });
    }
    res.json(client);
  } catch (error) {
    console.log({error})
    res.status(500).json({ error: 'Erro ao atualizar cliente' });
  }
};

// Remover um cliente
exports.removeClient = async (req, res) => {
  try {
    const client = await Client.findByIdAndRemove(req.params.id);
    if (!client) {
        return res.status(404).json({ error: 'Cliente não encontrado' });
      }
      res.json({ message: 'Cliente removido com sucesso' });
    } catch (error) {
      console.log({error})
      res.status(500).json({ error: 'Erro ao remover cliente' });
    }
  };
