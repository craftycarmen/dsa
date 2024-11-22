// sum list
// Write a function, sumList, that takes in the head of a linked list containing numbers as an argument. The function should return the total sum of all values in the linked list.

// *** RECURSIVE *** //
// base case: if head is null, return 0;
// recursive step: return head.val + recursive call of sumList, passing in head's next property

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const sumList = (head) => {
    if (head === null) return 0;

    return head.val + sumList(head.next);
}

// n = number of nodes
// time complexity: O(n) ==> one call for every node within our linked list
// space complexity: O(n) ==> we need to include the space utilized in the call stack for making these recursive function calls

const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// 2 -> 8 -> 3 -> -1 -> 7

console.log(sumList(a)); // 19


const x = new Node(38);
const y = new Node(4);

x.next = y;

// 38 -> 4

console.log(sumList(x)); // 42
