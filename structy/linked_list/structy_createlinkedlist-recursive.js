// create linked list
// Write a function, createLinkedList, that takes in an array of values as an argument. The function should create a linked list containing each element of the array as the values of the nodes. The function should return the head of the linked list.

// *** RECURSIVE *** //
// 1. add i = 0 to the arguments of createLinkedList so we are tracking the start of the array
// 2. base case: if i is the same length of values, return null
// 3. create a new node with values at index i called head
// 4. point head's next property to the recursive call of createLinkedList, passing in values and i incremented by 1 (to make progress in the array)
// 5. return head


class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const createLinkedList = (values, i = 0) => {
    if (i === values.length) return null;

    const head = new Node(values[i]);
    head.next = createLinkedList(values, i + 1);

    return head;
}


// n = array length;
// time complexity = O(n) 
// space complexity = O(n) 

console.log(createLinkedList(["h", "e", "y"]));
// h -> e -> y

console.log(createLinkedList([1, 7, 1, 8]));
// 1 -> 7 -> 1 -> 8

console.log(createLinkedList(["a"]));
// a

console.log(createLinkedList([]));
// null
