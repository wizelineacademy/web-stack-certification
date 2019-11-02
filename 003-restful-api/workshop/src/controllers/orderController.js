class OrderController {
  constructor() {
    // bind methods to this class
    this.get = this.get.bind(this);
    this.getById = this.getById.bind(this);
    this.post = this.post.bind(this);
    this.put = this.put.bind(this);
    this.remove = this.remove.bind(this);
  }

  get(req, res) {
    res.send(req.context.models.OrderModel.all());
  }

  getById(req, res) {
    const { id } = req.params;
    const taco = req.context.models.OrderModel.byId(id);
    if (!taco) {
      res.status(404);
      res.send({ message: 'not found' });
    }
    res.send(taco);
  }

  post(req, res) {
    const order = req.body;
    const id = req.context.models.OrderModel.save(order);
    res.send({ id, saved: true });
  }

  put(req, res) {
    const { id } = req.params;
    const order = req.body;
    const wasUpdated = req.context.models.OrderModel.update(id, order);
    res.send({ updated: wasUpdated });
  }

  remove(req, res) {
    const { id } = req.params;
    const wasDeleted = req.context.models.OrderModel.delete(id);
    res.send({ deleted: wasDeleted });
  }
}

module.exports = OrderController;
