// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.


// My solution


let capitals = function (word) {
    // Split string 
    // Use reduce to set condition
    // Set initiator to empty array
    // If letter is upper case add it to the accumulator in reduce
    // Return sorted array
    
     return word.split('').reduce((acc, curr, index) => {
         if (curr === curr.toUpperCase()) {
          acc.push(index);
         } 
          return acc.sort();
      }, [])
  };

console.log(capitals("BiGoN"));