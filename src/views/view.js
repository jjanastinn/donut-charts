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
    `
      <div id="donut--chart"></div>
      <h2>${this.data.title}</h2>
      <p>${this.thousendSeparator(this.data.calculateSum())}</p>
      <div class="donut--data">
        <div class="donut--data__device">
          <div style="color:${this.data.devices[0].color}">${this.data.devices[0].name}</div>
          <div class="donut--data__device-numbers">
            <span>${this.data.calculatePercent(this.data.devices[0]) + '%'}</span> 
            <span class="donut--data__device-absolute">${this.thousendSeparator(this.data.devices[0].amount)}</span>
          </div>        
        </div>
        <div class="donut--data__device">
          <div style="color:${this.data.devices[1].color}">${this.data.devices[1].name}</div>
          <div class="donut--data__device-numbers">
            <span>${this.data.calculatePercent(this.data.devices[1]) + '%'}</span> 
            <span class="donut--data__device-absolute">${this.thousendSeparator(this.data.devices[1].amount)}</span>
          </div>
        </div>
      </div>
    `;
    const html = createHMTL(output);
    document.getElementById('container').appendChild(html);

    console.log(this.data);
    this.chart = DonutChart(this.data);
  }

  thousendSeparator(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

}

export default View;


