// five sort
// Write a function, fiveSort, that takes in an array of numbers as an argument. The function should rearrange elements of the array such that all 5s appear at the end. Your function should perform this operation in-place by mutating the original array. The function should return the array.

// Elements that are not 5 can appear in any order in the output, as long as all 5s are at the end of the array.

// create two pointer variables - one (i) at the beginning of the array, the second (j) at the end
// iterate through the array while i is less than or equal to j
//      a) if nums[j] is 5, decrement j (we need all the 5s at the end, so no action if it's a 5 other than to keep moving j to the left until it's not a 5);
//      b) else if nums[i] is 5, swap numbers with nums[j] AND increment i to keep it moving to the right;
//      c) else if nums[i] is NOT a five, keep incrementing i
// return nums

const fiveSort = (nums) => {
    let i = 0;
    let j = nums.length - 1;

    while (i <= j) {
        if (nums[j] === 5) {
            j--;
        } else if (nums[i] === 5) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++
        } else {
            i++
        }
    }

    return nums;
};


console.log(fiveSort([12, 5, 1, 5, 12, 7]));
// -> [12, 7, 1, 12, 5, 5] 
console.log(fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5]));
// -> [2, 2, 10, 6, 1, 5, 5, 5, 5, 5] 
console.log(fiveSort([5, 5, 5, 1, 1, 1, 4]));
// -> [4, 1, 1, 1, 5, 5, 5] 

// time complexity: O(n);
// space complexity: O(1);
