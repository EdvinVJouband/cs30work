// 2D array assignement
// Edvin Jouband
// March 27, 2023
//  The Coding Train, A* in P5 js, 21 min 21 sec
// https://www.youtube.com/watch?v=aKYlikFAV4k

let openSet = [], closedSet = [];
let start, end;
const ROWS = 5, COLS = 5;
let cellSize;
let grid = new Array(COLS);

function setup() {
  createCanvas(windowWidth, windowHeight);

  if (width < height) {
    cellSize = width/ROWS;
  }
  else {
    cellSize = height/ROWS;
  }

  createGrid();

  start = grid[0][0];
  end = grid[COLS - 1][ROWS - 1];

  openSet.push(start);
}

function draw() {
  background(220);
  A_Star();
  displayGrid();
  displayCells();
}

class Cell {
  constructor(i, j) {
    this.x = i;
    this.y = j;
    this.f = 0;
    this.g = 0;
    this.h = 0;
    this.neighbors = [];

    this.show = function (cellColor) {
      fill(cellColor);
      noStroke();
      rect(this.x * cellSize, this.y * cellSize, cellSize - 1, cellSize - 1);
    };

    this.addNeighbors = function(grid) {
      let i = this.i;
      let j = this.j;
      if (i < COLS - 1) {
        this.neighbors.push(grid[i + 1, j]);
      }
      if (i > 0) {
        this.neighbors.push(grid[i - 1, j]);
      }
      this.neighbors.push(grid[i, j + 1]);
      this.neighbors.push(grid[i, j - 1]);
    };
  }
}

function removeFromArray(arr, elt){
  for (let i = arr.length - 1; i >= 0; i --) {
    if (arr[i] === elt) {
      arr.splice(i, 1);
    }
  }
}

function A_Star() {
  if (openSet.length > 0) {

    let winner = 0;
    for (let i = 0; i < openSet.length; i ++) {
      if (openSet[i].f < openSet[winner].f) {
        winner = i;
      }
    }
    let current = openSet[winner];

    if (openSet[winner] === end) {
      console.log("DONE");
    }

    removeFromArray(openSet, current);
    closedSet.push(current);

    // keep going
  }
  else {
    // no solution
  }
}

function displayGrid(cellColor) {
  //display grid
  for (let i = 0; i < COLS; i++) {
    for (let j = 0; j < ROWS; j++) {
      grid[i][j].show(color(255));
      
    } 
  }
}

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

function displayCells() {
  // set the color of the cells
  for (let i = 0; i < closedSet.length; i ++) {
    closedSet[i].show(color(255, 0, 0));
  }
  for (let i = 0; i < openSet.length; i ++) {
    openSet[i].show(color(0, 255, 0));
  }
}
