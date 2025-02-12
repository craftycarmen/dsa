// level averages
// Write a function, levelAverages, that takes in the root of a binary tree that contains number values.The function should return an array containing the average value of each level.

// *** RECURSIVE *** //
// 1. create a helper function called fillLevels with root, levels, and levelNum passed in:
//      a. base case: if the root is null, return
//      b. if the length of levels is the same as levelNum, add a subarray containing the value of root to levels
//          - otherwise, add the value of root to levels indexed at levelNum
//      c. recursively call fillLevels with root's left child, levels, and levelNum incremented by 1 passed in
//      d. recursively call fillLevels with root's right child, levels, and levelNum incremented by 1 passed in
// 2. create a helper function called getAvg with array passed in
//      a. declare a let variable called sum, initialized to 0
//      b. iterate through each number of the array and add the number to sum
//      c. return the average of sum
// 3. in the levelAverages function:
//      a. declare a constant variable called levels, initialized to an empty array
//      b. call the fillLevels helper function with root, levels, and 0 passed in
//      c. return an array mapping levels to their averages using getAvg helper function

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const fillLevels = (root, levels, levelNum) => {
    if (root === null) return;

    if (levels.length === levelNum) {
        levels.push([root.val]);
    } else {
        levels[levelNum].push(root.val);
    }

    fillLevels(root.left, levels, levelNum + 1);
    fillLevels(root.right, levels, levelNum + 1);
}

const getAvg = (array) => {
    let sum = 0;

    for (let num of array) {
        sum += num;
    }

    return sum / array.length;
}

const levelAverages = (root) => {
    const levels = [];
    fillLevels(root, levels, 0);
    return levels.map(getAvg);
}

// n = number of nodes;
// time complexity: 0(n)
// space complexity: O(n)

// *** TEST 00 *** //
const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

console.log(levelAverages(a)); // -> [ 3, 7.5, 1 ] 


// // *** TEST 01 *** //
// const a = new Node(5);
// const b = new Node(11);
// const c = new Node(54);
// const d = new Node(20);
// const e = new Node(15);
// const f = new Node(1);
// const g = new Node(3);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// e.left = f;
// e.right = g;

// //        5
// //     /    \
// //    11    54
// //  /   \
// // 20   15
// //      / \
// //     1  3

// console.log(levelAverages(a)); // -> [ 5, 32.5, 17.5, 2 ] 


// // *** TEST 02 *** //
// const a = new Node(-1);
// const b = new Node(-6);
// const c = new Node(-5);
// const d = new Node(-3);
// const e = new Node(0);
// const f = new Node(45);
// const g = new Node(-1);
// const h = new Node(-2);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// f.right = h;

// //        -1
// //      /   \
// //    -6    -5
// //   /  \     \
// // -3   0     45
// //     /       \
// //    -1       -2

// console.log(levelAverages(a)); // -> [ -1, -5.5, 14, -1.5 ]


// // *** TEST 03 *** //
// const a = new Node(-1);
// const b = new Node(-6);
// const c = new Node(-5);
// const d = new Node(-3);
// const e = new Node(0);
// const f = new Node(45);
// const g = new Node(-1);
// const h = new Node(-2);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// f.right = h;

// //        -1
// //      /   \
// //    -6    -5
// //   /  \     \
// // -3   0     45
// //     /       \
// //    -1       -2

// console.log(levelAverages(a)); // -> [ -1, -5.5, 14, -1.5 ]


// // *** TEST 04 *** //
// console.log(levelAverages(null)); // -> [ ]
