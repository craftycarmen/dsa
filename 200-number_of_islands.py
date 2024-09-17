# 200. Number of Islands
# Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

# An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.


# Example 1:
# Input: grid = [
#   ["1","1","1","1","0"],
#   ["1","1","0","1","0"],
#   ["1","1","0","0","0"],
#   ["0","0","0","0","0"]
# ]
# Output: 1

# Example 2:
# Input: grid = [
#   ["1","1","0","0","0"],
#   ["1","1","0","0","0"],
#   ["0","0","1","0","0"],
#   ["0","0","0","1","1"]
# ]
# Output: 3
 
# Constraints:
# m == grid.length
# n == grid[i].length
# 1 <= m, n <= 300
# grid[i][j] is '0' or '1'.


def numIslands(self, grid):
    def _dfs(row, col):
        if not _inBound(row, col):
            return False
        
        pos = f'{row}, {col}'
        if pos in visited:
            return False
        
        if grid[row][col] == '0':
            return False
        
        visited.add(pos)

        directions = ((1,0), (0,1), (-1,0), (0, -1))

        for dir in directions:
            newRow = row + dir[0]
            newCol = col + dir[1]
            _dfs(newRow, newCol)

        return True
    
    def _inBound(row, col):
        rowInbound = 0 <= row and row < len(grid)
        colInbound = 0 <= col and col < len(grid[0])
        return rowInbound and colInbound
    
    count = 0
    visited = set()

    for row in range(len(grid)):
        for col in range(len(grid[0])):
            if _dfs(row, col):
                count += 1
    
    return count
