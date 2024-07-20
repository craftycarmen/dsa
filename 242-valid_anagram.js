// 242. Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.



// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false


// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.


// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
// if lengths aren't the same, return false
// get the count of each unique character for each string
// if the both strings are the same, return true

var isAnagram = function (s, t) {
    // O(n)
    if (s.length !== t.length) return false;

    const count = {}

    for (let char of s) {
        count[char] = (count[char] || 0) + 1; // if char is in count, add one or else add 0
    }

    for (let char of t) {
        if (!count[char]) {
            return false // if char isn't in the count already, return false
        }

        count[char]--; // decrement
    }

    return true

    // O(n log n)
    // if (s.split("").sort().join("") === t.split("").sort().join("")) return true
    // else return false
};
