// leaf list
// Write a function, leafList, that takes in the root of a binary tree and returns an array containing the values of all leaf nodes in left - to - right order.

// *** RECURSIVE *** //
// 1. create a helper function called fillLeaves with root and leaves passed in:
//      a. if the root is null, return
//      b. if the root doesn't have left and right children, add the value of root to leaves because this means the root itself is a leaf
//      c. recursively call fillLeaves with root's left child and leaves passed in
//      d. recursively call fillLeaves with root's right child and leaves passed in
// 2. in the main function:
//      a. declare a constant variable called leaves, initialized with an empty array
//      b. call the fillLeaves helper function with root and leaves passed in
//      c. return leaves

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const fillLeaves = (root, leaves) => {
    if (root === null) return;
    if (!root.left && !root.right) leaves.push(root.val);

    fillLeaves(root.left, leaves);
    fillLeaves(root.right, leaves);
}

const leafList = (root) => {
    const leaves = [];
    fillLeaves(root, leaves);
    return leaves;
}

// n = number of nodes;
// time complexity: O(n)
// space complexity: O(n)

// // *** TEST 00 *** //
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(leafList(a)); // -> [ 'd', 'e', 'f' ] 


// // *** TEST 01 *** //
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");
// const g = new Node("g");
// const h = new Node("h");

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// f.right = h;

// //      a
// //    /   \
// //   b     c
// //  / \     \
// // d   e     f
// //    /       \
// //   g         h

// console.log(leafList(a)); // -> [ 'd', 'g', 'h' ]


// // *** TEST 02 *** //
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

// console.log(leafList(a)); // -> [ 20, 1, 3, 54 ]


// // *** TEST 03 *** //
// const x = new Node('x');

// //      x

// console.log(leafList(x)); // -> [ 'x' ]


// // *** TEST 04 *** //
// console.log(leafList(null)); // -> [ ]
