// tree levels
// Write a function, treeLevels, that takes in the root of a binary tree.The function should return a 2 - Dimensional array where each subarray represents a level of the tree.

// *** ITERATIVE - DEPTH-FIRST *** //
// 1. if the root is null, return an empty array
// 2. declare a constant variable called levels initialized with an empty array to keep track of the levels
// 3. declare a constant variable called stack initialized with an array containing an object with the following to keep track of the stack, while tagging the node with a level:
//      a. key of node pointing to the root
//      b. key of levelNum pointing to 0, as root is at level 0
// 4. while there is a stack:
//      a. declare a constant variable with node and levelNum destructured, initialized with the last element removed and returned from stack
//      b. if the length of levels is the same as levelNum:
//          i. add a new array containing the value of node to levels because this means it's a new level due to the first level being indexed at 0
//          ii. otherwise, add the value of the node into an existing subarray of levels by indexing it at levelNum
//      c. if the node has a right child, add an object with key of node pointing to node's right child and levelNum pointing to levelNum incremented by 1 to the stack
//      d. if the node has a left child, add an object with key of node pointing to node's left child and levelNum pointing to levelNum incremented by 1 to the stack
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
    const stack = [{ node: root, levelNum: 0 }];

    while (stack.length > 0) {
        const { node, levelNum } = stack.pop();

        if (levels.length === levelNum) {
            levels.push([node.val]);
        } else {
            levels[levelNum].push(node.val);
        }

        if (node.right) stack.push({ node: node.right, levelNum: levelNum + 1 });
        if (node.left) stack.push({ node: node.left, levelNum: levelNum + 1 });
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
