// minimum island
// Write a function, minimumIsland, that takes in a grid containing Ws and Ls.W represents water and L represents land.The function should return the size of the smallest island.An island is a vertically or horizontally connected region of land.

// You may assume that the grid contains at least one island.

// A. in the main function:
//      1. declare a new set called visited
//      2. initialize minSize to positive infinty (since each grid contains at least one island)
//      3. iterate through each row in the grid:
//          a. iterate through each column in the grid:
//              i. declare a constant variable called size that calls the exploreSize helper function with grid, row, column, and visited
//              ii. if size is greater than 0 and size is less than minSize, reassign minSize to size
//      4. return minSize
// B. defne a new helper function called exploreSize, taking in grid, row, column, and visited
//      1. declare a constant variable called rowInBounds, initialized to whether the row is within valid grid bounds (row is greater than or equal to 0 and less than total number of rows in the grid)
//      2. declare a constant variable called colInBounds, initialized to whether the col is within valid grid bounds (col is greater than or equal to 0 and less than total number of cols in the grid)
//      3. if row is out of bounds or col is out of bounds, return 0
//      4. if grid's position is water, return 0
//      5. declare a constant variable called pos, concatenating r, a commas a string, and c
//      6. if visited set has pos, return 0
//      7. add pos to visited set
//      8. initialize size to 1
//      9. increment size by each recursive call of exploreSize, exploring the up, down, left, and right neighbors
//      10. return size

const minimumIsland = (grid) => {
    const visited = new Set();
    let minSize = Infinity;

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            const size = exploreSize(grid, r, c, visited);
            if (size > 0 && size < minSize) minSize = size;
        }
    }

    return minSize;
}

const exploreSize = (grid, r, c, visited) => {
    const rowInBounds = 0 <= r && r < grid.length;
    const colInBounds = 0 <= c && c < grid[0].length;

    if (!rowInBounds || !colInBounds) return 0;
    if (grid[r][c] === "W") return 0;

    const pos = r + "," + c;
    if (visited.has(pos)) return 0;
    visited.add(pos);

    let size = 1;

    size += exploreSize(grid, r - 1, c, visited);
    size += exploreSize(grid, r + 1, c, visited);
    size += exploreSize(grid, r, c - 1, visited);
    size += exploreSize(grid, r, c + 1, visited);

    return size;
}

// r = number of rows
// c = number of columns
// time complexity: O(rc) because we have to iterate through every row column within the grid
// space complexity: O(rc)

// // *** TEST 00 *** //
// const grid = [
//     ['W', 'L', 'W', 'W', 'W'],
//     ['W', 'L', 'W', 'W', 'W'],
//     ['W', 'W', 'W', 'L', 'W'],
//     ['W', 'W', 'L', 'L', 'W'],
//     ['L', 'W', 'W', 'L', 'L'],
//     ['L', 'L', 'W', 'W', 'W'],
// ];

// console.log(minimumIsland(grid)); // -> 2


// // *** TEST 01 *** //
// const grid = [
//     ['L', 'W', 'W', 'L', 'W'],
//     ['L', 'W', 'W', 'L', 'L'],
//     ['W', 'L', 'W', 'L', 'W'],
//     ['W', 'W', 'W', 'W', 'W'],
//     ['W', 'W', 'L', 'L', 'L'],
// ];

// console.log(minimumIsland(grid)); // -> 1


// // *** TEST 02 *** //
// const grid = [
//     ['L', 'L', 'L'],
//     ['L', 'L', 'L'],
//     ['L', 'L', 'L'],
// ];

// console.log(minimumIsland(grid)); // -> 9


// *** TEST 03 *** //
const grid = [
    ['W', 'W'],
    ['L', 'L'],
    ['W', 'W'],
    ['W', 'L']
];

console.log(minimumIsland(grid)); // -> 1
