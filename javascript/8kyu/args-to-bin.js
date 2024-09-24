// Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be added as 0 since it can't be added.
// If your language can handle float binaries assume the array won't contain float or doubles.

// My solution

function arr2bin(arr) {
    // Check if any element is NaN if so return NaN .some() runs callback function and returns a boolean
    // Declare a new var to return at the end of the function
    // Use reduce to return a single sum (total)
    // Check if num is an integer and return sum
    // If not integer, return 0
    
        
    if (arr.some(num => Number.isNaN(num))) {
        return 'NaN';
    }
    
    let newArr = arr.reduce((total, num) => {
        return Number.isInteger(num) ? total + num : total;
    }, 0);
    return newArr.toString(2);
};

console.log(arr2bin([2, 4, 6]));



// Much more concise

// Use reduce to return a sum
// Only if item === number add item to sum otherwise ignore
// Initiate to 0
// Change sum to binary using toString(2) (base 2)

function arr2bin(arr) {
    return arr.reduce((sum, item) => typeof(item) === 'number' ? sum + item : sum, 0).toString(2);
  }


