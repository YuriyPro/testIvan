'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Forum_Sub_Theme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Forum_Sub_Theme.init({
    is_publish: DataTypes.INTEGER,
    sub_theme: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    user_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Forum_Sub_Theme',
  });
  return Forum_Sub_Theme;
};