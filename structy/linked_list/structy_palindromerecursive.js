// palindrome recursive
// Write a function, palindrome, that takes in a string and returns a boolean indicating whether or not the string is the same forwards and backwards.

// You must solve this recursively.

// base case: if string length is <= 1, return true
// if the first and last ele of the string are not the same, return false
// recrusive step: return the recursive call of palindrome with s sliced at the beginning and end of the string

const palindrome = (s) => {
    if (s.length <= 1) return true;

    if (s[0] !== s[s.length - 1]) return false;

    return palindrome(s.slice(1, -1))
}


console.log(palindrome("pop")); // -> true
console.log(palindrome("kayak")); // -> true
console.log(palindrome("pops")); // -> false


// n = string length
// time complexity: O(n2)
// n for the recursive calls of roughly every character of the string 
// from one call to the next, we're slicing off 2 characters at a time, which means we'll have roughy n / 2 recursive calls, which simplifies to "n" in the big-o notation
// ==> n * n ==> n2

// space complexity: O(n2)
// n stack frames consumed for all recursive calls and with each call, we're creating a new slice that is roughly the length of n
