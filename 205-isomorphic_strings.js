// 205. Isomorphic Strings

// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.



// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true


// Constraints:

// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.

var isIsomorphic = function (s, t) {
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i], i + 1) !== t.indexOf(t[i], i + 1)) return false;

        // s[i] = character at index i in string s
        // i + 1 = starting point for the search to find the next occurence of s[i], starting from i + 1 
        // indexOf returns index of next occurence of s[i] after i

        // comparison checks if relative positions of characters s[i] and t[i] are the same
        // if character does not appear again, it returns -1
    }

    return true
};

// Time complexity: 0(n2)
