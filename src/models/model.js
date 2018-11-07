
class Model {

  constructor(entry, index) {
    this.id = index;
    this.title = entry.title;
    this.devices = entry.devices;
    this.unit = entry.unit;
  }

  calculateSum() {
    return this.devices.reduce((sum, device) => sum + device.amount, 0);
  }

  calculatePercent(device) {
    return device.amount / this.calculateSum() * 100;
  }

}

export default Model;