const orderService = require('../services/orderService');

const userController = {

  list: async (_req, res) => {
    const orders = await orderService.list();
    const serializedOrders = await orderService.serialize(orders);

    res.status(200).json(serializedOrders);
  },
};

module.exports = userController;