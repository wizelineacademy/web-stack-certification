const express = require('express');

const router = express.Router();
const tacoModel = require('../models/tacoModel');

router.use('/', (req, res, next) => {
  const { body } = req;
  const invalidTacosIds = [];
  const tacoIds = Object.keys(body);
  let tacosChecked = 0;

  if (!tacoIds.length) {
    return next();
  }

  tacoIds.forEach((tacoId) => {
    tacoModel.byId(tacoId, (taco) => {
      if (!taco) {
        // bad request
        invalidTacosIds.push(tacoId);
      }
      tacosChecked += 1;

      const allTacosChecked = tacosChecked === tacoIds.length;
      if (allTacosChecked) {
        const validOrder = invalidTacosIds.length === 0;
        if (validOrder) {
          next();
        } else {
          res.status(400).send({ message: `Invalid tacoIds: [ ${invalidTacosIds.join(', ')} ]` });
        }
      }
    });
  });
});

module.exports = router;
