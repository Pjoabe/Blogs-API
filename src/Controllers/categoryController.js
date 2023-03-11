const { categoryService } = require('../services');

const registerNewCategory = async (req, res) => {
  const { name } = req.body;
  const result = await categoryService.createNewCategory({ name });
  return res.status(201).json(result.dataValues);
};

const getAllCategoriesInfo = async (_req, res) => {
  const categories = await categoryService.getAllCategories();
  return res.status(200).json(categories);
};

module.exports = {
  registerNewCategory,
  getAllCategoriesInfo,
};