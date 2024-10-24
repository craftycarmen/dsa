// 1512. Number of Good Pairs

// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.



// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.
// Example 3:

// Input: nums = [1,2,3]
// Output: 0


// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100


var numIdenticalPairs = function (nums) {
    // // time complexity: 0(n2) because the outer loop runs n times,
    // // and every time the outer loop runs, the inner loop also runs n times
    // // thus n x n = n2 ==> O(n2)
    // let count = 0;

    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = 1; j < nums.length; j++) {
    //         if (nums[i] === nums[j] && i < j) count++
    //     }
    // }

    // return count;

    // time complexity: O(n):
    let map = {};
    let count = 0;

    for (let n of nums) {
        if (map[n]) {
            count += map[n];
            map[n]++;
        } else map[n] = 1
    }

    return count
};
