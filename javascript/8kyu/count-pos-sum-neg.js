// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


// My solution

function countPositivesSumNegatives(input) {
    // IF input is an empty array or null, return []
    // Declare arr to hold new arr
    // Declare posCount to hold the amount of positive nums
    // Declare negSum to hold sum of neg nums
    // Use reduce to count positive nums 
    // Use reduce to sum neg nums
    // Add posCount and negSum to their respective slots in arr
    // Return arr
    if (input === null || input.length < 1) {
        return [];
    }

    let arr = [];
    let posCount = input.reduce((total, current) => current > 0 ? total + 1 : total, 0);
    let negSum = input.reduce((total, current) => current < 0 ? total + current : total, 0);
    arr[1] = negSum;
    arr[0] = posCount;
    return arr;
  };

  console.log(countPositivesSumNegatives([]));