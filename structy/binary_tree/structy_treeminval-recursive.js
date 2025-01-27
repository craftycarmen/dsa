// tree min value
// Write a function, treeMinValue, that takes in the root of a binary tree that contains number values.The function should return the minimum value within the tree.

// You may assume that the input tree is non - empty.

// *** RECURSIVE *** //
// 1. base case: if root is null, return positive infinity
// 2. create a constant variable called leftMin that is the recursive call of treeMinValue with the root's left child passed in
// 3. create a constant variable called rightMin that is the recursive call of treeMinValue with the root's right child passed in
// 4. return the smallest between the root's value, leftMin, and rightMin via Math.min()

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
const treeMinValue = (root) => {
    if (root === null) return Infinity;

    const leftMin = treeMinValue(root.left);
    const rightMin = treeMinValue(root.right);

    return Math.min(root.val, leftMin, rightMin);
}

// n = number of nodes
// time complexity: O(n)
// space complexity: O(n)

// // *** TEST 00 *** //
// const a = new Node(3);
// const b = new Node(11);
// const c = new Node(4);
// const d = new Node(4);
// const e = new Node(-2);
// const f = new Node(1);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// //       3
// //    /    \
// //   11     4
// //  / \      \
// // 4   -2     1

// console.log(treeMinValue(a)); // -> -2


// // *** TEST 01 *** //
const a = new Node(5);
const b = new Node(11);
const c = new Node(3);
const d = new Node(4);
const e = new Node(14);
const f = new Node(12);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       5
//    /    \
//   11     3
//  / \      \
// 4   14     12

console.log(treeMinValue(a)); // -> 3


// // *** TEST 02 *** //
// const a = new Node(-1);
// const b = new Node(-6);
// const c = new Node(-5);
// const d = new Node(-3);
// const e = new Node(-4);
// const f = new Node(-13);
// const g = new Node(-2);
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
// // -3   -4   -13
// //     /       \
// //    -2       -2

// console.log(treeMinValue(a)); // -> -13


// // *** TEST 03 *** //
// const a = new Node(42);

// //        42

// console.log(treeMinValue(a)); // -> 42
