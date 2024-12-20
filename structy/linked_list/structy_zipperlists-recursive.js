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

// *** RECURSIVE *** //
// 1. base case 1: if head1 and head2 are null, return null
// 2. base case 2: if head1 is null, return head2
// 3. base case 3: if head2 is null, return head1
// 4. save head1's next property as next1 in a constant variable so it doesn't get overridden
// 5. save head2's next property as next 2 in a constant variable
// 6. reassign head1's next property to point to head2
// 7. recursive step: reassign head2's next property to point to the recursive call of zipperLists with next1 and next2 passed in
// 8. return head1

const zipperLists = (head1, head2) => {
    if (head1 === null && head2 === null) return null;
    if (head1 === null) return head2;
    if (head2 === null) return head1;

    const next1 = head1.next;
    const next2 = head2.next;

    head1.next = head2;
    head2.next = zipperLists(next1, next2);

    return head1;
}

// n = length of list1
// m = length of list2
// time complexity: O(min(n, m)) because we only need as many iterations as the shorter linked list
// space complexity: O(min(n, m)) because we are addign to the stack frame for each recursive call, and it will be based on the shorter list

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
