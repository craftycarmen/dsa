# 205. Isomorphic Strings

# Given two strings s and t, determine if they are isomorphic.

# Two strings s and t are isomorphic if the characters in s can be replaced to get t.

# All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

# Example 1:
# Input: s = "egg", t = "add"
# Output: true

# Example 2:
# Input: s = "foo", t = "bar"
# Output: false

# Example 3:
# Input: s = "paper", t = "title"
# Output: true


# Constraints:

# 1 <= s.length <= 5 * 104
# t.length == s.length
# s and t consist of any valid ascii character.


# def isIsomorphic(self, s, t):
#     hashset = {}

#     for c in range(len(s)):
#         if s[c] in hashset:
#             # if character is in hashset, it has been mapped before

#             if hashset[s[c]] != t[c]: return False
#             # if character has been mapped, but doesn't map to corresponding character in t, return false

#         else:
#             if t[c] in hashset.values():
#                 return False
#             # if character hasn't been mapped yet, but the character in t is already mapped to another character in s, return false 
            
#             hashset[s[c]] = t[c]
#             # if neither condition fails, a new mapping from s[c] to t[c] is created in hashset

#     return True
#     # O(n(2)) worst-case time complexity because it is dominated by the O(n) loop and the O(n) check of hashset.values

def isIsomorphic(self, s, t):
    s_map = {}
    t_map = {}

    for c in range(len(c)):
        if s[c] in s_map:
            if s_map[s[c]] != t[c]:
                return False
        else:
            s_map[s[c]] = t[c]

        if t[c] in t_map:
            if t_map[t[c]] != s[c]:
                return False
        else:
            t_map[t[c]] = s[c]

    return True
    # O(n) time complexity, where n s the length of the strings
    # we only loop the strings once
    # both maps (checking and inserting) are O(1)
