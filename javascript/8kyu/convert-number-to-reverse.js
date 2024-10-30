// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.


// My solution

function digitize(n) {
    // Convert to string
    // Split into an array
    // Reverse array
    // Run Number() as a callback function withtin .map()
    return n.toString().split('').reverse().map(Number)
  };
console.log(digitize(12345))