// 21. Merge Two Sorted Lists

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.


// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]

// Constraints:
// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.


// ITERATIVE
// var mergeTwoLists = function (list1, list2) {
//     let res = { val: 0, next: null }
//     let node = res

//     while (list1 && list2) {
//         if (list1.val < list2.val) {
//             node.next = list1
//             list1 = list1.next
//         } else {
//             node.next = list2
//             list2 = list2.next
//         }

//         node = node.next
//     }

//     if (list1) {
//         node.next = list1
//     } else {
//         node.next = list2
//     }

//     return res.next
// }


// RECURSIVE
var mergeTwoLists = function (list1, list2) {
    if (list1 === null) return list2;
    if (list2 === null) return list1;

    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2)
        return list1
    } else {
        list2.next = mergeTwoLists(list2.next, list1)
        return list2
    }
}
