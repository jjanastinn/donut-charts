import Model from '../src/models/model';

describe('Model', function() {

  it('should sum the absolute numbers', function() {
    const data = {
      devices: [
        {amount: 120},
        {amount: 80}
      ]
    }
    const model = new Model(data);
    expect(model.calculateSum()).toEqual(200);
  });

  it('should calculate the percentages', function() {
    const data = {
      devices: [
        {amount: 120},
        {amount: 80}
      ]
    }
    const model = new Model(data);
    expect(model.calculatePercent(data.devices[1])).toEqual(40);
  });

});