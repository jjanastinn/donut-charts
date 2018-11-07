import DonutChart from './donut';

const createHMTL = (html) => {
  const div = document.createElement('div');
  div.classList.add('donut--wrapper');
  div.innerHTML = html;
  return div;
}

class View {

  constructor(data) {
    this.data = data;

    this.render();
  }

  render() {
    const output =
    `<div class="donut--chart"></div>
    <h2>${this.data.title}</h2>
    <p>${this.thousendSeparator(this.data.calculateSum()) + this.data.unit}</p>
    <div class="donut--data">
    ${this.data.devices.map((element, index) => 
      `<div class="donut--data__device">
        <div style="color:${element.color}">${element.name}</div>
        <div class="donut--data__device-numbers">
          <span>${this.data.calculatePercent(element) + '%'}</span> 
          <span class="donut--data__device-absolute">${this.thousendSeparator(element.amount) + this.data.unit}</span>
        </div>        
        </div>`
      ).join('')} 
    </div>`;
    const html = createHMTL(output);
    document.getElementById('container').appendChild(html);

    this.chart = DonutChart(this.data.devices);
  }

  thousendSeparator(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

}

export default View;


