// island count
// Write a function, islandCount, that takes in a grid containing Ws and Ls.W represents water and L represents land.The function should return the number of islands on the grid.An island is a vertically or horizontally connected region of land.


// A. in the main function:
//      1. declare a new set called visited
//      2. initialize count to 0
//      3. iterate through each row of the grid
//          a. iterate through each column of the grid
//              i. if the call of the explore helper function with grid, row, column, and visited returns true, increment count by 1
//      4. return count
// B. define a helper function called explore that takes in grid, row (r), column (c), and visited:
//      1. declare a constant variable called rowInBounds, initialized to whether the row is within valid grid bounds (row is greater than or equal to 0 and less than total number of rows in grid)
//      2. declare a constant variable called colInBounds, initialized to whether the column is within valid grid bounds (column is greater than or equal to 0 and less than total number of columns in grid)
//      3. if the row is out of bounds OR the column is out of bounds, return false
//      4. if the grid position contains water, return false
//      5. declare a constant variable called pos that concatenates r, a comma, and c
//      6. if visited set has pos, return false
//      7. add pos to visited set
//      8. recursively call explore in all four directions (up, down, left, right) with updated row/column values where approriate
//      9. return true, as this indicates a brand new island has been explored


const islandCount = (grid) => {
    const visited = new Set();
    let count = 0;

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (explore(grid, r, c, visited) === true) count++;
        }
    }

    return count;
}

const explore = (grid, r, c, visited) => {
    const rowInBounds = 0 <= r && r < grid.length;
    const colInBounds = 0 <= c && c < grid.length;

    if (!rowInBounds || !colInBounds) return false;
    if (grid[r][c] === "W") return false;

    const pos = r + "," + c;

    if (visited.has(pos)) return false;
    visited.add(pos)

    explore(grid, r - 1, c, visited);
    explore(grid, r + 1, c, visited);
    explore(grid, r, c - 1, visited);
    explore(grid, r, c + 1, visited);

    return true;
}

// r = number of rows
// c = number of columns
// time complexity: O(rc)
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

// console.log(islandCount(grid)); // -> 3


// // *** TEST 01 *** //
// const grid = [
//     ['L', 'W', 'W', 'L', 'W'],
//     ['L', 'W', 'W', 'L', 'L'],
//     ['W', 'L', 'W', 'L', 'W'],
//     ['W', 'W', 'W', 'W', 'W'],
//     ['W', 'W', 'L', 'L', 'L'],
// ];

// console.log(islandCount(grid)); // -> 4


// *** TEST 02 *** //
const grid = [
    ['L', 'L', 'L'],
    ['L', 'L', 'L'],
    ['L', 'L', 'L'],
];

console.log(islandCount(grid)); // -> 1


// // *** TEST 03 *** //
// const grid = [
//     ['W', 'W'],
//     ['W', 'W'],
//     ['W', 'W'],
// ];

// console.log(islandCount(grid)); // -> 0
