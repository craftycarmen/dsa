// anagrams
// Write a function, anagrams, that takes in two strings as arguments. The function should return a boolean indicating whether or not the strings are anagrams. Anagrams are strings that contain the same characters, but in any order.

// 1) initialize an object for the hashmap
// 2) go through each character of s1
//      a) if char is NOT in count, initialize it for the first time (count[char] = 0)
//      b) increment the char, regardless if it is in count
// 3) go through each character of s2
//      a) if char IS in count, decrement the char (you can't just create two objects and compare, as using equality for objects in JS will check if they're the same reference in memory rather than if they contain the same keys and values)
//      b) if it is NOT in count, return false because that means there's a char that isn't in s1, making it not an anagram
// 4) go through each character in count
//      a) if each value of each car is NOT zero, return false because it means the counts aren't matching in s1 and s2
// 5) return true

const anagrams = (s1, s2) => {
    const count = {};

    if (s1.length !== s2.length) return false;

    for (let char of s1) {
        if (!(char in count)) {
            count[char] = 0;
        }

        count[char]++;
    }

    for (let char of s2) {
        if (char in count) {
            count[char]--;
        } else {
            return false;
        }
    }

    for (let char in count) {
        if (count[char] !== 0) return false
    }

    return true;

}

console.log(anagrams('restful', 'fluster')); // -> true
console.log(anagrams('cats', 'tocs')); // -> false
console.log(anagrams('monkeyswrite', 'newyorktimes')); // -> true

// n = string1 length, count length (which was based on string1)
// m = string2 length
// Time: O(n + m + n) => O(n + m) => linear
// Space: 0(n + m + n) => O(n + m) => linear (technically just O(n) since we're only creating a single object)
