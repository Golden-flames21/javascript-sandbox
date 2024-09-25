const age = 12;
if (age >= 18) {
    console.log("you are eligible to vote");    
} 
const age2 = 15;
if (age2 >= 18) {
    console.log("you are eligible to vote");
    
} else {
    console.log("you are ineligible to vote, you must be 18+");
    
}
const age3 = 33;
if (age3 >= 0 && age3 <= 40) {
    console.log("you are in the youth/underage category"); 
} else { 
    console.log("you are in the aged category");
}
const number = 34;
if(number % 2 === 0){
    console.log("This is an even number");
} else {
 console.log("This is an odd number");
}
const savings = 3000;
const transactionAmount = 2000;
if(savings >= 2000){
    console.log("Transaction is successful");
} else {
    console.log("Insufficient funds");
}
// multiple else if statements 
let myNum = 78
if(myNum > 0){
    console.log("This is a positive number");   
} else if (myNum < 0){
    console.log("This is a negative number");
}else {
    console.log("This is zero");  
}
// CLASSWORK
// underage: 0-12; teens: 13-19; adults: 20-40; aged: 41 and above
const age4 = -41
if(age4 >= 0 && age4 <= 12){
    console.log("You are in the underage category");
} else if(age4 >= 13 && age4 <= 19){
    console.log("You are in the teens category");
} else if(age4 >= 20 && age4 <= 40){
    console.log("You are in the adult category"); 
} else if(age4 >= 41){
    console.log("You are in the aged category");  
}else {
    console.log("invalid age, try again");
}

// SWITCH STATEMENT
let grade = "b";
switch (grade) {
  case "A":
  case "a":
    console.log("Excellent");
    break;
  case "B":
  case "b":
    console.log("Very good");
    break;
  case "C":
  case "c":
    console.log("Good");
    break;
  case "D":
  case "d":
    console.log("Fair");
    break;
  case "E":
  case "e":
    console.log("Poor");
    break;
  case "F":
  case "f":
    console.log("Fail");
    break;
  default:
    console.log("Invalid grade");
}

