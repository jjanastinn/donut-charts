import * as d3 from 'd3';

const DonutChart = (data, id) => {

  const width = 200,
    height = 200,
    radius = 100;

  // create arc
  const arc = d3.arc()
    .innerRadius(90)
    .outerRadius(100)

  // create pie
  const pie = d3.pie()
    .sort(null)
    .value(d => d.value);

  // create svg
  const svg = d3.select("#donut-" + id)
    .append("svg")
    .data([data])
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  // create g
  const g = svg.selectAll("svg")
    .data(pie)
    .enter()
    .append("path")
    .attr("d", arc)
    .style("fill", d => d3.color(d.data.color))
}

export default DonutChart;