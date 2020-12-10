'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Blog_Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      console.log("cocococococo")
      this.belongsTo(models.Blog,{foreignKey: "blog_id"
        
        
      });
    }
  };
  Blog_Comments.init({
    is_publish: DataTypes.INTEGER,
    text: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    user_name: DataTypes.STRING,
    blog_id:{
      type:DataTypes.INTEGER,
      references:{
        model:Model.Blog,
        key:'id'
      }
    } ,
    likes: DataTypes.INTEGER,
    no_like: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Blog_Comments',
  });
  return Blog_Comments;
};