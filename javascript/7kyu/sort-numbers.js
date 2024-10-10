// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// My solution

function solution(nums) {
    // How sort() Works with the Comparison Function
    // The sort() method requires the comparison function to return:
    // A negative number if the first element (a) should come before the second element (b).
    // A positive number if the first element (a) should come after the second element (b).
    // Zero if both elements are considered equal in the sorting order.
    return nums === null ? nums = [] : nums.sort((a, b) => a - b);
}

console.log(solution([1, 2, 10, 50, 5]));


// More concise

function solution(nums){
    return (nums || []).sort(function(a, b){
      return a - b
    });
  }