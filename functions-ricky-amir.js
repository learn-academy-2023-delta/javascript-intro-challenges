// Write a function named marco that returns "polo".
const marco = () => {
    return "polo"
}
console.log("polo")

//Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
const greeting = (name) => {
    return `Welcome, ${name}!`
}
console.log(greeting("Ricky"))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
const oodOrEven = (number) => {
    if(number === 0) {
        return `${number} is zero`
    } else if(number % 2 === 0){
        return `${number} is even`
    } else if(number % 2 !== 0){
        return `${number} is odd`
    }     
}
console.log(oodOrEven(11))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
const triple = (number) => {
    return number * 3
}
console.log(triple(9))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
const multiply = (num1, num2) => {
    return num1 * num2
}
console.log(multiply(4, 10))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
const divisibleBy = (num1, num2) => {
    if(num1 % num2 === 0){
        return `${num1} is evenly divisible by ${num2}`
    }
}
console.log(divisibleBy(10,5))

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
const assignGrade = (numberScore) => {
    if(numberScore >= 91 && numberScore <= 100){
        return "A+"
    } else if(numberScore >= 81 && numberScore <= 90) {
        return "B+"
    } else if(numberScore >= 71 && numberScore <= 81) {
        return "C+"
    }
}
console.log(assignGrade(72))

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
const isLonger = (text_1, text_2) => {
    if(text_1.length > text_2.length) {
        return text_1             
    } else if (text_1.length < text_2.length){
        return text_2
    }
}
console.log(isLonger("Ricky", "Amir"))

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
const greaterNum = (num1, num2) => {
    if(num1 > num2){
        return num1
    } else if(num1 < num2){
        return num2
    }
}
console.log(greaterNum(5 , 10))

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
const yelling = (text) => {
    return text.toUpperCase()
}
console.log(yelling("rickyyyyyyy"))

// 🏔 Stretch Goals

// The World Translator

// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// Have your function default to returning English.

const helloWorld = (langCode) => {
    if(langCode === "es"){
        return "¡Hola Mundo!"
    }
    if(langCode === "fr"){
        return "Bonjour le monde!"
    }
    if(langCode === "de"){
        return "Hallo Welt!"
    }
    if(langCode === "ja"){
        return "「こんにちは世界」"
    }
    return "Hello World!"
}
console.log(helloWorld("fr"))

// Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
// Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".

const pluralizer = (number, noun) => {
    return `${number} ${noun}`
}
console.log(pluralizer(5, "sheep"))
console.log(pluralizer(3, "goose"))
console.log(pluralizer(7, "people"))
