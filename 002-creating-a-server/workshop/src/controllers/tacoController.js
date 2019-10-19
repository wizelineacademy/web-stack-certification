const express = require('express')
const router = express.Router()

const tacoModel = require('../models/tacoModel')

router.get('/', (req, res) => {
    res.send(tacoModel.all())
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    const taco = tacoModel.byId(id)
    if (!taco) {
        res.status(404)
        res.send({message: 'not found'})
    }
    res.send(taco)
})

module.exports = router
