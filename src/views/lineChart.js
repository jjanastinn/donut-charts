
const LineChart = (color, id) => {

  const canvas = document.getElementById('canvas-' + id),
  ctx = canvas.getContext('2d'),
  width = canvas.width = 160,
  height = canvas.height = 160;

  if (id % 2) {
    ctx.translate(width, 0);
    ctx.scale(-1, 1);
    ctx.beginPath();
  } else {
    ctx.beginPath();
  }

  ctx.moveTo(0, 130);
  ctx.lineTo(20, 125);
  ctx.lineTo(40, 127);
  ctx.lineTo(60, 120);
  ctx.lineTo(80, 115);
  ctx.lineTo(100, 122);
  ctx.lineTo(120, 112);
  ctx.lineTo(140, 115);
  ctx.lineTo(160, 110);
  ctx.arc(80, 80, 90, 0, Math.PI, false);
  ctx.lineWidth = 2;
  ctx.strokeStyle = color;
  ctx.stroke();
  ctx.fillStyle = color + "14";
  ctx.fill();

}

export default LineChart;