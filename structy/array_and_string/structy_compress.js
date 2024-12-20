// compress
// Write a function, compress, that takes in a string as an argument. The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character. Single character occurrences should not be changed.

// 'aaa' compresses to '3a'
// 'cc' compresses to '2c'
// 't' should remain as 't'

// You can assume that the input only contains alphabetic characters.

// create a result variable
// create two variables as the two pointers (first variable marks the beginning of the streak/string of same char, second marks the end)
// iterate while j is less than or equal to string length (<= because you need to get to the end of the j, whch will be undefined—that is fine because s[j] will become undefined and hit the else statement that will push the results)
//      a) if the chars are the same at both i and j, continue by incrementing
//      b) else, subtract the indices to get the # of occurences for that char
//          - if the number is 1, concatenate the char
//          - else, concatenate the number and character at i (not at j because j is already looking at the next new char at this point)
//          - bring i up to speed with j

const compress = (s) => {
    let result = [];
    let i = 0;
    let j = 0;

    while (j <= s.length) {
        if (s[i] === s[j]) {
            j++
        } else {
            num = j - i;

            if (num === 1) {
                result.push(s[i])
            } else {
                result.push(num, s[i])
            }

            i = j;
        }
    }

    return result.join('');

}


console.log(compress('ccaaatsss')); // -> '2c3at3s'
console.log(compress('ssssbbz')); // -> '4s2bz'
console.log(compress('ppoppppp')); // -> '2po5p'

// n = string length
// time complexity: O(n)
// space complexity: O(n)
