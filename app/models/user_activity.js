'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User_Activity.init({
    user_id: DataTypes.INTEGER,
    user_like: DataTypes.INTEGER,
    user_nolike: DataTypes.INTEGER,
    forum_id: DataTypes.INTEGER,
    forum_comments_id: DataTypes.INTEGER,
    invest_id: DataTypes.INTEGER,
    invest_comments_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User_Activity',
  });
  return User_Activity;
};