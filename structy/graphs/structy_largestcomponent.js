// largest component
// Write a function, largestComponent, that takes in the adjacency list of an undirected graph.The function should return the size of the largest connected component in the graph.

// *** ITERATIVE - DEPTH-FIRST *** //
// 1. in the largestComponent function
//      a. declare a constant variable called visited, initialized with a new set
//      b. declare a let variable called longest, initialized at 0
//      c. iterate through each node in graph:
//          i. declare a constant variable called size that calls the exploreSize helper function, taking in graph, node, and visited
//          ii. if size is larger than longest, replace longest with size
//      d. return longest
// 2. create a helper function called exploreSize, taking in graph, node, and visited
//      a. if the visited set has the node, return 0 because we don't want to double count the nodes
//      b. add node to the visited set
//      c. declare a let variable called size, initialized at 1 because this is our first time seeing the node and we need to count it
//      d. iterate through the neighbor of graph[node]:
//          i. increment size by the recursive call of exploreSize taking in graph, neighbor, and visited, which would accumulate the count of all the nodes in this fully connected component
//      e. return size

const largestComponent = (graph) => {
    const visited = new Set();
    let longest = 0;

    for (let node in graph) {
        const size = exploreSize(graph, node, visited);
        if (size > longest) longest = size;
    }

    return longest;
}

const exploreSize = (graph, node, visited) => {
    if (visited.has(node)) return 0;

    visited.add(node);

    let size = 1;

    for (let neighbor of graph[node]) {
        size += exploreSize(graph, neighbor, visited);
    }

    return size;
}

// *** TEST 00 *** //
console.log(largestComponent({
    0: ['8', '1', '5'],
    1: ['0'],
    5: ['0', '8'],
    8: ['0', '5'],
    2: ['3', '4'],
    3: ['2', '4'],
    4: ['3', '2']
})); // -> 4


// // *** TEST 01 *** //
// console.log(largestComponent({
//     1: ['2'],
//     2: ['1', '8'],
//     6: ['7'],
//     9: ['8'],
//     7: ['6', '8'],
//     8: ['9', '7', '2']
// })); // -> 6


// // *** TEST 02 *** //
// console.log(largestComponent({
//     3: [],
//     4: ['6'],
//     6: ['4', '5', '7', '8'],
//     8: ['6'],
//     7: ['6'],
//     5: ['6'],
//     1: ['2'],
//     2: ['1']
// })); // -> 5


// // *** TEST 03 *** //
// console.log(largestComponent({})); // -> 0


// // *** TEST 04 *** //
// console.log(largestComponent({
//     0: ['4','7'],
//     1: [],
//     2: [],
//     3: ['6'],
//     4: ['0'],
//     6: ['3'],
//     7: ['0'],
//     8: []
//   })); // -> 3
