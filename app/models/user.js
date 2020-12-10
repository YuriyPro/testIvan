'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    username: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    foto_path: DataTypes.STRING,
    role: DataTypes.STRING,
    block: DataTypes.INTEGER,
    user_description: DataTypes.STRING,
    publish_count: DataTypes.INTEGER,
    isSubscribe: DataTypes.BOOLEAN,
    about_user: DataTypes.TEXT,
    profession: DataTypes.TEXT,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    sex: DataTypes.STRING,
    birthday: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};