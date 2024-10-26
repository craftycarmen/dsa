// pair product
// Write a function, pairProduct, that takes in an array and a target product as arguments. The function should return an array containing a pair of indices whose elements multiply to the given target. The indices returned must be unique.

// Be sure to return the indices, not the elements themselves.

// There is guaranteed to be one such pair whose product is the target.

// create a hashmap
// iterate through the array
// figure out the complement (targetProduct/num)
// is the complement inside of the hashmap? return the current i and value of the complement from the hashmap if so; store the number and its index in the hashmap if no

const pairProduct = (numbers, targetProduct) => {
    const previous = {};

    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        const complement = targetProduct / num

        if (complement in previous) {
            return [i, previous[complement]]
        }

        previous[num] = i

    }
}
console.log(pairProduct([3, 2, 5, 4, 1], 8)); // -> [1, 3]
console.log(pairProduct([3, 2, 5, 4, 1], 10)); // -> [1, 2]
console.log(pairProduct([4, 7, 9, 2, 5, 1], 5)); // -> [4, 5]

// time complexity: O(n)
// space complexity: O(n)
