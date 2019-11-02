import models from '../models';

function modelsMiddleware(req, res, next) {
  req.context = {
    models: {
      TacoModel: new models.TacoModel(),
      OrderModel: new models.OrderModel(),
    }
  };
  next();
}

module.exports = modelsMiddleware;
