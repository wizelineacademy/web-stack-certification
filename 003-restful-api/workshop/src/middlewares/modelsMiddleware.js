import models from '../models';

function modelsMiddleware(req, res, next) {
  req.context = {models};
  next();
}

module.exports = modelsMiddleware;
