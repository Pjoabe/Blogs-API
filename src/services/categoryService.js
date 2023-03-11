const { Category } = require('../models');

const createNewCategory = (name) => Category.create(name);
const getAllCategories = () => Category.findAll();

module.exports = {
  createNewCategory,
  getAllCategories,  
};
