// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

// My solution

// function take(arr, n) {
//     // Declare arr to hold new array
//     // If arr is not empty 
//     //      Loop through arr until n
//     //  If arr is not undefined
//     //      Add arr element to newArr
//     // Return newArr
//     let newArr = [];
// if (arr.length > 0) {
//     for (let i = 0; i < n; i++) {
//         if (arr[i] !== undefined) {
//             newArr.push(arr[i]);
//         }
//     }
// }

//     return newArr;
// };




// More concise better practice

// Use slice to return elements from 0 up to num. Everything else is undefined.


let take = (arr, num) => arr.slice(0, num);

//   console.log(take(["red", "blue", "green", "orange", "milk"], 3));
console.log(take(['for', 'rto', 'hgidj', 'hshdk', 'jkdk'], 3));