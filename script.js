window.onload = function(){

console.log("Solution 1")

for (i = 0; i <= 1000; i+=100) {
  console.log(i);
}

console.log("Solution 2")

for (i = 1; i <= 128; i*=2) {
  console.log(i);
}

console.log("Solution 3")

for (i = 0; i <= 10; i+=2) {
  console.log(i);
}

console.log("Solution 4")

for (i = 3; i <= 15; i+=3) {
  console.log(i);
}

console.log("Solution 5")

for (i = 9; i >= 0; i--) {
  console.log(i);
}

console.log("Solution 6")

for (i = 1; i <= 4; i++) {
    for (j = 1; j < 4; j++)
  console.log(i)}

console.log("Solution 7")

for (i = 1; i <= 3; i++) {
    for (j = 0; j < 5; j++)
    console.log(j)}

}


// Easier for me to understand with var names below
// for (numToRepeat = 1; numToRepeat <= 4; numToRepeat++) {
//     for (timesToRepeat = 1; timesToRepeat < 4; timesToRepeat++)
//       console.log(numToRepeat)}
//
//
//
//   for (numToWrite = 1; numToWrite <= 3; numToWrite++) {
//       for (timesToPrint = 0; timesToPrint < 5; timesToPrint++)
//     console.log(timesToPrint)}
