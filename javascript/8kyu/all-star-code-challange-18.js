// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.


// My solution

function strCount(str, letter){
    let total = 0
    str.split('').map((char) => char === letter ? total++ : 0)
    return total
}