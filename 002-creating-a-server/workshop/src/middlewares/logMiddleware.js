function logMiddleware(req, res, next) {
  console.info('request made to:');
  console.info('  ', req.originalUrl);
  next();
}

module.exports = logMiddleware;
