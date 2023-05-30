// Fractal circles

let theColors = ["red", "green", "blue", "black", "pink", "brown", "yellow", "grey", "purple", "orange", "white"];
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  let thDepth = Math.floor(map(mouseX, 0, width, 0, 10));
  fractalCircle(width/2, width, thDepth);
}

function fractalCircle(x, diameter, depth) {
  // base case
  fill(theColors[depth]);
  circle(x, height/2, diameter);

  if (depth > 0) {
    depth --;
    // left side circle
    fractalCircle(x-diameter/4, diameter/2, depth);
    // right side cirlce
    fractalCircle(x+diameter/4, diameter/2, depth);
  }
}
