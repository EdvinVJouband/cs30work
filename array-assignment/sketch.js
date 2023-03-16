// Arrays and Object Botation Assignment
// Edvin Jouband
// Wednesday March 8, 2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let circles = [];

let diameter = 200;
let radius = diameter/2;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawShape();
  calculatePoint(mouseX);
}

function drawShape() {
  circle(width/2, height/2, diameter);
  strokeWeight(5);
  point(width/2, height/2);
  strokeWeight(1);
}

function calculatePoint(angle) {
  angleMode(DEGREES);
  strokeWeight(5);
  let adjacentSide = radius * cos(angle);
  let opositeSide = radius * sin(angle);
  point(width/2 + adjacentSide, height/2 - opositeSide);
  console.log(mouseX);
  strokeWeight(1);
}

function drawCircle(theAngle) {

}

// beginShape();
// vertex(100, 100);
// vertex(50, 50);
// vertex(100, 50);
// vertex(50, 100);
// endShape();

// function calculatePoint(angle) {
//   angleMode(DEGREES);
//   let adjacentSide = radius * cos(angle);
//   let opositeSide = radius * sin(angle);
//   line(width/2, height/2, width/2 + adjacentSide, height/2);
//   line(width/2 + adjacentSide, height/2, width/2 + adjacentSide, height/2 - opositeSide);
//   line(width/2, height/2, width/2 + adjacentSide, height/2 - opositeSide);
//   console.log(mouseX);
// }

// let a = 0.0;
// let inc = TWO_PI / 25.0;
// for (let i = 0; i < 25; i++) {
//   line(i * 4, 50, i * 4, 50 + cos(a) * 40.0);
//   a = a + inc;

