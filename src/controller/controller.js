import Model from '../models/model';
import View from '../views/view';

class Controller {

  constructor() {
    this.models = [];
    this.views = [];

    this.fetchData();
  }

  fetchData() {
    fetch('./data.json', {
      mode: 'no-cors'
    })
    .then(res => res.json())
    .then(element => {
      this.models = element.data.map((entry, index) => {
        const model = new Model(entry, index);
        return model;
      });
      return this.models;
    })
    .then(models => {
      this.views = models.map(model => {
          const view = new View(model);
          return view;
      })
    })
    .catch(err => console.log(err))
  }

}

export default Controller;
