// Functions are like block of code designed to perform a task
// functions are used to run snippets of code, they are containers for line of code
// Function declaration
function greeting() {
console.log("Welcome to our App");
}
// invoked / called
greeting();

function speak(){
    console.log("Hello class");
}
speak();

// functios can take parameters
// functions are reusable base on parameters passed through it

function specialGreeting(name){
    console.log(${name}, Welcome to our App);
}
specialGreeting('Aisha')

// default parameters
specialGreeting()

// write a function that logs the addition of two numbers
function addTwoNums(num1, num2, num3){
  const result = num1 + num2 + num3;
  console.log(result);
}
    
addTwoNums(9, 5, 7);
addTwoNums(-20, 4, 7);

function checkNum(num) {
    if (num > 0){
        console.log(${num} is Positive);
    } else if (num < 0) {
        console.log(${num} is Negative);
    } else {
        console.log('This is Zero');
    }
}

checkNum(45);
checkNum(-79);
checkNum(0);

// Function expression

function myFuntion() {
  console.log('This is a func declaration');
}

const myFunction2 = function () {
    console.log('This is a func expression');
};
myFunction2();

// hoisting - moves all the func declaration up the script

// Return Key Word

const productofTwoNum = function (num1, num2) {
    return num1 * 2;
};

const result = productofTwoNum(9, 2);
console.log(result);

// write a function that cibverts km to meter
const KmToMeters = function (value) {
    const meter = value * 1000;
    return ${value}km is equal to ${meter}m
}

console.log(KmToMeters(6));
console.log(KmToMeters(10));

// Write a function that calcultes the average three numbers and returns average


const calcAverage = function(n1, n2, n3) {
    const average = (n1 + n2 + n3) / 3
    return average
}
console.log(calcAverage(10, 5, 17));

// write a function that calculates the age f userName, your ofunction should take in year of birth as a parameter
// function calculateAge(yearOfBirth) {
//   const currentYear = (2024)
//   const age = currentYear - yearOfBirth;
//   return age;
// }

const usersAge = function (yearofBirth) {
    return 2024 - yearofBirth;
}
console.log(usersAge(1960));

// write a function that checks if a number is even or odd


const EvenorOdd = function is(num){
    if (num % 2 === 0) {
        return 'This is an even number'
    } else {
        return 'This is an odd number'
    }
};
console.log(EvenorOdd(45));

let savings1 = 18900;
 const checkWithdrawal = function (amount) {
    if (amount < savings) {
        savings -= amount;
        return withdrawal of ${amount} is successful and my balance is ${savings}
    } else {
        return 'Insufficient funds'
    }
 }

 console.log(checkWithdrawal(4000));
 console.log(checkWithdrawal(15000));


 
 const depositAmount = function (amount){
        savings += amount;
        return Your deposit of ${amount} is successful and my balance is ${savings}
    }
 

 console.log(depositAmount(40000));
 console.log(checkWithdrawal(15000));
 console.log(depositAmount(20000));


 // Build a simple atm machine
let usersPin = 1289;
let savings2 = 50000;

// write a function that checks the enteredPin

const checkPin = function (enteredPin) {
  if (enteredPin === usersPin) {
    return true;
  } else return false;
};

console.log(checkPin(1289));

const withdraw = function (amount) {
  if (checkPin(1289)) {
    if (savings > amount) {
      savings -= amount;
      console.log(
        The withdrawal of ${amount} is succesful and balance is ${savings}
      );
    } else {
      console.log("Insufficient funds");
    }
  } else {
    console.log("Incorrect pin, try again");
  }
};

withdraw(4000);
withdraw(10000);

const deposit = function (amount) {
  if (checkPin(1289)) {
    savings += amount;
    console.log(
      Deposit of ${amount} is succesful and your balance is ${savings}
    );
  } else {
    console.log("incorrect Pin, try again");
  }
};
deposit(4000);
deposit(30000);

// write a function that checks balance
const balance = function () {
    if (checkPin(1289))
        console.log(Your current balance is ${savings});
    else {
        console.log("Incorrect pin, try again");
    }
}
 balance();

//  write a function that checjs the number of attempt on the pin,
// max attempt 3  the card will be blocked

let attempt = 0;
let blocked = false;

const checkCardAttempt = function () {
    if (blocked) {
        console.log('Your card is blocked');
        return;
    }
      if(checkPin(1288)) {
        console.log('Perform Transaction');
        attempt = 0
      } else{
        attempt++
        if(attempt === 3) {
            console.log('Your card is blocked');
            blocked = true;
        } else {
            console.log(Incorrect pin, ${3 - attempt} attempts left);
        }
      }
        };
checkCardAttempt();
checkCardAttempt();
checkCardAttempt();




// Arrow function

const myFunction = (p1, p2) => {};

// write an arrow function to check if password is long enough 
// min password length 7

const passwordCheck = (value) => {
  // if (value.trim().lenghth >= 7 ) {
  //   console.log('Password is long enough');
  // } else {
  //     console.log('Short Password');
  // }
  };
  const passwordCheck2 = (value) => value.lenghth >=7? 'password is long enough' : 'short password'
  passwordCheck('password');
  console.log(passwordCheck2);
  
  
// return keyword
// const calcAverage = (num1, num2) => {
//   return (num1 + num2) / 2;
// }

const calcAverage2 = (num1, num2) => (num1 + num2) / 2;

console.log(calcAverage(8,5));

const KmToMetersAgain = (value) => ${value} Km is equal to ${value * 1000};
console.log(KmToMetersAgain(9.9));

// SCOPING GLOBAL(accesible anywhere in a code, it is any variable not inside any curling bracket) AND LOCAL(This is always inside a curling bracket, it is inaccessible if it is logged outside its block of code)




const mySavings = 9000;

const seeBalance = () => {
  const mySavings = 10000;
  console.log(mySavings);
};

seeBalance();
console.log(mySavings);
const num = 8;
const func1 = () => {
  const num = 89;
  console.log(num);
};

const func2 = (num = 78) => {
  // const num = 12;
  console.log(num);
}

console.log(num);

// Write a function that takes in a string as a parameters and returns the string in all capital letter
const capitalizeStr = (str) => str.toUppercase();
console.log();


// Write a javascript function that accepts a string as a parameter and converts the first letter of the word
const capitalizeFirstletter = (str) => str.charAt(0).toUppercase();
// console.log(capitalizeFirstletter(''));

//
// console.log(checkDataType(90));


// Write a function that returns whether a number is even or odd

// Write a function named minutesTohours that receives a number of minutes as parameter and returns a number representing the same amount of time but in hours
// const minutesTohours = (minute) => minute /60;

// write a function called longestString that receives two strings as parameters
// and returns the longest of the two strings
// function longestString(str1, str2) {
//   return str1.lenghth >= str2.lenghth ? str1 : str2
// }

const longestString = (str1, str2) => (str1.length > str2.length ? str1 : str2);
// console.log(longestString('Hello, Nigeria'));


// Write a function named concat3 that receives 3 strings as parameters
// (string 1, string 2, string 3) and an additional string named separator.
// The function should concatenate the three strings
// using the provided separator and return the result 
// 
const concat3 = (str1, str2, str3, seperator) =>
  str1 + seperator + str2 + seperator + str3;
console.log(concat3('Aisha', 'Bola', 'Ade', '#'))

// write a function that returns the square of a number
const squareNum = (num)=> num**2

// Write a function called checkLoanEligibility, which receive an amount as a parameter and returns whether a user is eligible or not based on the criteria which is the loan amount can not be more than twice the amount of savings
 

let savings = 60000
// 45000, 20000, 70000
const checkLoanEligibility = (amount) => amount > savings * 2 ? 'Ineligible' : 'Eligible'
  console.log(checkLoanEligibility(20000));
   console.log(checkLoanEligibility(700000));

  //  Write a function that logs hello world to the console
  //  const continent = 'Hello world'
  //  console.log('Hello World');

   const HelloWorld = () => console.log("Hello World");


  // Write a function that returns 34
   const returnThirtyFour = () => 34;
   
  //  Write a function that returns the number of vowels in a string
  const countNumofVowels = (str) => {
    let vowels = 'aeiou';
    let
  }
  
   




  // const countNumofVowels = (str) => {
  //   let vowels = "aeiou";
  //   let numOfVowels = 0;
  //   const toLowerCase = str.toLowerCase();
  //   // loop over the lowerCaseStr
  //   for (let i = 0; i < lowerCaseStr.length; i++) {
  //     if (vowels.includes(lowerCaseStr(i))) {
  //       numOfVowels++;
  //     }
  //   }
  //   return numOfVowels;
  // };
  // console.log(countNumofVowels("Hello world"));






// if (checkPin(1278)) {
//   // go through
//   console.log("Perform transaction");
// } else {
//   attempt++;
//   console.log(Incorrect Pin, ${3 - attempt} left);
//   if (attempt >= 3) {
//     console.log("Your card is blocked");
//   }
// }


// if (checkPin(1222)) {
//   console.log("Perform Transaction");
// } else {
//   if (!blocked) {
//     attempt++;
//     console.log(Incorrect Pin, ${3 - attempt} attempt left);
//   }
//   if (attempt === 3) {
//     console.log("Your card is blocked");
//     blocked = true;
//   }
// }