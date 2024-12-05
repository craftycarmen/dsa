// reverse list

// Write a function, reverseList, that takes in the head of a linked list as an argument. The function should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list.

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// *** ITERATIVE ***//
// 1. save head as current variable
// 2. save null as prev variable
// 3. while current is not null:
//      a. save current's next property as next variable
//      b. reassign prev as current's next property
//      c. reassign current as prev
//      d. reassign next as current
// 4. return prev, as it now the new head

const reverseList = (head) => {
    let current = head;
    let prev = null;

    while (current !== null) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev
}

// n = number of nodes
// time complexity: O(n) because it traverses through the entire linked list once
// space complexity: O(1) because we only need a fixed number of variables


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
