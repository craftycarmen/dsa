// has cycle
// Write a function, hasCycle, that takes in an object representing the adjacency list of a directed graph.The function should return a boolean indicating whether or not the graph contains a cycle.

// A. in the main function:
//      1. declare a new set called visiting
//      2. declare a new set called visited
//      3. iterate each node in graph:
//              a. if the call of the cycleDetect helper function with graph, node, visiting, and visited returns true, return true
//      4. return false
// B. declare a cycleDetect helper function with graph, node, visiting, and visited:
//      1. if node is in the visited set, return false
//      2. if node is in the visiting set, return return true
//      3. add node to visiting set
//      4. iterate each neighbor of graph[node]:
//              a. if the recursive call of cycleDetect with graph, neighbor, visiting, and visited returns true, return true
//      5. delete node from visiting set
//      6. add node to visited set
//      7. return false


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
