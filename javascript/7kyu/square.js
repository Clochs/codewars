// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// My solution

let isSquare = function(num) {
    // A square number is a number squared that is an integer and not a float
    // Find the square root of the number
    // Compare it with that result as an int
    if (Math.sqrt(num) === Math.floor(Math.sqrt(num))) {
      return true
    } 
    return false
  }


  // Or this 

//   When the square root of n is a whole number (meaning it's an integer), Math.sqrt(n) % 1 === 0.
// If it’s not a whole number, the remainder will not be 0, so the number isn't a perfect square.
// Thus, the condition Math.sqrt(n) % 1 === 0 is a simple and efficient way to check if the square root is an integer, which means n is a perfect square.

// This approach is both concise and very readable!

  function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
  }