// This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.

// My solution

function checkForFactor (base, factor) {
    return base % factor === 0 ? true : false
  }


  // Shorter form

  function checkForFactor (base, factor) {
    return base % factor === 0;
  }