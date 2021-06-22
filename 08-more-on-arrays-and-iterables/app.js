// const numbers = [1, 2, 3];
// console.log(numbers);

// // const moreNumbers = new Array('Hi', 'welcome'); // []
// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of(1, 2);
// // console.log(yetMoreNumbers);

// // // Turns iterables into arrays
// // const moreNumbers = Array.from('Hi!');
// // console.log(moreNumbers);

// const listItems = document.querySelectorAll('li');

// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// // Arrays can hold same types of data
// const hobbies = ['Cooking', 'Sports'];

// //  Arrays can also hold mixed types of data
// const personalData = [30, 'Josh', { moreDetail: [] }];

// // Nested Arrays ALSO known as multi dimension
// const analyticsData = [
//   [1, 1.6],
//   [-5.4, 2.1]
// ];

// for (const data of analyticsData) {
//   for (const dataPoint of data) {
//     console.log(dataPoint);
//   }
// }

// // console.log(personalData[0]);

// // ADD AND REMOVING ELEMENTS
// const hobbies = ['Cooking', 'Sports'];
// console.log(hobbies);

// // Adds item to end of array
// // Returns a number which is the length of the array
// hobbies.push('Reading');
// // Adds item to beginning of array.
// // Returns a number which is the length of the array
// hobbies.unshift('Coding');
// // Removes the last element from an Array
// hobbies.pop()
// // Can save the value that is being popped in a variable
// const poppedValue = hobbies.pop();
// // Removes the first element from an Array
// hobbies.shift();

// console.log(hobbies);

// hobbies[1] = 'CHANGED';
// // if you hard code a change to an index not in the current arry it will insert it where you want to but add empty elements into the array
// hobbies[5] = 'FIFTH';

// console.log(hobbies, hobbies[4]);

// // at index 1 delete none and insert the third argument to become the new index that you put in the first argument.
// hobbies.splice(1, 0, 'Good Food');
// console.log('spliced hobbies', hobbies);

// // splce returns the removed elements
// const removedElements = hobbies.splice(0, 1);
// console.log('spliced deleted hobbies', hobbies);
// console.log('removed elements ', removedElements);

// //if you use negative numbers as the index number splice will look from the end and not the beginning
// const removedElementsNegative = hobbies.splice(-1, 1);
// console.log('spliced deleted negative hobbies', hobbies);
// console.log('removed elements negative', removedElementsNegative);

// // splice without a delete count it deletes that item and all the items after the index number.
// hobbies.splice(1)

// const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
// // // both values are changed because arrays are reference values and are updated
// // const storedResults = testResults;

// // // however if you slice the array then it will only ever reference the original array
// // // slice with no values give you the full array
// // const storedResults = testResults.slice();

// // // you can include numbers in slice to take a certain range
// // // can use negative intergers
// // const storedResults = testResults.slice(0, 2);

// // // if you only put one number it takes that place to the end
// // const storedResults = testResults.slice(2);

// // concat takes an array and adds it to another unlinke push.
// // push does this [1,2,3, [4,5,6]]
// // concat does this [1,2,3,4,5,6]
// // concat returns a new array
// const storedResults = testResults.concat([3.99, 2]);
// testResults;

// testResults.push(5.91);

// // slice returns a brand new array
// console.log(testResults, storedResults);

// // if you dont want the index and just want to see if the array has a value.  Returns true or false.
// console.log('includes', testResults.includes(10.99));
// // These do the same thing! Checking to see if the array inclues a value
// console.log('index of', testResults.indexOf(10.99) !== -1);

// // finds the index of the value you put in
// // If an array has multiple of the same value then it will only find the first one.
// // If index of does not find anything then it returns -1
// console.log(testResults.indexOf(1.5));

// // starts from the right and searches the array backwards.
// // If an array has multiple of the same value then it will only find the first one.
// // the Index starts with 0 as the far right. NOT the index it is on the array
// console.log(testResults.lastIndexOf(1.5));

// // index of Works well with primitave values but not reference values
// // If index of does not find anything then it returns -1
// const personData = [{ name: 'Josh' }, { name: 'Josue' }];
// console.log(personData.indexOf({ name: 'Josue' }));

// const josue = personData.find((person, idx, persons) => {
//   return person.name === 'Josue';
// });

// josue.name = 'Billy';

// console.log(josue, personData);

// const joshIndex = personData.findIndex((person, idx, persons) => {
//   return person.name === 'Josh';
// });

// console.log(joshIndex);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// for (const price of prices) {
//   taxAdjustedPrices.push(price * (1 + tax));
// }

// // is like a for of but has an index
// prices.forEach((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//   taxAdjustedPrices.push(priceObj);
// });

// console.log(prices, taxAdjustedPrices);

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
// map transform an array easier than for/forEach
// must return for each iteration.
const taxAdjustedPrices = prices.map((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
  return priceObj;
});

console.log(prices, taxAdjustedPrices);
