const express = require('express');
const OrderController = require('../controllers/OrderController');

const router = express.Router();
const orderController = new OrderController();

router.get('/', orderController.get);

router.get('/:id', orderController.getById);

router.post('/', orderController.post);

router.put('/:id', orderController.put);

router.delete('/:id', orderController.remove);

module.exports = router;
