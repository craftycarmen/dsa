# 219. Contains Duplicate II

# Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

# Example 1:
# Input: nums = [1,2,3,1], k = 3
# Output: true

# Example 2:
# Input: nums = [1,0,1,1], k = 1
# Output: true

# Example 3:
# Input: nums = [1,2,3,1,2,3], k = 2
# Output: false
 
# Constraints:
# 1 <= nums.length <= 105
# -109 <= nums[i] <= 109
# 0 <= k <= 105

def containsNearbyDuplicate(self, nums, k):
    window = set()
    # initialize window as an empty set to keep track of the elements within the current sliding window

    left = 0
    # initialize left to represent the starting index of the window

    for right in range(len(nums)):
    # use  a for loop to move the right pointer across the array; for each element in nums, right represents the curr index

        if right - left > k:
            window.discard(nums[left])
            left += 1
        # if the difference between right and left exceeds k, the element at the left index is removed from window and left is incremented by 1, effectivly maintaining a window size of k

        if nums[right] in window:
            return True
        # if curr ele of nums[right] is already in window, there is a duplicate within the allowed index range, so function returns Tue

        window.add(nums[right])
        # if nums[right] is not in window, it gets added to the set, representing that this element is now part of the sliding window

    return False
    # if the loop completes without finding any nearby duplicates, the function returns False
