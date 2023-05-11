// Javascript Arrays Challenge Brandon/Michael

var groceryList = ["chips", "dip", "cookies"]

//Write the code that will add "soda" to the end of the original array.

console.log(groceryList.push("soda"))
console.log(groceryList)

//Write the code that will add "granola" to the end of array without altering the original array.

console.log(groceryList.pop())
console.log(groceryList.push("granola"))
console.log(groceryList)

//Write the code that will return a subset of the array containing only "chips" and "dip".

console.log(groceryList.slice(0,2))

//Write the code that will add "beans" to the "chips" and "dip" array.

var chipsDips = groceryList.slice(0,2)
console.log(chipsDips.push("beans"))
console.log(chipsDips)

// Second Challenge

var numSet = [2, 13, 6, 8, 4, 2]

// Write the code that finds the index of the first appearance of the number 2.

console.log(numSet[0])

// Write the code that finds the index of the last appearance of the number 2.

console.log(numSet.reverse())
console.log(numSet[5])

// Write the code that returns the number at the third index.

console.log(numSet.reverse())
console.log(numSet.indexOf(8))