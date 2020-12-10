'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Investigation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Investigation.init({
    is_publish: DataTypes.INTEGER,
    name: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    text: DataTypes.TEXT,
    foto_path: DataTypes.STRING,
    place_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    total_views: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    user_name: DataTypes.STRING,
    element_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Investigation',
  });
  return Investigation;
};