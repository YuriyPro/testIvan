'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reklama extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Reklama.init({
    is_publish: DataTypes.INTEGER,
    name: DataTypes.STRING,
    total_click: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    user_name: DataTypes.STRING,
    foto_path: DataTypes.STRING,
    url_link: DataTypes.STRING,
    position: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Reklama',
  });
  return Reklama;
};