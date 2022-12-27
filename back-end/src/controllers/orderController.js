const orderService = require('../services/orderService');

const userController = {

  list: async (_req, res) => {
    const orders = await orderService.list();

    res.status(200).json(orders);
  },
};

module.exports = userController;