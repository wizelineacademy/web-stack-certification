import 'dotenv/config';
const express = require('express');
const logMiddleware = require('./middlewares/logMiddleware');
const modelsMiddleware = require('./middlewares/modelsMiddleware');
const validateTacos = require('./middlewares/validateTacos');

const tacoRoutes = require('./routes/tacoRoutes');
const orderRoutes = require('./routes/orderRoutes');
import models, { connectDb } from './models';
import tacosJson from './data/tacos.json';
import ordersJson from './data/orders.json';

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
    connectDb().then(async () => {
      await this.seedDB();
      const serverInstance = this.app.listen(3000, () => {
        const { port } = serverInstance.address();
        console.info(`Server running at http://localhost:${port}`);
      });
    });
  }

  async seedDB() {
    await Promise.all([
      this.seedTacos(),
      this.seedOrders(),
    ]);
  }

  async seedTacos() {
    let tacoCount = await models.TacoModel.countDocuments();
    if (tacoCount == 0) {
      try {
        for (let key in tacosJson) {
          if (tacosJson.hasOwnProperty(key)) {
            await models.TacoModel.create(tacosJson[key]);
          }
        }
      }
      catch(err) {
        console.log('Could not load the data', err);
      }
    }
  }

  async seedOrders() {
    let orderCount = await models.OrderModel.countDocuments();
    if (orderCount == 0) {
      try {
        for (let key in ordersJson) {
          if (ordersJson.hasOwnProperty(key)) {
            await models.OrderModel.create(ordersJson[key]);
          }
        }
      }
      catch(err) {
        console.log('Could not load the data', err);
      }
    }
  }
}

module.exports = Server;
