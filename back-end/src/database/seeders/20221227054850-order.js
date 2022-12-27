'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'orders',
      [
        {
          orderNfId: '1605181324132',
          orderNumber: '18153',
          emissionDate: '2020-10-30T11:00:00-03:00',
          emitedTo: '22843980000127',
          nNf: '18153',
          value: '198450',
          cnpjId: '1',
          userId: '1',
          buyerId: '1',
          providerId: '1',
          orderStatusBuyer: '0',
          orderStatusProvider: '0',
          createdAt: '2020-10-30 17:54:18',
          updatedAt: '2020-10-30 17:54:18'
        },
        {
          orderNfId: '160518132413',
          orderNumber: '18157',
          emissionDate: '2020-11-04T15:32:35-02:00',
          emitedTo: '35705180000272',
          nNf: '18157',
          value: '168850',
          cnpjId: '1',
          userId: '1',
          buyerId: '1',
          providerId: '1',
          orderStatusBuyer: '0',
          orderStatusProvider: '0',
          createdAt: '2020-11-10 18:33:46',
          updatedAt: '2020-11-10 18:33:46'
        },
        {
          orderNfId: '1605181324130',
          orderNumber: '18184',
          emissionDate: '2020-11-10',
          emitedTo: '00418477002640',
          nNf: '18184',
          value: '222795',
          cnpjId: '1',
          userId: '1',
          buyerId: '1',
          providerId: '1',
          orderStatusBuyer: '7',
          orderStatusProvider: '3',
          createdAt: '2020-11-12 11:42:06',
          updatedAt: '2020-11-18 12:22:14'
        }
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('orders', null, {});
  }
};
