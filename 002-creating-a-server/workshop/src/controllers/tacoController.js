const tacoModel = require('../models/tacoModel');

const get = (req, res) => {
  const { type } = req.query;
  const { host } = req.headers;
  const { baseUrl, protocol } = req;

  tacoModel.all((allTacos) => {
    const tacos = allTacos.map((taco) => ({
      ...taco,
      links: {
        self: `${protocol}://${host}${baseUrl}/${taco.id}`,
      },
    }));

    if (!type) {
      return res.send(tacos);
    }

    const filteredTacos = tacos
      .filter((taco) => taco.type === type);
    return res.send(filteredTacos);
  });
};

const getById = (req, res) => {
  const { id } = req.params;
  const { host } = req.headers;
  const { baseUrl, protocol } = req;
  tacoModel.byId(id, (taco) => {
    if (!taco) {
      res.status(404);
      res.send({ message: 'not found' });
    }
    res.send({
      ...taco,
      links: {
        filterByThisType: `${protocol}://${host}${baseUrl}?type=${taco.type}`,
      },
    });
  });
};

module.exports = { get, getById };
