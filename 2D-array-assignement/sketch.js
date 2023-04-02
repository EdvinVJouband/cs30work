// 2D array assignement
// Edvin Jouband
// March 27, 2023
//  The Coding Train, A* in P5 js, 21 min 21 sec
// https://www.youtube.com/watch?v=aKYlikFAV4k

let openSet = [], closedSet = [];
let start, end;

const ROWS = 5;
const COLS = 5;

let cellSize;

let grid = new Array(COLS);

let w, h;

function setup() {
  createCanvas(windowWidth, windowHeight);

  if (width < height) {
    cellSize = width/ROWS;
  }
  else {
    cellSize = height/ROWS;
  }

  w = cellSize/COLS;
  h = cellSize/ROWS;

  createGrid();

  start = grid[0][0];
  end = grid[COLS - 1][ROWS - 1];

  openSet.push(start);
}

function draw() {
  background(220);
  A_Star;
  displayGrid();
}

class Cell {
  constructor(i, j) {
    this.x = i;
    this.y = j;
    this.f = 0;
    this.g = 0;
    this.h = 0;

    this.show = function () {
      fill(255);
      stroke(0);
      rect(this.x * w, this.y * h, w - 1, h - 1);
    };
  }
}

function A_Star() {
//   if (openSet.length > 0) {
//     // keep going
//   }
//   else {
//     // no solution
//   }
//   //make the cells change color as they are checked
//   //   for (let i = 0; i < closedSet.length; i ++) {

//   //   }
//   //  for (let i = 0; i < openSet.length; i ++) { 

// //   }
}

function displayGrid(cellColor) {
  for (let i = 0; i < COLS; i++) {
    for (let j = 0; j < ROWS; j++) {
        grid[i][j].show();
      
    } 
  }
}

//rect(x * cellSize, y * cellSize, cellSize, cellSize);

function createGrid() {
  // making 2d array
  for (let i = 0; i < COLS; i++) {
    grid[i] = new Array(ROWS);
    }

  for (let i = 0; i < COLS; i++) {
    for (let j = 0; j < ROWS; j++) {
      grid[i][j] = new Cell(i,j);
    }
  }
}
