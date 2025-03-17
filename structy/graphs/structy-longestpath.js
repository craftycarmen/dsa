// longest path
// Write a function, longestPath, that takes in an adjacency list for a directed acyclic graph.The function should return the length of the longest path within the graph.A path may start and end at any two nodes.The length of a path is considered the number of edges in the path, not the number of nodes.

// A. in the main function:
//      1. initialize an empty object called distance
//      2. iterate through each node in graph:
//          a. if the length of graph at node is 0, initialize the key of this node with the value of 0 in the distance object
//      3. iterate through each node in graph:
//          a. call the helper traverseDistance function with graph, node, and distance
//      4. return the maximum value of the distance object
// B. define a helper function called traverseDistance with graph, node, and distance:
//      1. if the node is in distance as a key, return its value
//      2. initialize maxLength to 0
//      3. iterate through each neighbor of graph[node]:
//          a. declare a constant variable called attempt that recursively calls traverseDistance with graph, neighbor, and distance
//          b. if attempt is larger than maxLength, reassign attempt as the maxLength
//      4. update the value of the current node at distance to 1 + maxLength to include the edge between the neighbor and current node
//      5. return the value of node in distance

const longestPath = (graph) => {
    const distance = {};

    for (let node in graph) {
        if (graph[node].length === 0) distance[node] = 0;
    }

    for (let node in graph) {
        traverseDistance(graph, node, distance);
    }

    return Math.max(...Object.values(distance));
}

const traverseDistance = (graph, node, distance) => {
    if (node in distance) return distance[node];

    let maxLength = 0;

    for (let neighbor of graph[node]) {
        const attempt = traverseDistance(graph, neighbor, distance);
        if (attempt > maxLength) maxLength = attempt;
    }

    distance[node] = 1 + maxLength;

    return distance[node];
}


// // *** TEST 00 *** //
// const graph = {
//     a: ['c', 'b'],
//     b: ['c'],
//     c: []
// };

// console.log(longestPath(graph)); // -> 2


// // *** TEST 01 *** //
// const graph = {
//     a: ['c', 'b'],
//     b: ['c'],
//     c: [],
//     q: ['r'],
//     r: ['s', 'u', 't'],
//     s: ['t'],
//     t: ['u'],
//     u: []
// };

// console.log(longestPath(graph)); // -> 4


// // *** TEST 02 *** //
// const graph = {
//     h: ['i', 'j', 'k'],
//     g: ['h'],
//     i: [],
//     j: [],
//     k: [],
//     x: ['y'],
//     y: []
// };

// console.log(longestPath(graph)); // -> 2


// // *** TEST 03 *** //
// const graph = {
//     a: ['b'],
//     b: ['c'],
//     c: [],
//     e: ['f'],
//     f: ['g'],
//     g: ['h'],
//     h: []
// };

// console.log(longestPath(graph)); // -> 3


// *** TEST 04 *** //
const graph = {
    a: ['b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'],
    b: ['c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'],
    c: ['d', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'],
    d: ['e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'],
    e: ['f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'],
    f: ['g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'],
    g: ['h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'],
    h: ['i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'],
    i: ['j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'],
    j: ['k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w'],
    k: ['l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w'],
    l: ['m', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y'],
    m: ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x'],
    n: ['o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    o: ['p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x'],
    p: ['q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y'],
    q: ['r', 's', 't', 'u', 'v', 'w', 'x', 'y'],
    r: ['s', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    s: ['t', 'u', 'v', 'w', 'x', 'y', 'z'],
    t: ['u', 'v', 'w', 'x', 'y', 'z'],
    u: ['v', 'w', 'x', 'y', 'z'],
    v: ['w', 'x', 'y', 'z'],
    w: ['x', 'y', 'z'],
    x: ['y', 'z'],
    y: ['z'],
    z: []
};

console.log(longestPath(graph)); // -> 25
