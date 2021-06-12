const numbers = [1, 2, 3];
console.log(numbers);

// const moreNumbers = new Array('Hi', 'welcome'); // []
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

// // Turns iterables into arrays
// const moreNumbers = Array.from('Hi!');
// console.log(moreNumbers);

const listItems = document.querySelectorAll('li');

console.log(listItems);

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);

// Arrays can hold same types of data
const hobbies = ['Cooking', 'Sports'];

//  Arrays can also hold mixed types of data
const personalData = [30, 'Josh', { moreDetail: [] }];

// Nested Arrays ALSO known as multi dimension
const analyticsData = [
  [1, 1.6],
  [-5.4, 2.1]
];

for (const data of analyticsData) {
  for (const dataPoint of data) {
    console.log(dataPoint);
  }
}

console.log(personalData[0]);
