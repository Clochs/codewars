// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// My solution

function validatePIN(pin) {
    // The regex checks if the pin matches the following criteria:
    // ^ asserts the start of the string
    // \d{4} matches exactly 4 digits
    // $ asserts the end of the string (ensuring the entire string is 4 digits)
    // | is the OR operator, allowing for an alternative pattern
    // ^ asserts the start of the string again for the second pattern
    // \d{6} matches exactly 6 digits
    // $ asserts the end of the string (ensuring the entire string is 6 digits)
    
    return /^\d{4}$|^\d{6}$/.test(pin);
}
console.log(validatePIN("4544r44"));
    