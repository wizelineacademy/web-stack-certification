const express = require('express');
const logMiddleware = require('./middlewares/logMiddleware');
const validateTacos = require('./middlewares/validateTacos');
const tacoRoutes = require('./routes/tacoRoutes');
const orderRoutes = require('./routes/orderRoutes');
import models, { connectDb } from './models';
import 'dotenv/config';

class Server {
  constructor() {
    this.app = express();
    this.setupMiddlewares();
    this.setupControllers();
  }

  setupMiddlewares() {
    this.app.use(express.json());
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
    connectDb().then(async () => {
      await this.clearDB();
      const serverInstance = this.app.listen(3000, () => {
        const { port } = serverInstance.address();
        console.info(`Server running at http://localhost:${port}`);
      });
    });
  }

  async clearDB() {
    // TODO: remove existing db content
    await Promise.all([
    ]);
  }

  async seedDB() {
    // TODO: create initial data
  }
}

module.exports = Server;
