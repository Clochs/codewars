// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.
// The order of the sequence has to stay the same.


// My solution

function distinct(a) {
    // Callback function takes 2 (3 possible (element, index, array)) args
    // Function checks the first occurance of "indexOf(item)" to the current index
    // Ex: indexOf(1) = 0 to index = 0 pass
    // indexOf(1) = 0 to index = 1 fail
    // indexOf(2) = 2 to index = 2 pass
    return a.filter((num, index) => a.indexOf(num) === index);
  };

console.log(distinct([1, 1, 2, 3, 2, 4, 3, 5]))

// A more concise version using Set()

function distinct(a) {
    // Set() creates an object of unique items therefore filtering out duplicates.
    // The spread operator enclosed in brackets converts the object to an array.
    return [...new Set(a)];
  }