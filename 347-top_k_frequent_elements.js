// 1. Create a bucket array that is the input size
// 2. Create a hashtable to keep track of frequencies of numbers
// 3. Fill in the hashtable by iterating over the input
// 4. Use the hashtable to fill in bucket array
// 5. Iterate over the bucket array, taking the k most elements

// Input: [1,1,1,1,2,2,2,3,3,4]
// Output: [1,2] OR [2,1]

// Time: O(n)
// Space: O(n)

var topKFrequent = function (nums, k) {
    let buckets = new Array(nums.length); // [null * nums.length]
    let counts = {}; // { 1:3, 2:3, 3:2, 4:1 }
    const res = [];

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]; // 1 initially
        counts[num] = counts[num] ? counts[num] + 1 : 1; // does it exist? if so, set it to 1
    }

    for (let num in counts) {
        let count = counts[num];

        if (!buckets[count]) {
            buckets[count] = [];
        }

        buckets[count].push(num)
    }

    let copyK = k;

    for (let j = buckets.length - 1; j >= 0; j--) {
        if (buckets[j]) {
            for (let k = 0; k < buckets[j].length; k++) {
                let item = buckets[j][k];
                res.push(item);
                copyK--

                if (copyK === 0) return res
            }
        }
    }

    return res;

};
