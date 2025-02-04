// how high
// Write a function, howHigh, that takes in the root of a binary tree.The function should return a number representing the height of the tree.

// The height of a binary tree is defined as the maximal number of edges from the root node to any leaf node.

// If the tree is empty, return -1.

// *** RECURSIVE *** //
// 1. base case: if node is null, return -1
// 2. create a constant variable called leftTreeHeight that is the recursive call of howHigh with node's left subtree passed in
// 3. create a constant variable called rightTreeHeight that is the recursive call of howHigh with node's right subtree passed in
// 4. return the higher number between leftTreeHeight and rightTreeHeight, with 1 added to account for the edge that separates the parent and child(ren)

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const howHigh = (node) => {
    if (node === null) return -1;

    const leftTreeHeight = howHigh(node.left);
    const rightTreeHeight = howHigh(node.right);

    return Math.max(leftTreeHeight, rightTreeHeight) + 1;
}


// n = number of nodes
// time complexity = O(n)
// space complexity = O(n)


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

// console.log(howHigh(a)); // -> 2


// // *** TEST 01 *** //
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');
// const g = new Node('g');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g

// //      a
// //    /   \
// //   b     c
// //  / \     \
// // d   e     f
// //    /
// //   g

// console.log(howHigh(a)); // -> 3


// // *** TEST 02 *** //
// const a = new Node('a');
// const c = new Node('c');

// a.right = c;

// //      a
// //       \
// //        c

// console.log(howHigh(a)); // -> 1


// // *** TEST 03 *** //
// const a = new Node('a');

// //      a

// console.log(howHigh(a)); // -> 0


// // *** TEST 04 *** //
// console.log(howHigh(null)); // -> -1
