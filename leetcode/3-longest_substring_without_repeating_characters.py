# 3. Longest Substring Without Repeating Characters
# Given a string s, find the length of the longest substring without repeating characters.

# Example 1:
# Input: s = "abcabcbb"
# Output: 3
# Explanation: The answer is "abc", with the length of 3.

# Example 2:
# Input: s = "bbbbb"
# Output: 1
# Explanation: The answer is "b", with the length of 1.

# Example 3:
# Input: s = "pwwkew"
# Output: 3
# Explanation: The answer is "wke", with the length of 3.
# Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

# Constraints:
# 0 <= s.length <= 5 * 104
# s consists of English letters, digits, symbols and spaces.

def lengthOfLongestSubString(self, s):
    # left, right = 0, 0
    # # set left and right pointers that define the curr window of the substring

    # max_length = 0
    # # set max_length to keep track of the lonest substring

    # window = set()
    # # create a set that stores chars currently in substring window, ensuring all chars are unique

    # while right < len(s):
    #     # while the right pointer is within the bounds of the string
        
    #     window.discard(s[left])
    #     left += 1

    #     # this slides the left boundary of the window to the right:
    #         # it removes the char at the left pointer from the window (window.discoard(s[left])
    #         # increment left

    #     max_length = max(max_length, right - left + 1)
    #     # update max_length to the curr window if it is larger than the prev max length
    #     # window length is calculated as right - left + 1

    #     window.add(s[right])
    #     right += 1
    #     # add the character at the right pointer to the window set and move the right pointer to the right
    
    # return max_length

    left, right = 0, 0
    max_length = 0
    window = set()

    while right < len(s):
        if s[right] not in window:
            window.add(s[right])
            max_length = max(max_length, right - left + 1)
            right += 1
        else:
            window.discard(s[left])
            left += 1
        
    return max_length


# the above version would make the left pointer only move when a dupe char is found
