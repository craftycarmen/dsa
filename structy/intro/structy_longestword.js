// longest word
// Write a function, longestWord, that takes in a sentence string as an argument.The function should return the longest word in the sentence.If there is a tie, return the word that occurs later in the sentence.

// You can assume that the sentence is non - empty.

// 1. initialize an empty string called longest
// 2. split the sentence into words by space 
// 3. iterate through every word of words
//      a. if the length of each word is greater than or equal to the length of longest, reassign word as the longest
// 4. return longest

const longestWord = (sentence) => {
    let longest = "";
    let words = sentence.split(" ");

    for (let word of words) {
        if (word.length >= longest.length) longest = word;
    }

    return longest;
}

// n = length of sentence
// time complexity: O(n) --> it's going to run in n time to split the words up from the sentence as it iterates through the words and run in n time to iterate through those words and check their length, making it O(n + n), which is O(n) when simplified
// space complexity: O(n) --> words need to be stored in an array


// // *** TEST 00 *** //
// console.log(longestWord("what a wonderful world")); // -> 'wonderful'


// // *** TEST 01 *** //
// console.log(longestWord("have a nice day")); // -> 'nice'


// // *** TEST 02 *** //
// console.log(longestWord("the quick brown fox jumped over the lazy dog")); // -> 'jumped'


// // *** TEST 03 *** //
// console.log(longestWord("who did eat the ham")); // -> 'ham'


// // *** TEST 04 *** //
// console.log(longestWord("potato")); // -> 'potato'
