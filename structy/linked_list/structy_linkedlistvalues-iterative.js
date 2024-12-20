// linked list values
// Write a function, linkedListValues, that takes in the head of a linked list as an argument. The function should return an array containing all values of the nodes in the linked list.


class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// ** ITERITIVE ** //
// create a results array
// save head as current
// while current is not null, push the value of current into the results array and reassign current to current's next property
// return results array

const linkedListValues = (head) => {
    const results = [];
    let current = head;

    while (current !== null) {
        results.push(current.val);
        current = current.next;
    }

    return results;
}


// n = number of nodes
// time complexity: O(n) ==> we are iterating through every node once
// space complexity: O(n) ==> the output is dependent on number of nodes


// *** test case *** //
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

console.log(linkedListValues(a)); // -> [ 'a', 'b', 'c', 'd' ]


// *** test case *** //
const x = new Node("x");
const y = new Node("y");

x.next = y;

// x -> y

console.log(linkedListValues(x)); // -> [ 'x', 'y' ]


// *** test case *** //
const q = new Node("q");

// q

console.log(linkedListValues(q)); // -> [ 'q' ]


// *** test case *** //
console.log(linkedListValues(null)); // -> [ ]
