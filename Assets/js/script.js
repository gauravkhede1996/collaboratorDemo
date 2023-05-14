// Get the canvas element
var canvas = document.getElementById('myCanvas');

// Get the 2D rendering context of the canvas
var ctx = canvas.getContext('2d');

// Initialize the starting position of the drawing
var isDrawing = false;
var lastX = 0;
var lastY = 0;

// Event listeners for mouse down, move, and up
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);

function startDrawing(e) {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

function draw(e) {
  if (!isDrawing) return;
  
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY];
}

function stopDrawing() {
  isDrawing = false;
}

canvas.addEventListener('mousemove', function() {
    console.log("canvas changed");
})