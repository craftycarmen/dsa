# 100. Same Tree 

# Given the roots of two binary trees p and q, write a function to check if they are the same or not.

# Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.


# Example 1:
# Input: p = [1,2,3], q = [1,2,3]
# Output: true

# Example 2:
# Input: p = [1,2], q = [1,null,2]
# Output: false

# Example 3:
# Input: p = [1,2,1], q = [1,1,2]
# Output: false
 
# Constraints:
# The number of nodes in both trees is in the range [0, 100].
# -104 <= Node.val <= 104

def isSameTree(self, p, q):
    if not p and not q: return True
    # return True if we reach the ends of the tree (aka null) at the same time

    if not p or not q: return False
    # return False if one node is null, but the other is not

    if p.val != q.val: return False
    # return False if value doesn't match

    return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)
