// Type Conversion and 
// you can convert a string to number and you can convert number to a string. 
// CONVERTING A STRING TO NUMBER (parseInt converts a string to an integer)
const myStr = "90";
console.log(typeof myStr);
// Number constructor
const convertedStr = parseInt (myStr); 
// or it can be: const convertedStr = Number (myStr); 
// TYPE COERCION
const a = "9";
const b = 7;
console.log(a - b);
console.log(a + b);   
console.log(a / b);
console.log(a * b);
