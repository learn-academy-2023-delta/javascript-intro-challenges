// Is 34 divided by 3 greater than 67 divided by 2?
console.log((34 / 3) > (67 / 2))
// Does 5 evaluate to the same as "5"?
console.log(5 == "5");
// Does 5 strictly equal "5"?
console.log(5 === "5");
// Does !3 strictly equal 3?
console.log(!3 === 3);
// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
console.log("LEARN".length === 5 && "Student".length === 7);
// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
console.log("LEARN".length === 5 || "Student".length === 10);
// Does "LEARN" contain the subset "RN"?
console.log("LEARN".includes("RN"));
// Does "LEARN" contain the subset "rn"?
console.log("LEARN".includes("rn"));
// Does "LEARN"[0] strictly equal "l"?
console.log("LEARN"[0] === "l");
// Modify the code from the previous question to return true.
console.log("learn"[0] === "l");
// Make sure you try different options and change the variables to ensure properly working code.
//Yes, we did. It's spicy

// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
var item = 50

if(100 > item){
  console.log("in budget");
}

// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
let hungry = 1

if(hungry){
  console.log("eat food");
} else{
  console.log("keep coding");
};

// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
let trafficLight = "green"

if(trafficLight === "green"){
console.log("go");
} else if(trafficLight === "yellow"){
  console.log("slow down");
} else{
  console.log("stop");
}

// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
let num1 = 1
let num2 = 1

if(num1 === num2){
  console.log("the numbers are the same");
} else if(num1 > num2){
  console.log(num1);
} else{
  console.log(num2);
}

// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
let num3 = -5

if(num3 % 2 > 0 || num3 % 2 < 0 ){
  console.log("odd");
} else if(num3 === 0){
  console.log("zero");
} else if(num3 % 2 === 0 ){
  console.log("even");
} else {
  console.log("invalid number");
}

// 🏔 Stretch Goals
// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."

// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.

// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.