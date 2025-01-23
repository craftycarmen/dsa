// tree includes
// Write a function, treeIncludes, that takes in the root of a binary tree and a target value. The function should return a boolean indicating whether or not the value is contained in the tree.


// *** RECURSIVE *** //
// 1. if root is null, return false
// 2. if the root's value equals the target, return true
// 3. return the recursive call of treeIncludes with root's left child and target passed in OR the recursive call of treeIncludes with root's right child and target passed in

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const treeIncludes = (root, target) => {
    if (root === null) return false;
    if (root.val === target) return true;

    return treeIncludes(root.left, target) || treeIncludes(root.right, target);
}

// n = number of nodes
// time complexity: O(n) because nodes enter the queue once and leave the queue once
// space complexity: O(n) because we're storing our nodes within the queue

// // *** TEST 00 *** //
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");

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

// console.log(treeIncludes(a, "e")); // -> true

// // *** TEST 01 *** //
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");

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

// console.log(treeIncludes(a, "a")); // -> true


// // *** TEST 02 *** //
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");

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

// console.log(treeIncludes(a, "n")); // -> false


// // *** TEST 03 *** //
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

// console.log(treeIncludes(a, "f")); // -> true


// // *** TEST 04 *** //
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

// console.log(treeIncludes(a, "p")); // -> false


// // *** TEST 05 *** //
// console.log(treeIncludes(null, "b")); // -> false
