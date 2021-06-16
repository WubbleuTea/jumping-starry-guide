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

// console.log(personalData[0]);

// ADD AND REMOVING ELEMENTS
const hobbies = ['Cooking', 'Sports'];
console.log(hobbies);

// Adds item to end of array
// Returns a number which is the length of the array
hobbies.push('Reading');
// Adds item to beginning of array.
// Returns a number which is the length of the array
hobbies.unshift('Coding');
// Removes the last element from an Array
// // hobbies.pop()
// Can save the value that is being popped in a variable
const poppedValue = hobbies.pop();
// Removes the first element from an Array
hobbies.shift();

console.log(hobbies);

hobbies[1] = 'CHANGED';
hobbies[5] = 'FIFTH';

console.log(hobbies, hobbies[4]);
