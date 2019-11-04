class OrderController {
  constructor() {
    // bind methods to this class
    this.get = this.get.bind(this);
    this.getById = this.getById.bind(this);
    this.post = this.post.bind(this);
    this.put = this.put.bind(this);
    this.remove = this.remove.bind(this);
  }

  async get(req, res) {
    const tacos = await req.context.models.OrderModel.all();
    res.send(tacos);
  }

  async getById(req, res) {
    const { id } = req.params;
    try {
      const order = await req.context.models.OrderModel.byId(id);
      if (! order ) {
        res.status(404);
        res.send({ message: 'not found' });
      }
      else {
        res.send(order);
      }
    }
    catch(err) {
      console.log(err);
      res.status(404);
      res.send({ message: 'not found' });
    }
  }

  async post(req, res) {
    try {
      const order = req.body;
      const createdOrder = await req.context.models.OrderModel.persist(order);
      res.status(201);
      res.send(createdOrder);
    }
    catch(err) {
      console.log(err);
      res.status(400);
      res.send({ message: err.message });
    }
  }

  async put(req, res) {
    const { id } = req.params;
    const order = req.body;
    const wasUpdated = await req.context.models.OrderModel.update(id, order);
    res.send({ updated: wasUpdated });
  }

  async remove(req, res) {
    const { id } = req.params;
    const wasDeleted = await req.context.models.OrderModel.delete(id);
    res.send({ deleted: wasDeleted });
  }
}

module.exports = OrderController;
