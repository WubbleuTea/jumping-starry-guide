// // CREATE A NEW SET
// const ids = new Set(['WOAH', 'IT', 'WORKS']);
// //this will not add anything if it is already in the Set
// // If you add a duplicate or delete something not in the SET it will not throw an error
// ids.add(2);
// ids.delete('asiduhf');

// if (ids.has('WOAH')) {
//   ids.delete('WOAH');
// }
// //entries returns an iterable of arrays with the value twice.
// // This is to align with map.entries() which will return two different items in the returned arrays
// for (const entry of ids.entries()) {
//   console.log(entry);
// }

//

// const person1 = { name: 'Max' };
// const person2 = { name: 'Manuel' };

// // CREATE A NEW MAP
// const personData = new Map([[person1, [{ date: 'yesterday', price: 10 }]]]);

// console.log('person1', person1);

// // ADDS DATA TO A MAP
// personData.set(person2, [{ date: 'two weeks ago', price: 100 }]);

// console.log('person2', person2);

// console.log('personData', personData);
// console.log('personData.get(person1)', personData.get(person1));

// // Ways to print out  data
// for (const entry of personData.entries()) {
//   console.log(entry);
// }

// for (const [key, value] of personData.entries()) {
//   console.log(key, value);
// }

// // keys is a function that allows you to access only the keys
// for (const key of personData.keys()) {
//   console.log(key);
// }

// // values is a function that allows you to access only the values
// for (const value of personData.values()) {
//   console.log(value);
// }

// console.log('.size', personData.size);

// WEAK SET
// Use this for data that you are ok letting go during garbage collection.

let person = { name: 'Max' };
const persons = new WeakSet();
persons.add(person);

// ... some operations
// changing the person to null allows it to be garbage collected but we don't know the exact time it will be collected.
person = null;
console.log(persons);

// WEAK MAP
