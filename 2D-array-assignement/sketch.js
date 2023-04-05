// 2D array assignement
// Edvin Jouband
// March 27, 2023
//  The Coding Train, A* in P5 js, 21 min 21 sec
// https://www.youtube.com/watch?v=aKYlikFAV4k

let openSet = [], closedSet = [];
let start, end;
const ROWS = 25, COLS = 25;
let cellSize;
let grid = new Array(COLS);
let path = [];

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
    this.i = i;
    this.j = j;
    this.f = 0;
    this.g = 0;
    this.h = 0;
    this.neighbors = [];
    this.previous = undefined;

    this.show = function (cellColor) {
      fill(cellColor);
      noStroke();
      rect(this.i * cellSize, this.j * cellSize, cellSize - 1, cellSize - 1);
    };

    this.addNeighbors = function(grid) {
      let i = this.i;
      let j = this.j;
      if (i < COLS - 1) {
        this.neighbors.push(grid[i + 1][j]);
      }
      if (i > 0) {
        this.neighbors.push(grid[i - 1][j]);
      }
      if (j < ROWS - 1) {
        this.neighbors.push(grid[i][j + 1]);
      }
      if (j > 0) {
        this.neighbors.push(grid[i][j - 1]);
      }
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

function heuristic(a, b) {
  let d = dist(a.i, a.j, b.i, b.j);
  return d;
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

    if (current === end) {
      // find the path
      // path = [];
      // let temp = current;
      // path.push(temp);
      // while (temp.previous) {
      //   path.push(temp.previous);
      //   temp = temp.previous;
      // }
      noLoop();
      console.log("DONE");
    }

    removeFromArray(openSet, current);
    closedSet.push(current);

    let neighbors = current.neighbors;
    for (let i = 0; i < neighbors.length; i ++) {
      let neighbor = neighbors[i];

      if (!closedSet.includes(neighbor)) {
        let tempG = current.g + 1;

        if (openSet.includes(neighbor)) {
          if (tempG < neighbor.g) {
            neighbor.g = tempG;
          }
        }
        else {
          neighbor.g = tempG;
          openSet.push(neighbor);
        }

        neighbor.h = heuristic(neighbor, end);
        neighbor.f = neighbor.g + neighbor.h;
        neighbor.previous = current;


      }
    }

    // keep going
  }
  else {
    // no solution
  }
  return current;
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

  for (let i = 0; i < COLS; i++) {
    for (let j = 0; j < ROWS; j++) {
      grid[i][j].addNeighbors(grid);
    }
  }
}

function displayCells(current) {
  // set the color of the cells
  for (let i = 0; i < closedSet.length; i ++) {
    closedSet[i].show(color(255, 0, 0));
  }
  for (let i = 0; i < openSet.length; i ++) {
    openSet[i].show(color(0, 255, 0));
  }

  path = [];
  let temp = current;
  path.push(temp);
  while (temp.previous) {
    path.push(temp.previous);
    temp = temp.previous;
  }

  for (let i = 0; i < path.length; i ++) {
    path[i].show(color(0, 0, 255));
  }
}
