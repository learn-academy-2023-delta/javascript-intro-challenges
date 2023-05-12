// Write a function named marco that returns "polo".

// Write function named marco.
const marco = () => {
    // Returns with polo.
    return "polo"
}

console.log(marco())

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

// Write a function named greeting.
const greeting = (personName) => {
    // Returns with Welcome, "name"!
    return `Welcome, ${personName}!`
}

console.log(greeting("Kevin"))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

// Write a function named oddOrEven
const oddOrEven = (num) => {
    // Argument returns out odd.
    if (num % 2 !== 0) {
        return `${num} is odd.`
    // Argument returns out even.
    } else if (num % 2 === 0){
        return `${num} is even.`
    // Catch all.
    } else {
        return "Something went wrong."
    }
 }

    console.log(oddOrEven(1.5))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

const triple = (num) => {
    return num * 3
}

console.log(triple(3))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

const multiply = (num1, num2) => {
    return num1*num2
}

console.log(multiply(10, 10))


// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.