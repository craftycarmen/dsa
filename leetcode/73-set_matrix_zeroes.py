# 73. Set Matrix Zeroes

# Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

# You must do it in place.

 
# Example 1:
# Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
# Output: [[1,0,1],[0,0,0],[1,0,1]]

# Example 2:
# Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
# Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 

# Constraints:
# m == matrix.length
# n == matrix[0].length
# 1 <= m, n <= 200
# -231 <= matrix[i][j] <= 231 - 1
 

# Follow up:
# A straightforward solution using O(mn) space is probably a bad idea.
# A simple improvement uses O(m + n) space, but still not the best solution.
# Could you devise a constant space solution?


def setZeroes(self, matrix):
    """
    Do not return anything, modify matrix in-place instead
    """

    rows = set()
    cols = set()

    for r in range(len(matrix)):
        for c in range(len(matrix[0])):
            if matrix[r][c] == 0:
                rows.add(r)
                cols.add(c)
    # if an ele is 0, add the index of that row to the rows set and index of that col to the cols set

    for r in range(len(matrix)):
        for c in range(len(matrix[0])):
            if r in rows or c in cols:
                matrix[r][c] = 0
    # loop over each element again and if curr row index r is in rows set or c is in cols set, set ele to 0
