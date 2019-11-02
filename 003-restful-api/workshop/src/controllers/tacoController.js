class TacoController {
  constructor() {
    // bind methods to this class
    this.get = this.get.bind(this);
    this.getById = this.getById.bind(this);
  }

  async get(req, res) {
    const { type } = req.query;
    const allTacos = await req.context.models.TacoModel.getTacos();
    if (!type) {
      return res.send(allTacos);
    }

    const filteredTacos = allTacos.filter((taco) => taco.type === type);
    return res.send(filteredTacos);
  }


  async getById(req, res) {
    const { id } = req.params;
    const taco = await req.context.models.TacoModel.getById(id);
    if (!taco) {
      res.status(404);
      return res.send({ message: 'not found' });
    }

    return res.send(taco);
  }
}

module.exports = TacoController;
