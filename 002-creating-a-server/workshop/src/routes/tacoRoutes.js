const express = require('express');
const TacoController = require('../controllers/TacoController');

const router = express.Router();
const tacoController = new TacoController();

router.get('/', tacoController.get);
router.get('/:id', tacoController.getById);

module.exports = router;
