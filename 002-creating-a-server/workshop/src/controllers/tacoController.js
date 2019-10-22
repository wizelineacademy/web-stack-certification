const TacoModel = require('../models/TacoModel');

class TacoController {
  constructor() {
    this.tacoModel = new TacoModel();

    // bind methods to this class
    this.get = this.get.bind(this);
    this.getById = this.getById.bind(this);
  }

  get(req, res) {
    const { type } = req.query;
    const allTacos = this.tacoModel.getTacos();
    if (!type) {
      return res.send(allTacos);
    }

    const filteredTacos = allTacos.filter((taco) => taco.type === type);
    return res.send(filteredTacos);
  }


  getById(req, res) {
    const { id } = req.params;
    const taco = this.tacoModel.byId(id);
    if (!taco) {
      res.status(404);
      return res.send({ message: 'not found' });
    }

    return res.send(taco);
  }
}

module.exports = TacoController;
