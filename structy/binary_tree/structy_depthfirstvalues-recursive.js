// depth first values
// Write a function, depthFirstValues, that takes in the root of a binary tree. The function should return an array containing all values of the tree in depth-first order.

// *** RECURSIVE *** //
// 1. base case: if root is null, return an empty array
// 2. create a constant variable called leftValues that recursivly calls depthFirstValues with root's left node passed in
// 3. create a constant variable called rightValues that recursively calls depthFirstValues with root's right node passed in
// 4. return an array with the root's value, leftValues spread in, and rightValues spread in

class Node {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

const depthFirstValues = (root) => {
    if (root === null) return [];

    const leftValues = depthFirstValues(root.left);
    const rightValues = depthFirstValues(right.right);

    return [root.val, ...leftValues, ...rightValues];
}

// n = number of nodes
// time complexity: O(n) because we're adding every node to the stack, but we're also removing them from the stack exactly once
// space complexity: O(n) because the only thing we're storing is the the stack, which is a linear data structure


// // *** TEST 00 *** //
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// //      a
// //    /   \
// //   b     c
// //  / \     \
// // d   e     f

// console.log(depthFirstValues(a));
// //    -> ['a', 'b', 'd', 'e', 'c', 'f']


// *** TEST 001 *** //
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const g = new Node('g');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /
//   g

console.log(depthFirstValues(a));
//    -> ['a', 'b', 'd', 'e', 'g', 'c', 'f']


// // *** TEST 02 *** //
// const a = new Node('a');
// //      a
// console.log(depthFirstValues(a));
// //    -> ['a']


// // *** TEST 03 *** //
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');

// a.right = b;
// b.left = c;
// c.right = d;
// d.right = e;

// //      a
// //       \
// //        b
// //       /
// //      c
// //       \
// //        d
// //         \
// //          e

// console.log(depthFirstValues(a));
// //    -> ['a', 'b', 'c', 'd', 'e']


// // *** TEST 04 *** //
// console.log(depthFirstValues(null)); 
// //    -> []
