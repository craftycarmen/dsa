// prereqs possible
// Write a function, prereqsPossible, that takes in a number of courses(n) and prerequisites as arguments.Courses have ids ranging from 0 through n - 1. A single prerequisite of[A, B] means that course A must be taken before course B.The function should return a boolean indicating whether or not it is possible to complete all courses.

// A. in the man function:
//      1. save the call of the buildGraph helper function, taking in numCourses and prereqs, as a constant variable called graph
//      2. initialize a new set called visiting
//      3. initialize a new set called visited
//      4. iterate through node in graph:
//              a. if the call of hasCycle, taking in graph, node, visiting, and visited, returns true, return false
//      5. return true
// B. declare a hasCycle helper function, taking in graph, node, visiting, and visited
//      1. if visited set has node, return false - we are visited this node.
//      2. if visiting set has node, return true - we are in the midst of a cycle.
//      3. add node to visiting set
//      4. iterate through neighbor of graph at node:
//              a. if the recursive call of hasCycle, passing in graph, neighbor, visiting, and visited returns true, return true
//      5. delete node from visiting set
//      6. add node to visited set
//      7. return false
// C. declare a buildGraph helper function that takes in numCourses and prereqs to turn the preres into an adjacency list:
//      1. initialize an empty object called graph
//      2. iterate through the course:
//              a. set graph at course to an empty array
//      3. iterate through prereq of prereqs:
//              a. unpack courseA and courseB from prereq
//              b. add courseB as a string to the neighbors of courseA in the graph
//      4. return graph


// // *** TEST 0 *** //
// const numCourses = 6;
// const prereqs = [
//     [0, 1],
//     [2, 3],
//     [0, 2],
//     [1, 3],
//     [4, 5],
// ];
// console.log(prereqsPossible(numCourses, prereqs)); // -> true


// // *** TEST 0 *** //
// const numCourses = 6;
// const prereqs = [
//     [0, 1],
//     [2, 3],
//     [0, 2],
//     [1, 3],
//     [4, 5],
//     [3, 0],
// ];
// console.log(prereqsPossible(numCourses, prereqs)); // -> false


// // *** TEST 0 *** //
// const numCourses = 5;
// const prereqs = [
//     [2, 4],
//     [1, 0],
//     [0, 2],
//     [0, 4],
// ];
// console.log(prereqsPossible(numCourses, prereqs)); // -> true


// // *** TEST 0 *** //
// const numCourses = 6;
// const prereqs = [
//     [2, 4],
//     [1, 0],
//     [0, 2],
//     [0, 4],
//     [5, 3],
//     [3, 5],
// ];
// console.log(prereqsPossible(numCourses, prereqs)); // -> false


// // *** TEST 0 *** //
// const numCourses = 8;
// const prereqs = [
//     [1, 0],
//     [0, 6],
//     [2, 0],
//     [0, 5],
//     [3, 7],
//     [4, 3],
// ];
// console.log(prereqsPossible(numCourses, prereqs)); // -> true


// // *** TEST 0 *** //
// const numCourses = 8;
// const prereqs = [
//     [1, 0],
//     [0, 6],
//     [2, 0],
//     [0, 5],
//     [3, 7],
//     [7, 4],
//     [4, 3],
// ];
// console.log(prereqsPossible(numCourses, prereqs)); // -> false


// // *** TEST 0 *** //
// const numCourses = 42;
// const prereqs = [[6, 36]];
// console.log(prereqsPossible(numCourses, prereqs)); // -> true
