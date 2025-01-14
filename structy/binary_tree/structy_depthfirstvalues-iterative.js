// depth first values
// Write a function, depthFirstValues, that takes in the root of a binary tree. The function should return an array containing all values of the tree in depth-first order.

// *** ITERATIVE *** //
// 1. if root is null, return an empty array
// 2. create a constant variable called result that is an empty array
// 3. create a constant variable called stack that is an array with root inside
// 4. while the stack's length is greater than 0:
//      a. create a constant variable called current that removes the top of the stack via .pop()
//      b. push current's value into result
//      c. if current has a right node, push the current's right node to the stack
//      d. if current has a left node, push the current's left node to the stack
// 5. return result

class Node {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

const depthFirstValues = (root) => {
    if (root === null) return [];

    const result = [];
    const stack = [root];

    while (stack.length > 0) {
        const current = stack.pop();
        result.push(current.val);

        if (current.right) stack.push(current.right);
        if (current.left) stack.push(current.left);
    }

    return result;
}

// // *** TEST 00 *** //
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');

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

// console.log(depthFirstValues(a));
// //    -> ['a', 'b', 'd', 'e', 'c', 'f']


// *** TEST 001 *** //
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const g = new Node('g');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /
//   g

console.log(depthFirstValues(a));
//    -> ['a', 'b', 'd', 'e', 'g', 'c', 'f']


// // *** TEST 02 *** //
// const a = new Node('a');
// //      a
// console.log(depthFirstValues(a));
// //    -> ['a']


// // *** TEST 03 *** //
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');

// a.right = b;
// b.left = c;
// c.right = d;
// d.right = e;

// //      a
// //       \
// //        b
// //       /
// //      c
// //       \
// //        d
// //         \
// //          e

// console.log(depthFirstValues(a));
// //    -> ['a', 'b', 'c', 'd', 'e']


// // *** TEST 04 *** //
// console.log(depthFirstValues(null)); 
// //    -> []
