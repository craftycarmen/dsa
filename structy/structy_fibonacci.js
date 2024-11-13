// fibonacci
// Write a function, fibonacci, that takes in a number argument, n, and returns the n-th number of the Fibonacci sequence.

// The 0-th number of the sequence is 0.

// The 1-st number of the sequence is 1.

// To generate further numbers of the sequence, calculate the sum of previous two numbers.

// You must solve this recursively.

// base case: if n is 0 or 1, return n;
// recursive step: two recursive calls of fibonacci: (n - 1) and (n - 2) added together

const fibonacci = (n) => {
    if (n <= 1) return n;

    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(0)); // -> 0
console.log(fibonacci(1)); // -> 1
console.log(fibonacci(8)); // -> 21


// time complexity: O(2n)
// there are two recursive calls in the function, resulting in an exponential growth in the number of calls as n increases, as the number of function calls doubles with each level

// space complexity: O(n)
// call stack is dependent on n
