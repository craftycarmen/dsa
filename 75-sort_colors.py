# 75. Sort Colors

# Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

# We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

# You must solve this problem without using the library's sort function.

 
# Example 1:
# Input: nums = [2,0,2,1,1,0]
# Output: [0,0,1,1,2,2]

# Example 2:
# Input: nums = [2,0,1]
# Output: [0,1,2]
 
# Constraints:
# n == nums.length
# 1 <= n <= 300
# nums[i] is either 0, 1, or 2.
 
# Follow up: Could you come up with a one-pass algorithm using only constant extra space?

def sortColors(self, nums):
    """
    Do not return anything, modify nums in-place instead.
    """

    counts = [0] * 3
    # initialize a counts array with 3 zeros, with eah index corresponding to the count of 0s, 1s, 2s in the nums list

    for n in nums:
        counts[n] += 1
    # loop through each element n in nums
    # for each element n, it increments the corresponding index in the 'counts' array
    # after the loop, counts will contain the count of 0s, 1s, 2s in nums

    i = 0

    for n in range(len(counts)):
        for c in range(counts[n]):
            nums[i] = n
            i += 1
    # loop through the indices of counts
    # run counts[n] times for each n, filling the nums array with n (the corrrect number of times according to the count in counts[n])
    # the i variable keeps track of the position in nums list where the nxt number should be placed
