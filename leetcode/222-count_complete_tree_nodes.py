# 222. Count Complete Tree Nodes

# Given the root of a complete binary tree, return the number of the nodes in the tree.

# According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

# Design an algorithm that runs in less than O(n) time complexity.


# Example 1:
# Input: root = [1,2,3,4,5,6]
# Output: 6

# Example 2:
# Input: root = []
# Output: 0

# Example 3:
# Input: root = [1]
# Output: 1
 
# Constraints:
# The number of nodes in the tree is in the range [0, 5 * 104].
# 0 <= Node.val <= 5 * 104
# The tree is guaranteed to be complete.

# ---

# Steps
# 1. Create a queue initialized with root
# 2. Shift out from queue (this is our curr node)
# 3. Process node by incrementing a count
# 4. Push curr node's children into queue
# 5. Repeat steps 2-4 until queue is empty

from collections import deque

def countNodes(self, root):
    queue = deque()
    count = 0

    while queue:
        node = queue.popleft()

        if node:
            count += 1
            queue.append(node.left)
            queue.append(node.right)
    return count
