// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

// My solution

function isVow(a){
    return a.map((char) => char === 97 ? char = "a" : char === 101 ? char = "e" : char === 105 ? char = "i" : char === 111 ? char = "o" : char === 117 ? char = "u" : char)
  }

  // Best practice

  function isVow(a){
    for (i=0, l=a.length; i<l; ++i)
    {
      let char = String.fromCharCode(a[i])
      if ('aeiou'.indexOf(char) !== -1)
      a[i] = char;
    }
    
    return a;
  }