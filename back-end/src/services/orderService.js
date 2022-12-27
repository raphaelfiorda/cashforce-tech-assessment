const connection = require('../database/models');

const userService = {
  list: async () => {
    const orders = await connection.Order.findAll();

    return orders;
  },
};

module.exports = userService;