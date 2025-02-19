// has path
// Write a function, hasPath, that takes in an object representing the adjacency list of a directed acyclic graph and two nodes(src, dst). The function should return a boolean indicating whether or not there exists a directed path between the source and destination nodes.

// *** RECURSIVE *** //
// 1. base case: if the source (src) is the same as destination (dst), return true because that means we found a path
// 2. iterate through each neighbor in neighbors (graph[src]):
//      a. if a recursive call to hasPath with graph, neighbor, and dst passed in returns true, return true because we have found a path
// 3. if no path is found after checking all neighbors, return false

const hasPath = (graph, src, dst) => {
    if (src === dst) return true;

    for (let neighbor of graph[src]) {
        if (hasPath(graph, neighbor, dst) === true) return true;
    }

    return false;
}

// n = # of nodes
// e = # of edges
// time complexity: O(e)
// space complexity: O(n)

// n = # of nodes
// n^2 = # of edges
// time complexity: O(n^2)
// space complexity: O(n)

// // *** TEST 00 *** //
// const graph = {
//     f: ['g', 'i'],
//     g: ['h'],
//     h: [],
//     i: ['g', 'k'],
//     j: ['i'],
//     k: []
// };

// console.log(hasPath(graph, 'f', 'k')); // true


// // *** TEST 01 *** //
// const graph = {
//     f: ['g', 'i'],
//     g: ['h'],
//     h: [],
//     i: ['g', 'k'],
//     j: ['i'],
//     k: []
// };

// console.log(hasPath(graph, 'f', 'j')); // false


// // *** TEST 02 *** //
// const graph = {
//     f: ['g', 'i'],
//     g: ['h'],
//     h: [],
//     i: ['g', 'k'],
//     j: ['i'],
//     k: []
// };

// console.log(hasPath(graph, 'i', 'h')); // true


// // *** TEST 03 *** //
// const graph = {
//     v: ['x', 'w'],
//     w: [],
//     x: [],
//     y: ['z'],
//     z: [],
// };

// console.log(hasPath(graph, 'v', 'w')); // true


// // *** TEST 04 *** //
// const graph = {
//     v: ['x', 'w'],
//     w: [],
//     x: [],
//     y: ['z'],
//     z: [],  
//   };
  
//   console.log(hasPath(graph, 'v', 'z')); // false
  