// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// My solution

function arrayPlusArray(arr1, arr2) {
    arr1 = arr1.reduce((acc, c) => acc + c)
    arr2 = arr2.reduce((acc, c) => acc + c)
    return arr1 + arr2
  }