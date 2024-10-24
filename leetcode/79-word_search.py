# 79. Word Search

# Given an m x n grid of characters board and a string word, return true if word exists in the grid.

# The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 

# Example 1:


# Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
# Output: true
# Example 2:


# Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
# Output: true
# Example 3:


# Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
# Output: false
 

# Constraints:

# m == board.length
# n = board[i].length
# 1 <= m, n <= 6
# 1 <= word.length <= 15
# board and word consists of only lowercase and uppercase English letters.

def exist(self, board, word):
    # base cases:
    #   1. if we find the word, return True
    #       a. keep track of index. done when i == len(2)
    #   2. False
    #       a. out of bounds
    #       b. letter does not match with word[i]
    #       c. we have visited

    rows, cols = len(board), len(board[0])
    visited = set()

    def _backtrack(r, c, i):
        if i == len(word):
            return True
        if not _inbound(r,c) or word[i] != board[r][c] or (r, c) in visited:
            return False

        # modifying 
        visited.add((r,c))

        # recursion
        res = (_backtrack(r + 1, c, i + 1) or
            _backtrack(r - 1, c, i + 1) or
            _backtrack(r, c + 1, i + 1) or
            _backtrack(r, c - 1, i + 1))

        # backtrack
        visited.discard((r,c))

        return res

    def _inbound(r, c):
        row_inbound = r >= 0 and r < rows
        col_inbound = c >= 0 and c < cols
        return row_inbound and col_inbound

    for r in range(rows):
        for c in range(cols):
            if _backtrack(r, c, 0):
                return True

    return False
