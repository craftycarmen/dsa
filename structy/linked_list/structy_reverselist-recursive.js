// reverse list

// Write a function, reverseList, that takes in the head of a linked list as an argument. The function should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list.

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// *** RECURSIVE ***//
// 1. add a default argument of prev equaling to null
// 2. base case: if head is null, return prev
// 3. save head's next property in a next constant variable
// 4. reassign head's next property to point to prev
// 5. recursive step: return reverseList with next and head passed in as arguments

const reverseList = (head, prev = null) => {
    if (head === null) return prev;
    const next = head.next;
    head.next = prev

    return reverseList(next, head)
}

// n = number of nodes
// time complexity: O(n) because it traverses through the entire linked list once
// space complexity: O(n) because we are storing every call upon the call stack


// *** test case *** //
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

console.log(reverseList(a)); // f -> e -> d -> c -> b -> a


// *** test case *** //
const x = new Node("x");
const y = new Node("y");

x.next = y;

// x -> y

console.log(reverseList(x)); // y -> x


// *** test case *** //
const p = new Node("p");

// p

console.log(reverseList(p)); // p
