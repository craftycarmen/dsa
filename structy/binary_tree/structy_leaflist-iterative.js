// leaf list
// Write a function, leafList, that takes in the root of a binary tree and returns an array containing the values of all leaf nodes in left - to - right order.

// *** ITERATIVE - DEPTH-FIRST *** //
// 1. if the root is null, return an empty array
// 2. declare a constant variable called leaves, initialized with an empty array
// 3. declare a constant variable called stack, initialized with the root node
// 4. while there is a stack:
//      a. declare a constant variable called current that removes and returns the last element of the stack
//      b. if current's left child and right child do not exist, add the value of current to leaves
//      c. if current's right child exists, add it to the stack
//      d. if current's left child exists, add it to the stack
//          ** note: we want to check current's right child first so that we get the left-to-right traversal
// 5. return leaves

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const leafList = (root) => {
    if (root === null) return [];

    const leaves = [];
    const stack = [root];

    while (stack.length > 0) {
        const current = stack.pop();

        if (!current.left && !current.right) leaves.push(current.val);

        if (current.right) stack.push(current.right);
        if (current.left) stack.push(current.left);
    }

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
