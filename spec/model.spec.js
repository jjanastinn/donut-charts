import Model from '../src/models/model';

describe('Model', function() {

  it('getTabletColor: should get the tablet color', function() {
    const data = {
      devices: [
        {
        name: 'Tablet', 
        color: '#FFFFFF'
        }
      ]
    }
    const model = new Model(data);
    expect(model.getTabletColor()).toEqual('#FFFFFF');
  });

  it('calculateSum: should sum the absolute numbers', function() {
    const data = {
      devices: [
        {amount: 120},
        {amount: 80}
      ]
    }
    const model = new Model(data);
    expect(model.calculateSum()).toEqual(200);
  });

  it('calculatePercent: should calculate the percentages', function() {
    const data = {
      devices: [
        {amount: 120},
        {amount: 80}
      ]
    }
    const index = 1;
    const model = new Model(data);
    expect(model.calculatePercent(index)).toEqual(40);
  });

});