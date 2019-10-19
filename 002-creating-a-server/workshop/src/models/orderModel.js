const orders = [];

const orderModel = {
  all: () => orders,
  byId: (id) => orders[id],
  save: (order) => {
    orders.push(order);
    return orders.length - 1;
  },
  update: (id, order) => {
    if (orders.length > id) {
      orders[id] = order;
      return true;
    }
    return false;
  },
  delete: (id) => {
    if (orders.length > id) {
      orders.splice(id, 1);
      return true;
    }
    return false;
  },
};

module.exports = orderModel;
