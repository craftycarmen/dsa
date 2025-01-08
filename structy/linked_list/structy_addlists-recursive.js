// add lists
// Write a function, addLists, that takes in the head of two linked lists, each representing a number. The nodes of the linked lists contain digits as values. The nodes in the input lists are reversed; this means that the least significant digit of the number is the head. The function should return the head of a new linked listed representing the sum of the input lists. The output list should have its digits reversed as well.

// You must do this by traversing through the linked lists once.

// Example:
// Say we wanted to compute 621 + 354 normally. The sum is 975:

// 621
// + 354
// -----
//   975

// Then, the reversed linked list format of this problem would appear as:

//    1 -> 2 -> 6
// +  4 -> 5 -> 3
// --------------
//    5 -> 7 -> 9

// *** RECURSIVE *** //
// 1. pass in carry = 0 into the arguments of addLists
// 2. base case: if head1 is null AND head2 is null AND carry is 0, return null
// 3. create a constant variable called val1 that checks if head1 is null --> set it as 0 if so, else set it as its value
// 4. create a constant variable called val2 that checks if head2 is null --> set it as 0 if so, else set it as its value
// 5. create a constant variable called sum that adds val1, val2, and carry
// 6. create a constant variable called nextCarry that checks if sum is greater than 9 --> set it as 1, else set it as 0
// 7. create a constant variable called digit that provides the value of sum mod 10, making it so that the digit is the number in the ones place
// 8. create a let variable called resultNode that provides a new node with digit
// 9. create a constant variable called next1 that checks if head1 is null --> set it as null if so, else set it as head1's next property
// 10. create a constant variable called next2 that checks if head2 is null --> set it as null if so, else set it as head2's next property
// 11. point resultNode's next property to the recursive call of addLists, passing in next1, next2, and nextCarry
// 12. return resultNode

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const addLists = (head1, head2, carry = 0) => {
    if (head1 === null && head2 === null && carry === 0) return null;

    const val1 = head1 === null ? 0 : head1.val;
    const val2 = head2 === null ? 0 : head2.val;

    const sum = val1 + val2 + carry;
    const nextCarry = sum > 9 ? 1 : 0;
    const digit = sum % 10;

    let resultNode = new Node(digit);

    const next1 = head1 === null ? null : head1.next;
    const next2 = head2 === null ? null : head2.next;

    resultNode.next = addLists(next1, next2, nextCarry);

    return resultNode;
}

// n = length of list1
// m = length of list2
// time complexity: O(max(n, m))
// space complexity: O(max(n, m))


// *** test case 1 *** //
// //   621
// // + 354
// // -----
// //   975

// const a1 = new Node(1);
// const a2 = new Node(2);
// const a3 = new Node(6);
// a1.next = a2;
// a2.next = a3;
// // 1 -> 2 -> 6

// const b1 = new Node(4);
// const b2 = new Node(5);
// const b3 = new Node(3);
// b1.next = b2;
// b2.next = b3;
// // 4 -> 5 -> 3

// console.log(addLists(a1, b1));
// // 5 -> 7 -> 9


// *** test case 2 *** //
// //  7541
// // +  32
// // -----
// //  7573

// const a1 = new Node(1);
// const a2 = new Node(4);
// const a3 = new Node(5);
// const a4 = new Node(7);
// a1.next = a2;
// a2.next = a3;
// a3.next = a4;
// // 1 -> 4 -> 5 -> 7

// const b1 = new Node(2);
// const b2 = new Node(3);
// b1.next = b2;
// // 2 -> 3 

// console.log(addLists(a1, b1));
// // 3 -> 7 -> 5 -> 7


// *** test case 3 *** //
// //   39
// // + 47
// // ----
// //   86

// const a1 = new Node(9);
// const a2 = new Node(3);
// a1.next = a2;
// // 9 -> 3

// const b1 = new Node(7);
// const b2 = new Node(4);
// b1.next = b2;
// // 7 -> 4

// console.log(addLists(a1, b1));
// // 6 -> 8


// *** test case 4 *** //
//   89
// + 47
// ----
//  136

const a1 = new Node(9);
const a2 = new Node(8);
a1.next = a2;
// 9 -> 8

const b1 = new Node(7);
const b2 = new Node(4);
b1.next = b2;
// 7 -> 4

console.log(addLists(a1, b1));
// 6 -> 3 -> 1


// *** test case 5 *** //
// //   999
// //  +  6
// //  ----
// //  1005

// const a1 = new Node(9);
// const a2 = new Node(9);
// const a3 = new Node(9);
// a1.next = a2;
// a2.next = a3;
// // 9 -> 9 -> 9

// const b1 = new Node(6);
// // 6

// console.log(addLists(a1, b1));
// // 5 -> 0 -> 0 -> 1
