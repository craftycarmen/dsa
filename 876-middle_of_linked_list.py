# 876. Middle of the Linked List 

# Given the head of a singly linked list, return the middle node of the linked list.

# If there are two middle nodes, return the second middle node.


# Example 1:
# Input: head = [1,2,3,4,5]
# Output: [3,4,5]
# Explanation: The middle node of the list is node 3.

# Example 2:
# Input: head = [1,2,3,4,5,6]
# Output: [4,5,6]
# Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
 
# Constraints:
# The number of nodes in the list is in the range [1, 100].
# 1 <= Node.val <= 100

def middleNode(self, head):
    slow = fast = head
    # intialize pointers
    
    while fast and fast.next:
    # while fast and fast.next are not None...
    
        slow = slow.next
        fast = fast.next.next
        # slow pointer moves one step forward in the linked list, while fast moves two steps forward
        # the idea is that while fast moves twice as fast as slow, slow will reach the middle of the linked list by the time fast reaches the end
    

    return slow
