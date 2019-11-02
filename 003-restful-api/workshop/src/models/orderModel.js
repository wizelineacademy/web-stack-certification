
class OrderModel {
  constructor() {
    this.orders = [];
  }

  all() {
    console.log(this.orders);
    return this.orders;
  }

  byId(id) {
    return this.orders[id];
  }

  save(order) {
    this.orders.push(order);
    console.log(this.orders);
    return this.orders.length - 1;
  }

  update(id, order) {
    if (this.orders.length > id) {
      this.orders[id] = order;
      return true;
    }
    return false;
  }

  delete(id) {
    if (this.orders.length > id) {
      this.orders.splice(id, 1);
      return true;
    }
    return false;
  }
}

module.exports = OrderModel;
