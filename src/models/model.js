
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
  
  calculatePercent(index) {
    return this.devices[index].amount / this.calculateSum() * 100;
  }

  getTabletColor() {
    return this.devices.find(device => device.name == 'Tablet').color;
  }
  
}

export default Model;