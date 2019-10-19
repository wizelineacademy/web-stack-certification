const express = require('express');

const router = express.Router();

const orderModel = require('../models/orderModel');

router.get('/', (req, res) => {
  res.send(orderModel.all());
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const taco = orderModel.byId(id);
  if (!taco) {
    res.status(404);
    res.send({ message: 'not found' });
  }
  res.send(taco);
});

router.post('/', (req, res) => {
  const order = req.body;
  const id = orderModel.save(order);
  res.send({ id, saved: true });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const order = req.body;
  const wasUpdated = orderModel.update(id, order);
  res.send({ updated: wasUpdated });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const wasDeleted = orderModel.delete(id);
  res.send({ deleted: wasDeleted });
});

module.exports = router;
