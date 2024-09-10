// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// My solution

function getAge(inputString){
    return Number(inputString[0]);
  };

// Or use parseInt()

function getAge(inputString) {
    // parseInt returns the first int in a sequence
    return parseInt(inputString);
};