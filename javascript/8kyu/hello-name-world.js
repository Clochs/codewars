//Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

//Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).
//Examples:
//* With `name` = "john"  => return "Hello, John!"
//* With `name` = "aliCE" => return "Hello, Alice!"
//* With `name` not given 
//  or `name` = ""        => return "Hello, World!"


// My solution

// IF there is no name
//      return Hello, World!
// Else
// IF char is the first letter
//      Make it uppercase
// ELSE
//     Make var for correctedName and correct lowercase and uppercase
//     Return Hello, correctedName 
//                                                                                                                                                       

function hello(name) {
    if (!name) {
        return `Hello, World!`;
    }
    let correctName = name.split('')
        .map((char, index) => index === 0 ? char.toUpperCase() : char.toLowerCase()).join('');
    return `Hello, ${correctName}!`;
};

console.log(hello("SAmMY"));