const connection = require('../database/models');

const userService = {
  serialize: async (orders) => {
    const serializedOrders = orders.map((order) => ({
      notaFiscal: order.orderNumber,
      sacado: order.buyer.name,
      cedente: order.provider.name,
      emissao: (order.emissionDate).substring(0, 9),
      valor: order.value,
    }));

    return serializedOrders;
  },

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