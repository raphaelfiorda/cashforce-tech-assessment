const connection = require('../database/models');

const userService = {
  list: async () => {
    const orders = await connection.Order.findAll({
      attributes: ['orderNumber', 'emissionDate', 'value', 'orderStatusBuyer'],
      include: [{
        model: connection.Buyer,
        as: 'buyer',
        attributes: ['name']
      },
      {
        model: connection.Provider,
        as: 'provider',
        attributes: ['name']
      }]
    });

    return orders;
  },
};

module.exports = userService;