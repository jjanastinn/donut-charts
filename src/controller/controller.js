import Model from '../models/model';
import View from '../views/view';

class Controller {

  constructor() {
    this.fetchData();
  }

  fetchData() {
    return fetch('./data.json', {
      mode: 'no-cors'
    })
    .then(res => {
      let contentType = res.headers.get("content-type");
      if(contentType && contentType.includes("application/json")) {
        return res.json();
      }
      throw new TypeError("Oops, we haven't got JSON!");
    })
    .then(element => element.data.map( (entry, index) => new Model(entry, index)))
    .then(models => models.map(model => {
      const view = new View(model);
      view.render();
    }))
    .catch(err => console.log(err))
  }

}

export default Controller;
