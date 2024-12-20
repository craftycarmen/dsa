// linked list find
// Write a function, linkedListFind, that takes in the head of a linked list and a target value. The function should return a boolean indicating whether or not the linked list contains the target.

// *** ITERATIVE *** //
// save head as current
// while current is not null: if current's value is the target, return true; else reassign current to next property
// return false

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const linkedListFind = (head, target) => {
    let current = head;

    while (current !== null) {
        if (current.val === target) return true;
        current = current.next;
    }

    return false;
}

// n = number of nodes
// time complexity: O(n) ==> we are iterating through every node of the list
// space complexity: O(1) ==> we are using a constant number of variables

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
