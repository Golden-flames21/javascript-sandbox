// LOOPS: divided into for loop, while loop and do-while loop
// for (initializer; condition; increment) {line of code} Be careful not to have an infinite loop, so that both your website and laptop does not crash. you must have a condition at some point. 
// EXAMPLE
for (let i = 0; i < 4; i++) {
    console.log("loop");
    
}
// another name for loop is iterationb or recursion 
let sum = 0;
for (let i = 0; i <= 3; i++) {
    sum += i;
}
console.log(sum);
// while is written as- initializer while (condition) {increment}

let y = 0;
while (y <= 5) {
console.log("in the loop")

    y++; 
}
// EXAMPLE 3
let num = 1;
while (num <= 10) {
console.log("current value of num is" +  num);

    num++;
}

// do-while loop- peform the action once at least, whether the condition is true or false
let x = 5;
do {
    console.log("I am in the loop");
    
    x++;
} while (x <= 2);