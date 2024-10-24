# 104. Maximum Depth of Binary Tree 

# Given the root of a binary tree, return its maximum depth.

# A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.


# Example 1:
# Input: root = [3,9,20,null,null,15,7]
# Output: 3

# Example 2:
# Input: root = [1,null,2]
# Output: 2
 
# Constraints:
# The number of nodes in the tree is in the range [0, 104].
# -100 <= Node.val <= 100

def maxDepth(self, root):
    if not root: return 0
    # if the current node isNone, return zero because the depth is zero

    left = self.maxDepth(root.left)
    right = self.maxDepth(root.right)
    # recursively calculate the maximum depth of each subtree

    return max(left, right) + 1
    # return the max depth between the two subtrees and add 1 to account for the current node's depth
