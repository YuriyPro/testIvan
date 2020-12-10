'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Forum extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Forum.init({
    is_publish: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    text: DataTypes.TEXT,
    foto_path: DataTypes.STRING,
    total_views: DataTypes.INTEGER,
    theme_id: DataTypes.INTEGER,
    sub_theme_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    user_name: DataTypes.STRING,
    element_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Forum',
  });
  return Forum;
};