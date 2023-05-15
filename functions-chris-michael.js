// Write a function named marco that returns "polo".
const marco = () => {
    return "Polo"
}

console.log(marco())



// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
const greeting = (name) => {
    return `Welcome, ${name}!`
}

console.log(greeting("Michael"))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
const oddOrEven = (num) => {
    if (num % 2 === 0 ){
        return "The Number is even."
    } else {
        return "The number is odd."
    }
}

console.log(oddOrEven(3))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
const triple = (number)=>{
    return (number * 3)
}

console.log(triple(5))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
const multiply =(num1,num2) =>{
    return (num1 * num2)
}

console.log(multiply(3,5))
// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
const divisibleBy = (num1, num2) => {
    if(num1 % num2 === 0) {
        return `${num1} is evenly divisible by ${num2}`
    } else { 
        return "The numbers are not evenly divisible"
    }
}
console.log(divisibleBy(16, 5))
// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
const assignGrade = (num) => {
    if(num >= 90) {
        return "You got an A!"
    } else if(num >= 80) {
        return "you got a B!"
    } else if( num >= 70) {
        return "you got a C!"
    } else {
        return "Study more!"
    }
}
console.log(assignGrade(90));
// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
const isLonger = (string1, string2) => {
    if(string1.length > string2.length) {
        return string1;
    } else {
        return string2;
    }
}
console.log(isLonger("chris", "Michael"));
// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
const greaterNum = (num1, num2) => {
    if(num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
console.log(greaterNum(23333, 34999999));
// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
const yelling = (string) => {
    return string.toUpperCase()
}
console.log(yelling("hello"));
// The World Translator

// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// Have your function default to returning English.
// The Pluralizer
const helloWorld =(lang = "en") =>{
  if (lang === "en"){
    return "Hello world!"
  } else if (lang === "es"){
    return "Hola Mundo!"
  } else if (lang === "de"){
    return "Hallo wereld!"
  } else if (lang === "tr"){
    return "Selam Dunya!"
  } else if (lang === "fr"){
    return "Bonjour le monde!"
  } else {
    return "Please enter a valid language"
  }

}
console.log(helloWorld("es"))
// Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
// Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".

const pluralizer =(num, string) =>{
    if (num === 1){
        return `${num} ${string}`
    } else {
        return `${num} ${string}s`
    }

}

console.log(pluralizer(3,"door"))


const pluralizerTwo =(num, string) =>{
   if (string ==="person" && num === 1){
    return `${num} ${string}`
   } else if (string ==="person" && num > 1){
    return `${num} People`
   } else if (string ==="goose" && num ===1){
    return `${num} ${string}`
   } else if (string ==="goose" && num !=1){
    return `${num} geese`
   } else if (string ==="child" && num === 1){
     return `${num} ${string}`
   } else if (string ==="child" && num> 1){
    return `${num} children`
   } else if (num === 1){
    return `${num} ${string}`
} else {
    return "We are not equiped to handle that word. Pay us more"
}
}
console.log(pluralizerTwo(3,"person"))