// Is 34 divided by 3 greater than 67 divided by 2?
console.log(34/3 > 67/2)
// Does 5 evaluate to the same as "5"?
console.log (5== "5")
// Does 5 strictly equal "5"?
console.log(5==="5")
// Does !3 strictly equal 3?
console.log(!3===3)
// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
console.log("LEARN".length === 5 && "Student".length === 7)
// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
console.log("LEARN".length === 5 || "Student".length === 10)
// Does "LEARN" contain the subset "RN"?
console.log("LEARN".includes("RN"))
// Does "LEARN" contain the subset "rn"?
console.log("LEARN".includes("rn"))
// Does "LEARN"[0] strictly equal "l"?
console.log("LEARN"[0]=== "l")
// Modify the code from the previous question to return true.
console.log("LEARN".toLowerCase()[0]=== "l".toLowerCase())

// Make sure you try different options and change the variables to ensure properly working code.

// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
const item1 = 101

if(item1 <= 100) {
    console.log("in budget")
} else {
    console.log("too expensive!")
}

// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.

const hungry = 1

if(hungry === 1) {
    console.log("eat food")
} else {
    console.log("keep coding")
}

// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.

const trafficLight = "blue"

if(trafficLight === "green") {
    console.log("go")
} else if(trafficLight === "yellow") {
    console.log("slow down")
} else if(trafficLight === "Red") {
    console.log("stop")
} else {
    console.log("Oops! Something seems fishy..")
}
    

// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".

var num1 = 16
var num2 = 32

if(num1 > num2) {
    console.log(num1)
} else if(num2 > num1) {
    console.log(num2)
} else if(num1 === num2) {
    console.log("the numbers are the same")
} else {
    console.log("Oops! Something seems fishy..")
}

// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.

var number1 = 10

if(number1 % 2 === 0) {
    console.log("the number is even!")
} else if (number1 % 2 !== 0) {
    console.log("the number is odd!")
} else if(number1 === 0) {
    console.log("the number is zero!")
}