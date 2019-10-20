const express = require('express');

const router = express.Router();

const orderController = require('../controllers/orderController');

router.get('/', orderController.get);

router.get('/:id', orderController.getById);

router.post('/', orderController.post);

router.put('/:id', orderController.put);

router.delete('/:id', orderController.remove);

module.exports = router;
