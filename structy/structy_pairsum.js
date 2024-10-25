// pair sum 

// Write a function, pairSum, that takes in an array and a target sum as arguments. The function should return an array containing a pair of indices whose elements sum to the given target. The indices returned must be unique.

// Be sure to return the indices, not the elements themselves.

// There is guaranteed to be one such pair that sums to the target.

// 1) initiate a hashmap
//      a) keys will represent the numbers in the array
//      b) values will represent the indices of those numbers
// 2) iterate through the elements using a single loop
//      a) calculate the complement ==> subtract target number from the current number of the array
//      b) is the complement in the hashmap?
//          b.i) if so, return the value of the current index and the complement's index
//          b.ii) if not, store the number in the hashmap and its corresponding index as the value, and keep iterating

const pairSum = (numbers, targetSum) => {
    const previous = {};

    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        const complement = targetSum - num;

        if (complement in previous) {
            return [i, previous[complement]]
        }

        previous[num] = i;
    }
}

console.log(pairSum([3, 2, 5, 4, 1], 8)); // -> [0, 2]
console.log(pairSum([4, 7, 9, 2, 5, 1], 5)); // -> [0, 5]
console.log(pairSum([4, 7, 9, 2, 5, 1], 3)); // -> [3, 5]

// n = array length
// time: O(n)
// space: O(n)
