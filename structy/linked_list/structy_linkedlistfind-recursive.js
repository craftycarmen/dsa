// linked list find
// Write a function, linkedListFind, that takes in the head of a linked list and a target value. The function should return a boolean indicating whether or not the linked list contains the target.

// *** RECURSIVE *** //
// base case 1: if head is null, return false;
// base case 2: if head's value is the target, return true;
// recursive step: return linkedListFind with head's next property and target passed in

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const linkedListFind = (head, target) => {
    if (head === null) return false;
    if (head.val === target) return true;

    return linkedListFind(head.next, target);
}

// n = number of nodes
// time complexity: O(n) ==> we are making a call for every node in the linked list
// space complexity: O(n) ==> by the time we bottom out at each of those calls at a base case, we have to store them at the call stack

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

console.log(linkedListFind(a, "c")); // true


const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
const h = new Node("h");

e.next = f;
f.next = g;
g.next = h;

// e -> f -> g -> h

console.log(linkedListFind(e, "q")); // false
