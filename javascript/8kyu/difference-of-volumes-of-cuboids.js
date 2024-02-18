// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// My solution 

function findDifference(a, b){
    // Return the difference between a and b. reduce() multiplies the accumulated value 'acc' by every element starting with 1
    return Math.abs(a.reduce((acc, sideA) => acc * sideA, 1) - b.reduce((acc, sideB) => acc * sideB, 1))
}