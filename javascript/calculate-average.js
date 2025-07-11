// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.

// My solution
function findAverage(arr) {
    // Initiate sum 
    let sum = 0;
    // Conditional if the arr is empty
    if(arr.length === 0) {
        return 0;
    }
    // Iterate through array adding the current value of the index to sum
    arr.forEach((value) => {
        sum+= value;
    })
    // Return sum divided by the length of the array to get the average
    return sum / arr.length;
}

// Other option 

let findAverage = (arr) => {
    return arr.length === 0 ? 0 : arr.reduce((acc, cur) => acc + cur, 0)/ arr.length
}