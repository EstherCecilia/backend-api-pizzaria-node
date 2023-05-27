const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Conecta ao banco de dados MongoDB usando o Mongoose
    await mongoose.connect('mongodb://127.0.0.1:27017/pizzeria', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    // A conexão foi estabelecida com sucesso
    console.log('Conexão com o banco de dados estabelecida');
  } catch (error) {
    // Ocorreu um erro ao conectar ao banco de dados
    console.error('Erro ao conectar ao banco de dados:', error);

    // Encerra o processo com código de saída 1 (indicando um erro)
    process.exit(1);
  }
};

module.exports = connectDB;
