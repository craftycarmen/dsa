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

    for n in nums:
        counts[n] += 1
    # count each number in nums and put it into counts

    i = 0

    for n in range(len(counts)):
        for c in range(counts[n]):
            nums[i] = n
            i += 1
    # loop through each number in counts
    # for each count of the number n, repeat the loop count[n] times
    # assign the value n to the currect index in the nums list
    # increment index to move to next position
