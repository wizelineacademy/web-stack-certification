const path = require('path')
const express = require('express')
const app = express()

const logMiddleware = require('./middlewares/logMiddleware')
const validateTacos = require('./middlewares/validateTacos')

const tacoController = require('./controllers/tacoController')
const orderController = require('./controllers/orderController')

// global middlewares
app.use(express.json())
app.use(logMiddleware)

app.use('/api/taco', tacoController)

app.use('/api/order', validateTacos)
app.use('/api/order', orderController)

// hello world API
app.get('/api', (req, res) => {
    res.send({ message: 'Hello world from API!'})
})

app.post('/api', (req, res) => {
    console.info('req.body:', req.body)
    const name = req.body.name
    res.send({ message: `Hi ${name}!` })
})

// Serve a web page
// app.get('/', (request, response) => {
//     const homePath = path.join(__dirname, 'public', 'index.html')
//     response.sendFile(homePath)
// })

// app.get('/img/header.jpg', function (request, response) {
//     const logoPath = path.join(__dirname, 'public', 'img', 'wizeline-logo.png')
//     response.sendFile(logoPath)
// })

app.use(express.static('public'))

const server = {
    start: () => {
        const server = app.listen(3000, () => {
            const port = server.address().port
            console.info(`Server running at http://localhost:${port}`)
        })
    }
}

module.exports = server
