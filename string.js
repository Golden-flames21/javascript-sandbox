// DATA TYPES
// These are the different ways through which we can interact with diff data types. We have two types: primitive and complex data types.
// primitive dt are dts that can hold only one value at a time. These are divided into 5: strings,number,  null, boolean, null and undefined.
// for complex, we have object and arrays
// Strings are just text characters and to recognise them, they must be in quotation marks, either single or double.
//
// boolean value is just true and false.
// null:
const firstName = "John";
const lastName = "Doe";
console.log(firstName);
console.log(lastName);
// string properties
// 1. length- to check the length of a stering object, typed the string name . length. E.g:
console.log(firstName.length);
console.log(lastName.length);
// string concatenation (meaning joining strings together) When the plus sign is associated with strings, it means concatenation. For e.g
const fullName = firstName + " " + lastName;
console.log(fullName);
console.log(fullName.length);
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
// a replace method is used to change something. It replaces only the first thing that it comes in contact with, that is for replaceAll
console.log(fullName.replace("o", "#"));
console.log(fullName.replaceAll("o", "*"));
// includes, startsWith, endsWith
console.log(fullName.includes("h"));
console.log(fullName.startsWith("Jo"));
console.log(fullName.endsWith("Jo"));
const myEmail = "eniolatemiloluwa21@gmail.com";
console.log(myEmail.length);
console.log(myEmail.toUpperCase());
console.log(myEmail.includes("e"));
console.log(myEmail.endsWith("google.com"));
// IndexOf and lastIndexOf
// indexOf is for picking the position of a character in a string. PS: JS is a zero-based language.
console.log(myEmail.indexOf("a"));
// lastIndex shows the last occurence of that character
console.log(myEmail.lastIndexOf("a"));
// charAt is used to look for the characters on certain position
console.log(myEmail.charAt(6));
//concat
console.log(myEmail.concat("example"));
//trimming-removes white spaces
const userName = "          user001            ";
console.log(userName.length);
console.log(userName.trim());
// there is trimStart and trimEnd
// methods that are used to extract portions of a string
// 1. slice method
// 2. substring method
//3. substr, which is more redundant
// sample of slice method and the end position is non-inclusive
const surname = "Hatake";
console.log(surname.slice(0, 4));
//substring
console.log(surname.substring(1, 5));
//substr also takes in 2 parameters; the first one is where you start and the second one is the number of characters that you want.
console.log(surname.substr(0, 5));
//template literals allows you to format variables into strings, which makes up for the shortgcoming of string concat.
//ps: you must use (start with) something called backticks `` (which is beside 1 on the keyboard). in order to format variable into strings, you have to use the dollar sign and the curly brackets, like this: ${} and then you call your variables inside. For e.g
// when you want to add a quotation inside of your string, you can use backticks.
const quote = `Tinubu said and I quote "let the poor breathe"`;
console.log(quote);
