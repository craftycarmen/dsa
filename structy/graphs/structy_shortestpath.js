// shortest path
// Write a function, shortestPath, that takes in an array of edges for an undirected graph and two nodes(nodeA, nodeB). The function should return the length of the shortest path between A and B. Consider the length as the number of edges in the path, not the number of nodes.If there is no path between A and B, then return -1. You can assume that A and B exist as nodes in the graph.

// *** ITERATIVE - BREADTH FIRST *** //
// A. define a helper function called buildGraph that converts the edges list into an adjacency list
//      1. initialize an empty object called graph
//      2. iterate through each edge of edges:
//          a. deconstruct the edge into nodes and b
//          b. if a is not a key in graph, initialize it as an empty array
//          c. if b is not a key in graph, initialize it as an empty array
//          d. add b to the adjacency list of a
//          e. add a to the adjacency list of b
//      3. return graph
// B. in the main function:
//      1. initialize graph by calling buildGraph with edges
//      2. create a set called visited and add nodeA to it
//      3. initialize a queue with a subarray containing node A and distance of 0
//      4. while the queue is not empty:
//          a. remove the front element of the queue and deconstruct it into node and distance
//          b. if node equals nodeB, return distance
//          c. iterate through each neighbor of graph[node]:
//              i. if neighbor is not in visited:
//                  1. add neighbor to visited
//                  2. enqueue neighbor with distance incremented by 1
//      5. return -1, as this means there is no path from nodeA to nodeB at this point

const shortestPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges);
    const visited = new Set([nodeA]);
    const queue = [[nodeA, 0]];

    while (queue.length > 0) {
        const [node, distance] = queue.shift();

        if (node === nodeB) return distance;

        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([neighbor, distance + 1]);
            }
        }
    }

    return -1;
}

const buildGraph = (edges) => {
    const graph = {};

    for (let edge of edges) {
        const [a, b] = edge;

        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];

        graph[a].push(b);
        graph[b].push(a);
    }

    return graph;
}

// n = number of nodes
// e = number of edges
// time complexity: O(n + e) because we are traversing both nodes and edges 
// space complexity: O(n + e)
// *** we need to account for whether the graph is dense. if it is sparse with few edges, then it is mostly O(n), but if it is dense with many edges, then it is mostly O(e)


// // *** TEST 00 *** //
// const edges = [
//     ['w', 'x'],
//     ['x', 'y'],
//     ['z', 'y'],
//     ['z', 'v'],
//     ['w', 'v']
// ];

// console.log(shortestPath(edges, 'w', 'z')); // -> 2


// // *** TEST 01 *** //
// const edges = [
//     ['w', 'x'],
//     ['x', 'y'],
//     ['z', 'y'],
//     ['z', 'v'],
//     ['w', 'v']
// ];

// console.log(shortestPath(edges, 'y', 'x')); // -> 1


// // *** TEST 02 *** //
// const edges = [
//     ['a', 'c'],
//     ['a', 'b'],
//     ['c', 'b'],
//     ['c', 'd'],
//     ['b', 'd'],
//     ['e', 'd'],
//     ['g', 'f']
// ];

// console.log(shortestPath(edges, 'a', 'e')); // -> 3


// // *** TEST 03 *** //
// const edges = [
//     ['a', 'c'],
//     ['a', 'b'],
//     ['c', 'b'],
//     ['c', 'd'],
//     ['b', 'd'],
//     ['e', 'd'],
//     ['g', 'f']
// ];

// console.log(shortestPath(edges, 'e', 'c')); // -> 2


// // *** TEST 04 *** //
// const edges = [
//     ['a', 'c'],
//     ['a', 'b'],
//     ['c', 'b'],
//     ['c', 'd'],
//     ['b', 'd'],
//     ['e', 'd'],
//     ['g', 'f']
// ];

// console.log(shortestPath(edges, 'b', 'g')); // -> -1


// // *** TEST 05 *** //
// const edges = [
//     ['c', 'n'],
//     ['c', 'e'],
//     ['c', 's'],
//     ['c', 'w'],
//     ['w', 'e'],
// ];

// console.log(shortestPath(edges, 'w', 'e')); // -> 1


// // *** TEST 06 *** //
// const edges = [
//     ['c', 'n'],
//     ['c', 'e'],
//     ['c', 's'],
//     ['c', 'w'],
//     ['w', 'e'],
// ];

// console.log(shortestPath(edges, 'n', 'e')); // -> 2


// *** TEST 07 *** //
const edges = [
    ['m', 'n'],
    ['n', 'o'],
    ['o', 'p'],
    ['p', 'q'],
    ['t', 'o'],
    ['r', 'q'],
    ['r', 's']
];

console.log(shortestPath(edges, 'm', 's')); // -> 6
