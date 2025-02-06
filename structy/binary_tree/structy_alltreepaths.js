// all tree paths
// Write a function, allTreePaths, that takes in the root of a binary tree.The function should return a 2 - Dimensional array where each subarray represents a root - to - leaf path in the tree.

// The order within an individual path must start at the root and end at the leaf, but the relative order among paths in the outer array does not matter.

// You may assume that the input tree is non - empty.


// *** RECURSIVE *** //

// *** helper function *** //
// 1. convert allTreePaths into a helper function
// 2. base case: if root is null, return an empty array
// 3. base case: if root doesn't have a left child and doesn't have a right child, return an array with a subarray containing the value of the root
// 4. declare a constant variable called allPaths initialized with an empty array
// 5. declare a constant variable called leftPaths that is the recursive call of the helper function with root's left child passed in
// 6. iterate through each path of leftPaths:
//      a. add the root's value to each path
//      b. add each path to allPaths
// 7. declare a constant variable called rightPaths that is the recursive call of the helper function with root's right child passed in
// 8. iterate through each path of rightPaths:
//      a. add the root's value to each path
//      b. add each path to allPaths
// 9. return allPaths

// *** main function *** //
// 1. create a new allTreePaths function with root passed in
// 2. declare a constant variable called paths that calls the helper function with root passed in
// 3. iterate through each path of paths:
//      a. reverse each path in place
// 4. return paths


class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
};

const allTreePaths = (root) => {
    const paths = _allTreePaths(root);

    for (let path of paths) path.reverse();

    return paths;
}

const _allTreePaths = (root) => {
    if (root === null) return [];
    if (root.left === null && root.right === null) return [[root.val]];

    const allPaths = [];

    const leftPaths = _allTreePaths(root.left);
    for (let path of leftPaths) {
        path.push(root.left);
        allPaths.push(path);
    };

    const rightPaths = _allTreePaths(root.right);
    for (let path of rightPaths) {
        path.push(root.right);
        allPaths.push(path);
    };

    return allPaths;
}


// n = number of ndoes
// time complexity: ~O(n) roughly because of the subarrays we need to construct (could be O(n * log(n)))
// space complexity: ~O(n) roughly because of the subarrays we need to construct (could be O(n * log(n)))


// // *** TEST 00 *** //
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

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

console.log(allTreePaths(a)); // ->
// [ 
//   [ 'a', 'b', 'd' ], 
//   [ 'a', 'b', 'e' ], 
//   [ 'a', 'c', 'f' ] 
// ] 


// // *** TEST 01 *** //
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');
// const g = new Node('g');
// const h = new Node('h');
// const i = new Node('i');

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

// console.log(allTreePaths(a)); // ->
// // [ 
// //   [ 'a', 'b', 'd' ], 
// //   [ 'a', 'b', 'e', 'g' ], 
// //   [ 'a', 'b', 'e', 'h' ], 
// //   [ 'a', 'c', 'f', 'i' ] 
// // ] 


// // *** TEST 02 *** //
// const q = new Node('q');
// const r = new Node('r');
// const s = new Node('s');
// const t = new Node('t');
// const u = new Node('u');
// const v = new Node('v');

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

// console.log(allTreePaths(q)); // ->
// // [ 
// //   [ 'q', 'r', 't', 'u', 'v' ], 
// //   [ 'q', 's' ] 
// // ] 


// // *** TEST 03 *** //
// const z = new Node('z');

// //      z

// console.log(allTreePaths(z)); // -> 
// // [
// //   ['z']
// // ]
