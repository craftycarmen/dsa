// tree value count
// Write a function, treeValueCount, that takes in the root of a binary tree and a target value.The function should return the number of times that the target occurs in the tree.

// *** RECURSIVE *** //
// 1. base case: if root is null, return 0
// 2. create a constant variable called match that makes it so if root's value is the same as target, return 1, else return 0
// 3. return the sum of match, the recursive call of treeValueCount with root's left child and target passed in, and the recursive call of treeValueCount with root's right child and target passed in

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const treeValueCount = (root, target) => {
    if (root === null) return 0;

    const match = root.val === target ? 1 : 0;

    return match + treeValueCount(root.left, target) + treeValueCount(root.right, target)
}

// n = number of nodes
// time complexity: O(n)
// space complexity: O(n)

// // *** TEST 00 *** //
// const a = new Node(12);
// const b = new Node(6);
// const c = new Node(6);
// const d = new Node(4);
// const e = new Node(6);
// const f = new Node(12);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// //      12
// //    /   \
// //   6     6
// //  / \     \
// // 4   6     12

// console.log(treeValueCount(a, 6)); // -> 3


// // *** TEST 01 *** //
// const a = new Node(12);
// const b = new Node(6);
// const c = new Node(6);
// const d = new Node(4);
// const e = new Node(6);
// const f = new Node(12);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// //      12
// //    /   \
// //   6     6
// //  / \     \
// // 4  6     12

// console.log(treeValueCount(a, 12)); // -> 2


// // *** TEST 02 *** //
// const a = new Node(7);
// const b = new Node(5);
// const c = new Node(1);
// const d = new Node(1);
// const e = new Node(8);
// const f = new Node(7);
// const g = new Node(1);
// const h = new Node(1);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// f.right = h;

// //      7
// //    /   \
// //   5     1
// //  / \     \
// // 1   8     7
// //    /       \
// //   1         1
// console.log(treeValueCount(a, 1)); // -> 4


// // *** TEST 03 *** //
// const a = new Node(7);
// const b = new Node(5);
// const c = new Node(1);
// const d = new Node(1);
// const e = new Node(8);
// const f = new Node(7);
// const g = new Node(1);
// const h = new Node(1);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// f.right = h;

// //      7
// //    /   \
// //   5     1
// //  / \     \
// // 1   8     7
// //    /       \
// //   1         1

// console.log(treeValueCount(a, 9)); // -> 0


// // *** TEST 04 *** //
console.log(treeValueCount(null, 42)); // -> 0
