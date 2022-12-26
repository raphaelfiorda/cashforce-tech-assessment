'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      orderNfId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      orderNumber: {
        type: Sequelize.STRING,
        allowNull: false
      },
      orderPath: {
        type: Sequelize.STRING,
        allowNull: true
      },
      orderFileName: {
        type: Sequelize.STRING,
        allowNull: true
      },
      orderOriginalName: {
        type: Sequelize.STRING,
        allowNull: true
      },
      emissionDate: {
        type: Sequelize.STRING,
        allowNull: true
      },
      pdfFile: {
        type: Sequelize.STRING,
        allowNull: true
      },
      emitedTo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nNf: {
        type: Sequelize.STRING,
        allowNull: true
      },
      CTE: {
        type: Sequelize.STRING,
        allowNull: true
      },
      value: {
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
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      buyerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'buyers',
          key: 'id'
        }
      },
      providerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'providers',
          key: 'id'
        }
      },
      orderStatusBuyer: {
        type: Sequelize.STRING,
        defaultValue: 0,
        allowNull: true
      },
      orderStatusProvider: {
        type: Sequelize.STRING,
        defaultValue: 0,
        allowNull: true
      },
      deliveryReceipt: {
        type: Sequelize.STRING,
        allowNull: true
      },
      cargoPackingList: {
        type: Sequelize.STRING,
        allowNull: true
      },
      deliveryCtrc: {
        type: Sequelize.STRING,
        allowNull: true
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};
