// get node value
// Write a function, getNodeValue, that takes in the head of a linked list and an index. The function should return the value of the linked list at the specified index.

// If there is no node at the given index, then return null.

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// *** ITERATIVE *** //
// 1. save head as current
// 2. save a count variable as 0 to help track the index (we start at 0, as index starts at 0)
// 3. while current is not null:
//      a. if the count is the same as the index, return current's value
//      b. if count is NOT the same as the index, reassign current to current's next property and increment the count by 1
// 4. if we reached th end of the list (current.next is null), return null

const getNodeValue = (head, index) => {
    let current = head;
    let count = 0;

    while (current !== null) {
        if (count === index) return current.val;
        current = current.next;
        count++;
    }

    return null;
}

// n = # of nodes
// time complexity: O(n)
// space complexity: O(1)

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

console.log(getNodeValue(a, 2)); // 'c'
console.log(getNodeValue(a, 3)); // 'd'
console.log(getNodeValue(a, 7)); // null
