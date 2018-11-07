import * as d3 from 'd3';

const DonutChart = (data) => {

  console.log(data)
  console.log(d3)

  var width = 250, 
      height = 250, 
      radius = 125, 
      color = d3.color("steelblue");

  // create arc
  
  var arc = d3.arc()
    .innerRadius(radius - 70)
    .outerRadius(radius - 10)
    .startAngle(0)
    .endAngle(Math.PI / 2);

  arc();
  
  // generate pie chart and donut chart
  var pie = d3.pie()
      .sort(null)
      .value(function(d) { return d.amount; });
  
  // define the svg donut chart
  var svg = d3.select(".donut--chart")
      .append("svg")
        .attr("width", width)
        .attr("height", height)
      .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    // "g element is a container used to group other SVG elements"
  var g = svg.selectAll("svg")
      .data(pie(data))
      .enter().append("g")
      .attr("class", "arc");

    // append path 
  g.append("path")
      .attr("d", arc)
      .style("fill", function(d) { return color(d.data.name); })
      .transition()
      .ease(d3.easeLinear)
      .duration(2000)
      .attrTween("d", tweenDonut);   
  
  function tweenDonut(b) {
    b.innerRadius = 0;
    var i = d3.interpolate({startAngle: 0, endAngle: 0}, b);
    return function(t) { return arc(i(t)); };
  }
}  

export default DonutChart;