const bcrypt = require('bcrypt');

// Função para comparar a senha fornecida com o hash armazenado
const comparePassword = async (password, hashedPassword) => {
  try {
    const match = await bcrypt.compare(password, hashedPassword);
    return match;
  } catch (error) {
    throw new Error('Erro ao comparar as senhas');
  }
};

module.exports = comparePassword;