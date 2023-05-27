const bcrypt = require('bcrypt');

// Função para criptografar a senha
const hashPassword = async (password) => {
  try {
    const saltRounds = 0; // Número de rounds de hash (quanto maior, mais seguro, mas mais lento)
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    throw new Error('Erro ao criptografar a senha');
  }
};


module.exports = hashPassword;