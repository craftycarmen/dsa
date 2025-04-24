// pairs
// Write a function, pairs, that takes in an array as an argument.The function should return an array contain all unique pairs of elements.

// You may return the pairs in any order and the order of elements within a single pair does not matter.

// You can assume that the input array contains unique elements.


// 1. initialize an empty array called res to store the results
// 2. iterate through each element of the array, with i pointing to the first element:
//      a. iterate again through each element of the array, with j pointing to the one element over i:
//          i. initialize an array with elements at i and elements at j inside called pair to store each pair
//          ii. add the pair to res
// 3. return res

//     // *** TEST 00 *** //
//     console.log(pairs(["a", "b", "c"])); // ->
//     // [
//     //    ["a", "b"],
//     //    ["a", "c"],
//     //    ["b", "c"]
//     // ]
    


//     // *** TEST 01 *** //
//     console.log(pairs(["a", "b", "c", "d"])); // ->
// // [
// //    ["a", "b"],
// //    ["a", "c"],
// //    ["a", "d"],
// //    ["b", "c"],
// //    ["b", "d"],
// //    ["c", "d"]
// // ]



// // *** TEST 02 *** //
// console.log(pairs(["cherry", "cranberry", "banana", "blueberry", "lime", "papaya"])); // ->
// // [ 
// //   [ "cherry", "cranberry" ], 
// //   [ "cherry", "banana" ], 
// //   [ "cherry", "blueberry" ], 
// //   [ "cherry", "lime" ], 
// //   [ "cherry", "papaya" ], 
// //   [ "cranberry", "banana" ], 
// //   [ "cranberry", "blueberry" ], 
// //   [ "cranberry", "lime" ], 
// //   [ "cranberry", "papaya" ], 
// //   [ "banana", "blueberry" ], 
// //   [ "banana", "lime" ], 
// //   [ "banana", "papaya" ], 
// //   [ "blueberry", "lime" ], 
// //   [ "blueberry", "papaya" ], 
// //   [ "lime", "papaya" ] 
// // ] 
