
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// My solution

var countSheep = function (num){
    // Declare empty string to hold sheep
    let sheepNum = ""
    // Loop through sheep starting at 1
    for(let i = 1; i <= num; i++){
      // Add i and the string sheep... to sheepNum
      sheepNum+= `${i} sheep...`
    }
    return sheepNum
  }