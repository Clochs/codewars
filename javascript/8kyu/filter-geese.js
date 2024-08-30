// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.





function gooseFilter(birds) {
    // declare geese
      const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    // filter executes "(element)" once on each element of the "birds" array argument
    // .includes() checks if birds is NOT included in geese
      return birds.filter((element) => !geese.includes(element))
  };