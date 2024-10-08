// ARRAYS
// Arrays are complex data types and they are denoted by square brackets. You can write more than onb evalue insid of one variable. Arrays have elements inside them and these elements are separated by commas. For e.g; [element1, element2];
const students = ['Goodness', 'Aisha', 'Adura'];
console.log(students);
// Arrays usually contain the same data types. However, this does not mean that arrays can be mixed.You can have a nested array, i.e., an array inside of an array. The commas are of paramount importance, or else the syntax will be wrong. 
const mixedArray = [9, 'str', true, 65, null, [90, false]]
// ARRAY PROPERTIES
// Length property: This returns the number of elements in that array, which is the lengthy of the array. 
console.log(students.length); 
// Getting belements in an array
// we can extractbor get elements in an array with their position. i.e. position arrayName [position]. 
console.log(students[0]);
// you can use positions to change elements in an array. For example, to add "t" to Aisha
students [1] = "Aishat";

// ARRAY METHODS i.e. what are the things that can be performed on an array 
// Adding and removing elements from an array. There are four methods: push, pop, shift and unshift. 
// LIFO- meand last in first out
// the push methods pushes or adds an element to an array, but at the ened of the array. For e.g
students.push("Theresa"); 
students.push("Eniola"); 
console.log(students);

// pop methods removes an element at the end. it is like the opposite of push. It can also return the element that is has removed. 
students.pop();
students.pop(); 
console.log(students.pop());
// adding .pop to students return what pop removed. 
// shift and unshift work at the beginning of thge array. 
students.unshift("Adedayo");
students.unshift("Timi")
console.log(students);
// shift removes the first element in the array.
students.shift();
console.log(students); 

// How to convert an array to a string. There are basically two methods that can be used. 1. toString method 2. join. The difference is that toString just converts it and put the commas. 
console.log(students.toString());
// on the other hand the join method joins elments in an array with a separator. You can determine what you want to join the elements with. 
console.log(students.join('*'));
console.log(students.join("-"));

// How to join one array to another array.
const onlineStudents = ['John', 'Peter', 'Paul'];
const weekdayStudents = ["Ade", "Susan", "Joy"];
const weekendStudents =["Ruth", "Gift"];
const allStudents = onlineStudents.concat(weekdayStudents);
console.log(allStudents);  
// you can concatinate more than one array at a time.Concatenation is always going to be appended at the end for e.g: (check line 47).

// Includes method: returns true or false, based on whether an element is included in an array or not. 
console.log(onlineStudents.includes("Ade"));
console.log(onlineStudents.includes("Paul"));

// other methods include sort method and reverse method
const carBrands = ["Toyota", "Lexus", "BMW", "Audi", "Chevrolet"];
console.log(carBrands);

// the sort methods arranges elements in an array in an alphabetical order. For e.g: PS: Capital letter has precedence over lower case in sorting, it does not matter thyat it is the same word twice.
console.log(carBrands.sort());
// reverse changes the arrangement of elements in an array, i.e., the reversed arrangement of the elements in the array. PS: it is not thge oppositre of sort. 
console.log(carBrands.reverse());

// How to extract p[ortions of an array. Slice methods work on arrays.  (start, emd(not included))
const friends = ['Ola', 'Timi', 'John', 'Jane'];
console.log(friends.slice(0, 2));
console.log(friends.slice(1));
// when you do not include the end position, it starts from where you have commanded, but it gives you the remaining elements. 

// split method in strings 
let text = "Hello World is fun";
console.log(text.split (" ")); 
const text2 = "tadaplad";
console.log(text2.split("a")); 

const reverseStr = (str) => str.split(""). reverse().join("");
console.log(reverseStr ("hello"));
// higher order array methods or callback functions or iterator methods
// 1. for of method: This is an iterator method that allows you to iterate over elements in an arrray... It goes over the elements in the rray until you have exhausted the list. PS: arrays are written in plurals. 
const fruits = ["oranges", "mangoes", "pear", "Grapes"]; 
for(const fruit of fruits){
    console.log(fruit); 
}
for (const fruit of fruits) {
  console.log(`${fruit} is something I like`);
}
for (const fruit of fruits) {
  console.log(`${fruit} is something I like`); 
  if (fruit === "pear"){console.log(`${fruit} is my best fruit`);
  }
}

// other array methods include: find, filter, forEach, map, reduce, every, some
// PS: How to write an arrow function: ()=>{}

// FOREACH METHOD- it executes a function for each element in an array. You must write a function in it to tell it what to do.
const customers = ["Bola", "Dupe", "Chidinma", "Bolu", "Demola"];
customers.forEach((customer, index)=>{
console.log(customer, index);

})
// access to elements, access to their position
// MAP method- similar to forEach method. It creates a new array with transformed elements. You must state the transfomation that you want. 
const nums =[4, 5, 6, 7]
const transformedNums = nums.map((num) => {
    return num * 2;
})
console.log(transformedNums);

// Find method: returns the first matching element in an array or the first element tht matches a a search parameter. 
const mySpecialNum = nums.find ((num) => {
    return num > 5
});
console.log(mySpecialNum);

// filter returns all elemensts that fit a search condition in an array.
const allMySpecialNums = nums.filter ((num) => num > 5);
console.log(allMySpecialNums);

let myBalance = 8000;
const transactions = [4000, -125, 10000, -5000, -2000, 1500];
// generate a simple bank statement. This will be done using a map method.

transactions.map((transaction)=> {
    if (transaction > 0){
        console.log(`You have been credited with ${transaction} naira`);
        
    }else{
        console.log(`You have been debited ${transaction} naira`);
        
    }
});
transactions.map((transaction) => {
    myBalance += transaction; 
})
console.log(myBalance);

const myCreditTransactions = transactions.filter ((transaction) => transaction > 0);
console.log(myCreditTransactions);

const myDebitTransactions = transactions.filter ((transaction) => transaction < 0 ) ;
console.log(myDebitTransactions);

const maxTransaction = 50000;
// find if there is any transaction close to that max transaction
transactions.push(100000);
const specialTransaction = transactions.find((transaction) => transaction >= maxTransaction)
console.log(specialTransaction);

// every and some
// every checks if all elements satisfy a condition and it returns whether true or false. 
const ages= [20, 42, 61, 81];
const allAdults = ages.every ((age) => age >= 18);
console.log(allAdults);
// some checks if at least one element satisfies the condition
const someChildren = ages.some((age) => age <= 20); 
console.log(someChildren);

// REDUCE METHOD: It is used mostly for accumulating numbers
const cartPrices = [25000, 32000, 15000, 4000, 2500];
const cartTotal = cartPrices.reduce((prev, curr) =>{
    return prev + curr;
} );
console.log(cartTotal);
// const cartPrices = [25000, 32000, 15000, 4000, 2500];
// const cartTotal = cartPrices.reduce((prev, curr) => {
//   return prev + curr;
// }, 300);
// console.log(cartTotal);

// SORT
const peoplesNames = ["Zigi", "Samson", "Niyi", "Ademola"]; 
// console.log (peoplesNames.sort())
// const atoZ = peoplesNames.sort();
// console.log(atoZ);
const ztoA = peoplesNames.sort((a, b) => b - a);
console.log(ztoA); 

const prices = [8000, 67000, 767, 5600];
// const highestToLowest = prices.sort((a, b) => b - a);
// console.log(highestToLowest);
const lowestToHighest = prices.sort((a, b) => a -b);
console.log(lowestToHighest); 
// array.is array checks if a variable is an array. it returns true or false depoending on whether or not it is an array. for e.g:
console.log(Array.isArray [2, 3, 4]);
// array.from changes a data type to an array. 
console.log(Array.from ("123")); 
// index of picks the first occurence of a character in a string, while lastindex picks the position of a character in a string or an array.
const arr = ["ade", "john", "jane", "ade"];
console.log(arr.indexOf("ade"));
console.log(arr.lastIndexOf("ade"));
// delete is used to delete an element from an array. it is barely used because it leaves holes in your array. 
delete arr [1];
console.log(arr);
// findIndex: gives you the position of the element that matches a search condition. 
const arr2 = [2, 4, 5, 6, 7, 8, 120, 500, 50];
const theIndexIs = arr2.findIndex((num) => num >100);
console.log(theIndexIs);
 



















