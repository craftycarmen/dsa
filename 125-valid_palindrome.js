// 125. Valid Palindrome

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.



// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.


// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

// 1. Initiate L and R pointers, positioning them at the front and back of input string respectively
// 2. Loop until pointers cross
// 3. Check if curr char is alphanumeric, incrementing L pointer until next vlid char
// 4. Do the same for the right char
// 5. If both are valid alphanumeric chars, compare them and make sure they match; else return false
// 6. Return true

var isPalindrome = function (s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        while (left < right && !isAlphaNum(s[left])) left++
        while (right > left && !isAlphaNum(s[right])) right--
        if (s[left].toLowerCase() !== s[right].toLowerCase()) return false

        left++
        right--
    }

    return true;
}

const isAlphaNum = (char) => {
    return char.match(/^[a-zA-Z0-9]+$/)
}
