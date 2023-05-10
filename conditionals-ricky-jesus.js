// Is 34 divided by 3 greater than 67 divided by 2?
if((34 / 3) > (67 / 2)){
    console.log(true)
} else {
    console.log(false)
}
// Does 5 evaluate to the same as "5"?
if(5 == "5") {
    console.log(true)
} else {
    console.log(false)
}
// Does 5 strictly equal "5"?
if(5 === "5") {
    console.log(true)
} else {
    console.log(false)
}
// Does !3 strictly equal 3?
if(3 !== 3){
    console.log(true)
} else {
    console.log(false)
}
// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
if("LEARN".length === 5 && "STUDENT".length === 7) {
    console.log(true)
} else {
    console.log(false)
}
// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
if("LEARN".length === 5 || "STUDENT".length === 10) {
    console.log(true)
} else {
    console.log(false)
}
// Does "LEARN" contain the subset "RN"?
if("LEARN".includes("RN")) {
    console.log(true)
}
// Does "LEARN" contain the subset "rn"?
if("LEARN".includes("rn")) {
    console.log(true)
} else {
    console.log(false)
}
// Does "LEARN"[0] strictly equal "l"?
if("LEARN"[0] === "l") {
    console.log(true)
} else {
    console.log(false)
}
// Modify the code from the previous question to return true.
if("LEARN"[0] === "l" || "LEARN"[0] === "L") {
    console.log(true)
} 
