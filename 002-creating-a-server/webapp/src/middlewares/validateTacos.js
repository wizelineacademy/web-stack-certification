const express = require('express')
const router = express.Router()
const tacoModel = require('../models/tacoModel')

router.use('/', (req, res, next) => {
    const body = req.body
    let validOrder = true
    console.info("validating tacos in body...")
    Object.keys(body).forEach((tacoId) => {
        const taco = tacoModel.byId(tacoId)
        if (!taco) { 
            // bad request
            res.status(400).send({ message: `Invalid tacoId: ${tacoId}` })
            validOrder = false
        }
    })

    if (validOrder) {
        next()
    }
})

module.exports = router