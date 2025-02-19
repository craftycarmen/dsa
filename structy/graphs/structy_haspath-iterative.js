// has path
// Write a function, hasPath, that takes in an object representing the adjacency list of a directed acyclic graph and two nodes(src, dst). The function should return a boolean indicating whether or not there exists a directed path between the source and destination nodes.

// *** ITERATIVE *** //
// 1. declare a constant variable called queue, initialized with the source (src) in an array
// 2. while the queue is not empty:
//      a. declare a constant variable called current that removes the front element of the queue
//      b. if current is the same as the destination (dst), return true
//      c. iterate through every neighbor in neighbors (key into graph using current):
//          i. add neighbor to the queue
// 3. return false

const hasPath = (graph, src, dst) => {
    const queue = [ src ];

    while (queue.length > 0) {
        const current = queue.shift();

        if (current === dst) return true;

        for (let neighbor of graph[current]) {
            queue.push(neighbor);
        }
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
  