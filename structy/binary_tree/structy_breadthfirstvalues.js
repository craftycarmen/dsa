// breadth first values
// Write a function, breadthFirstValues, that takes in the root of a binary tree. The function should return an array containing all values of the tree in breadth-first order.

// *** ITERATIVE *** ==> recursive won't work in breadth first traversals //
// 1. if root is null, return an empty array
// 2. create a constant variable called values that is an empty array
// 3. create a constant variable called queue that is an array with root inside
// 4. while queue is not empty:
//      a. create a constant variable called current that removes the element at the front of the queue via .shift()
//      b. push current's value into values array
//      c. if current's left child exists, push current's left child into the queue
//      d. if current's right child exists, push current's right child into the queue
// 5. return values array

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const breadthFirstValues = (root) => {
    if (root === null) return [];

    const values = [];
    const queue = [root];

    while (queue.length > 0) {
        const current = queue.shift();
        values.push(current.val);

        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);
    }

    return values;
}

// n = number of nodes
// time complexity: O(n) because we're only adding nodes to the queue once and we're also removing the nodes from the queue once
// space complexity: O(n) because we're only adding all the nodes at most 


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

// console.log(breadthFirstValues(a));
// //    -> ['a', 'b', 'c', 'd', 'e', 'f']


// // *** TEST 01 *** //
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');
// const g = new Node('g');
// const h = new Node('h');

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

// console.log(breadthFirstValues(a));
// //   -> ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']


// // *** TEST 02 *** //
// const a = new Node('a');

// //      a

// console.log(breadthFirstValues(a));
// //    -> ['a']


// // *** TEST 03 *** //
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const x = new Node('x');

// a.right = b;
// b.left = c;
// c.left = x;
// c.right = d;
// d.right = e;

// //      a
// //       \
// //        b
// //       /
// //      c
// //    /  \
// //   x    d
// //         \
// //          e

// console.log(breadthFirstValues(a));
// //    -> ['a', 'b', 'c', 'x', 'd', 'e']


// // *** TEST 04 *** //
// console.log(breadthFirstValues(null));
// //    -> []
