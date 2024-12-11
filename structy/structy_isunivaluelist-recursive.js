// is univalue list
// Write a function, isUnivalueList, that takes in the head of a linked list as an argument. The function should return a boolean indicating whether or not the linked list contains exactly one unique value.

// You may assume that the input list is non-empty.

// *** RECURSIVE *** //
// 1. add a default argument of prevVal = null
// 2. base case: if head is null, return true
// 3. if prevVal is NOT null AND head's value DOES NOT equal to prevVal, return false
// 4. recursive step: return the recursive call of isUnivaluelist with head's next property and head's value passed in

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const isUnivalueList = (head, prevVal = null) => {
    if (head === null) return true;
    if (prevVal !== null && head.val !== prevVal) return false;

    return isUnivalueList(head.next, head.val);
}

// n = number of nodes
// time complexity: O(n)
// space complexity: O(1)


// *** test case 1 *** //
const a = new Node(7);
const b = new Node(7);
const c = new Node(7);

a.next = b;
b.next = c;

// 7 -> 7 -> 7

console.log(isUnivalueList(a)); // true


// *** test case 2 *** //
const e = new Node(7);
const f = new Node(7);
const g = new Node(4);

e.next = f;
f.next = g;

// 7 -> 7 -> 4

console.log(isUnivalueList(e)); // false


// *** test case 3 *** //
const u = new Node(2);
const v = new Node(2);
const w = new Node(2);
const x = new Node(2);
const y = new Node(2);

u.next = v;
v.next = w;
w.next = x;
x.next = y;

// 2 -> 2 -> 2 -> 2 -> 2

console.log(isUnivalueList(u)); // true
