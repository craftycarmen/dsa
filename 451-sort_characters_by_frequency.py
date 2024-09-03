# 451. Sort Characters By Frequency

# Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

# Return the sorted string. If there are multiple answers, return any of them.


# Example 1:
# Input: s = "tree"
# Output: "eert"
# Explanation: 'e' appears twice while 'r' and 't' both appear once.
# So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

# Example 2:
# Input: s = "cccaaa"
# Output: "aaaccc"
# Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
# Note that "cacaca" is incorrect, as the same characters must be together.

# Example 3:
# Input: s = "Aabb"
# Output: "bbAa"
# Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
# Note that 'A' and 'a' are treated as two different characters.
 
# Constraints:
# 1 <= s.length <= 5 * 105
# s consists of uppercase and lowercase English letters and digits.

from collections import Counter

def frequencySort(self, s):
    n = len(s)
    c = Counter(s)

    bucket = [[] for _ in range (n + 1)]
    # create a list of empty lists, with ne extra to account for index 0

    for char, freq in c.items():
        bucket[freq].append(char)

        # for each char and its freq, append char to corresponding bucket

    res = ''

    for freq in range(n, 0, -1):
        # loop over frequenices, down from 1
        for char in bucket[freq]:
            res += freq * char
            
    return res
