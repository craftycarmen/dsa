// tree path finder
// Write a function, pathFinder, that takes in the root of a binary tree and a target value.The function should return an array representing a path to the target value.If the target value is not found in the tree, then return null.

// You may assume that the tree contains unique values.

// *** RECURSIVE *** //
// 1. base case: if the root is null, return null
// 2. base case: if the root's value equals to the target, return an array with the root's value passed in
// 3. create a constant variable called leftPath that recursively calls pathFinder with root's left child and target passed in
// 4. if the leftPath is not null:
//      - push the root's value into leftPath
//      - return leftPath
// 5. create a const variable called rightPath that recursively calls pathFinder with root's right child and target passed in
// 6. if the rightPath is not null:
//      - push the root's value into rightPath
//      - return rightPath
// 7. return null (this covers the scenario where both leftPath and rightPath comes out empty)
// 8. rename pathFinder function to pathFinderHelper
// 9. replace pathFinder with pathFinderHelper in the leftPath and rightPath variables
// 10. create a new function called pathFinder with root and target passed in
// 11. create a constant variable called result that is pathFinderHelper with root and target passed in
// 12. if result is null, return null
//      - else, return result in reverse via .reverse()

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const pathFinder = (root, target) => {
    const result = pathFinderFinder(root, target);

    if (result === null) {
        return null;
    } else {
        return result.reverse();
    }
}

const pathFinderFinder = (root, target) => {
    if (root === null) return null;
    if (root.val === target) return [root.val];

    const leftPath = pathFinderFinder(root.left, target);
    if (leftPath !== null) {
        leftPath.push(root.left, target);
        return leftPath;
    }

    const rightPath = pathFinderFinder(root.right, target);
    if (rightPath !== null) {
        rightPath.push(root.right, target);
        return rightPath;
    }

    return null;
}

// n = number of nodes
// time complexity: O(n) because we have a recursive call for every node
// space complexity: O(n) because for the stack space and return value


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

// console.log(pathFinder(a, 'e')); // -> [ 'a', 'b', 'e' ]


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

// console.log(pathFinder(a, 'p')); // -> null


// // *** TEST 02 *** //
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

// console.log(pathFinder(a, "c")); // -> ['a', 'c']


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

// console.log(pathFinder(a, "h")); // -> ['a', 'c', 'f', 'h']


// // *** TEST 04 *** //
// const x = new Node("x");

// //      x

// console.log(pathFinder(x, "x")); // -> ['x']


// // *** TEST 05 *** //
// console.log(pathFinder(null, "x")); // -> null


// *** TEST 06 *** //
const root = new Node(0);
let curr = root;
for (let i = 1; i <= 6000; i += 1) {
    curr.right = new Node(i);
    curr = curr.right;
}

//      0
//       \
//        1
//         \
//          2
//           \
//            3
//             .
//              .
//               .
//              5999
//                \
//                6000

console.log(pathFinder(root, 3451)); // -> [0, 1, 2, 3, ..., 3450, 3451]
