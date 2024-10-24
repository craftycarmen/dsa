// most frequent char 
// Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

// You can assume that the input string is non-empty.

// 1) initialize a hashmap
// 2) iterate each character of the string
//      a) if char is not in counter, initialize it as 0
//      b) else, increment count by 1
// 3) initialize a "best" variable as null to keep track of the char with the highest count
// 4) iterate each char of the string
//      a) if the best var is null (without this, the first iteration would compare to null, returning undefined) OR the count for the curr char is greater than what are storing as the current best var, reassign best to the curr char
// 5) return best

const mostFrequentChar = (s) => {
    const count = {};

    for (let char of s) {
        if (!(char in count)) {
            count[char] = 0;
        }

        count[char]++
    }

    let best = null;

    for (let char of s) {
        if (best === null || count[char] > count[best]) {
            best = char;
        }
    }

    return best;
}

console.log(mostFrequentChar('bookeeper')); // -> 'e'
console.log(mostFrequentChar('david')); // -> 'd'
console.log(mostFrequentChar('abby')); // -> 'b'

// n = string length
// Time Comoplexity: O(n)
// Space: O(n)
