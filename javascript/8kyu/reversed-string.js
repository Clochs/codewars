// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// My solution

function solution(str){
    // Split str and reverse, then join again
    return str.split("").reverse().join("")
  }