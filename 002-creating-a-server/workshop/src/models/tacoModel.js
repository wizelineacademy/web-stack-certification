const fs = require('fs');

function getTacosRaw(callback) {
  fs.readFile('./data/tacos.json', (err, data) => {
    if (err) {
      throw err;
    }
    const tacos = JSON.parse(data);
    callback(tacos);
  });
}

function getTacos(callback) {
  getTacosRaw((tacos) => {
    callback(Object.values(tacos));
  });
}

function getById(id, callback) {
  getTacosRaw((data) => {
    callback(data[id]);
  });
}

const tacoModel = {
  all: getTacos,
  byId: getById,
};

module.exports = tacoModel;
