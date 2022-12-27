'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('providers', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tradingName: {
        type: Sequelize.STRING,
        allowNull: true
      },
      cashforceTax: {
        type: Sequelize.STRING,
        allowNull: true
      },
      responsibleName: {
        type: Sequelize.STRING,
        allowNull: true
      },
      responsibleEmail: {
        type: Sequelize.STRING,
        allowNull: true
      },
      responsiblePosition: {
        type: Sequelize.STRING,
        allowNull: true
      },
      responsiblePhone: {
        type: Sequelize.STRING,
        allowNull: true
      },
      responsibleMobile: {
        type: Sequelize.STRING,
        allowNull: true
      },
      website: {
        type: Sequelize.STRING,
        allowNull: true
      },
      postalCode: {
        type: Sequelize.STRING,
        allowNull: true
      },
      address: {
        type: Sequelize.STRING,
        allowNull: true
      },
      number: {
        type: Sequelize.STRING,
        allowNull: true
      },
      complement: {
        type: Sequelize.STRING,
        allowNull: true
      },
      neighborhood: {
        type: Sequelize.STRING,
        allowNull: true
      },
      city: {
        type: Sequelize.STRING,
        allowNull: true
      },
      state: {
        type: Sequelize.STRING,
        allowNull: true
      },
      bank: {
        type: Sequelize.STRING,
        allowNull: true
      },
      bankAgency: {
        type: Sequelize.STRING,
        allowNull: true
      },
      account: {
        type: Sequelize.STRING,
        allowNull: true
      },
      documents: {
        type: Sequelize.STRING,
        allowNull: true
      },
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull: true
      },
      situation: {
        type: Sequelize.STRING,
        allowNull: true
      },
      situationDate: {
        type: Sequelize.STRING,
        allowNull: true
      },
      cnpjId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'cnpjs',
          key: 'id'
        }
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('providers');
  }
};
