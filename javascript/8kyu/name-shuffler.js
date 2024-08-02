// Write a function that returns a string in which firstname is swapped with last name.

// My solution

function nameShuffler(str){
    let splitName = str.split(' ')
    let first = splitName[0]
    let last = splitName[1]
    let reversedName = `${last} ${first}`
    return reversedName
  }

  // Or a much simpler solution 

  function nameSuffle(str){
    return str.split(' ').reverse().join(' ')
  }