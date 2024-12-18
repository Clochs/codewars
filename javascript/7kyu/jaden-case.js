// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"


// My solution

// String.prototype creates a method
// this represents the arg
// Split the string 
// Iterate over string and capitalize the first letter of every word.
// Slice that capital letter with the rest of the word for every word. 

String.prototype.toJadenCase = function() {
    return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ');
} 

console.log("Hello Friend Hi".toJadenCase());