const { categoryService } = require('../services');

const registerNewCategory = async (req, res) => {
  const { name } = req.body;
  const result = await categoryService.createNewCategory({ name });
  return res.status(201).json(result.dataValues);
};

module.exports = {
  registerNewCategory,
};