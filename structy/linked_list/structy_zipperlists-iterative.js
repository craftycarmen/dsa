// zipper lists
// Write a function, zipperLists, that takes in the head of two linked lists as arguments. The function should zipper the two lists together into single linked list by alternating nodes. If one of the linked lists is longer than the other, the resulting list should terminate with the remaining nodes. The function should return the head of the zippered linked list.

// Do this in-place, by mutating the original Nodes.

// You may assume that both input lists are non-empty.

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// *** ITERATIVE *** //
// 1. save head1 as tail
// 2. save head1's next property as current1
// 3. save head2 as current2
// 4. save a count variable starting at 0
// 5. while current1 and current 2 are not null:
//      a. if count is even, reassign tail.next to point to current2 and current2 to point to current2's next property
//      b. if count is odd, reassign tail next to point to current1 and current1 to point to current1's next property
//      c. reassign tail to point to tail's next property
//      d. increment count by 1
// 6. if current1 is not null, reassign tail's next property to point to current1;
// 7. if current2 is not null, reassign tail's next property to point to current2;
// 8. return head1

const zipperLists = (head1, head2) => {
    let tail = head1;
    let current1 = head1.next;
    let current2 = head2;
    let count = 0;

    while (current1 !== null && current2 !== null) {
        if (count % 2 === 0) {
            tail.next = current2;
            current2 = current2.next;
        } else {
            tail.next = current1;
            current1 = current1.next;
        }
        tail = tail.next;
        count++
    }

    if (current1 !== null) tail.next = current1;
    if (current2 !== null) tail.next = current2;

    return head1;
}

// n = length of list1
// m = length of list2
// time complexity: O(min(n, m)) because we only need as many iterations as the shorter linked list
// space complexity: O(1) because we're just rerouting next points, not creating new nodes

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
a.next = b;
b.next = c;
// a -> b -> c

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z

console.log(zipperLists(a, x));
// a -> x -> b -> y -> c -> z
