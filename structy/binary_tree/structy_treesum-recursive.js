// tree sum
// Write a function, treeSum, that takes in the root of a binary tree that contains number values. The function should return the total sum of all values in the tree.

// *** RECURSIVE *** //
// 1. base case: if root is null, return 0
// 2. return the sum of root's value, recursive call of treeSum with root's left child passed in, and recursive call of treeSum with root's right child passed in

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const treeSum = (root) => {
    if (root === null) return 0;

    return root.val + treeSum(root.left) + treeSum(root.right);
}

// n = number of nodes
// time complexity: O(n) because we're making a single recursive call for every node
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

// console.log(treeSum(a)); // -> 21


// // *** TEST 01 *** //
// const a = new Node(1);
// const b = new Node(6);
// const c = new Node(0);
// const d = new Node(3);
// const e = new Node(-6);
// const f = new Node(2);
// const g = new Node(2);
// const h = new Node(2);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// f.right = h;

// //      1
// //    /   \
// //   6     0
// //  / \     \
// // 3   -6    2
// //    /       \
// //   2         2

// console.log(treeSum(a)); // -> 10


// // *** TEST 02 *** //
// console.log(treeSum(null)); // -> 0
