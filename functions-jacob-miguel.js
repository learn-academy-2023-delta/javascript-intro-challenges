// Write a function named marco that returns "polo".

const marco = () => {
    return "polo"
}
console.log(marco())


// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

const greeting = (name) => {
    return `Welcome, ${name}`
} 
console.log(greeting("miguel"))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
const oddOrEven = (num) => {
    if(num % 2 === 0){
        return "Even"
    }else if (num % 2 === 1){
        return "Odd"
    }else{
        return "dumb"
    }
}
console.log(oddOrEven(3))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

const triple = (num) => {
    return num *3
}
console.log(triple(3423523458503245804))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

const multiply = (num1, num2) =>{
   return num1 * num2
}
console.log(multiply(11,12))
// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

const divisibleBy = (num1, num2) => {
    if(num1 % num2 === 0){
        return `${num1} is evenly divisible by ${num2}`
    } else {
        return "Not Divisble"
    }
}
console.log(divisibleBy(11,5))
// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
    //going to create function assignGrade
    //argument for this function is a number score
    //if statements to check letter grade to specified number
    //returns a letter grade for the score 
const assignGrade = (numberScore) => {
    if(numberScore >= 90){
        return "A Letter Grade"
    } else if(numberScore >= 80){
        return "B Letter Grade"
    } else if(numberScore >= 70){
        return "C Letter Grade"
    } else{
        return "Epic Fail"
    }

}
console.log(assignGrade(69))

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
    //create function isLonger
    //create two spaces for two string arguments
    //create a if statement
    //use string.length method
const isLonger =(string1, string2) => {
    if(string1.length > string2.length){
        return string1
    }else if(string2.length > string1.length){
        return string2
    } else{
        return "Their the same bro"
    }

}
console.log(isLonger("ddwdd","call"))
// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.