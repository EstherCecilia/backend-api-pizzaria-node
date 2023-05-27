const express = require('express');
const connectDB = require('./database/database');

const app = express();
const PORT = 3000;

// Conectar ao banco de dados
connectDB();

// Configuração do servidor
app.use(express.json());


// Rotas
const clientRoutes = require('./routes/client.route');
const productRoutes = require('./routes/product.route');
const orderRoutes = require('./routes/order.route');
const authRoutes = require('./routes/auth.route');

app.use('/clientes', clientRoutes);
app.use('/produtos', productRoutes);
app.use('/pedidos', orderRoutes);
app.use('/login', authRoutes);

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
