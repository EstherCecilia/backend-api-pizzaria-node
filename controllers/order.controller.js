const Order = require("../models/order.model");
const {
  validateAuthToken,
} = require("../services/authentication-jwt.service");

// Listar todos os pedidos
exports.listOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("client", "name");
    res.json(orders);
  } catch (error) {
    console.log({error})
    res.status(500).json({ error: "Erro ao listar pedidos" });
  }
};

// Criar um novo pedido
exports.createOrder = async (req, res) => {
  try {
    const token = req.headers.authorization;

    const clientId = await validateAuthToken(token);

    if (!clientId) {
      throw new Error("Cliente não autorizado!");
    }

    const order = new Order(req.body);
    order.client = clientId;
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    console.log({error})
    res.status(500).json({ error: "Erro ao criar pedido" });
  }
};

// Obter um pedido por ID
exports.getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("client", "name")
      .populate("products.product", "name price");
    if (!order) {
      return res.status(404).json({ error: "Pedido não encontrado" });
    }
    res.json(order);
  } catch (error) {
    console.log({error})
    res.status(500).json({ error: "Erro ao obter pedido" });
  }
};

// Atualizar um pedido
exports.updateOrder = async (req, res) => {
  try {
    const token = req.headers.authorization;

    const clientId = await validateAuthToken(token);

    if (!clientId) {
      throw new Error("Cliente não autorizado!");
    }


    const payload = {
      ...req.body,
      client: clientId
    }

    const order = await Order.findByIdAndUpdate(req.params.id, payload, {
      new: true,
      runValidators: true,
    });
    if (!order) {
      return res.status(404).json({ error: "Pedido não encontrado" });
    }
    res.json(order);
  } catch (error) {
    console.log({error})
    res.status(500).json({ error: "Erro ao atualizar pedido" });
  }
};

// Remover um pedido
exports.removeOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndRemove(req.params.id);
    if (!order) {
      return res.status(404).json({ error: "Pedido não encontrado" });
    }
    res.json({ message: "Pedido removido com sucesso" });
  } catch (error) {
    console.log({error})
    res.status(500).json({ error: "Erro ao remover pedido" });
  }
};
