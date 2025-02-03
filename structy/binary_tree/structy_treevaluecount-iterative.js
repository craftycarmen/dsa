// tree value count
// Write a function, treeValueCount, that takes in the root of a binary tree and a target value.The function should return the number of times that the target occurs in the tree.

// *** ITERATIVE *** //
// 1. if the root is null, return 0
// 2. create a let variable called count initialized to 0
// 3. create a constant variable called queue that is an array with root passed in
// 4. while there is a queue:
//      a. create a constant vaiable called current that removes the first element of the queue
//      b. if current's value is the same as target, add to count
//      c. if there's a current left child, push current's left child into queue
//      d. if there's a current right child, push current's right child into queue
// 5. return count

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const treeValueCount = (root, target) => {
    if (root === null) return 0;

    let count = 0;
    const queue = [root];

    while (queue.length > 0) {
        const current = queue.shift();

        if (current.val === target) count++;
        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);
    }

    return count;
}

// n = number of nodes
// time complexity: O(n)
// space complexity: O(n)

// // *** TEST 00 *** //
// const a = new Node(12);
// const b = new Node(6);
// const c = new Node(6);
// const d = new Node(4);
// const e = new Node(6);
// const f = new Node(12);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// //      12
// //    /   \
// //   6     6
// //  / \     \
// // 4   6     12

// console.log(treeValueCount(a, 6)); // -> 3


// // *** TEST 01 *** //
// const a = new Node(12);
// const b = new Node(6);
// const c = new Node(6);
// const d = new Node(4);
// const e = new Node(6);
// const f = new Node(12);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// //      12
// //    /   \
// //   6     6
// //  / \     \
// // 4  6     12

// console.log(treeValueCount(a, 12)); // -> 2


// // *** TEST 02 *** //
// const a = new Node(7);
// const b = new Node(5);
// const c = new Node(1);
// const d = new Node(1);
// const e = new Node(8);
// const f = new Node(7);
// const g = new Node(1);
// const h = new Node(1);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// f.right = h;

// //      7
// //    /   \
// //   5     1
// //  / \     \
// // 1   8     7
// //    /       \
// //   1         1
// console.log(treeValueCount(a, 1)); // -> 4


// // *** TEST 03 *** //
// const a = new Node(7);
// const b = new Node(5);
// const c = new Node(1);
// const d = new Node(1);
// const e = new Node(8);
// const f = new Node(7);
// const g = new Node(1);
// const h = new Node(1);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// f.right = h;

// //      7
// //    /   \
// //   5     1
// //  / \     \
// // 1   8     7
// //    /       \
// //   1         1

// console.log(treeValueCount(a, 9)); // -> 0


// // *** TEST 04 *** //
console.log(treeValueCount(null, 42)); // -> 0
