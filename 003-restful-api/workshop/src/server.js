const express = require('express');
const logMiddleware = require('./middlewares/logMiddleware');
const modelsMiddleware = require('./middlewares/modelsMiddleware');
const validateTacos = require('./middlewares/validateTacos');

const tacoRoutes = require('./routes/tacoRoutes');
const orderRoutes = require('./routes/orderRoutes');


class Server {
  constructor() {
    this.app = express();
    this.setupMiddlewares();
    this.setupControllers();
  }

  setupMiddlewares() {
    this.app.use(express.json());
    this.app.use(modelsMiddleware); 
    this.app.use(logMiddleware);
    this.app.use('/api/order', validateTacos);
  }

  setupControllers() {
    this.app.use('/api/taco', tacoRoutes);
    this.app.use('/api/order', orderRoutes);
    // static assets in public folder
    this.app.use(express.static('public'));
  }

  start() {
    const serverInstance = this.app.listen(3000, () => {
      const { port } = serverInstance.address();
      console.info(`Server running at http://localhost:${port}`);
    });
  }
}

module.exports = Server;
