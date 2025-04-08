// has cycle
// Write a function, hasCycle, that takes in an object representing the adjacency list of a directed graph. The function should return a boolean indicating whether or not the graph contains a cycle.

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

const hasCycle = (graph) => {
    const visiting = new Set();
    const visited = new Set();

    for (let node in graph) {
        if (cycleDetect(graph, node, visiting, visited) === true) return true;
    }

    return false;
}

const cycleDetect = (graph, node, visiting, visited) => {
    if (visited.has(node)) return false;
    if (visiting.has(node)) return true;

    visiting.add(node);

    for (let neighbor of graph[node]) {
        if (cycleDetect(graph, neighbor, visiting, visited) === true) return true;
    }

    visiting.delete(node);
    visited.add(node);

    return false;
}

// n = number of nodes
// e = number of edges
// time complexity: O(e) because we're going to potentially travel through the entire graph
// space complexity: O(n) because we're going to use at most n space when it comes to the recursive call stack and need to put nodes in different sets

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


// *** TEST 06 *** //
console.log(hasCycle({
    a: ["b", "c"],
    b: ["c"],
    c: ["d"],
    d: [],
    e: ["c"],
})); // -> false
