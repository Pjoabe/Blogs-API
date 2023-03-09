module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPost', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },

    title: DataTypes.STRING,
    content: DataTypes.STRING,

    user_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      },
      published: DataTypes.DATE,
      upDate: DataTypes.DATE,
  },
  {
    timestamps: false,
    tableName: 'blog_posts',
    underscored: true,
  });

  Account.belongsTo(models.Users, {
    foreignKey: 'id',
    name: 'users',
  });

  return BlogPosts;
  };