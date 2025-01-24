// tree min value
// Write a function, treeMinValue, that takes in the root of a binary tree that contains number values.The function should return the minimum value within the tree.

// You may assume that the input tree is non - empty.

// *** ITERATIVE - DEPTH FIRST *** //
// 1. create a let variable called smallest initialized to positive infinity
// 2. create a constant variable called stack with the root passed into an array
// 3. while there is a stack:
//      a. create a constant variable called current that removes the top of the stack via .pop()
//      b. if current's value is less than smallest, replace smallest with current's value
//      c. if current has a left child, push current's left child to stack
//      d. if current has a right child, push current's right child to stack
// 4. return smallest

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
const treeMinValue = (root) => {
    let smallest = Infinity;
    const stack = [root];

    while (stack.length > 0) {
        const current = stack.pop();

        if (current.val < smallest) smallest = current.val;

        if (current.left) stack.push(current.left);
        if (current.right) stack.push(current.right);
    }

    return smallest;
}

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

// console.log(treeMinValue(a)); // -> -2


// // *** TEST 01 *** //
const a = new Node(5);
const b = new Node(11);
const c = new Node(3);
const d = new Node(4);
const e = new Node(14);
const f = new Node(12);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       5
//    /    \
//   11     3
//  / \      \
// 4   14     12

console.log(treeMinValue(a)); // -> 3


// // *** TEST 02 *** //
// const a = new Node(-1);
// const b = new Node(-6);
// const c = new Node(-5);
// const d = new Node(-3);
// const e = new Node(-4);
// const f = new Node(-13);
// const g = new Node(-2);
// const h = new Node(-2);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// f.right = h;

// //        -1
// //      /   \
// //    -6    -5
// //   /  \     \
// // -3   -4   -13
// //     /       \
// //    -2       -2

// console.log(treeMinValue(a)); // -> -13


// // *** TEST 03 *** //
// const a = new Node(42);

// //        42

// console.log(treeMinValue(a)); // -> 42
