'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('User_Activities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      user_like: {
        type: Sequelize.INTEGER
      },
      user_nolike: {
        type: Sequelize.INTEGER
      },
      forum_id: {
        type: Sequelize.INTEGER
      },
      forum_comments_id: {
        type: Sequelize.INTEGER
      },
      invest_id: {
        type: Sequelize.INTEGER
      },
      invest_comments_id: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('User_Activities');
  }
};