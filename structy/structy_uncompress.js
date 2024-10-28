// uncompress
// Write a function, uncompress, that takes in a string as an argument. The input string will be formatted into multiple groups according to the following pattern:

// <number><char>

// for example, '2c' or '3a'.

// The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. You may assume that the input string is well-formed according to the previously mentioned pattern.

// create a variable with a string of numbers to reference whether char is a number
// create a results variable
// set up two variables to track two indices (two pointer)
// iterate while second variable (j) is less then the string length
//      a) if the char is a number, increment j
//      b) else if the char is NOT a number:
//          - get the number from i to j by slicing it
//          - convert the number string to Number
//          - add this alpha x number times by using a for loop
//          - increment j
//          - bring i up to speed with j by settung it i = j

const uncompress = (s) => {
    const numbers = '0123456789';
    let result = [];
    let i = 0;
    let j = 0;

    while (j < s.length) {
        if (numbers.includes(s[j])) {
            j++
        } else {
            const num = Number(s.slice(i, j));

            for (let count = 0; count < num; count++) {
                result.push(s[j]);
            }

            j++
            i = j
        }
    }

    return result.join('');
}

console.log(uncompress("2c3a1t")); // -> 'ccaaat'
console.log(uncompress("4s2b")); // -> 'ssssbb'
console.log(uncompress("2p1o5p")); // -> 'ppoppppp'

// n = number of groups (number + its char)
// m = maximum numer for any group

// time complexity: O(nm)
// space complexity: O(nm)

// ** note that if we did string concatenation, it's an O(n) operation since strings are immutable; thus making it an array will make it an O(1) operation
