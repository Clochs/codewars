// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// My solution: 

function maps(x){
    // declare arr and return array multiplying each item by 2
    let arr = x.map((num) => num * 2);
    return arr;
}