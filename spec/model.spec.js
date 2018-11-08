import Model from '../src/models/model';

describe('Model', function() {

  it('should be a function', function() {
    const data = {
      devices: [
        {amount: 120},
        {amount: 80}
      ]
    }
    const model = new Model(data);
    expect(model.calculateSum()).toEqual(200);
  });

});