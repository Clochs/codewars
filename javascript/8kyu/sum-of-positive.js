// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// My solution


function positiveSum(arr){
    let total = 0
    arr.map((num) => {
      if(num > 0){
        total+= num
      }
    })
      return total
  }

  // Another of mine (fixed)

  function positivesSum(arr){
    return arr.reduce((acc, c) => c > 0 ? acc + c : acc, 0)
  }