// insert node
// Write a function, insertNode, that takes in the head of a linked list, a value, and an index. The function should insert a new node with the value into the list at the specified index. Consider the head of the linked list as index 0. The function should return the head of the resulting linked list.

// Do this in-place.

// You may assume that the input list is non-empty and the index is not greater than the length of the input list.


// *** RECURSIVE *** //
// 1. add a default argument of count = 0 to insertNode function
// 2. base case 1: if head is null, return null
// 3. base case 2: if index is 0:
//      a. create a constant variable called newHead that is set to a new Node with value passed in
//      b. reassign newHead's next property to point to head;
//      c. return newHead;
// 4. base case: if count is less than one of index:
//      a. create a constant variable called temp that is set to head's next property;
//      b. reassign head's next property to point to a new node with value passed in
//      c. reassign head's next's next property to point to temp
//      d. return head;
// 5. recursive step: recursively call insertNode with head's next property, value, index, and count + 1 passed in
// 6. return head;

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const insertNode = (head, value, index, count = 0) => {
    if (head === null) return null;

    if (index === 0) {
        const newHead = new Node(value);
        newHead.next = head;
        return newHead;
    }

    if (count === index - 1) {
        const temp = head.next;
        head.next = new Node(value);
        head.next.next = temp;
        return head;
    }

    insertNode(head.next, value, index, count + 1);

    return head;
}

// n = number of nodes
// time complexity: O(n)
// space complexity: O(n)

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");


// *** TEST CASE 1 *** //
// a.next = b;
// b.next = c;
// c.next = d;
// console.log(insertNode(a, 'x', 2));
// // a -> b -> x -> c -> d


// *** TEST CASE 2 *** //
// a.next = b;
// b.next = c;
// c.next = d;
// console.log(insertNode(a, 'v', 3));
// // a -> b -> c -> v -> d

// *** TEST CASE 3 *** //
// a.next = b;
// b.next = c;
// c.next = d;
// console.log(insertNode(a, 'm', 4));
// // a -> b -> c -> d -> m

// *** TEST CASE 4 *** //
// a.next = b;
// console.log(insertNode(a, 'z', 0));
// // z -> a -> b 
