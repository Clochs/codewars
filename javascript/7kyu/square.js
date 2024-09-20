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