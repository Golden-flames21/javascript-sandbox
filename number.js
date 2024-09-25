// NUMBER DATA TYPE
// numbers can be inside of strings, where a double quote or single quote is involved.
// number methods are functions that can be performed on numbers.
// toFixed 
const num = 9.5678;
console.log(num.toFixed(0));
console.log(num.toFixed(1));
console.log(num.toFixed(2));
console.log(num.toFixed(3));

const x =7;
const y = 7;
console.log(x + y);
console.log(x -y);
console.log(x * y);
console.log(x / y);
// two asterisks refers to the power of two. for example
console.log(3 ** 2); 
// modulus- written with the normal percentage sign. it returns the remainder of a division. Foe e.g
console.log(7 % 2);
// order of operation BODMAS
let likes = 0;
likes = likes + 1;
likes = likes + 1;
likes = likes + 1;
likes = likes - 1;
console.log("likes ", likes);
// the shortcuts for increasing and decreasinng the number of likes are as follows:
// likes++;
// likes--; 
let savings = 5000
savings = savings + 3000;
console.log(savings);
// you can also write it as: savings += 10000, or savings -=20000
const fullName = "Kakashi Hatake";
const accountNumber = 123456789;
let myBalance = 5000;
// jan transaction
// credited 10000, debited 200 as sms charges, he got a cash gift of 3000 and he also gifted somneone 1200
myBalance += 10000;
myBalance -= 200;
myBalance += 3000;
myBalance -= 1200;
console.log(myBalance);
// const accountStatement = `${fullName} with account number ${accountNumber} has a balance of ${myBalance}`
const accountStatement = `${fullName} with account number ${accountNumber} has a balance of ${myBalance.toFixed(2)}`;
console.log(accountStatement);




