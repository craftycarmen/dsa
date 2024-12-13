// remove node
// Write a function, removeNode, that takes in the head of a linked list and a target value as arguments. The function should delete the node containing the target value from the linked list and return the head of the resulting linked list. If the target appears multiple times in the linked list, only remove the first instance of the target in the list.

// Do this in-place.

// You may assume that the input list is non-empty.

// You may assume that the input list contains the target.


class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// *** RECURSIVE *** //
// 1. base case 1: if head is null, return null
// 2. base case 2: if head's value is equal to the targetVal, return head's next property
// 3. recursive step: reassign head.next to point to the recursive call of removeNode with head.next and targetVal passed in
// 4. return head;

const removeNode = (head, targetVal) => {
    if (head === null) return null;
    if (head.val === targetVal) return head.next;

    head.next = removeNode(head.next, targetVal)

    return head;
}

// n = number of nodes
// time complexity: O(n) because we're traversing once
// space complexity: O(n) because of the call stack

// *** test case 1 *** //
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// a -> b -> c -> d -> e -> f

console.log(removeNode(a, "c"));
// a -> b -> d -> e -> f


// *** test case 2 *** //
const x = new Node("x");
const y = new Node("y");
const z = new Node("z");

x.next = y;
y.next = z;

// x -> y -> z

console.log(removeNode(x, "z"));
// x -> y


// *** test case 3 *** //
const q = new Node("q");
const r = new Node("r");
const s = new Node("s");

q.next = r;
r.next = s;

// q -> r -> s

console.log(removeNode(q, "q"));
// r -> s
