// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// My solution using terinary operator
// check if num / 2 has a remainder of 0 ? true : false
function evenOrOdd(number) {
    return number % 2 === 0 ? "Even" : "Odd"
  }