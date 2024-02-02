// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// My solution
function invert(array) {
    // Using .map return a new array of -num which if subtracts num from 0 on positive and negative integers
    return array.map((num) => -num)
 }