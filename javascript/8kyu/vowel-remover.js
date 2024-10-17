// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// My solution

function shortcut (string) {
    return string
        .split('')
        .filter(letter => !/[aeiou]/i.test(letter))
        .join('');
  };

  console.log(shortcut("My name is Bolrog"));

  // A more concise solution

  function shortcut(str) {
    return str.replace(/[aeiou]/g, '');
  };


  console.log(shortcut("My name is Bolrog"));