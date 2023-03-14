// Arrays and Object Botation Assignment
// Edvin Jouband
// Wednesday March 8, 2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawShape();
  rect(100, 100, 100);
}

function drawShape() {
  beginShape();
  vertex(100, 100);
  vertex(50, 50);
  vertex(100, 50);
  vertex(50, 100);
  endShape();
  circle(100, 100, 100);
}

