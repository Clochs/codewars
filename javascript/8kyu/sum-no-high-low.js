// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing, nil etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.


// My solution


function sumArray(arr) {
    // Check if arr is null or less than 3 nums, if so return 0.
    // Declare lowest and highest to hold those nums.
    // Sum all nums using reduce.
    // Subtract lowest and highest nums.
      if (!arr || arr.length < 3) {
          return 0;
      }
      const lowest = Math.min(...arr);
      const highest = Math.max(...arr);
  
      const sum = arr.reduce((total, num) => num + total, 0);
      return sum - lowest - highest;
  
  };

console.log(sumArray([6]));