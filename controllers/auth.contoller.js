const Client = require("../models/client.model");
const authenticationClient = require("../services/authentication.service");
const {
  generateAuthToken,
} = require("../services/authentication-jwt.service");

// Criar um novo cliente
exports.autheticationClient = async (req, res) => {
  try {
    const { email, password, ...body } = req.body;
    // Procura o cliente pelo email fornecido
    const client = await Client.findOne({ email });

    if (!client) {
      throw new Error("Cliente não encontrado!");
    }

    await authenticationClient(email, password);

    const token = await generateAuthToken(client.id);
    client.token = token;
    await client.save();

    const responseAuth = {
      ...body,
      email,
      token,
    };
    res.status(201).json(responseAuth);
  } catch (error) {
    console.log({error})
    res.status(500).json({ error: "Erro ao tentar autenticar cliente" });
  }
};
