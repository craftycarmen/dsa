// tree levels
// Write a function, treeLevels, that takes in the root of a binary tree.The function should return a 2 - Dimensional array where each subarray represents a level of the tree.

// *** ITERATIVE - BREADTH-FIRST *** //
// 1. if the root is null, return an empty array
// 2. declare a constant variable called levels, initialized with an empty array
// 3. declare a constant variable called queue, initialized with an array containing an object that has the key of node with the value of root and a key of levelNum with the value of 0
// 4. while there is a queue:
//      a. declare a constant variable with node and levelNum destructured that removes and returns the first element of queue
//      b. if the length of levels is the same as levelNum, add an array containing the value of the node to levels
//          i. otherwise, add the value of node to levels, indexed at levelNum
//      c. if node has a left child, add an object that has the key of node and value of node's left child and a key of levelNum with the value of levelNum incremented by 1
//      d. if node has a right child, add an object that has the key of node and value of node's right child and a key of levelNum with the value of levelNum incremented by 1
// 5. return levels

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const treeLevels = (root) => {
    if (root === null) return [];

    const levels = [];
    const queue = ({ node: root, levelNum: 0 });

    while (queue.length > 0) {
        const { node, levelNum } = queue.shift();

        if (levels.length === levelNum) {
            levels.push([node.val]);
        } else {
            levels[levelNum].push(node.val);
        }

        if (node.left) queue.push({ node: node.left, levelNum: levelNum + 1 });
        if (node.right) queue.push({ node: node.right, levelNum: levelNum + 1 });
    }

    return levels;
}

// n = number of nodes
// time complexity: O(n)
// space complexity: O(n)

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

// console.log(treeLevels(a)); // ->
// // [
// //   ['a'],
// //   ['b', 'c'],
// //   ['d', 'e', 'f']
// // ]


// *** TEST 01 *** //
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
const h = new Node("h");
const i = new Node("i");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
e.right = h;
f.left = i;

//         a
//      /    \
//     b      c
//   /  \      \
//  d    e      f
//      / \    /
//     g  h   i

console.log(treeLevels(a)); // ->
// [
//   ['a'],
//   ['b', 'c'],
//   ['d', 'e', 'f'],
//   ['g', 'h', 'i']
// ]


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
