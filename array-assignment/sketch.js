// Arrays and Object Botation Assignment
// Edvin Jouband
// Wednesday March 8, 2023
// Warning flashing lights !!!
// Extra for Experts:
// I used the cos and sin function to help calculate points at the outside of a circle based on an iterating angle.

// Create array to store the Points object
let circles = [];

// Make variables for for the diameter and radius of a circle.
let diameter = 200;
let radius = diameter/2;

// Create the canvas, change the angle mode to degrees for circle calculations and iterate on the createPoints function to create several objects.
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  for (let i = 0; i < 500; i ++) {
    createPoints(width/2, height/2, i);
  }
}

// Displays the points 60 times a second without refreshing the backrounf so the points stay.
function draw() {
  displayPoints();
}

// Calculates points around a circle with SOH CAH TOA and draws the points with random changing colors.
function displayPoints() {
  let angle = 0;
  for (let i = 0; i < 500; i ++) {
    for (let j = 0; j < 24; j ++) {
      strokeWeight(5);
      let adjacentSide = radius * cos(angle);
      let opositeSide = radius * sin(angle);
      point(circles[i].x + adjacentSide + random(-circles[i].randomFactor, circles[i].randomFactor + 50), circles[i].y - opositeSide + random(-circles[i].randomFactor, circles[i].randomFactor + 50));
      strokeWeight(1); 
      angle += 360/24; 
      }
    }
    stroke(random(0, 255), random(0, 255), random(0, 255));
}

// Creates an object called Points wich stores an x and y value.
function createPoints(theX, theY, howRandom) {
  let Points = {
    x: theX,
    y: theY,
    randomFactor: howRandom
  }
  circles.push(Points);
}
