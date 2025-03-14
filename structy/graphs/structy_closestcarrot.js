// closest carrot
// Write a function, closestCarrot, that takes in a grid, a starting row, and a starting column.In the grid, 'X's are walls, 'O's are open spaces, and 'C's are carrots.The function should return a number representing the length of the shortest path from the starting position to a carrot.You may move up, down, left, or right, but cannot pass through walls(X).If there is no possible path to a carrot, then return -1.


// *** BREADTH-FIRST TRAVERSAL *** //
// 1. initiate a new set called visited containing a string representation of the starting position (startRow, comma, and startCol)
// 2. initiate a queue with a subarray containing startRow, startCol, and 0 as the starting distance
// 3. while the queue is not empty:
//      a. deconstruct the front element removed from queue into row, col, and distance
//      b. if the grid position at row and col contains a carrot, return distance
//      c. declare a constant variable called deltas, initialized with four subarrays representing the possible neighboring movements: [1, 0] down, [-1, 0] up, [0, 1] right, and [0, -1] left
//      d. iterate through each delta of deltas:
//          i. deconstruct rowDelta and colDelta from delta
//          ii. declare a constant variable called neighborRow that adds row to rowDelta
//          iii. declare a constant variable called neighborCol that adds col to colDelta
//          iv. declare a constant variable called rowInBounds that checks whether neighborRow is within valid grid bounds
//          v. declare a constant variable called colInBounds that checks whether neighborCol is within valid grid bounds
//          vi. declare a constant variable called pos that stringifies the neighbor's position
//          vii. if row is in bounds AND col is in bounds AND grid at neighborRow and neighborCol is NOT 'X' AND visited does not contain pos:
//                  1. add an array of neighborRow, neighborCol, and distance incremented by 1 to queue
//                  2. add pos to visited set
// 4. return -1 if no carrot is found


const closestCarrot = (grid, startRow, startCol) => {
    const visited = new Set([startRow + ',' + startCol]);
    const queue = [[startRow, startCol, 0]];

    while (queue.length > 0) {
        const [row, col, distance] = queue.shift();

        if (grid[row][col] === 'C') return distance;

        const deltas = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        for (let delta of deltas) {
            const [rowDelta, colDelta] = delta;
            const neighborRow = row + rowDelta;
            const neighborCol = col + colDelta;
            const rowInBounds = 0 <= neighborRow && neighborRow < grid.length;
            const colInBounds = 0 <= neighborCol && neighborCol < grid[0].length;
            const pos = neighborRow + ',' + neighborCol;

            if (rowInBounds && colInBounds && grid[neighborRow][neighborCol] !== 'X' && !visited.has(pos)) {
                queue.push([neighborRow, neighborCol, distance + 1]);
                visited.add(pos);
            }
        }
    }

    return -1;
}

// r = number of rows
// c = number of columns
// time complexity: O(rc) because we're visiting every position of the grid exactly once
// space complexity: O(rc) because we're adding every position to the visited set and storing every position (at most) in the queue


// // *** TEST 00 *** //
// const grid = [
//     ['O', 'O', 'O', 'O', 'O'],
//     ['O', 'X', 'O', 'O', 'O'],
//     ['O', 'X', 'X', 'O', 'O'],
//     ['O', 'X', 'C', 'O', 'O'],
//     ['O', 'X', 'X', 'O', 'O'],
//     ['C', 'O', 'O', 'O', 'O'],
// ];

// console.log(closestCarrot(grid, 1, 2)); // -> 4


// // *** TEST 01 *** //
// const grid = [
//     ['O', 'O', 'O', 'O', 'O'],
//     ['O', 'X', 'O', 'O', 'O'],
//     ['O', 'X', 'X', 'O', 'O'],
//     ['O', 'X', 'C', 'O', 'O'],
//     ['O', 'X', 'X', 'O', 'O'],
//     ['C', 'O', 'O', 'O', 'O'],
// ];

// console.log(closestCarrot(grid, 0, 0)); // -> 5


// // *** TEST 02 *** //
// const grid = [
//     ['O', 'O', 'X', 'X', 'X'],
//     ['O', 'X', 'X', 'X', 'C'],
//     ['O', 'X', 'O', 'X', 'X'],
//     ['O', 'O', 'O', 'O', 'O'],
//     ['O', 'X', 'X', 'X', 'X'],
//     ['O', 'O', 'O', 'O', 'O'],
//     ['O', 'O', 'C', 'O', 'O'],
//     ['O', 'O', 'O', 'O', 'O'],
// ];

// console.log(closestCarrot(grid, 3, 4)); // -> 9


// // *** TEST 03 *** //
// const grid = [
//     ['O', 'O', 'X', 'O', 'O'],
//     ['O', 'X', 'X', 'X', 'O'],
//     ['O', 'X', 'C', 'C', 'O'],
// ];

// console.log(closestCarrot(grid, 1, 4)); // -> 2


// // *** TEST 04 *** //
// const grid = [
//     ['O', 'O', 'X', 'O', 'O'],
//     ['O', 'X', 'X', 'X', 'O'],
//     ['O', 'X', 'C', 'C', 'O'],
// ];

// console.log(closestCarrot(grid, 2, 0)); // -> -1


// // *** TEST 05 *** //
// const grid = [
//     ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//     ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//     ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//     ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//     ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//     ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//     ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//     ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//     ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//     ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//     ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'X', 'X'],
//     ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'X', 'C'],
// ];

// console.log(closestCarrot(grid, 0, 0)); // -> -1


// *** TEST 06 *** //
const grid = [
    ['O', 'O', 'X', 'C', 'O'],
    ['O', 'X', 'X', 'X', 'O'],
    ['C', 'X', 'O', 'O', 'O'],
];

console.log(closestCarrot(grid, 2, 2)); // -> 5
