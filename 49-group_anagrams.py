# 49. Group Anagrams

# Given an array of strings strs, group the anagrams together. You can return the answer in any order.

# An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


# Example 1:
# Input: strs = ["eat","tea","tan","ate","nat","bat"]
# Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
# Example 2:

# Input: strs = [""]
# Output: [[""]]
# Example 3:

# Input: strs = ["a"]
# Output: [["a"]]
 

# Constraints:
# 1 <= strs.length <= 104
# 0 <= strs[i].length <= 100
# strs[i] consists of lowercase English letters.

from collections import defaultdict

def groupAnagrams(self, strs):
    groups = defaultdict(list)
    # if a key is not found in the dictionary, a new list for that key is automatically created

    for s in strs:
        key = "".join(sorted(s))
        # for each string in strings, sort the characters, and join them them back into a single string

        groups[key].append(s)
        # append the original string to th list in the groups dictionary that corresponds to the key
        # if a key does not already exist, defaultdict will create a new key and a new empty list as its value

    return groups.values()
