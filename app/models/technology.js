'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Technology extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Technology.init({
    is_publish: DataTypes.INTEGER,
    name: DataTypes.STRING,
    foto_path: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    text: DataTypes.TEXT,
    total_views: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    user_name: DataTypes.STRING,
    element_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Technology',
  });
  return Technology;
};