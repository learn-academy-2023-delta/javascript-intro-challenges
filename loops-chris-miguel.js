// Create a for loop that logs each number from 1 - 20.
for(i = 1; i < 21; i++) {
  console.log(i);
}
// Create a for loop that logs every other number from 1 - 20.
for(i = 1; i < 21; i += 2) {
  console.log(i);
}

// Create a for loop that logs the result of each number from 1 - 20 tripled.
for(i = 1; i < 21; i++) {
  console.log(i * 3);
}
// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".
for(i = 1; i < 21; i++) {
  if(i % 2 === 0) {
    console.log(i);
  } else {
    console.log("ODD");
  }
}


//------------

const nums = [3, 57, -9, 20, 67]

// Create the code that will log the largest number from the array.

let answer = nums[0]

for(let i = 0; i < nums.length; i++){
    
    if(answer < nums[i]){
      answer = nums[i]
    }
  }
console.log(answer)

// Create the code that will log the smallest number from the array.

let answer1 = nums[0]

for(let i = 0; i < nums.length; i++){
    
  if(answer1 > nums[i]){
    answer1 = nums[i]
  }
}
console.log(answer1)

// Create the code that will log the remainder of each number when divided by 2. Expected output: 1, 1, -1, 0, 1

for(let i = 0; i < nums.length; i++) {
  console.log(nums[i] % 2)
}