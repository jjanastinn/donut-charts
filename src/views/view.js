import DonutChart from './donut';
import LineChart from './lineChart';

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
    `<div class="donut--chart" id="donut-${this.data.id}">
      <canvas class="canvas" id="canvas-${this.data.id}"></canvas>
    </div>
    <div class="donut--info">
      <h2 class="donut--info__title">${this.data.title}</h2>
      <p class="donut--info__sum">${this.thousendSeparator(this.data.calculateSum()) + this.data.unit}</p>
    </div>
    <div class="donut--data">
    ${this.data.devices.map((element, index) => 
      `<div class="donut--data__device">
        <div style="color:${element.color}">${element.name}</div>
        <div class="donut--data__device-numbers">
          <span class="donut--data__device-relative">${this.data.calculatePercent(element) + '%'}</span> 
          <span class="donut--data__device-absolute">${this.thousendSeparator(element.amount) + this.data.unit}</span>
        </div>        
        </div>`
      ).join('')} 
    </div>`;
    const html = createHMTL(output);
    document.getElementById('container').appendChild(html);

    this.chart = DonutChart(this.data.devices.map(d => ({
      name: d.name,
      value: d.amount,
      color: d.color
    })), this.data.id);

    this.LineChart = LineChart(this.data.devices[1].color, this.data.id);
  }

  thousendSeparator(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

}

export default View;