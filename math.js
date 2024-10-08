// MATH OBJECT 
// To access the math object in js, just write console.log(Math);
// Math Methods in JS
// 1. round, ceil, floor, trunc, random, min, pow, sqrt
console.log(Math.pow (4, 4));
// same as 4 ** 4 
console.log(Math.sqrt(9));
console.log(Math.max(10, 2, 56, 78));
console.log(Math.min(5, 6, 7, 9, 23));
console.log(Math.round(9.56));
console.log(Math.ceil(-1.2)); 
console.log(Math.floor(9.9));
console.log(Math.trunc (10.3) );
// trunc totally remopves the decimal part.
// random generates pseudo random umbers between 0 and 1
console.log(Math.random());
console.log(Math.random() * 5);
const randomNumber = Math.trunc(Math.random() * 6);
console.log(randomNumber);
const customers = ['Timi', 'Eniola', 'Aisha', 'Olumide', 'Sesan'];
const numOfCustomers = customers.length; 
const randomCustomerPosition = Math.floor(Math.random() * numOfCustomers);
console.log(customers [randomCustomerPosition]);



