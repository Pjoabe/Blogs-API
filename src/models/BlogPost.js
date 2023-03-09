module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPost', {
    id: {  autoIncrement: true, type: DataTypes.INTEGER,  primaryKey: true, },

    title: DataTypes.STRING,

    content: DataTypes.STRING,

    userId: { type: DataTypes.INTEGER, foreignKey: true,},
       published: DataTypes.DATE,
      updated: DataTypes.DATE,
  },
  {
    timestamps: false,
    tableName: 'blog_posts',
    underscored: true,
  });

  BlogPosts.associate = (models) => {
    BlogPosts.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
  };

  return BlogPosts;
  };