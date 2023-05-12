// Write a function named marco that returns "polo".
const marco = () => {
    return "polo"
}
console.log(marco())

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
const greeting = (personName) => {
    return `Welcome, ${personName}!` 
}
console.log(greeting("Jesus"))
// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
const oddOrEven = (number) => {
    if(number % 2 === 0) {
        return "even"
    }
    else if (number % 2 !== 0) {
        return "odd"
    }
    else ("something went wrong")
}
console.log(oddOrEven(1))
console.log(oddOrEven(2))
console.log(oddOrEven(3))


// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
const triple = (number) => {
   return number * 3
}
console.log(triple(1))


// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
const multiply = (num1, num2) => {
    return num1 * num2
}
console.log(multiply(2, 2))
// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
const divisibleBy = (num3, num4) => {
    if(num3 % num4 === 0) {
       return `${num3} is evenly divisible by ${num4}`
    }
    else(num3 % num4 !== 0)
       return `${num3} is not evenly divisible by ${num4}`
}
console.log(divisibleBy(10, 5))

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
const assignGrade = (score) => {
    if(score >= 90){
        return "A"
    } 
    else if(score >=80 && score <= 89){
        return "B"
    }
    else if(score >=70 && score <= 79){
        return "C"
    }
    else if(score >=60 && score <= 69){
        return "D"
    }
    else {
        return "you failed"
    }

    }
console.log(assignGrade(79))
// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
const isLonger = (string1, string2) => {
    if(string1.length > string2.length){
        return string1
    }
    else if(string2.length > string1.length) {
        return string2
    }
    else{
        return "They are equall!!"
    }
}
console.log(isLonger("sup", "padge"))

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
const greaterNum = (num5, num6) => {
    if(num5 > num6){
        return num5
    }
    else if(num6 > num5) {
        return num6
    }
    else{
        return "They are equall!!"
    }
}
console.log(greaterNum(6, 3))

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
const yelling = (string) => {
    return string.toUpperCase()
}
console.log(yelling("padge"))

