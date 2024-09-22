// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.
// The order of the sequence has to stay the same.


// My solution

function distinct(a) {
    // Callback function takes two args num and index
    // Function compares the indexOf(first occurance of num)
    // It compares it against against the current index
    return a.filter((num, index) => a.indexOf(num) === index);
  };


// A more concise version using Set()

function distinct(a) {
    // Set() creates an object of unique items therefore filtering out duplicates.
    // The spread operator enclosed in brackets converts the object to an array.
    return [...new Set(a)];
  }