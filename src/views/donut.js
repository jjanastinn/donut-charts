import * as d3 from 'd3';

const DonutChart = (data, id) => {

  var width = 200,
    height = 200,
    radius = 100;

  // create arc
  var arc = d3.arc()
    .innerRadius(90)
    .outerRadius(100)

  // create pie
  var pie = d3.pie()
    .sort(null)
    .value(function (d) {
      return d.value;
    });

  // create svg
  var svg = d3.select("#donut-" + id)
    .append("svg")
    .data([data])
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  // create g
  var g = svg.selectAll("svg")
    .data(pie)
    .enter()

  // append path 
  g.append("path")
    .attr("d", arc)
    .style("fill", function (d) {
      return d3.color(d.data.color);
    })
}

export default DonutChart;