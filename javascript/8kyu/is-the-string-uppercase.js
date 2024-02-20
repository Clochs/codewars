// Create a method to see whether the string is ALL CAPS.

// My solution

String.prototype.isUpperCase = function(){
    return this.valueOf() === this.toUpperCase()
}

