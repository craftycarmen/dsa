# 162. Find Peak Element

# A peak element is an element that is strictly greater than its neighbors.

# Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

# You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

# You must write an algorithm that runs in O(log n) time.


# Example 1:
# Input: nums = [1,2,3,1]
# Output: 2
# Explanation: 3 is a peak element and your function should return the index number 2.

# Example 2:
# Input: nums = [1,2,1,3,5,6,4]
# Output: 5
# Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.
 
# Constraints:
# 1 <= nums.length <= 1000
# -231 <= nums[i] <= 231 - 1
# nums[i] != nums[i + 1] for all valid i.

def findPeakElementRECURSIVE(self, nums):
    def _search(left, right):
        if left == right: return left
        # base case

        mid = left + (right - left) // 2
        # find middle index in curr subarray

        if nums[mid] < nums[mid + 1]:
            # if an element at mid is less than the next element, then there is an increasing trend on the right (i.e., peak must be on the right)

            return _search(mid + 1, right)
            # thus, recursively search in the subarray from mid + 1 to to right

        else:
            return _search(left, mid)
            # else, the peak is on the left, so recursively search from left to mid

    return _search(0, len(nums-1))
    # keep searching starting from index to last index


def findPeakElementITERATIVE(self, nums):
    left, right = 0, len(nums - 1)
    # set left at 0th index, right at last index

    while left < right:
        # while left index is less than right index

        mid = left + (right - left) // 2
        # find the midpoint

        if nums[mid] < nums[mid + 1]:
            left = mid + 1
            # if the value at the midpoint is less than the next value, then there is an increasing trend on the right, so left would now start at mid + 1

        else:
            right = mid
            # else, the peak is on the left, so we'd end at mid

    return left
    