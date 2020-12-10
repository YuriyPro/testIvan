'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      foto_path: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      },
      block: {
        type: Sequelize.INTEGER
      },
      user_description: {
        type: Sequelize.STRING
      },
      publish_count: {
        type: Sequelize.INTEGER
      },
      isSubscribe: {
        type: Sequelize.BOOLEAN
      },
      about_user: {
        type: Sequelize.TEXT
      },
      profession: {
        type: Sequelize.TEXT
      },
      city: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      sex: {
        type: Sequelize.STRING
      },
      birthday: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};