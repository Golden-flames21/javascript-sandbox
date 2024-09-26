const myCountry = "Nigeria";
let myAge = 25;
const fullName = "Eniola Akinfolarin"
console.log(myCountry.length);
console.log(fullName.length);
console.log(fullName.toUpperCase());
console.log(fullName.slice(0, 6));

const description = `${fullName} is a citizen of ${myCountry}`; 
console.log(description);

myAge += 1;
console.log(myAge);
console.log(100 % 7);
console.log(myCountry.startsWith("h"));
// functions are used to run snippets of code
// loops are used to perform repetitive actions, instead of writing amparticular thing multiple times, till a condition terminates. There are 3 types of loop; 1) for loop 2) while loop 3) do while loop.
// // In a for loop, the first thing you must have ios an initializer, i,e the variable name.
// for (let i = 0; i < 3; i++) {
//     // perform action

// }
// continue and break in loop. A continue statement means to skip over the action,  while break means stop.
// a while loop is the same as a for loop but the syntax is different.

let dolphinsScore1 = 96;
let dolphinsScore2 = 108;
let dolphinsScore3 = 89;
let pandasScore1 = 88;
let pandasScore2 = 91;
let pandasScore3 = 110;

const avgDolphin = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
const avgPanda = (pandasScore1 + pandasScore2 + pandasScore3) / 3;
console.log(`Average dolphin score is ${avgDolphin}`);
console.log(`Average panda score is ${avgPanda}`);

if (avgDolphin > avgPanda) {
  console.log("Dolphins Win");
} else if (avgDolphin === avgPanda) {
  console.log("It is a draw");
} else {
  console.log("Pandas Win");
}

if (avgDolphin > avgPanda && avgDolphin >= 100) {
  console.log("Dolphins Win");
} else if (avgDolphin < avgPanda && avgPanda >= 100) {
  console.log("Pandas Win");
} else if (avgDolphin === avgPanda && avgDolphin >= 100 && avgPanda >= 100) {
  console.log("It is a tie");
} else {
  console.log("Nobody wins");
}

// if (avgDolphin === avgPanda && avgDolphin >= 100) {
//   console.log("It is a tie");
// } else if (avgDolphin === avgPanda && avgPanda >= 100) {
//   console.log("It is a tie");
// } else {
//   console.log("No Team wins");
// }









