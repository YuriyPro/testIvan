'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Forum_Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Forum_Comments.init({
    is_publish: DataTypes.INTEGER,
    text: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    user_name: DataTypes.STRING,
    forum_id: DataTypes.INTEGER,
    likes: DataTypes.INTEGER,
    no_like: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Forum_Comments',
  });
  return Forum_Comments;
};