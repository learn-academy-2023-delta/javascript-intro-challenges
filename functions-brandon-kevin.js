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

const divisibleBy = (num1, num2) => {
    
    if(num1 % num2 === 0) {
        return `${num1} is evenly divisible by ${num2}`
    } else if (num1 % num2 !==0) {
        return `${num1} is not evenly divisible by ${num2}`
    } else {
        return "Something seems fishy.."
    }
}

console.log(divisibleBy(10, 5))

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

// >= 90 is A
// >= 80 < 90 is B
// >=70 < 80 is C
// >= 60 < 70 is D
// > 60 is F
const assignGrade = (numScore) => {
    
    if(numScore >= 90) {
        return "You got an A!"
    } else if (numScore >= 80 && numScore < 90) {
        return "You got a B!"
    } else if (numScore >= 70 && numScore < 80) {
        return "You got a C!"
    } else if (numScore >= 60 && numScore < 70) {
        return "You got a D!"
    } else if (numScore < 60) {
        return "You got a F!"
    } else {
        return "Something seems fishy.."
    }
}

console.log(assignGrade(91))

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

const isLonger = (str1, str2) => {
    if(str1.length > str2.length) {
        return `The string ${str1} is longer than ${str2}`
    } else if(str2.length > str1.length) {
        return `The string ${str2} is longer than ${str1}`
    } else if(str2.length === str1.length) {
        return `The string ${str2} is the same length as ${str1}`
    } else {
        return "Something seems fishy.."
    }
}
console.log(isLonger("hi", "hi"))

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

const greaterNum = (num1, num2) => {
    if(num1 > num2) {
        return `${num1} is greater than ${num2}`
    } else if(num1 < num2) {
        return `${num2} is greater than ${num1}`
    } else if(num1 === num2) {
        return `The two numbers are equal`
    } else {
        return "Something seems fishy.."
    }
}
console.log(greaterNum(100, "hi"))
// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

const yelling = (str1) => {
    return str1.toUpperCase()
}

console.log(yelling("heyy!!!!!!"))

// Stretch Goals
// The World Translator

// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// Have your function default to returning English.
// The Pluralizer

// Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
// Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".
// pluralizer(5, "cat")
// // output: "5 cats"

// pluralizer(1, "dog")
// // output: "1 dog"

// pluralizer(9, "dog")
// // output: "9 dogs"

// pluralizer(1, "people")
// // output: "1 person"

// pluralizer(3, "people")
// // output: "3 people"

