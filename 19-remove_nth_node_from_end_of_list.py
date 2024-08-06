# 19. Remove Nth Node from End of List

# Given the head of a linked list, remove the nth node from the end of the list and return its head.

# Example 1:
# Input: head = [1,2,3,4,5], n = 2
# Output: [1,2,3,5]
# Example 2:

# Input: head = [1], n = 1
# Output: []
# Example 3:

# Input: head = [1,2], n = 1
# Output: [1]
 

# Constraints:
# The number of nodes in the list is sz.
# 1 <= sz <= 30
# 0 <= Node.val <= 100
# 1 <= n <= sz
 

# Follow up: Could you do this in one pass?

def removeNthFromEnd(self, head, n):
    slow = fast = head

    for i in range(n):
        fast = fast.next
    # move the fast pointer n steps ahead
    # it stops when n is reach, so now there'd be a gap between the slow and fast pointers, as the slow pointer remains at the head (node 1)

    if not fast:
        return head.next
    # takes care of the edge case if the nth node is the head

    while fast.next:
        slow = slow.next
        fast = fast.next
        # while fast is NOT none, we move both slow and fast pointers one step at a time
        # slow points to node just before the node to be removed
        # fast pointer is n steps ahead and has reached the end of the list and slow is n nodes behind it

    slow.next = slow.next.next
    # update the next pointer of slow node to skip the next mode, effectively removing the nth node from the end

    return head
