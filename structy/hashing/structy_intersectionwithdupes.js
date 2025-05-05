// intersection with dupes
// Write a function, intersectionWithDupes, that takes in two arrays, a, b, as arguments.The function should return a new array containing elements that are common to both input arrays.The elements in the result should appear as many times as they occur in both input arrays.

// You can return the result in any order.

// A. create a helper function called eleCount that takes in elements to get a counter hashmap
//      1. initialize an empty object called count
//      2. iterate through ele of elements:
//          a. if count does NOT have ele, initialize the ele's count to 0
//          b. increment the ele's count by 1
//      3. return count
// B. in the main function:
//      1. declare a constant variable called countA that runs the eleCount helper function for array "a"
//      2. declare a constant variable called countB that runs the eleCount helper function for array "b"
//      3. initialize an empty array called res
//      4. iterate through ele in countA:
//          a. iterate through whichever is the smallest number of the ele's count in countA and countB:
//              i. add ele to res
//      5. return res

const intersectionWithDupes = (a, b) => {
    const countA = eleCount(a);
    const countB = eleCount(b);
    const res = [];

    for (let ele in countA) {
        for (let i = 0; i < Math.min(countA[ele], countB[ele]); i++) {
            res.push(ele);
        }
    };

    return res;
}

const eleCount = (elements) => {
    const count = {};

    for (let ele of elements) {
        if (!count[ele]) count[ele] = 0;
        count[ele]++;
    };

    return count;
}

// *** TEST 00 *** //
console.log(intersectionWithDupes(
    ["a", "b", "c", "b"],
    ["x", "y", "b", "b"]
)); // -> ["b", "b"]


// *** TEST 01 *** //
console.log(intersectionWithDupes(
    ["q", "b", "m", "s", "s", "s"],
    ["s", "m", "s"]
)); // -> ["m", "s", "s"]


// *** TEST 02 *** //
console.log(intersectionWithDupes(
    ["p", "r", "r", "r"],
    ["r"]
)); // -> ["r"]


// *** TEST 03 *** //
console.log(intersectionWithDupes(
    ["r"],
    ["p", "r", "r", "r"]
)); // -> ["r"]


// *** TEST 04 *** //
console.log(intersectionWithDupes(
    ["t", "v", "u"],
    ["g", "e", "d", "f"]
)); // -> [ ]


// *** TEST 05 *** //
console.log(intersectionWithDupes(
    ["a", "a", "a", "a", "a", "a",],
    ["a", "a", "a", "a"]
)); // -> ["a", "a", "a", "a"]


// *** TEST 06 *** //
const a = [];
const b = [];
for (let i = 0; i < 20000; i += 1) {
    a.push(String(i));
    b.push(String(i));
}

console.log(intersectionWithDupes(a, b)); // -> [0, 1, 2, ..., 19999]
