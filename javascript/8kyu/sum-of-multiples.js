// Find the sum of all multiples of n below m

// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples
// Examples
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"


// My solution

function sumMul(n, m) {
  // Return "INVALID" if either number is not a positive integer
  if (m <= 0 || n <= 0) {
    return "INVALID";
  }

  // Initialize sum to accumulate multiples
  let sum = 0;

  // Loop from n up to (but not including) m, stepping by n each time
  for (let i = n; i < m; i += n) {
    // Add current multiple to the sum
    sum += i;
  }

  return sum;
}