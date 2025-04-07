// has cycle
// Write a function, hasCycle, that takes in an object representing the adjacency list of a directed graph.The function should return a boolean indicating whether or not the graph contains a cycle.


//     // *** TEST 00 *** //
//     console.log(hasCycle({
//         a: ["b"],
//         b: ["c"],
//         c: ["a"],
//     })); // -> true


// // *** TEST 01 *** //
// console.log(hasCycle({
//     a: ["b", "c"],
//     b: ["c"],
//     c: ["d"],
//     d: [],
// })); // -> false


// // *** TEST 02 *** //
// console.log(hasCycle({
//     a: ["b", "c"],
//     b: [],
//     c: [],
//     e: ["f"],
//     f: ["e"],
// })); // -> true


// // *** TEST 03 *** //
// console.log(hasCycle({
//     q: ["r", "s"],
//     r: ["t", "u"],
//     s: [],
//     t: [],
//     u: [],
//     v: ["w"],
//     w: [],
//     x: ["w"],
// })); // -> false


// // *** TEST 04 *** //
// console.log(hasCycle({
//     a: ["b"],
//     b: ["c"],
//     c: ["a"],
//     g: [],
// })); // -> true


// // *** TEST 05 *** //
// console.log(hasCycle({
//     a: ["b"],
//     b: ["c"],
//     c: ["d"],
//     d: ["b"],
// })); // -> true


// // *** TEST 06 *** //
// console.log(hasCycle({
//     a: ["b", "c"],
//     b: ["c"],
//     c: ["d"],
//     d: [],
//     e: ["c"],
//   })); // -> false
