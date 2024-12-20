// longest streak
// Write a function, longestStreak, that takes in the head of a linked list as an argument. The function should return the length of the longest consecutive streak of the same value within the list.

// 1. set a variable to keep track of the max streak, starting at 0
// 2. set a variable to keep track of the current streak, starting at 0
// 3. set a variable to keep track of the previous value, starting at null
// 4. save head as the current variable
// 5. while current is null:
//      a. if previous value is equal to current's value, increment current streak by 1
//      b. else, set the current streak to 1
//      c. if current streak is greater than the max streak, reassign max streak to point to current streak
//      d. reassign previous value to point to current's value
//      e. reassign current to point to current's next property
// 6. return max streak

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const longestStreak = (head) => {
    let maxStreak = 0;
    let currentStreak = 0;
    let prevVal = null;
    let currentNode = head;

    while (currentNode !== null) {
        if (prevVal === currentNode.val) currentStreak++;
        else currentStreak = 1;

        if (currentStreak > maxStreak) maxStreak = currentStreak;

        prevVal = currentNode.val;
        currentNode = currentNode.next;
    }

    return maxStreak;
}

// n = number of nodes;
// time complexity: O(n) because we're just itereating through every node, traversing it exactly once
// space complexity: O(n) because we only need to store a handful of variables

const a = new Node(5);
const b = new Node(5);
const c = new Node(7);
const d = new Node(7);
const e = new Node(7);
const f = new Node(6);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// 5 -> 5 -> 7 -> 7 -> 7 -> 6

console.log(longestStreak(a)); // 3
