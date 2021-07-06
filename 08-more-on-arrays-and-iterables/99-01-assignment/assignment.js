const numbs = [8, 90, 72, 1, 2, 4, 5, 7, 34, 28, 32];

// ONE
const greaterThanFive = numbs.filter(num => num > 5);

console.log('greaterThanFive', greaterThanFive);

const numbsObject = numbs.map((num, idx) => {
  return { index: idx, number: num };
});

console.log('numbsObject', numbsObject);

const multiplyNumbs = numbs.reduce(
  (previousValue, currentValue) => previousValue * currentValue
);

console.log('multiplyNumbs', multiplyNumbs);

// TWO/THREE
const findMinMax = numbsArray => {
  let largestNumber = 0;
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
};

const minNum = findMinMax(numbs)[0];
const maxNum = findMinMax(numbs)[1];
console.log('min/max', minNum, maxNum);

// FOUR
const noRepeats = (numbsArray, newNumb) => {
  const inArray = numbsArray.find(num => num === newNumb);
  if (!inArray) {
    numbsArray.push(newNumb);
  }
  return numbsArray;
};

console.log('noRepeats', noRepeats(numbs, 27));
