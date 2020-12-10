'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Investigation_Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Investigation_Comments.init({
    is_publish: DataTypes.INTEGER,
    text: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    user_name: DataTypes.STRING,
    investigation_id: DataTypes.INTEGER,
    likes: DataTypes.INTEGER,
    no_likes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Investigation_Comments',
  });
  return Investigation_Comments;
};