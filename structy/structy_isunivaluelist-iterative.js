// is univalue list
// Write a function, isUnivalueList, that takes in the head of a linked list as an argument. The function should return a boolean indicating whether or not the linked list contains exactly one unique value.

// You may assume that the input list is non-empty.

// *** ITERATIVE *** //
// 1. save head as current
// 2. while current is NOT null:
//      a. if current's value is NOT the same as head's value, return false
//      b. reassign current to point to current's next property
// 3. return true

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const isUnivalueList = (head) => {
    let current = head;

    while (current !== null) {
        if (current.val !== head.val) return false;

        current = current.next;
    }

    return true;
}

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
