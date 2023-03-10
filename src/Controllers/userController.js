const { userService } = require('../services');
const { newToken } = require('../auth/token');

const validateBody = (email, password) => email && password;

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!validateBody(email, password)) {
  return res.status(400).json({ message: 'Some required fields are missing' });
  }
  const user = await userService.getUserByEmail(email);
  if (user.email !== email || user.password !== password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  const { password: _, ...data } = user.dataValues;
  const token = newToken(data);
  return res.status(200).json({ token });
};

module.exports = {
  login,
};