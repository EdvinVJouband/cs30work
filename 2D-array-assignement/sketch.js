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

function setup() {
  createCanvas(windowWidth, windowHeight);
  createGrid();

  if (width < height) {
    cellSize = width/ROWS;
  }
  else {
    cellSize = height/ROWS;
  }

  start = grid[0][0];
  end = grid[COLS - 1][ROWS - 1];

  openSet.push(start);
}

function draw() {
  background(220);
  A_Star;
  displayGrid();
}

function creatCell(x, y) {
  let cell = {
    theX: x,
    theY: y,
    theF: 0,
    theG: 0,
    theH: 0,
  };
}

function A_Star() {
  if (openSet.length > 0) {
    // keep going
  }
  else {
    // no solution
  }
  //make the cells change color as they are checked
  //   for (let i = 0; i < closedSet.length; i ++) {

  //   }
  //  for (let i = 0; i < openSet.length; i ++) { 

//   }
}

function displayGrid(cellColor) {
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      if (grid[y][x] === 1) {
        fill(cellColor);
        //rect(x * cellSize, y * cellSize, cellSize, cellSize);
      }
      else if (grid[y][x] === 0) {
        fill(cellColor);
        //rect(x * cellSize, y * cellSize, cellSize, cellSize);
      }
      else if (grid[y][x] === 9) {
        fill("red");
      }
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
      
    }
  }
}

function createGrid(ROWS, COLS) {
  // making 2d array
  for (let y = 0; y < ROWS; y++) {
    grid[y] = new Array(ROWS);
    for (let x = 0; x < COLS; x++) {
      creatCell;
      newGrid[y][x] = cell;
    }
  }
  return newGrid;
}
