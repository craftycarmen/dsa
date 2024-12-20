// sum numbers recursive

// Write a function sumNumbersRecursive that takes in an array of numbers and returns the sum of all the numbers in the array. All elements will be integers. Solve this recursively.

// base case: return 0 when there are no more nums in the array
// recursive step: add the first element to the recursive call of sumNumbersRecursive with the array sliced at the index of 1 ==> it will reach to 0, which will then go back up to add it all together

const sumNumbersRecursive = numbers => {
    if (numbers.length === 0) return 0;

    return numbers[0] + sumNumbersRecursive(numbers.slice(1));
}

console.log(sumNumbersRecursive([5, 2, 9, 10])); // -> 26);
console.log(sumNumbersRecursive([1, -1, 1, -1, 1, -1, 1])); // -> 1);
console.log(sumNumbersRecursive([])); // -> 0);

// n = array length

// there is going to be an additional functional call to the array length (if 4 elements, 5 function calls because of the base case)
// # of function calls: O(n + 1) ==> O(n)

// slicing creates a copy of the array, which is a linear process; the slice size gets smaller as we go deeper into the recursion, so the average slice size is O(n/2)
// array slicing time = O(n/2) ==> O(n)

// we have n function calls and each call does an n operation, we're looking at an n*n complexity
// TOTAL TIME COMPLEXITY: O(n*n) ==> O(n2)

// # of function calls + each function takes up a unit of memory in the call stack, so it's at least O(n)
// sliced subarray length takes up space, similarly the size gets smaller, the avg becomes O(n/2)
// TOTAL SPACE COMPLEXITY: O(n*n) => O(n2)
