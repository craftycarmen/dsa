// tree sum
// Write a function, treeSum, that takes in the root of a binary tree that contains number values. The function should return the total sum of all values in the tree.

// *** ITERATIVE *** //
// 1. if the root is null, return 0
// 2. create a let variable called totalSum equaling 0 to track the total sum
// 3. create a constant variable called queue with an array that has root passed in
// 4. while there is a queue:
//      a. create a constant variable called current that removes the front element of queue
//      b. add totalSum to current's value
//      c. if there is a current left child, push current's left child to the queue
//      d. if there is a current right child, push current's right child to the queue
// 5. return totalSum

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const treeSum = (root) => {
    if (root === null) return 0;

    let totalSum = 0;
    const queue = [root];

    while (queue.length > 0) {
        const current = queue.shift();
        totalSum += current.val;

        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);
    }

    return totalSum;
}

// n = number of nodes
// time complexity: O(n) because we're visiting each node exactly once
// space complexity: O(n) because it depends on the maximum number of nodes stored

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

// console.log(treeSum(a)); // -> 21


// // *** TEST 01 *** //
// const a = new Node(1);
// const b = new Node(6);
// const c = new Node(0);
// const d = new Node(3);
// const e = new Node(-6);
// const f = new Node(2);
// const g = new Node(2);
// const h = new Node(2);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// f.right = h;

// //      1
// //    /   \
// //   6     0
// //  / \     \
// // 3   -6    2
// //    /       \
// //   2         2

// console.log(treeSum(a)); // -> 10


// // *** TEST 02 *** //
// console.log(treeSum(null)); // -> 0
