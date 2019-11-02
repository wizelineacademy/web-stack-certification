const fs = require('fs');
const tacos = require('../data/tacos.json');

// This class is simulating a database but it actually is only reading a file
class TacoModel {
  constructor() {
    this.allTacos = tacos;
  }

  getTacos() {
    // return tacos as an array
    return Object.values(this.allTacos);
  }

  getById(id) {
    return this.allTacos[id];
  }
}

module.exports = TacoModel;
