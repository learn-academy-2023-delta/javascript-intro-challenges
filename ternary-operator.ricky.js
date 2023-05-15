// Create a function that determines if a user is old enough to vote (age 18 or older).
var myAge = 27
const oldEnough = (age) => {
    return age >= 18 ? "old enough to vote." : "too young to vote." 
}
//console.log(oldEnough(myAge))

// Create a function that takes in an array of numbers and determines if the number is odd or even.
const checkOddEven = (nums) => {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        nums[i] % 2 === 0 ? result.push(`${nums[i]} is even`) : result.push(nums[i] + " is odd")
    }
    return result;
}
const nums = [1, 2, 3, 4, 5];
console.log(checkOddEven(nums))


