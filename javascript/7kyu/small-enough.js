// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// My solution


function smallEnough(a, limit) {
    // .every() calls a function for every value in the array and returns a bool
    return a.every((value) => value <= limit ? true : false)
}

// Another solution 

function smallEnough(a, limit){
    return Math.max(...a) <= limit
  }