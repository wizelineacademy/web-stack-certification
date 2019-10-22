const fs = require('fs');

// This class is simulating a database but it actually is only reading a file
class TacoModel {
  constructor() {
    this.allTacos = {};
    this.readData();
  }

  readData() {
    fs.readFile('./data/tacos.json', (err, data) => {
      if (err) {
        throw err;
      }
      this.allTacos = JSON.parse(data);
    });
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
