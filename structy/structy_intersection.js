// intersection
// Write a function, intersection, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are in both of the two arrays.

// You may assume that each input array does not contain duplicate elements.

// create a result variable
// create a new set with the first array inserted
// iterate over the second array
//      a) check if the element is inside of the set; if it is, push it the result
// return the result

const intersection = (a, b) => {
    const result = [];
    const set = new Set(a);

    for (let ele of b) {
        if (set.has(ele)) result.push(ele);
    }

    return result;
}

console.log(intersection([4, 2, 1, 6], [3, 6, 9, 2, 10])) // -> [2,6]
console.log(intersection([2, 4, 6], [4, 2])) // -> [2,4]
console.log(intersection([4, 2, 1], [1, 2, 4, 6])) // -> [1,2,4]

// n = a.length;
// m = b.length;
// time complexity: O(n+m)
// space complexity: O(n)
