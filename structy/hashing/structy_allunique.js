// all unique
// Write a function, allUnique, that takes in an array.The function should return a boolean indicating whether or not the array contains unique items.

// 1. turn the array into a set
// 2. return whether length of array is the same as the size of set

const allUnique = (items) => {
    const uniqueItems = new Set(items);

    return items.length === uniqueItems.size;
}

// n = number of items
// time complexity: O(n) converting an array into a set will have to iterate and insert every item into the set under the hood
// space complexity: O(n) storing the set and operations like checking the size and length run in constant time

// *** TEST 00 *** //
console.log(allUnique(["q", "r", "s", "a"])); // -> true


// *** TEST 01 *** //
console.log(allUnique(["q", "r", "s", "a", "r", "z"])); // -> false


// *** TEST 02 *** //
console.log(allUnique(["red", "blue", "yellow", "green", "orange"])); // -> true


// *** TEST 03 *** //
console.log(allUnique(["cat", "cat", "dog"])); // -> false


// *** TEST 04 *** //
console.log(allUnique(["a", "u", "t", "u", "m", "n"])); // -> false
