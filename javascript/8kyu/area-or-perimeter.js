// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// My solution 

const areaOrPerimeter = function(l , w) {
  // First check to see if it's a square, if so multiply
  // If not add all for sides to get perimeter
    return l === w ? l * w : (l= l + l) + (w = w + w)
  };

  // Slightly cleaner solution

  const areaOrPerimeter = function(l , w) {
    return l == w ? l*w : 2*(l + w)
  };