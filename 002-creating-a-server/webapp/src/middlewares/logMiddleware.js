const express = require('express')
const router = express.Router()

router.use('/*', (req, res, next) => {
    console.info("request made to:")
    console.info(`  `, req.originalUrl)
    next()
})

module.exports = router