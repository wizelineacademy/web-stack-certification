const OrderModel = require('../models/OrderModel');

class OrderController {
  constructor() {
    this.orderModel = new OrderModel();

    // bind methods to this class
    this.get = this.get.bind(this);
    this.getById = this.getById.bind(this);
    this.post = this.post.bind(this);
    this.put = this.put.bind(this);
    this.remove = this.remove.bind(this);
  }

  get(req, res) {
    res.send(this.orderModel.all());
  }

  getById(req, res) {
    const { id } = req.params;
    const taco = this.orderModel.byId(id);
    if (!taco) {
      res.status(404);
      res.send({ message: 'not found' });
    }
    res.send(taco);
  }

  post(req, res) {
    const order = req.body;
    const id = this.orderModel.save(order);
    res.send({ id, saved: true });
  }

  put(req, res) {
    const { id } = req.params;
    const order = req.body;
    const wasUpdated = this.orderModel.update(id, order);
    res.send({ updated: wasUpdated });
  }

  remove(req, res) {
    const { id } = req.params;
    const wasDeleted = this.orderModel.delete(id);
    res.send({ deleted: wasDeleted });
  }
}

module.exports = OrderController;
