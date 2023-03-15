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
}

function drawShape() {
  let diameter = 200;
  circle(width/2, height/2, diameter);
  strokeWeight(5);
  point(width/2, height/2);
  strokeWeight(1);
  let y = 100 * cos(45);
  console.log(y);
  line(width/2, height/2, width/2 + y, height/2);
}

// beginShape();
// vertex(100, 100);
// vertex(50, 50);
// vertex(100, 50);
// vertex(50, 100);
// endShape();

// let a = 0.0;
// let inc = TWO_PI / 25.0;
// for (let i = 0; i < 25; i++) {
//   line(i * 4, 50, i * 4, 50 + cos(a) * 40.0);
//   a = a + inc;

