const Product = require('../models/product.model');

// Listar todos os produtos
exports.listProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.log({error})
    res.status(500).json({ error: 'Erro ao listar produtos' });
  }
};

// Criar um novo produto
exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    console.log({error})
    res.status(500).json({ error: 'Erro ao criar produto' });
  }
};

// Obter um produto por ID
exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    res.json(product);
  } catch (error) {
    console.log({error})
    res.status(500).json({ error: 'Erro ao obter produto' });
  }
};

// Atualizar um produto
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!product) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    res.json(product);
  } catch (error) {
    console.log({error})
    res.status(500).json({ error: 'Erro ao atualizar produto' });
  }
};

// Remover um produto
exports.removeProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndRemove(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    res.json({ message: 'Produto removido com sucesso' });
  } catch (error) {
    console.log({error})
    res.status(500).json({ error: 'Erro ao remover produto' });
  }
};
