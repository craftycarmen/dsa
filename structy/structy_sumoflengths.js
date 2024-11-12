// sum of lengths
// Write a function sumOfLengths that takes in array of strings and returns the total length of the strings.

// You must solve this recursively.

// base case: if array is empty, return 0;
// recursive step: take the length of the array's first element and add it to the recursive call of the remaining strings (sliced at 1)

const sumOfLengths = (strings) => {
    if (strings.length === 0) return 0;

    return strings[0].length + sumOfLengths(strings.slice(1));
}

console.log(sumOfLengths(["goat", "cat", "purple"])); // -> 13
console.log(sumOfLengths(["bike", "at", "pencils", "phone"])); // -> 18
console.log(sumOfLengths([])); // -> 0

// n = array length

// time complexity: O(n2)
// we have a recursive call for roughly every element of the array (at least n steps) and we need to the time it'll take to copy those new subarrays within every recursive call ==> n * n

// space complexity: O(n2)
// we automatically consume n space for all of the recursive calls and also creating new subarrays recursively (n * n) 
