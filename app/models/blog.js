'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  // class Blog extends Model {
  //   /**
  //    * Helper method for defining associations.
  //    * This method is not a part of Sequelize lifecycle.
  //    * The `models/index` file will call this method automatically.
  //    */
  //   static associate(models) {
  //     // define association here
  //     console.log("hihiiihihihihihiihi")
  //     this.hasMany(models.Blog_Comments,{foreignKey: "blog_id"
        
  //     });
  //   }
  // };
  const Blog = sequelize.define('Blog', {
    // title: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },

    is_publish: DataTypes.INTEGER,
    theme: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    text: DataTypes.TEXT,
    foto_path: DataTypes.STRING,
    total_views: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    user_name: DataTypes.STRING,
    user_description: DataTypes.STRING,
    element_name: DataTypes.STRING
  });

  Blog.associate = (models) => {
    Blog.hasMany(models.Blog_Comments, {
      foreignKey: 'blogId',
      as: 'blog_Comments',
    });
  };

  // Blog.init({
  //   is_publish: DataTypes.INTEGER,
  //   theme: DataTypes.STRING,
  //   title: DataTypes.STRING,
  //   description: DataTypes.TEXT,
  //   text: DataTypes.TEXT,
  //   foto_path: DataTypes.STRING,
  //   total_views: DataTypes.INTEGER,
  //   user_id: DataTypes.INTEGER,
  //   user_name: DataTypes.STRING,
  //   user_description: DataTypes.STRING,
  //   element_name: DataTypes.STRING
  // }, {
  //   sequelize,
  //   modelName: 'Blog',
  // });
  return Blog;
};