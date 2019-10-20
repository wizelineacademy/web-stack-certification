const express = require('express');
const logMiddleware = require('./middlewares/logMiddleware');
const validateTacos = require('./middlewares/validateTacos');
const tacoRoutes = require('./routes/tacoRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();

// middlewares
app.use(express.json());
app.use(logMiddleware);

app.use('/api/taco', tacoRoutes);

app.use('/api/order', validateTacos);
app.use('/api/order', orderRoutes);

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
