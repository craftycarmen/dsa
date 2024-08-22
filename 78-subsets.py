# 78. Subsets

# Given an integer array nums of unique elements, return all possible 
# subsets
#  (the power set).

# The solution set must not contain duplicate subsets. Return the solution in any order.


# Example 1:
# Input: nums = [1,2,3]
# Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

# Example 2:
# Input: nums = [0]
# Output: [[],[0]]
 
# Constraints:
# 1 <= nums.length <= 10
# -10 <= nums[i] <= 10
# All the numbers of nums are unique.

def subsets(self, nums):
    ans = []
    subset = []

    def _backtrack(i):
        if i >= len(nums):
            ans.append(subset.copy())
            # make a copy because you're modifying the same actual subset when popping, which will just be empty subsets at the end
            return
        
        subset.append(nums[i])
        _backtrack(i + 1)
        subset.pop()
        # decision to include nums[i]

        _backtrack(i + 1)
        # decision to NOT include nums[i]

    _backtrack(0)
    
    return ans
