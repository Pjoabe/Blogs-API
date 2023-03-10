const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '30d',
};

const newToken = (data) => jwt.sign({ data }, secret, jwtConfig);

module.exports = {
  newToken,
};