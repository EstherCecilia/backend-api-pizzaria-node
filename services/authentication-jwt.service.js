const jwt = require('jsonwebtoken')
const secret = 'javainuse-secret-key'; // segredo para geração do jwt

// Método para gerar um token de autenticação com duração de um mês
const generateAuthToken = (userId) => {
  const token = jwt.sign({ userId }, secret, { expiresIn: '30d' });
  return token;
}

// Método para validar a autenticação usando o token
const validateAuthToken = (token) => {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded.userId;
  } catch (error) {
    console.error('Erro na validação do token:', error);
    return false;
  }
}


module.exports = {validateAuthToken, generateAuthToken};