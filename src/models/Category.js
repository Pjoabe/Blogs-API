module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Category', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'categories',
    underscored: true,
  });
  return Categories;
  };