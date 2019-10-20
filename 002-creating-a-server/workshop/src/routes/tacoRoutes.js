const express = require('express');
const tacoController = require('../controllers/tacoController');

const router = express.Router();

router.get('/', tacoController.get);

router.get('/:id', tacoController.getById);

module.exports = router;
