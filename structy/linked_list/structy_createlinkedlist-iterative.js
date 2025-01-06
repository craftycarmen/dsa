// create linked list
// Write a function, createLinkedList, that takes in an array of values as an argument. The function should create a linked list containing each element of the array as the values of the nodes. The function should return the head of the linked list.

// *** ITERATIVE *** //
// 1. save a new node of null as a constant variable called dummyHead
// 2. save dummyHead as tail
// 3. iterate through the values array:
//      a. point tail's next property to a new node of value
//      b. point tail to tail's next property
// 4. return dummyHead's next property

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const createLinkedList = (values) => {
    const dummyHead = new Node(null);
    let tail = dummyHead;

    for (let val of values) {
        tail.next = new Node(val);
        tail = tail.next;
    }

    return dummyHead.next;
}


// n = array length;
// time complexity = O(n) because we're iterating through every element of the array input
// space complexity = O(n) because we're creating n nodes

console.log(createLinkedList(["h", "e", "y"]));
// h -> e -> y

console.log(createLinkedList([1, 7, 1, 8]));
// 1 -> 7 -> 1 -> 8

console.log(createLinkedList(["a"]));
// a

console.log(createLinkedList([]));
// null
