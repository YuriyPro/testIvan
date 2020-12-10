'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Investigation_Place extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Investigation_Place.init({
    is_publish: DataTypes.INTEGER,
    place: DataTypes.STRING,
    id_category: DataTypes.INTEGER,
    user_name: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Investigation_Place',
  });
  return Investigation_Place;
};