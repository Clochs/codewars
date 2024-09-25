// HELP! Jason can't find his textbook! It is two days before the test date, and Jason's textbooks are all out of order! Help him sort a list (ArrayList in java) full of textbooks by subject, so he can study before the test.
// The sorting should NOT be case sensitive

// My solution


// Sort return -1, 0 or 1 to determain sorting placement of element
// IF a is greater than b 
//    return 1 (swap a with b) because a should come after b
// ELSEIF a is less than b 
//    return - 1 (keep a before b) because a should come before b
// ELSE
//    return 0 because a and b are equal 
function sorter(textbooks) {
    return textbooks.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : 
                                    a.toLowerCase() < b.toLowerCase() ? -1  : 0)
  }

console.log(sorter(["Math", "geometry", "Algebrah"]));