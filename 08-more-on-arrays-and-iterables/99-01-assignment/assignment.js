const numbs = [8, 90, 72, 1, 2, 4, 5, 7, 34, 28, 32];

// ONE
const greaterThanFive = numbs.filter(num => num > 5);

console.log('greaterThanFive', greaterThanFive);

// // My solution
// const numbsObject = numbs.map((num, idx) => {
//   return { index: idx, number: num };
// });

// Possible solution
const numbsObject = numbs.map((num, idx) => ({ index: idx, number: num }));
console.log('numbsObject', numbsObject);

const multiplyNumbs = numbs.reduce(
  (previousValue, currentValue) => previousValue * currentValue,
  1
);

console.log('multiplyNumbs', multiplyNumbs);

// TWO/THREE
// ... here is a rest parameter
function findMinMax(...numbsArray) {
  let largestNumber = numbsArray[0];
  let smallestNumber = numbsArray[0];
  numbsArray.forEach(num => {
    if (num < smallestNumber) {
      smallestNumber = num;
    } else if (num > largestNumber) {
      largestNumber = num;
    }
  });

  let answerArray = [smallestNumber, largestNumber];
  return answerArray;
}

// ... here is spread operator used to spread elements of array into a list of arguments.
const [minNum, maxNum] = findMinMax(...numbs);
console.log('min/max', minNum, maxNum);

// FOUR
// // My solution
// const noRepeats = (numbsArray, newNumb) => {
//   const inArray = numbsArray.find(num => num === newNumb);
//   if (!inArray) {
//     numbsArray.push(newNumb);
//   }
//   return numbsArray;
// };

// console.log('noRepeats', noRepeats(numbs, 27));

// possible other solution
const noRepeatSet = new Set();
noRepeatSet.add(10);
noRepeatSet.add(10);
noRepeatSet.add(9);
noRepeatSet.add(8);
noRepeatSet.add(10);

console.log(noRepeatSet);
