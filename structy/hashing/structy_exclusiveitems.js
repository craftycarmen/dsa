// exclusive items
// Write a function, exclusiveItems, that takes in two arrays, a, b, as arguments.The function should return a new array containing elements that are in either array but not both arrays.

// You may assume that each input array does not contain duplicate elements.

// 1. convert "a" array into a set
// 2. convert "b" array into a set
// 3. initialize an empty array to store results
// 4. iterate through "a" array:
//      a. if element is NOT in set A, add element to results
// 5. iterate through "b" array:
//      b. if element is NOT in set B, add element to results
// 6. return results

const exclusiveItems = (a, b) => {
    const setA = new Set(a);
    const setB = new Set(b);
    const res = [];

    for (let ele of a) {
        if (!setB.has(ele)) res.push(ele);
    }

    for (let ele of b) {
        if (!setA.has(ele)) res.push(ele);
    }

    return res;
}

// n = length of "a" array
// m = length of "b" array
// time complexity: O(n + m) --> need to convert arrays into sets and iterate through both of them, one after the other
// space complexity: O(n + m) --> storing the sets, in which the size is going to be the same as the original array


// // ** TEST 00 ** //
// console.log(exclusiveItems([4, 2, 1, 6], [3, 6, 9, 2, 10])); // -> [4,1,3,9,10]


// // ** TEST 01 ** //
// console.log(exclusiveItems([2, 4, 6], [4, 2])); // -> [6]


// // ** TEST 02 ** //
// console.log(exclusiveItems([4, 2, 1], [1, 2, 4, 6])); // -> [6]


// // ** TEST 03 ** //
// console.log(exclusiveItems([0, 1, 2], [10, 11])); // -> [0,1,2,10,11]


// // ** TEST 04 ** //
// console.log(exclusiveItems([0, 1, 2], [10, 11])); // -> [0,1,2,10,11]
