// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

// My solution 
function correct(string){
    return string.split('').map((char) => {
      switch(char){
        case '0' : 
          return 'O'
          break;
        case '5' :
          return 'S'
          break;
        case '1' :
          return 'I'
          break;
        default:
          return char
          
      }
    }).join('')
  }

  // I like this solution though
//   function correct(string){
//     return string.replaceAll('0', 'O').replaceAll('1', 'I').replaceAll('5', 'S');
//   }


  // Regex
//   correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')