// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.

// My solution 

function remainder(n, m){
  if (m > n) {
    return m % n
  } else {
    return n % m
  } 
}

// Other solution

function remainder(n, m) {
    return n > m ? n % m : m % n;
}