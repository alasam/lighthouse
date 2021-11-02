// function to invert x and y access in 2D array
const transpose = function(matrix) {
  // place holder array
  let grid = [];

  // pushes empty arrays within the grid array
  for (let i = 0; i < matrix[0].length; i++) {
    grid.push([]);
  }

  // loop arrays and start filling in the newly maid grid
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[0].length; x++) {
      grid[x][y] = matrix[y][x];
    }
  }
  return grid;
};



// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }


    process.stdout.write('\n');
  }
};

printMatrix(transpose(
  [
    [1, 2, 3, 4], // r1 ======== >. [first element of each array 1,1,1,1]
    [1, 2, 3, 4],  // r2 ======== > [second element of each array 2,2,2,2]
    [1, 2, 3, 4], // r3.    =====>.  [third element of each array 3,3,3,3]
    [1, 2, 3, 4]  // r4. ===== >. [last element of each array 4,4,4,4]
  ]

));

/*
[
    [1, 1, 1, 1]
    [2, 2, 2, 2],
    [3, 3, 3, 3],
    [4, 4, 4, 4]
]


*/

console.log('----');

printMatrix(transpose([
  [1, 2],
  [3, 4],
  [5, 6]
]));

console.log('----');

printMatrix(transpose([
  [1, 2, 3, 4, 5, 6, 7]
]));