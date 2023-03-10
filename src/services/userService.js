const { User } = require('../models');

const getUserByEmail = ({ email }) => User.findOne({ where: email });
const getAllUsers = () => User.findAll();
const createNewUser = (user) => User.create(user);
const getUserById = (id) => User.findByPk(id);

module.exports = {
getUserByEmail,
getAllUsers,
createNewUser,
getUserById,
};