// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// My solution

function areYouPlayingBanjo(name) {
    // Get the first letter of name and make it lowercase
    // Check if it's 'r' and return the coinciding response
      return name[0].toLowerCase() === 'r' ? `${name} plays banjo` : `${name} does not play banjo`
    }