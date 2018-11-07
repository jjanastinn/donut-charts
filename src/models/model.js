
class Model {

  constructor(entry) {
    this.title = entry.title;
    this.devices = entry.devices;
  }

  calculateSum() {
    let sum = 0;
    return this.devices.reduce((a, b) => a.amount + b.amount);
  }

  calculatePercent(device) {
    return device.amount / this.calculateSum() * 100;
  }

}

export default Model;