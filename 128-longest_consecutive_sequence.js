// 128. Longest Consecutive Sequence

// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.



// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9


// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109

var longestConsecutive = function (nums) {
    const set = new Set(nums);
    // turn nums into array to a set -- allows for O(1) time complexity for checking presence of elements;

    let longest = 0;
    // keep track of the longest consecutive sequence;

    for (let n of nums) {
        // iterate through each element in list

        if (!set.has(n - 1)) {
            // check if n - 1 is in set, which determines if n is the start of a new sequence

            let length = 1;
            // if n is the start of a new sequence, length variable is 1

            while (set.has(n + length)) {
                length++;
                // while set has the number + length, increment length
                // if the next consecutive number is not found in the set, then it's the end of the current sequence
            }

            longest = Math.max(longest, length)
            // longest becomes whichever is the largest between longest and length
        }
    }

    return longest;
};
