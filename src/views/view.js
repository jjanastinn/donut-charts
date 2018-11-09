import DonutChart from './donut';
import LineChart from './lineChart';

class View {

  constructor(data) {
    this.data = data;
  }

  render() {
    const html = this.createHMTL(this.createHTMLFromData(this.data));
    document.getElementById('container').appendChild(html);

    this.chart = DonutChart(this.data.devices.map(d => ({
      name: d.name,
      value: d.amount,
      color: d.color
    })), this.data.id);

    this.LineChart = LineChart(this.data.getTabletColor(), this.data.id);
  }

  thousendSeparator(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  createHMTL(html) {
    const div = document.createElement('div');
    div.classList.add('donut--wrapper');
    div.innerHTML = html;
    return div;
  }

  createHTMLFromData(data) {
    return `<div class="donut--chart" id="donut-${data.id}">
        <canvas class="canvas" id="canvas-${data.id}"></canvas>
      </div>
      <div class="donut--info">
        <h2 class="donut--info__title">${data.title}</h2>
        <p class="donut--info__sum">${this.thousendSeparator(data.calculateSum()) + data.unit}</p>
      </div>
      <div class="donut--data">
      ${data.devices.map((element, index) => 
        `<div class="donut--data__device">
          <div class="donut--data__device-name" style="color:${element.color}">${element.name}</div>
          <div class="donut--data__device-numbers">
            <span class="donut--data__device-relative">${data.calculatePercent(index) + '%'}</span> 
            <span class="donut--data__device-absolute">${this.thousendSeparator(element.amount) + data.unit}</span>
          </div>        
          </div>`
        ).join('')} 
      </div>`;
  }

}

export default View;