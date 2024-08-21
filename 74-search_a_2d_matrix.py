# 74. Search a 2D Matrix

# You are given an m x n integer matrix matrix with the following two properties:

# Each row is sorted in non-decreasing order.
# The first integer of each row is greater than the last integer of the previous row.
# Given an integer target, return true if target is in matrix or false otherwise.

# You must write a solution in O(log(m * n)) time complexity.


# Example 1:
# Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
# Output: true

# Example 2:
# Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
# Output: false
 
# Constraints:
# m == matrix.length
# n == matrix[i].length
# 1 <= m, n <= 100
# -104 <= matrix[i][j], target <= 104

def searchMatrix(self, matrix, target):
    rows = len(matrix)
    cols = len(matrix[0])

    top, bottom = 0, rows - 1

    while top <= bottom:
    # narrow down the potential row that might contain the target

        row = top + (bottom - top) // 2
        # get the middle row, where:
        # top = index of the top row in the curr search range
        # bottom = index of the bottom row in the curr search range
        # bottom-top = number of rows between top and bottom, inclusive
        # // 2 = halfway point calculation
        # top + halfway point = index of middle row in curr search range

        if target > matrix[row][cols - 1]:
            top = row + 1
        # if target is greater than last ele of mid row, target can only be in the rows below the mid row ==> top is updated to row+1 to move onto the next row below

        elif target < matrix[row][0]:
            bottom = row - 1
        # if target is less than the first ele of the row, target can only be in the rows above the mid row ==> bottom is updated to row-1 to move onto the next row above

        else: 
            break
        # if target is within the range of the curr break, loop breaks

    if top > bottom:
        return False
    # if top becomes greater than bottom, return False, as target is not present in any row

    row = top + (bottom - top) // 2
    left, right = 0, cols - 1
    # recalculate the middle row and initialize left to first col and right to last col

    while left <= right:
    # binary search on the identified row to find the target
        mid = left + (right - left) // 2
        #calculate the mid col

        if target > matrix[row][mid]:
            left = mid + 1
        elif target < matrix[row][mid]:
            right = mid - 1
        else:
            return True
        
    return False
