const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const randomNumberTwo = Math.random(); // produces random number between 0 (including) and 1 (excluding)

const NUMBER_ARRAY = [1, 7, 9, 10, 22, 99, 101, 209];

// if (randomNumber > 0.7) {
//   alert('You have reached a greater number');
//   console.log(randomNumber);
//   greaterThan = true;
// }
console.log(randomNumber, randomNumberTwo);
// if (randomNumber > 0.7 && randomNumberTwo > 0.7) {
//   alert('TWO NUMBERS ARE HIGHER!');
// } else if (randomNumber < 0.2 || randomNumberTwo < 0.2) {
//   alert('One has fallen');
// }
if (
  (randomNumber > 0.7 && randomNumberTwo > 0.7) ||
  randomNumber < 0.2 ||
  randomNumberTwo < 0.2
) {
  alert('YOU GOT LUCKY');
}

// for (let i = 0; i < NUMBER_ARRAY.length; i++) {
//   console.log('First "for" loop ', NUMBER_ARRAY[i]);
// }

for (let i = NUMBER_ARRAY.length - 1; i >= 0; i--) {
  console.log('First "for" loop ', NUMBER_ARRAY[i]);
}

for (const singleNumber of NUMBER_ARRAY) {
  console.log('Second "for" loop ', singleNumber);
}

// // ALSO POSSIBLE SOLUTION
// let counter = 0;
// while (counter < NUMBER_ARRAY.length) {
//   console.log('"While" loop ', NUMBER_ARRAY[counter]);
//   counter++;
// }
