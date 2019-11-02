async function validateTacos(req, res, next) {
  const { body } = req;
  const invalidTacosIds = [];

  if (! body.hasOwnProperty("tacos") || ! Array.isArray(body.tacos) ) {
    return next();
  }

  const tacos = body.tacos;
  if (!tacos.length) {
    return next();
  }

  tacos.forEach(async (orderDetail) => {
    const taco = await req.context.models.TacoModel.getById(orderDetail.tacoId);
    if (!taco) {
      // taco id doesn't exist
      invalidTacosIds.push(orderDetail.tacoId);
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
