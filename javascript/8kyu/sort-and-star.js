// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

// My solution

function twoSorts(s){
    // Using sort() you can grab the first sorted element [0], split it into an array and join the chars seperated by ***
    return sort()[0].split('').join('***')
}