// Is 34 divided by 3 greater than 67 divided by 2?
    
    var div1 = (34 / 3)
    var div2 = (67 / 2)
    console.log(div1 > div2) // false

// Does 5 evaluate to the same as "5"?

    var num1 = 5
    console.log(num1 == "5")//true

// Does 5 strictly equal "5"?

    var num1 = 5
    console.log(num1 === "5")//false

// Does !3 strictly equal 3?

    var num2 = !3
    console.log(num2 === 3)//false

// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?

    var a = "LEARN"
    var b = "Student"

    console.log("LEARN".length === 5 && "Student".length ===7)//true

// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?

    var a = "LEARN"
    var b = "Student"

    console.log("LEARN".length === 5 || "Student".length ===7)//true

// Does "LEARN" contain the subset "RN"?

    console.log("LEARN".includes("RN"))//true

// Does "LEARN" contain the subset "rn"?

    console.log("LEARN".includes("rn"))//false

// Does "LEARN"[0] strictly equal "l"?

    console.log("LEARN"[0] === "l")//false

// Modify the code from the previous question to return true.

    console.log("LEARN"[0] === "L")//true

 //Part Two Challenge--------------------


 //  Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.

var item = 50

if(item < 100){
console.log("in budget")
}

// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.

const hungry = false


if(hungry === true){
console.log("eat food")
}else if(hungry !== true){
    console.log("keep coding")
}

// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.

const trafficLight1 = "green"

const trafficLight2 = "yellow"

const trafficLight3 = "red"

if(trafficLight1 === "green"){
    console.log("go")
} else if(trafficLight2 === "yellow" ){
    console.log("slow down")
} else if (trafficLight3 === "red"){
    console.log("stop")
}

// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".

var num1 = 4
var num2 = 4

if(num1 > num2 ){
    console.log(num1)
} else if(num1 === num2){
    console.log("the numbers are the same")
}

// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.

const number = 0

if(number % 2 == 0){
    console.log(`${number} the number is even`)
} 
