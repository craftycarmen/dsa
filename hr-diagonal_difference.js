// Diagonal Difference

// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:

// 1 2 3
// 4 5 6
// 9 8 9  
// The left-to-right diagonal 1 + 5 + 9 = 15. The right to left diagonal 3 + 5 + 9 = 17. Their absolute difference is |15 - 17| = 2.

// Function description

// Complete the  function in the editor below.

// diagonalDifference takes the following parameter:

// int arr[n][m]: an array of integers
// Return

// int: the absolute diagonal difference
// Input Format

// The first line contains a single integer, n, the number of rows and columns in the square matrix arr.
// Each of the next n lines describes a row, arr[i], and consists of n space-separated integers arr[i][j].

// Constraints

// Output Format
// -100 <= arr[i][j] <= 100

// Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

// Sample Input

// 3
// 11  2   4
// 4   5   6
// 10  8  -12
// Sample Output

// 15
// Explanation

// The primary diagonal is:

// 11
//    5
//      -12
// Sum across the primary diagonal: 11 + 5 - 12 = 4

// The secondary diagonal is:

//      4
//    5
// 10
// Sum across the secondary diagonal: 4 + 5 + 10 = 19
// Difference: |4 - 19| = 15

// Note: |x| is the absolute value of x

function diagonalDifference(arr) {
    let leftSum = 0;
    let rightSum = 0;

    for (let i = 0; i < arr.length; i++) {
        leftSum += arr[i][i];

        // iterate from the start of the array (i = 0) to the end (index of arr.length - 1)
        // for each index, add the value at position [i][i] to leftSum

        // i = 0: arr[0][0] = row 0, col 0 ==> 11
        // i = 1: arr[1][1] = row 1, col 1 ==> 5
        // i = 2: arr[2][2] = row 2, col 2 ==> -12
        // 11 + 5 - 12 = 4
    }

    for (let i = arr.length - 1; i > -1; i--) {
        rightSum += arr[i][arr.length - 1 - i];

        // iterate backwards through the array (from last index to 0)
        // for each index, compute the col index as 'arr.length - 1 - i'
        // add the value at the poition [i][arr.length - 1 - i] to rightSum

        // i = 2: arr[2][2 - 2] = arr[2][0] = col 0, row 2 ==> 4
        // i = 1: arr[1][2 - 1] = arr[1][1] = col 1, row 1 ==> 5
        // i = 0: arr[0][2 - 0] = arr[2][2] = col 2, row 0 ==> 10
        // 4 + 5 + 10 = 19
    }

    return Math.abs(leftSum - rightSum);
}
