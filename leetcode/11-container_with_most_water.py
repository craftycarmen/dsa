# 11. Container with Most Water
    
# You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

# Find two lines that together with the x-axis form a container, such that the container contains the most water.

# Return the maximum amount of water a container can store.

# Notice that you may not slant the container.


# Example 1:
# Input: height = [1,8,6,2,5,4,8,3,7]
# Output: 49
# Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
# Example 2:

# Input: height = [1,1]
# Output: 1
 

# Constraints:

# n == height.length
# 2 <= n <= 105
# 0 <= height[i] <= 104

def maxArea(self, height):
    max_water, left, right = 0, 0, len(height) - 1
    # max_water to keep track of max area
    # left to start the pointer at the beginning of the height list
    # right to start the pointer at the end of the height list

    while left < right:
        shorter = min(height[right], height[left])
        # shorter to store the min of the heights at left and right pointers, representing the height of the water container

        area = (right - left) * shorter

        max_water = max(max_water, area)
        # max function takes two args and returns the larger of the two
        # max_water becomes whichever is larger, whether the curr max water or new area

        if height[left] >= height[right]:
            right -= 1
            # if value at the left pointer is greater than or equal to the right pointer, move right by one to the left

        else:
            left += 1
            # if value at left pointer is less than right pointer, move left by one to the right

    return max_water
