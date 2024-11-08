// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.


// My solution

function replace(s){
    // Declare vowels with regex
    // Declare filtered using replace
    const vowels = /[aeiou]/gi;
    const filtered = s.replace(vowels, '!');
    return filtered;
  };

console.log(replace("Hello, Sam"));