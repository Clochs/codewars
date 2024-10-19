// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// My solution


// Split string into an array
// Use filter to run a function and return what passes
// Test each letter in regex returning true/false with .test
// Join arr back to string 
// Return results
function shortcut (string) {
    return string
        .split('')
        .filter(letter => !/[aeiou]/i.test(letter))
        .join('');
  };

  console.log(shortcut("My name is Bolrog"));

  // A more concise solution


  // Use replace to find occurances of vowels and replace them with an empty string
  function shortcut(str) {
    return str.replace(/[aeiou]/gi, '');
  };


  console.log(shortcut("My name is Bolrog"));