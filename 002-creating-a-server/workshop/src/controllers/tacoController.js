const express = require('express');

const router = express.Router();

const tacoModel = require('../models/tacoModel');

router.get('/', (req, res) => {
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
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  tacoModel.byId(id, (taco) => {
    if (!taco) {
      res.status(404);
      res.send({ message: 'not found' });
    }
    res.send(taco);
  });
});

module.exports = router;
