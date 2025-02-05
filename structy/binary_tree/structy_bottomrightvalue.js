// bottom right value
// Write a function, bottomRightValue, that takes in the root of a binary tree.The function should return the right - most value in the bottom - most level of the tree.

// You may assume that the input tree is non - empty.

// *** ITERATIVE - BREADTH FIRST *** //
// 1. declare a constant variable called queue and initialize it with an array containing the root
// 2. declare a let variable called current and initialize it as null
// 3. while the queue is not empty:
//      a. assign current to the first element removed from the queue
//      b. if current has a left child, add it to the queue
//      c. if current has a right child, add it to the queue
// 4. return the value of current

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const bottomRightValue = (root) => {
    const queue = [root];
    let current = null;

    while (queue.length > 0) {
        current = queue.shift();

        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }

    return current.val;
}


// n = number of nodes
// time complexity: O(n), as every node is entering the queue once and leaving the queue once
// space complexity: O(n)


// // *** TEST 00 *** //
// const a = new Node(3);
// const b = new Node(11);
// const c = new Node(10);
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
// //   11     10
// //  / \      \
// // 4   -2     1

// console.log(bottomRightValue(a)); // -> 1


// // *** TEST 01 *** //
// const a = new Node(-1);
// const b = new Node(-6);
// const c = new Node(-5);
// const d = new Node(-3);
// const e = new Node(-4);
// const f = new Node(-13);
// const g = new Node(-2);
// const h = new Node(6);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// e.right = h;

// //        -1
// //      /   \
// //    -6    -5
// //   /  \     \
// // -3   -4   -13
// //     / \       
// //    -2  6

// console.log(bottomRightValue(a)); // -> 6


// // *** TEST 02 *** //
// const a = new Node(-1);
// const b = new Node(-6);
// const c = new Node(-5);
// const d = new Node(-3);
// const e = new Node(-4);
// const f = new Node(-13);
// const g = new Node(-2);
// const h = new Node(6);
// const i = new Node(7);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// e.right = h;
// f.left = i;

// //        -1
// //      /   \
// //    -6    -5
// //   /  \     \
// // -3   -4   -13
// //     / \    /   
// //    -2  6  7 

// console.log(bottomRightValue(a)); // -> 7


// // *** TEST 03 *** //
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');

// a.left = b;
// a.right = c;
// b.right = d;
// d.left = e;
// e.right = f;

// //      a
// //    /   \ 
// //   b     c
// //    \
// //     d
// //    /
// //   e
// //   \
// //    f

// console.log(bottomRightValue(a)); // -> 'f'


// // *** TEST 04 *** //
// const a = new Node(42);

// //      42

// console.log(bottomRightValue(a)); // -> 42
