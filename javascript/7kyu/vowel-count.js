// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// She input string will only consist of lower case letters and/or spaces.


// My solution


// Split the string into an array
// Filter out vowels asking if the current item includes aeiou
// return the filtered string's length

function getCount(str) {
    return str.split('').filter((item) => 'aeiou'.includes(item)).length
};

console.log(getCount("Hello, I am Sam"));