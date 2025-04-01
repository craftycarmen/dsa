// semesters required
// Write a function, semestersRequired, that takes in a number of courses(n) and a list of prerequisites as arguments.Courses have ids ranging from 0 through n - 1. A single prerequisite of[A, B] means that course A must be taken before course B.Return the minimum number of semesters required to complete all n courses.There is no limit on how many courses you can take in a single semester, as long as the prerequisites of a course are satisfied before taking it.

// Note that given prerequisite[A, B], you cannot take course A and course B concurrently in the same semester.You must take A in some semester before B.

// You can assume that it is possible to eventually complete all courses.


// A. in the main function:
//      1. declare a constant variable called graph that calls the buildGraph helper function, taking in numCourses and prereqs
//      2. initiate an empty object called distance
//      3. iterate through each course in graph:
//          a. if the subarray length in the graph adjacency list is 0, set the course of that distance to 1
//      4. iterate through each course in graph:
//          a. call the traverseDistance helper function with graph, course, and distance
//      5. return the maximum of the distance values
// B. define a buildGraph helper function, taking in numCourses and prereqs:
//      1. initiate an empty object called graph
//      2. iterate through each course, starting at 0:
//          a. set the value of graph at i to an empty array
//      3. iterate through each prereq of prereqs:
//          a. deconstruct a and b from prereq
//          b. add b to graph's a key
//      4. return graph
// C. define a traverseDistance helper function, taking in graph, node, and distance:
//      1. if node is in distance, return the value of node in distance
//      2. initiate maxDistance to 0
//      3. iterate through each neighbor of graph[node]:
//          a. declare a constant variable called neighborDistance that recursively calls traverseDistance with graph, neighbor, and distance
//          b. if neighborDistance is greater than maxDistance, reassign maxDistance to neighborDistance
//      4. save the value to the node key in distance that adds 1 to maxDistance
//      5. return distance[node]


const semestersRequired = (numCourses, prereqs) => {
    const graph = buildGraph(numCourses, prereqs);
    const distance = {};

    for (let course in graph) {
        if (graph[course].length === 0) distance[course] = 1;
    }

    for (let course in graph) {
        traverseDistance(graph, course, distance);
    }

    return Math.max(...Object.values(distance));
}

const buildGraph = (numCourses, prereqs) => {
    const graph = {};

    for (let i = 0; i < numCourses; i++) {
        graph[i] = [];
    }

    for (let prereq of prereqs) {
        const [a, b] = prereq;
        graph[a].push(b);
    }

    return graph;
}

const traverseDistance = (graph, node, distance) => {
    if (node in distance) return distance[node];

    let maxDistance = 0;

    for (let neighbor of graph[node]) {
        const neighborDistance = traverseDistance(graph, neighbor, distance);
        if (neighborDistance > maxDistance) maxDistance = neighborDistance
    }

    distance[node] = 1 + maxDistance;

    return distance[node];
}

// p = number of prereqs (edges)
// n = number of courses (nodes)
// time complexity: O(p)
// space complexity: O(n)



// // *** TEST 00 *** //
// const numCourses = 6;
// const prereqs = [
//     [1, 2],
//     [2, 4],
//     [3, 5],
//     [0, 5],
// ];
// console.log(semestersRequired(numCourses, prereqs)); // -> 3



// // *** TEST 01 *** //
// const numCourses = 7;
// const prereqs = [
//     [4, 3],
//     [3, 2],
//     [2, 1],
//     [1, 0],
//     [5, 2],
//     [5, 6],
// ];
// console.log(semestersRequired(numCourses, prereqs)); // -> 5



// // *** TEST 02 *** //
// const numCourses = 5;
// const prereqs = [
//     [1, 0],
//     [3, 4],
//     [1, 2],
//     [3, 2],
// ];
// console.log(semestersRequired(numCourses, prereqs)); // -> 2



// // *** TEST 03 *** //
// const numCourses = 12;
// const prereqs = [];
// console.log(semestersRequired(numCourses, prereqs)); // -> 1



// // *** TEST 04 *** //
// const numCourses = 3;
// const prereqs = [
//     [0, 2],
//     [0, 1],
//     [1, 2],
// ];
// console.log(semestersRequired(numCourses, prereqs)); // -> 3



// *** TEST 05 *** //
const numCourses = 6;
const prereqs = [
    [3, 4],
    [3, 0],
    [3, 1],
    [3, 2],
    [3, 5],
];
console.log(semestersRequired(numCourses, prereqs)); // -> 2
