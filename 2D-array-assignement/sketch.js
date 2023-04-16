// 2D array assignement
// Edvin Jouband
// March 27, 2023
// https://www.youtube.com/watch?v=aKYlikFAV4k
// https://www.youtube.com/watch?v=EaZxUCWAjb0&t=0s
// https://en.wikipedia.org/wiki/A*_search_algorithm
// https://www.geeksforgeeks.org/a-search-algorithm/
// https://en.wikipedia.org/wiki/Taxicab_geometry
// Extra for experts used the A* pathfinding algorithim

// the openSet will contain all the cells that I want to check to find the path
// and the closedSet will contain all the cells that have already been checked
let openSet = [], closedSet = [];
let start, end;
const ROWS = 25, COLS = 25;
let cellSize;
let grid = new Array(COLS);
let path = [];
let nosolution = false;

function setup() {
  createCanvas(windowWidth, windowHeight);

  if (width < height) {
    cellSize = width/ROWS;
  }
  else {
    cellSize = height/ROWS;
  }

  createGrid();

  // make the start point the top left corner
  start = grid[0][0];

  // make the end point the botom right corner
  end = grid[COLS - 1][ROWS - 1];

  // the starting and end points can not be obstacles
  start.wall = false;
  end.wall = false;

  openSet.push(start);
}

function draw() {
  background(220);
  A_Star();
  displayGrid();
  displayCells();
}

// stores all the nessessairy values for the cells in objects
class Cell {
  constructor(i, j) {
    this.i = i;
    this.j = j;
    this.f = 0;
    this.g = 0;
    this.h = 0;
    this.neighbors = [];
    this.previous = undefined;
    this.wall = false;

    // there is a 30% chance of a cell being generated as a wall/obstacle
    if (random(1) < 0.3) {
      this.wall = true;
    }

    // creates a function to draw the cells as squares with there colors being based on if they are a wall, a unchecked cell,
    // a checked cell, a neighbor or the path,
    // these colors were determined in the display cells function except for the walls.
    this.show = function (cellColor) {
      fill(cellColor);
      if (this.wall) {
        fill(0);
      }
      noStroke();
      rect(this.i * cellSize, this.j * cellSize, cellSize - 1, cellSize - 1);
    };

    // calculates the neighbors N E S O of the current cell only if possible
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

// creates a function to loop through an array backwards to find and delete a certain element if it is in the array.
function removeFromArray(arr, elt){
  for (let i = arr.length - 1; i >= 0; i --) {
    if (arr[i] === elt) {
      arr.splice(i, 1);
    }
  }
}

// compares the x and y values of a neighboring cell and the end cell to return there estimated distance
function heuristic(a, b) {
  let d = abs(a.i - b.i) + abs(a.j - b.j);
  return d;
}

function A_Star() {
  // if the openSet if not empty, so if there are cells to check then the algorithim will run
  if (openSet.length > 0) {

    // finds the cells with the lowest f value, the f value is the value of the movement cost of a going to a cell wich
    // is called the g value plus the estimated distance of a cell from the end cell wich is called the h value.
    let winner = 0;
    for (let i = 0; i < openSet.length; i ++) {
      if (openSet[i].f < openSet[winner].f) {
        winner = i;
      }
    }
    // make the current cell of the path be the winner of the lowest f value/lowest movement cost
    let current = openSet[winner];

    // if the current cell of the path is ever the end cell then we have arrived at the end and we can stop.
    if (current === end) {
      noLoop();
      console.log("DONE");
    }

    // remove the old current cell we were checking from the openSet and add it to the closedSet
    removeFromArray(openSet, current);
    closedSet.push(current);

    // check throught all the neightbors, that arent walls, off the grid
    // and havent been already checked and calculate its g value, wich is it's movement cost,
    // then add the neighbor with the lowest g value to the openSet
    let neighbors = current.neighbors;
    for (let i = 0; i < neighbors.length; i ++) {
      let neighbor = neighbors[i];

      if (!closedSet.includes(neighbor) && !neighbor.wall) {
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

        // heuristic is what the h value stands for, so it's the estimated distance between a neighboring
        // cell and the end cell
        neighbor.h = heuristic(neighbor, end);

        // calculate the f value of the neighbor.
        neighbor.f = neighbor.g + neighbor.h;

        // let the cell this neighbor came from be the current cell
        neighbor.previous = current;
      }
    }
  }
  else {
    // if the openSet is empty and we havent gotten to the end then there 
    // was no way to get to the end so theres no solution.
    // if this else occurs and the algotithim finds no path we will get an error but I didint
    // bother making a noLoop because it's functionaly the same, other then to maybe see the final path it tried.
  }
}

function displayGrid() {
  // displays the grid with the values from the show function
  for (let i = 0; i < COLS; i++) {
    for (let j = 0; j < ROWS; j++) {
      grid[i][j].show(color(255));
      
    } 
  }
}

function createGrid() {
  // create a 2D array
  for (let i = 0; i < COLS; i++) {
    grid[i] = new Array(ROWS);
  }

  for (let i = 0; i < COLS; i++) {
    for (let j = 0; j < ROWS; j++) {
      grid[i][j] = new Cell(i,j);
    }
  }

  // find the neighboring cells of the current cell being created
  for (let i = 0; i < COLS; i++) {
    for (let j = 0; j < ROWS; j++) {
      grid[i][j].addNeighbors(grid);
    }
  }
}

function displayCells() {
  // make all cells that have already been checked red
  for (let i = 0; i < closedSet.length; i ++) {
    closedSet[i].show(color(255, 0, 0));
  }
  // make the color of the neighbors green
  for (let i = 0; i < openSet.length; i ++) {
    openSet[i].show(color(0, 255, 0));
  }

// I had trouble with the local variable current being in the A_Star function
// and I wanted to use it in this funtion so I just recreated it and all it's changes, even thought its very ineficient.
if (!nosolution) {
    let winner = 0;
    for (let i = 0; i < openSet.length; i ++) {
      if (openSet[i].f < openSet[winner].f) {
        winner = i;
      }
    }
    let current = openSet[winner];

    if (current === end) {
      // this finds the path, by going from the end cell throught all
      // the cells it came from to get back to the start cell and get the final path the algorithim calculated.
      path = [];
      let temp = current;
      path.push(temp);
      while (temp.previous) {
        path.push(temp.previous);
        temp = temp.previous;
      }
      noLoop();
      console.log("DONE");
    }

    // I dont know why but when I dont have this chunk of code wich is just a duplicate of the one above it
    // the algoritim doesint stop where it should and the it tries to calculate the path for one more frame
    // wich makes the end path wrong, but with this code here it works fine so I left it even thought I 
    // know this shoundint really be nessessairy.
    path = [];
    let temp = current;
    path.push(temp);
    while (temp.previous) {
      path.push(temp.previous);
      temp = temp.previous;
    }
}

// makes the cells that the path takes be blue
  for (let i = 0; i < path.length; i ++) {
    path[i].show(color(0, 0, 255));
  }
}
