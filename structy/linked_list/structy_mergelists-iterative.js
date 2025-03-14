// merge lists
// Write a function, mergeLists, that takes in the head of two sorted linked lists as arguments. The function should merge the two lists together into single sorted linked list. The function should return the head of the merged linked list.

// Do this in-place, by mutating the original Nodes.

// You may assume that both input lists are non-empty and contain increasing sorted numbers.

// ITERATIVE
// 1. save a new null node a constant variable to act as the dummy head
// 2. save dummyHead as tail
// 3. save head1 as current1 and head2 as current2;
// 4. while current1 and current2 are not null:
//      a. if current1's value is less than current2's value, reassign tail.next to point to current1 and current1 to point to its next property
//      b. else, reassign tail.next to point to current2 and current2 to point to its next property
//      c. reassign tail to point to its next property
// 5. if current1 is not null, reassign tail's next property to point to current1;
// 6. if current2 is not null, reassign tail's next property to point to current2;
// 7. return dummyHead's next property

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const mergeLists = (head1, head2) => {
    const dummyHead = new Node(null);
    let tail = dummyHead;
    let current1 = head1;
    let current2 = head2;

    while (current1 !== null && current2 !== null) {
        if (current1.val < current2.val) {
            tail.next = current1;
            current1 = current1.next;
        } else {
            tail.next = current2;
            current2 = current2.next;
        }

        tail = tail.next
    }

    if (current1 !== null) tail.next = current1;
    if (current2 !== null) tail.next = current2;

    return dummyHead.next;
}

// n = length of list1
// m = length of list2

// time complexity: O(min(n, m));
// space complexity: O(1)


// *** test case 1 *** //
const a = new Node(5);
const b = new Node(7);
const c = new Node(10);
const d = new Node(12);
const e = new Node(20);
const f = new Node(28);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// 5 -> 7 -> 10 -> 12 -> 20 -> 28

const q = new Node(6);
const r = new Node(8);
const s = new Node(9);
const t = new Node(25);
q.next = r;
r.next = s;
s.next = t;
// 6 -> 8 -> 9 -> 25

console.log(mergeLists(a, q));
// 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 12 -> 20 -> 25 -> 28 


// *** test case 2 *** //
// const h = new Node(30);
// // 30

// const p = new Node(15);
// const q = new Node(67);
// p.next = q;
// // 15 -> 67

// console.log(mergeLists(h, p));
// // 15 -> 30 -> 67
