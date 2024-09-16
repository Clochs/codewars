// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// My solution

// Create an empty obj
// Split string into an array
// forEach char in arr 
// Check if the char exists in the obj and if it does add 1 to key value
// If not set value to 1
function count(string) {
    let obj = {};
        string.split('').forEach(char => {
        obj[char] ? obj[char]++ : obj[char] = 1;
        }) 
    return obj;
    }

console.log(count("abaanbnfg"));