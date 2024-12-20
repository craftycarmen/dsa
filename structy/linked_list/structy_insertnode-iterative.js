// insert node
// Write a function, insertNode, that takes in the head of a linked list, a value, and an index. The function should insert a new node with the value into the list at the specified index. Consider the head of the linked list as index 0. The function should return the head of the resulting linked list.

// Do this in-place.

// You may assume that the input list is non-empty and the index is not greater than the length of the input list.


// *** ITERATIVE *** //
// 1. edge case - if index is 0:
//      a. set a new node with value passed in as a constant newHead variable
//      b. reassign newHead's next property to point to head
//      c. return newHead;
// 2. save head as current
// 3. save 0 as count
// 4. while current is not null:
//      a. if count is one less than the index:
//          - set current's next property as a constant temp variable
//          - reassign current's next property to point to a new node with value passed in
//          - reassign current's next's next property to point to temp
//      b. increment count by one
//      c. reassign currnt to point to current's next property
// 5. return head

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const insertNode = (head, value, index) => {
    if (index === 0) {
        const newHead = new Node(value);
        newHead.next = head;
        return newHead;
    }

    let current = head;
    let count = 0;

    while (current !== null) {
        if (count === index - 1) {
            const temp = current.next;
            current.next = new Node(value);
            current.next.next = temp;
        }

        count++;
        current = current.next;
    }

    return head;
}

// n = number of nodes
// time complexity: O(n)
// space complexity: O(1)

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
