const tacoModel = require('../models/tacoModel');

const get = (req, res) => {
  const { type } = req.query;

  tacoModel.all((allTacos) => {
    if (!type) {
      res.send(allTacos);
      return;
    }

    const result = {};
    const keys = Object.keys(allTacos);
    keys.forEach((key) => {
      const taco = allTacos[key];
      if (taco.type === type) {
        result[key] = taco;
      }
    });
    res.send(result);
  });
};

const getById = (req, res) => {
  const { id } = req.params;
  tacoModel.byId(id, (taco) => {
    if (!taco) {
      res.status(404);
      res.send({ message: 'not found' });
    }
    res.send(taco);
  });
};

module.exports = { get, getById };
