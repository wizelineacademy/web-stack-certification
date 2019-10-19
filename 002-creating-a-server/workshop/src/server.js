const express = require('express');

const app = express();

const logMiddleware = require('./middlewares/logMiddleware');
const validateTacos = require('./middlewares/validateTacos');

const tacoController = require('./controllers/tacoController');
const orderController = require('./controllers/orderController');

// global middlewares
app.use(express.json());
app.use(logMiddleware);

app.use('/api/taco', tacoController);

app.use('/api/order', validateTacos);
app.use('/api/order', orderController);

// hello world API
app.get('/api', (req, res) => {
  res.send({ message: 'Hello world from API!' });
});

app.post('/api', (req, res) => {
  console.info('req.body:', req.body);
  const { name } = req.body;
  res.send({ message: `Hi ${name}!` });
});
app.use(express.static('public'));

const server = {
  start: () => {
    const serverInstance = app.listen(3000, () => {
      const { port } = serverInstance.address();
      console.info(`Server running at http://localhost:${port}`);
    });
  },
};

module.exports = server;
