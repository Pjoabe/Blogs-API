const { User } = require('../models/User');

const login = async (email, password) => {
const result = await User.findOne({ where: { email, password } });
return result;
};

module.exports = {
  login,
};