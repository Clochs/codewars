// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

// My solution

function position(letter){
    // Loop through ascii a - z 97 - 122
    for (let i = 97; i <= 122; i++) {
        // Compare the given letter to the current ascii value
        if (letter === String.fromCharCode(i)) {
        // Return that num minus 96
          let num = i - 96
          return `Position of alphabet: ${num}`
        }
    }
  }


// Another solution

function position(letter){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
  }