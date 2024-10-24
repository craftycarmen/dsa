// 1. Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.


// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:
// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.


// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?



// create an empty object to keep track of which numbers were seen
// iterate over each index 'i' of the nums array
// get the curr number
// calculate the complement that would sum with num to reach target
// if the complement is in seen, then return the indices of the complement number and curr number
// otherwise, add the curr number and its index to seen
// if no pair found, return false


var twoSum = function (nums, target) {
    const seen = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;

        if (complement in seen) {
            return [seen[complement], i];
        }

        seen[num] = i;
    }

    return false;
};

// Time complexity: O(n), where n is the length of the array
