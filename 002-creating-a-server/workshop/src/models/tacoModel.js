const fs = require('fs');

function getTacos(callback) {
  fs.readFile('./data/tacos.json', (err, data) => {
    if (err) {
      throw err;
    }
    const tacos = JSON.parse(data);
    callback(tacos);
  });
}

function getById(id, callback) {
  getTacos((data) => {
    callback(data[id]);
  });
}

const tacoModel = {
  all: getTacos,
  byId: getById,
};

module.exports = tacoModel;
