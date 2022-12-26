'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull: true
      },
      mobile: {
        type: Sequelize.STRING,
        allowNull: true
      },
      departament: {
        type: Sequelize.STRING,
        allowNull: true
      },
      verificationCode: {
        type: Sequelize.STRING,
        allowNull: true
      },
      emailChecked: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
        allowNull: true
      },
      cashforceAdm: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
        allowNull: true
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
