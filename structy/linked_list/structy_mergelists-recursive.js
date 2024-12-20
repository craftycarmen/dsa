// merge lists
// Write a function, mergeLists, that takes in the head of two sorted linked lists as arguments. The function should merge the two lists together into single sorted linked list. The function should return the head of the merged linked list.

// Do this in-place, by mutating the original Nodes.

// You may assume that both input lists are non-empty and contain increasing sorted numbers.

// RECURSIVE
// 1. base case 1: if head1 and head2 are null, return null
// 2. base case 2: if head1 is null, return head2;
// 3. base case 3: if head2 is null, return head1;
// 4. if head1's value is less than head2's value:
//      a. assign head1's next property as a constant variable of next1;
//      b. recursive step: reassign head1's next property to point to the recursive step of mergeLists with next1 and head2 passed in as arguments;
//      c. return head1;
// 5. else:
//      a. assign head2's next property as a constant variable of next2;
//      b. recursive step: reassign head2's next property to point to the recursive step of mergeLists with head1 and next2 passed in as arguments;
//      c. return head2;

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const mergeLists = (head1, head2) => {
    if (head1 === null && head2 === null) return null;
    if (head1 === null) return head2;
    if (head2 === null) return head1;

    if (head1.val < head2.val) {
        const next1 = head1.next;
        head1.next = mergeLists(next1, head2);
        return head1;
    } else {
        const next2 = head2.next;
        head2.next = mergeLists(head1, next2);
        return head2;
    }
}

// n = length of list1
// m = length of list2

// time complexity: O(min(n, m));
// space complexity: O(min(n, m));


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
