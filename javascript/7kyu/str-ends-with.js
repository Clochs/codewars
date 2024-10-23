// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// My solution

function solution(str, ending){
    // str.endsWith() returns t/f if str ends with ending strings.
    return str.endsWith(ending); 
  };


  console.log(solution("abc", "b"));