// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// My solution 

function removeEveryOther(arr){
    // Return the filtered arr with the condition if the index is even
    return arr.filter((_, index) => index % 2 === 0)
}