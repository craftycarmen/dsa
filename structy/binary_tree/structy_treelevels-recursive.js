// tree levels
// Write a function, treeLevels, that takes in the root of a binary tree.The function should return a 2 - Dimensional array where each subarray represents a level of the tree.

// *** RECURSIVE *** //
// 1. declare a constant variable called levels, initialized with an empty array
// 2. call the fillLevels helper function with root, levels, and 0 passed in
// 3. return levels
// 4. create a helper function called fillLevels with root, levels, and levelNum passed in:
//      a. base case: if the root is null, return an empty array
//      b. if the length of levels is the same as levelNum, add an array containing the value of root to levels
//          - otherwise, add value of root to levels indexed at levelNum
//      c. recursively call fillLevels with root's left child, levels, and levelNum incremented by 1 passed in
//      d. recursively call fillLevels with root's right child, levels, and levelNum incremented by 1 passed in

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const treeLevels = (root) => {
    const levels = [];

    fillLevels(root, levels, 0);

    return levels;
}

const fillLevels = (root, levels, levelNum) => {
    if (root === null) return [];

    if (levels.length === levelNum) {
        levels.push([root.val]);
    } else {
        levels[levelNum].push(root.val);
    }

    fillLevels(root.left, levels, levelNum + 1);
    fillLevels(root.right, levels, levelNum + 1);
}

// n = number of nodes
// time complexity: O(n)
// space complexity: O(n)

// *** TEST 00 *** //
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

console.log(treeLevels(a)); // ->
// [
//   ['a'],
//   ['b', 'c'],
//   ['d', 'e', 'f']
// ]


// // *** TEST 01 *** //
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");
// const g = new Node("g");
// const h = new Node("h");
// const i = new Node("i");

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// e.right = h;
// f.left = i;

// //         a
// //      /    \
// //     b      c
// //   /  \      \
// //  d    e      f
// //      / \    /
// //     g  h   i

// console.log(treeLevels(a)); // ->
// // [
// //   ['a'],
// //   ['b', 'c'],
// //   ['d', 'e', 'f'],
// //   ['g', 'h', 'i']
// // ]


// // *** TEST 02 *** //
// const q = new Node("q");
// const r = new Node("r");
// const s = new Node("s");
// const t = new Node("t");
// const u = new Node("u");
// const v = new Node("v");

// q.left = r;
// q.right = s;
// r.right = t;
// t.left = u;
// u.right = v;

// //      q
// //    /   \
// //   r     s
// //    \
// //     t
// //    /
// //   u
// //  /
// // v

// console.log(treeLevels(q)); //->
// // [
// //   ['q'],
// //   ['r', 's'],
// //   ['t'],
// //   ['u'],
// //   ['v']
// // ]


// // *** TEST 03 *** //
// console.log(treeLevels(null)); // -> []
