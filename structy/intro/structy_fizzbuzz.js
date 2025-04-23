// fizz buzz
// Write a function, fizzBuzz, that takes in a number n as an argument.The function should return an array containing numbers from 1 to n, replacing certain numbers according to the following rules:

// if the number is divisible by 3, make the element "fizz"
// if the number is divisible by 5, make the element "buzz"
// if the number is divisible by 3 and 5, make the element "fizzbuzz"

// 1. initialize an empty array called res to store the results
// 2. iterate through each number from 1 to n:
//      a. if the number is divisible by 3 and 5, push "fizzbuzz" to res
//      b. else if it is divisible by 3, push "fizz"
//      c. else if it is divisible by 5, push "buzz"
//      d. else, push the number
// 3. return res

const fizzBuzz = (n) => {
    const res = [];

    for (let num = 1; num <= n; num++) {
        if (num % 3 === 0 && num % 5 === 0) {
            res.push("fizzbuzz");
        } else if (num % 3 === 0) {
            res.push("fizz");
        } else if (num % 5 === 0) {
            res.push("buzz");
        } else {
            res.push(num);
        }
    }

    return res;
}

// time complexity: O(n)
// space complexity: O(n)


// // *** TEST 00 *** //
// console.log(fizzBuzz(11)); // -> [1,2,"fizz",4,"buzz","fizz",7,8,"fizz","buzz",11]


// // *** TEST 01 *** //
// console.log(fizzBuzz(2)); // -> [1,2]


// // *** TEST 02 *** //
// console.log(fizzBuzz(16)); // -> [
// //   1,
// //   2,
// //   "fizz",
// //   4,
// //   "buzz",
// //   "fizz",
// //   7,
// //   8,
// //   "fizz",
// //   "buzz",
// //   11,
// //   "fizz",
// //   13,
// //   14,
// //   "fizzbuzz",
// //   16
// // ]


// // *** TEST 03 *** //
// console.log(fizzBuzz(32)); // -> [
// //   1,      2,          "fizz",     4, 
// //   "buzz", "fizz",     7,          8,
// //   "fizz", "buzz",     11,         "fizz",
// //   13,     14,         "fizzbuzz", 16,
// //   17,     "fizz",     19,         "buzz",
// //   "fizz", 22,         23,         "fizz",
// //   "buzz", 26,         "fizz",     28,
// //   29,     "fizzbuzz", 31,         32
// // ] 
