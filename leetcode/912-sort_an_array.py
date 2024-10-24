# 912. Sort an Array

# Given an array of integers nums, sort the array in ascending order and return it.

# You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

# Example 1:
# Input: nums = [5,2,3,1]
# Output: [1,2,3,5]
# Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).

# Example 2:
# Input: nums = [5,1,1,2,0,0]
# Output: [0,0,1,1,2,5]
# Explanation: Note that the values of nums are not necessairly unique.
 
# Constraints:
# 1 <= nums.length <= 5 * 104
# -5 * 104 <= nums[i] <= 5 * 104

def sortArray(self, nums):
    if len(nums) < 2: return nums
    
    mid = len(nums) // 2
    left = self.sortArray(nums[0:mid])
    right = self.sortArray(nums[mid::])

    return self.merge(left, right)

    # return merge(left, right) would negate the below helper func because python has merge built in

def merge(self, left, right):
    merge = []

    while len(left) and len(right):
        if left[0] < right[0]:
            merge.append(left.pop(0))
        else:
            merge.append(right.pop(0))

    return merge + left + right
