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
