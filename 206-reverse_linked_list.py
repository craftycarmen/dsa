# 206. Reverse Linked List

# Given the head of a singly linked list, reverse the list, and return the reversed list.


# Example 1:
# Input: head = [1,2,3,4,5]
# Output: [5,4,3,2,1]

# Example 2:
# Input: head = [1,2]
# Output: [2,1]

# Example 3:
# Input: head = []
# Output: []

# Constraints:
# The number of nodes in the list is the range [0, 5000].
# -5000 <= Node.val <= 5000
 
# Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

def reverseList(self, head):
    prev = None
    # this will eventually become the new head of the reversed list

    def _helper(head, prev):
        if head is None:
            return prev
        # if head is None, the end of list os reached and prev is returned, as it is now the new head of the reversed list

        next = head.next
        # else, store the the next node as 'next'

        head.next = prev
        # reverse the pointer of the curr node to point to prev node

        return _helper(next, head)
        # recursively call _helper with the next node and curr node as the new prev node

    return _helper(head, prev)
    # calls _helper with initial head and prev, and returns result
