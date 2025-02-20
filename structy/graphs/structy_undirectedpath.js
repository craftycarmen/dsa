// undirected path
// Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes(nodeA, nodeB). The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB.

// *** DEPTH FIRST *** //
// 1. in the main function:
//      a. declare a constant variable called graph that calls the buildGraph helper function with edges passed in
//      b. return the call of hasPath helper function that takes in graph, nodeA, nodeB, and a new set
// 2. create a hasPath helper function that takes in graph, src, dst, and visited to check if there is a direct path between the source and destination nodes
//      a. base case: if the src and dst are the same, return true
//      b. if the source node is already inside the visited set, return false because we do not need to travel through this node again—preventing an inifinite loop
//      c. add src to visited now that we know we haven't traveled through this node yet
//      d. iterate through each neighbor in graph[src]:
//          i. if the recursive call of hasPath, taking in graph, neighbor, dst, and visited, returns true, return true
//      e. return false
// 3. create a buildGraph helper function with edges passed in to create the adjacency list
//      a. declare a constant variable called graph, initialized with an empty object
//      b. iterate through every edge of edges:
//          i. declare a constant variable with nodes a and b destructed from edges
//          ii. if the a node is not in the graph, initialize it in the graph by keying the a node into graph and assigning it to an empty array
//          iii. if the b node is not in the graph, initialize it in the graph by keying the b node ninto graph and assigning it to an empty array
//          iv. add b to graph, keyed in at a
//          v. add a to graph, keyed in at b
//      c. return graph

const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges);

    return hasPath(graph, nodeA, nodeB, new Set());
}

const hasPath = (graph, src, dst, visited) => {
    if (src === dst) return true;
    if (visited.has(src)) return false;

    visited.add(src);

    for (let neighbor of graph[src]) {
        if (hasPath(graph, neighbor, dst, visited)) return true;
    }

    return false;
}

const buildGraph = (edges) => {
    const graph = {};

    for (let edge of edges) {
        const [ a, b ] = edge;

        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];

        graph[a].push(b);
        graph[b].push(a);
    }

    return graph;
}

// // *** TEST 00 *** //
// const edges = [
//     ['i', 'j'],
//     ['k', 'i'],
//     ['m', 'k'],
//     ['k', 'l'],
//     ['o', 'n']
// ];

// console.log(undirectedPath(edges, 'j', 'm')); // -> true


// // *** TEST 01 *** //
// const edges = [
//     ['i', 'j'],
//     ['k', 'i'],
//     ['m', 'k'],
//     ['k', 'l'],
//     ['o', 'n']
// ];

// console.log(undirectedPath(edges, 'm', 'j')); // -> true


// // *** TEST 02 *** //
// const edges = [
//     ['i', 'j'],
//     ['k', 'i'],
//     ['m', 'k'],
//     ['k', 'l'],
//     ['o', 'n']
// ];

// console.log(undirectedPath(edges, 'l', 'j')); // -> true


// // *** TEST 03 *** //
// const edges = [
//     ['i', 'j'],
//     ['k', 'i'],
//     ['m', 'k'],
//     ['k', 'l'],
//     ['o', 'n']
// ];

// console.log(undirectedPath(edges, 'k', 'o')); // -> false


// // *** TEST 04 *** //
// const edges = [
//     ['i', 'j'],
//     ['k', 'i'],
//     ['m', 'k'],
//     ['k', 'l'],
//     ['o', 'n']
// ];

// console.log(undirectedPath(edges, 'i', 'o')); // -> false


// // *** TEST 05 *** //
// const edges = [
//     ['b', 'a'],
//     ['c', 'a'],
//     ['b', 'c'],
//     ['q', 'r'],
//     ['q', 's'],
//     ['q', 'u'],
//     ['q', 't'],
// ];


// console.log(undirectedPath(edges, 'a', 'b')); // -> true


// // *** TEST 06 *** //
// const edges = [
//     ['b', 'a'],
//     ['c', 'a'],
//     ['b', 'c'],
//     ['q', 'r'],
//     ['q', 's'],
//     ['q', 'u'],
//     ['q', 't'],
// ];

// console.log(undirectedPath(edges, 'a', 'c')); // -> true


// // *** TEST 07 *** //
// const edges = [
//     ['b', 'a'],
//     ['c', 'a'],
//     ['b', 'c'],
//     ['q', 'r'],
//     ['q', 's'],
//     ['q', 'u'],
//     ['q', 't'],
// ];

// console.log(undirectedPath(edges, 'r', 't')); // -> true


// // *** TEST 08 *** //
// const edges = [
//     ['b', 'a'],
//     ['c', 'a'],
//     ['b', 'c'],
//     ['q', 'r'],
//     ['q', 's'],
//     ['q', 'u'],
//     ['q', 't'],
// ];

// console.log(undirectedPath(edges, 'r', 'b')); // -> false


// // *** TEST 09 *** //
// const edges = [
//     ['s', 'r'],
//     ['t', 'q'],
//     ['q', 'r'],
//   ];
  
//   console.log(undirectedPath(edges, 'r', 't')); // -> true
