// connected components count
// Write a function, connectedComponentsCount, that takes in the adjacency list of an undirected graph. The function should return the number of connected components within the graph.

// *** ITERATIVE *** //
// 1. in the main connectedComponentsCount function:
//      a. declare a constant variable called visited, initialized with a new set to track visited nodes
//      b. declare a let variable called count, initialized at 0
//      c. iterate through each node in the graph:
//              i. if the call of the explore helper function—taking in graph, node, and visited—returns true, increment the count by 1
//      d. return count
// 2. create a helper function called explore, taking in graph, current, and visited, to look for connected components
//      a. if the string version of current is already in the visited set, return false because a cycle has been detected
//      b. add the string version of current to the visited set
//      c. iterate through each neighbor of graph[current]:
//              i. recursively call explore, taking in graph, neighbor, and visited
//      d. return true because a new connected component was found

const connectedComponentsCount = (graph) => {
    const visited = new Set();
    let count = 0;

    for (let node in graph) {
        if (explore(graph, node, visited)) count++;
    }

    return count;
}

const explore = (graph, current, visited) => {
    if (visited.has(String(current))) return false;
    visited.add(String(current));

    for (let neighbor of graph[current]) {
        explore(graph, neighbor, visited);
    }

    return true;
}

// n = number of nodes
// e = number of edges
// time complexity: O(e)
// space complexity: O(n)

// // *** TEST 00 *** //
// console.log(connectedComponentsCount({
//     0: [8, 1, 5],
//     1: [0],
//     5: [0, 8],
//     8: [0, 5],
//     2: [3, 4],
//     3: [2, 4],
//     4: [3, 2]
// })); // -> 2


// // *** TEST 01 *** //
// console.log(connectedComponentsCount({
//     1: [2],
//     2: [1, 8],
//     6: [7],
//     9: [8],
//     7: [6, 8],
//     8: [9, 7, 2]
// })); // -> 1


// // *** TEST 02 *** //
// console.log(connectedComponentsCount({
//     3: [],
//     4: [6],
//     6: [4, 5, 7, 8],
//     8: [6],
//     7: [6],
//     5: [6],
//     1: [2],
//     2: [1]
// })); // -> 3


// // *** TEST 03 *** //
// console.log(connectedComponentsCount({})); // -> 0


// // *** TEST 04 *** //
// console.log(connectedComponentsCount({
//     0: [4,7],
//     1: [],
//     2: [],
//     3: [6],
//     4: [0],
//     6: [3],
//     7: [0],
//     8: []
//   })); // -> 5
