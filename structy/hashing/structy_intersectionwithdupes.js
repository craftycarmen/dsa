// intersection with dupes
// Write a function, intersectionWithDupes, that takes in two arrays, a, b, as arguments.The function should return a new array containing elements that are common to both input arrays.The elements in the result should appear as many times as they occur in both input arrays.

// You can return the result in any order.



// // *** TEST 00 *** //
// console.log(intersectionWithDupes(
//     ["a", "b", "c", "b"], 
//         ["x", "y", "b", "b"]
//       )); // -> ["b", "b"]
      

//     // *** TEST 01 *** //
//     console.log(intersectionWithDupes(
//         ["q", "b", "m", "s", "s", "s"],
//         ["s", "m", "s"]
//     )); // -> ["m", "s", "s"]


// // *** TEST 02 *** //
// console.log(intersectionWithDupes(
//     ["p", "r", "r", "r"],
//     ["r"]
// )); // -> ["r"]


// // *** TEST 03 *** //
// console.log(intersectionWithDupes(
//     ["r"],
//     ["p", "r", "r", "r"]
// )); // -> ["r"]


// // *** TEST 04 *** //
// console.log(intersectionWithDupes(
//     ["t", "v", "u"],
//     ["g", "e", "d", "f"]
// )); // -> [ ]


// // *** TEST 05 *** //
// console.log(intersectionWithDupes(
//     ["a", "a", "a", "a", "a", "a",],
//     ["a", "a", "a", "a"]
// )); // -> ["a", "a", "a", "a"]


// // *** TEST 06 *** //
// const a = [];
// const b = [];
// for (let i = 0; i < 20000; i += 1) {
//     a.push(String(i));
//     b.push(String(i));
// }

// console.log(intersectionWithDupes(a, b)); // -> [0, 1, 2, ..., 19999]
