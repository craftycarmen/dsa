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

// *** ITERATIVE *** //
// 1. create a constant variable called dummyHead that creates a new node of null
// 2. create a let variable called tail that is set to dummyHead
// 3. create a let variable called carry that equals 0
// 4. create a let variable called current1 that equals to head1;
// 5. create a let variable called current2 that equals to head2;
// 6. while current1 is not null OR current2 is not null OR carry is 1:
//      a. create a constant variable called val1 that checks if current1 is null --> set it as 0 if it is, else set it as its value
//      b. create a constant variable called val2 that checks if current2 is null --> set it as 0 if it is, else set it as its value
//      c. create a constant variable called sum that adds val1, val2, and carry
//      d. reassign carry to check if sum is greater than 9 --> set it as 1 if so, else set it as 0
//      e. create a constant variable called digit that equals sum mod 10
//      f. if current1 is not null, reassign current1 to point to current1's next property
//      g. if current2 is not null, reassign current2 to point to current2's next property
//      h. reassign tail's next property to point to a new node of digit
//      i. reassign tail to point to tail's next property
// 7. return dummyHead's next property

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const addLists = (head1, head2) => {
    const dummyHead = new Node(null);
    let tail = dummyHead;
    let carry = 0;
    let current1 = head1;
    let current2 = head2;

    while (current1 !== null || current2 !== null || carry === 1) {
        const val1 = current1 === null ? 0 : current1.val;
        const val2 = current2 === null ? 0 : current2.val;
        const sum = val1 + val2 + carry;
        carry = sum > 9 ? 1 : 0;
        const digit = sum % 10;

        if (current1 !== null) current1 = current1.next;
        if (current2 !== null) current2 = current2.next;

        tail.next = new Node(digit);
        tail = tail.next;
    }

    return dummyHead.next;
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
