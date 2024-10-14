// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.


// My solution


function disemvowel(str) {
    return str
         .split('') // Split string into an array
         .filter(letter => !/[aeiou]/i.test(letter)) /* Iterate over each letter and return           ones that pass */
         // test method checks for a match in a string
         .join(''); // Join the array back to a string.
};



// More concise and direct

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
  }