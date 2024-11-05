// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

// My solution

function twoSort(s){
    // Use sort to arrange the strings by ASCII value
    // Grab the first element in the sorted array
    // Split that value 
    // Join it back together with *** inbetween the letters
    console.log(s.sort()[1]);
    return s.sort()[0].split('').join('***')

};

console.log(twoSorts(["hello", "you", "DO", "STinK!"]));