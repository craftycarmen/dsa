// best bridge
// Write a function, bestBridge, that takes in a grid as an argument.The grid contains water(W) and land(L).There are exactly two islands in the grid.An island is a vertically or horizontally connected region of land.Return the minimum length bridge needed to connect the two islands.A bridge does not need to form a straight line.



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
