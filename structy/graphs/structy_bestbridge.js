// best bridge
// Write a function, bestBridge, that takes in a grid as an argument.The grid contains water(W) and land(L).There are exactly two islands in the grid.An island is a vertically or horizontally connected region of land.Return the minimum length bridge needed to connect the two islands.A bridge does not need to form a straight line.


// A. in the main function:
//      1. initialize a let variable called mainIsland
//      2. iterate through every row:
//              a. iterate through every column:
//                      i. declare a constant variable called potentialIsland that calls the traverseIsland helper function, passing in grid, r, c, and a new set
//                      ii. if potentialIsland size is greater than 0, reassign mainIsland to potentialIsland
//      3. initialize a new set with mainIsland in a constant variable called visited
//      4. initialize an empty array called queue
//      5. iterate through every pos of mainIsland:
//              a. deconstruct row and col into a variable that splits pos with a comma and maps them as Number
//              b. add row, col, and 0 as the distance in an array into queue
//      6. while the queue is not empty:
//              a. unpack row, col, and distance into a variable that removes the front element of the queue
//              b. declare a constant variable called pos that concatentates row, a comma, and col
//              c. if grid at rol and col is land ("L") AND mainIsland does not have pos, return the distance decremented by 1
//      7. declare a constant variable called deltas, a collection of all the changes we need to do to row and col so we can look at all four neighbors: an array with the subarrays of [-1, 0], [1, 0], [0, -1], [0, 1]
//      8. iterate through each delta of deltas:
//              a. deconstruct deltaRow and deltaCol from delta
//              b. declare a constant variable called neighborRow that is the row + deltaRow
//              c. declare a constant variable called neighborCol that is the col + deltaCol
//              d. declare a constant variable called neighborPos that concatenates neighborRow, a comma, and neighborCol
//              e. using the isInBounds helper function, check if grid, its neighborRow, and its neighborCol is in bounds AND if neighborPos is not in visited:
//                      i. add neighborPos to visited set
//                      ii. add neighborRow, neighborCol, and distance incremented by one as an array into the queue

// B. declare a helper function called isInBounds, passing in grid, r, and c
//      1. declare a constant variable called rowInBounds that checks if the row is in bounds: 0 less than or equal to r and r is less than length of the grid
//      2. declare a constant variable called colInBounds that checks if the col is in bounds: 0 less than or equal to c and c is less than the length of the grid at 0
//      3. return rowInbounds and colInBounds

// C. declare a helper function called traverseIsland, passing in grid, r, c, and visited
//      1. if the call of isInBounds with grid, r, and c is false OR grid at r and c is water ("W"), return visited
//      2. declare a constant variable called pos that concatenates r, comma, and c into a string
//      3. if visited set has pos, return visited
//      4. add pos to visited set
//      5. recursively call traverseIsland with grid, the appropriate row/column, and visited four times (one for each direction)
//      6. return visited

const bestBridge = (grid) => {
    let mainIsland;

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            const potentialIsland = travrseIsland(grid, r, c, new Set());

            if (potentialIsland.size > 0) mainIsland = potentialIsland;
        }
    }

    const visited = new Set(mainIsland);
    const queue = [];

    for (let pos of mainIsland) {
        const [row, col] = pos.split(',').map(Number);

        queue.push([row, col, 0])
    }

    while (queue.length > 0) {
        const [row, col, distance] = queue.shift();
        const pos = row + ',' + col;

        if (grid[row][col] === "L" && !mainIsland.has(pos)) return distance - 1;
    }

    const deltas = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    for (let delta of deltas) {
        const [deltaRow, deltaCol] = delta;
        const neighborRow = row + deltaRow;
        const neighborCol = col + deltaCol;
        const neighborPos = neighborRow + ',' + neighborCol;

        if (isInBounds(grid, neighborRow, neighborCol) && !visited.has(neighborPos)) {
            visited.add(neighborPos);
            queue.push([neighborRow, neighborCol, distance + 1]);
        }
    }
}

const isInBounds = (grid, r, c) => {
    const rowInBounds = 0 <= r && r < grid.length;
    const colInBounds = 0 <= c && c < grid[0].length;

    return rowInBounds && colInBounds;
}

// // ** TEST 00 ** //
// const grid = [
//     ["W", "W", "W", "L", "L"],
//     ["L", "L", "W", "W", "L"],
//     ["L", "L", "L", "W", "L"],
//     ["W", "L", "W", "W", "W"],
//     ["W", "W", "W", "W", "W"],
//     ["W", "W", "W", "W", "W"],
// ];
// console.log(bestBridge(grid)); // -> 1


// // ** TEST 01 ** //
// const grid = [
//     ["W", "W", "W", "W", "W"],
//     ["W", "W", "W", "W", "W"],
//     ["L", "L", "W", "W", "L"],
//     ["W", "L", "W", "W", "L"],
//     ["W", "W", "W", "L", "L"],
//     ["W", "W", "W", "W", "W"],
// ];
// console.log(bestBridge(grid)); // -> 2


// // ** TEST 02 ** //
// const grid = [
//     ["W", "W", "W", "W", "W"],
//     ["W", "W", "W", "L", "W"],
//     ["L", "W", "W", "W", "W"],
// ];
// console.log(bestBridge(grid)); // -> 3


// // ** TEST 03 ** //
// const grid = [
//     ["W", "W", "W", "W", "W", "W", "W", "W"],
//     ["W", "W", "W", "W", "W", "W", "W", "W"],
//     ["W", "W", "W", "W", "W", "W", "W", "W"],
//     ["W", "W", "W", "W", "W", "L", "W", "W"],
//     ["W", "W", "W", "W", "L", "L", "W", "W"],
//     ["W", "W", "W", "W", "L", "L", "L", "W"],
//     ["W", "W", "W", "W", "W", "L", "L", "L"],
//     ["L", "W", "W", "W", "W", "L", "L", "L"],
//     ["L", "L", "L", "W", "W", "W", "W", "W"],
//     ["W", "W", "W", "W", "W", "W", "W", "W"],
// ];
// console.log(bestBridge(grid)); // -> 3


// // ** TEST 04 ** //
// const grid = [
//     ["L", "L", "L", "L", "L", "L", "L", "L"],
//     ["L", "W", "W", "W", "W", "W", "W", "L"],
//     ["L", "W", "W", "W", "W", "W", "W", "L"],
//     ["L", "W", "W", "W", "W", "W", "W", "L"],
//     ["L", "W", "W", "W", "W", "W", "W", "L"],
//     ["L", "W", "W", "W", "W", "W", "W", "L"],
//     ["L", "W", "W", "L", "W", "W", "W", "L"],
//     ["L", "W", "W", "W", "W", "W", "W", "L"],
//     ["L", "W", "W", "W", "W", "W", "W", "L"],
//     ["L", "W", "W", "W", "W", "W", "W", "L"],
//     ["L", "W", "W", "W", "W", "W", "W", "L"],
//     ["L", "L", "L", "L", "L", "L", "L", "L"],
// ];
// console.log(bestBridge(grid)); // -> 2


// // ** TEST 05 ** //
// const grid = [
//     ["W", "L", "W", "W", "W", "W", "W", "W"],
//     ["W", "L", "W", "W", "W", "W", "W", "W"],
//     ["W", "W", "W", "W", "W", "W", "W", "W"],
//     ["W", "W", "W", "W", "W", "W", "W", "W"],
//     ["W", "W", "W", "W", "W", "W", "W", "W"],
//     ["W", "W", "W", "W", "W", "W", "L", "W"],
//     ["W", "W", "W", "W", "W", "W", "L", "L"],
//     ["W", "W", "W", "W", "W", "W", "W", "L"],
//   ];
//   console.log(bestBridge(grid)); // -> 8
