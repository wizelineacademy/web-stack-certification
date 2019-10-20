const orderModel = require('../models/orderModel');

const get = (req, res) => {
  res.send(orderModel.all());
};

const getById = (req, res) => {
  const { id } = req.params;
  const taco = orderModel.byId(id);
  if (!taco) {
    res.status(404);
    res.send({ message: 'not found' });
  }
  res.send(taco);
};

const post = (req, res) => {
  const order = req.body;
  const id = orderModel.save(order);
  res.send({ id, saved: true });
};

const put = (req, res) => {
  const { id } = req.params;
  const order = req.body;
  const wasUpdated = orderModel.update(id, order);
  res.send({ updated: wasUpdated });
};

const remove = (req, res) => {
  const { id } = req.params;
  const wasDeleted = orderModel.delete(id);
  res.send({ deleted: wasDeleted });
};

module.exports = {
  get,
  getById,
  post,
  put,
  remove,
};
