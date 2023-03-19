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
  angleMode(DEGREES);
  for (let i = 0; i < 50; i ++) {
    displayPoints(width/2, height/2, i);
  }
}

function draw() {
  //background(220);
  calculatePoints();
}

function calculatePoints() {
  let angle = 0;
    for (let i = 0; i < 24; i ++) {
      strokeWeight(5);
      let adjacentSide = radius * cos(angle);
      let opositeSide = radius * sin(angle);
      point(width/2 + adjacentSide + random(a*2), height/2 - opositeSide + random(a*2));
      strokeWeight(1); 
      angle += 360/24;
    }
}

function displayPoints(theX, theY, howRandom) {
  let Points = {
    x: theX,
    y: theY,
    randomFactor: howRandom
  }
  circles.push(Points);
}

// function displayPoints(theAngle) {
//   let points = {
//     angle: theAngle
//   };
//   circles.push(points);
// }

// function calculatePoints() {
//   let angle = 0;
//   for (let i = 0; i < 24; i ++) {
//     strokeWeight(5);
//     let adjacentSide = radius * cos(angle);
//     let opositeSide = radius * sin(angle);
//     point(width/2 + adjacentSide, height/2 - opositeSide);
//     console.log(mouseX);
//     strokeWeight(1); 
//     angle += 360/24;
//   }
// }

// function calculatePoint(angle) {
//   angleMode(DEGREES);
//   strokeWeight(5);
//   let adjacentSide = radius * cos(angle);
//   let opositeSide = radius * sin(angle);
//   point(width/2 + adjacentSide, height/2 - opositeSide);
//   console.log(mouseX);
//   strokeWeight(1);
// }

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

