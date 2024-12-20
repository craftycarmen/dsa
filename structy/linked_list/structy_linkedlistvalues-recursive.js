// linked list values
// Write a function, linkedListValues, that takes in the head of a linked list as an argument. The function should return an array containing all values of the nodes in the linked list.


class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// ** RECURSIVE ** //
// for the most optimial way, create a helper function that will fill in the values that will do the recursion

// MAIN FUNCTION:
// create an empty array
// call the helper function with head and values as the arguments
// return the values

// HELPER FUNCTION:
// take in the arguments of head and values
// base case: if head is null, just return
// push the head's value into the values array
// recursive step: recursively call the function with the head's next property and values


const linkedListValues = (head) => {
    const values = [];

    fillValues(head, values);

    return values;
}

const fillValues = (head, values) => {
    if (head === null) return;

    values.push(head.val);

    fillValues(head.next, values);
}


// the helper function makes it so the recursion doesn't have to create multiple arrays (which would make it O(n2) runtime) ==> they're just adding to their values to a single array instead

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
