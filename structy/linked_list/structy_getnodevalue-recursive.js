// get node value
// Write a function, getNodeValue, that takes in the head of a linked list and an index. The function should return the value of the linked list at the specified index.

// If there is no node at the given index, then return null.

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// *** RECURSIVE *** //
// 1. base case 1: if head is null, return null
// 2. base case 2: if index is 0, return head's val because that means we found the matching index, as we are decrementing from the starting index
// 3. recurisve step: return getNodeValue with head's next property and index decremented by 1

const getNodeValue = (head, index) => {
    if (head === null) return null;
    if (index === 0) return head.val;

    return getNodeValue(head.next, index - 1)
}

// n = # of nodes
// time complexity: O(n)
// space complexity: O(n) because we are storing every call upon the call stack

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
