# 209. Minimum Size Subarray Sum 

# Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.


# Example 1:
# Input: target = 7, nums = [2,3,1,2,4,3]
# Output: 2
# Explanation: The subarray [4,3] has the minimal length under the problem constraint.

# Example 2:
# Input: target = 4, nums = [1,4,4]
# Output: 1

# Example 3:
# Input: target = 11, nums = [1,1,1,1,1,1,1,1]
# Output: 0
 
# Constraints:
# 1 <= target <= 109
# 1 <= nums.length <= 105
# 1 <= nums[i] <= 104
 
# Follow up: If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log(n)).

def minSubArrayLen(self, target, nums):
    left, total, min_sub = 0, 0, float('inf')
    # left = left boundary of the curr subarray
    # total = keeps track of the sum of the curr subarray between left and right
    # min_sub = stores the minimum length of a valid subarray found; initially set to infinity to ensure any valid subarray length will be smaller

    for right in range(len(nums)):
    # move the right pointer across the array using a for loop

        total += nums[right]
        # for each element in nums, the element's value is added to total    

        while total >= target:
        # while the total is greater than or equal to the target...

            min_sub = min(min_sub, right - left + 1)
            # (right - left + 1) calcuates the length of the curr subarray and gets compared to the curr min_sub
            # if it is smaller, min_sub will be updated with this new length

            total -= nums[left]
            left += 1
            # to try to find a smaller subarray that still meets the target, shrink the subarray from the left by subtracting nums[left] from total and move left one step to the rght

    return 0 if min_sub == float('inf') else min_sub
    # after the loop, if the min_sub is still float('inf'), no valid subarray was found, so it returns 0
    # else, it returns min_sub, the length of the shortest subarray found
