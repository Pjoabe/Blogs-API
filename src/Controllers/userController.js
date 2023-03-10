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

const registerNewUser = async (req, res) => {
  const { displayName, email, password } = req.body;
  const allUsers = await userService.getAllUsers();

  if (allUsers.find((user) => user.email === email)) {
    return res.status(409).json({ message: 'User already registered' });
  }
  await userService.createNewUser({ displayName, email, password });
  const token = newToken(email);
  return res.status(201).json({ token });
};

const getAllUsersInfo = async (_req, res) => {
  const allUsers = await userService.getAllUsers();
  const result = allUsers.map(({ 
    id, displayName, email, image,
  }) => ({ id, displayName, email, image }));
  return res.status(200).json(result);
};

module.exports = {
  login,
  registerNewUser,
  getAllUsersInfo,
};