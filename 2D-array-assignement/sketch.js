// 2D array assignement
// Edvin Jouband
// March 27, 2023
//  The Coding Train, A* in P5 js, 21 min 21 sec
// https://www.youtube.com/watch?v=aKYlikFAV4k

let grid;

let openSet;
let closedSet;

let start;
let end;

const ROWS = 11;
const COLS = 11;
let cellSize;
let characterX = 5;
let characterY = 5;

// let grassImg;
// let pavingImg;

// function preload() {
//   grassImg = loadImage("grass2.png");
//   pavingImg = loadImage("paving1.png");
// }

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createRandomGrid(ROWS, COLS);

  //put player in grid
  grid[characterY][characterX] = 9; //I'm using 9 for the character

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

function displayCell() {
  let cell = {
    theF: 0,
    theG: 0,
    theH: 0,
  }
}

function draw() {
  background(220);
  A_Star;
  displayGrid();
}

function A_Star() {
  if (openSet.length > 0) {
    // keep going
  }
  else {
    // no solution

  }

  //make the cells change color as they are checked
  for (let i = 0; i < closedSet.length; i ++) {
    closedSet[i].
  }

  for (let i = 0; i < openSet.length; i ++) {
    
  }
}

function keyTyped() {
  if (key === "r") {
    grid = createRandomGrid(ROWS, COLS);
  }
  if (key === "s") { //move down
    moveCharacter(0, 1);
  }
  if (key === "w") { //move up
    moveCharacter(0, -1);
  }
  if (key === "d") { //move right
    moveCharacter(1, 0);
  }
  if (key === "a") { //move left
    moveCharacter(-1, 0);
  }
}

function moveCharacter(x, y) {
  //sanity check for edge cases
  if (characterX + x >= 0 && characterX + x < COLS &&
      characterY + y >= 0 && characterY + y < ROWS) {
    
    //check if going to hit wall
    if (grid[characterY+y][characterX+x] === 0) {
      let tempX = characterX;
      let tempY = characterY;
    
      characterX += x;
      characterY += y;
    
      //update grid
      grid[characterY][characterX] = 9;
      grid[tempY][tempX] = 0;
    }

  }
}

function mousePressed() {
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);

  if (grid[y][x] === 0) {
    grid[y][x] = 1;
  }

  else if (grid[y][x] === 1) {
    grid[y][x] = 0;
  }
}

function displayGrid(cellColor) {
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      if (grid[y][x] === 1) {
        fill(cellColor);
        //rect(x * cellSize, y * cellSize, cellSize, cellSize);
      }
      else if (grid[y][x] === 0) {
        fill(CellColor);
        //rect(x * cellSize, y * cellSize, cellSize, cellSize);
      }
      else if (grid[y][x] === 9) {
        fill("red");
      }
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
      
    }
  }
}

function createRandomGrid(ROWS, COLS) {
  let newGrid = [];
  for (let y = 0; y < ROWS; y++) {
    newGrid.push([]);
    for (let x = 0; x < COLS; x++) {
      if (random(100) < 50) {
        newGrid[y].push(1);
      }
      else {
        newGrid[y].push(0);
      }
      //figure this out later
      newGrid[y][x] =
    }
  }
  return newGrid;
}
