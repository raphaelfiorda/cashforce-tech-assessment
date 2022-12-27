'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'providers',
      [
        {
          name: 'CEDENTE 002',
          tradingName: 'CEDENTE 002 LTDA',
          cnpjId: '2',
          createdAt: '2020-10-29 21:22:21',
          updatedAt: '2020-10-29 21:22:22'
        }
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('providers', null, {});
  }
};
