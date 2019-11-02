function validateTacos(req, res, next) {
  const { body } = req;
  const invalidTacosIds = [];
  const tacoIds = Object.keys(body);

  if (!tacoIds.length) {
    return next();
  }

  tacoIds.forEach((tacoId) => {
    const taco = req.context.models.TacoModel.getById(tacoId);
    if (!taco) {
      // taco id doesn't exist
      invalidTacosIds.push(tacoId);
    }
  });

  if (invalidTacosIds.length > 0) {
    const invalidTacosList = invalidTacosIds.join(', ');
    return res.status(400).send({
      message: `Invalid tacoIds: [ ${invalidTacosList} ]`,
    });
  }

  // tacos list is valid
  return next();
}

module.exports = validateTacos;
