// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).



// My solution

function sheepCounter(sheep){
    let total = 0
    sheep.map((bool) => {
        if(bool === true){
            total++
        }
    })
    return total
}

// Two more solutions

// function countSheeps(arrayOfSheep) {
//     var array = arrayOfSheep.reduce((a,b)=>a + (b===true?1:0),0)
//     return array;
//   }

// function countSheeps(arrayOfSheeps) {
//     return arrayOfSheeps.filter(Boolean).length;
//   }