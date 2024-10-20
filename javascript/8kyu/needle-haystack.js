// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle,


// My solution
function findNeedle(haystack) {
    // Declare needle to hold needle positon
    // Return needle positon
      let needle = haystack.indexOf("needle");
      return `found the needle at position ${needle}`;
  };

console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))