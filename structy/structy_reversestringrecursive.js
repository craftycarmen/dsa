// reverse string recursive
// Write a function, reverseString, that takes in a string as an argument. The function should return the string with its characters in reverse order. You must do this recursively.

// reverseString("hello"); // -> "olleh"
// reverseString("abcdefg"); // -> "gfedcba"

// reverseString("stopwatch"); // -> "hctawpots"

// base case: if string is empty, return ""
// recursive step: take the sliced string and concatenate it with the first element

const reverseString = (s) => {
    if (s.length === 0) return "";

    return reverseString(s.slice(1)) + s[0];
}

console.log(reverseString("hello")); // -> "olleh"
console.log(reverseString("abcdefg")); // -> "gfedcba"
console.log(reverseString("")); // -> ""
