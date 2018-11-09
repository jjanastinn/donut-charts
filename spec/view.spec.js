import View from '../src/views/view';
import Model from '../src/models/model';

describe('View', function() {

  it('createHMTL: should check if output is HTML', function() {
    const data = {
      title: 'revenue',
      devices: [
        {
          name: 'Smartphone',
          amount: 120,
          color: '#fff'
        },
        {
          name: 'Tablet',
          amount: 80,
          color: '#fff'
        }
      ],
      unit: ''
    }
    const model = new Model(data);
    const view = new View(model);
    expect(view.createHTMLFromData(model)).toBeHtmlString();
  });

  it('thousendSeparator: should seperate numbers after thousands', function() {
    const data = {
      devices: [
        {amount: 20000000}
      ]
    }
    const view = new View(data);
    expect(view.thousendSeparator(data.devices[0].amount)).toEqual('20.000.000');
  });

});
 