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