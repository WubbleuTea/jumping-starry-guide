// const movieList = document.getElementById('movie-list');

// // way to get to change styles using the css names.
// movieList.style['background-color'] = 'red';
// movieList.style.display = 'block';

// const userChosenKeyName = 'level';

// // Creating an object
// // creating an object as a const you can not change the object

// let person = {
//   // objects can have strings as key but causes problems
//   // you normally cant acces this using person.first name
//   // you can access that with person['first name']
//   'first name': 'Josh',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   [userChosenKeyName]: '...',
//   // functions in objects are called methods
//   greet: function () {
//     alert('Hi there');
//   },
//   1.5: 'hello'
// };

// // WAYS TO ADD TO AN OBJECT
// // // one way to add to an object is to copy the object and rewrite it
// // // not typical
// // person = {
// //   name: 'Josh',
// //   age: 30,
// //   hobbies: ['Sports', 'Cooking'],
// //   // functions in objects are called methods
// //   greet: function () {
// //     alert('Hi there');
// //   },
// //   isAdmin: true
// // };

// // using dot properties
// person.isAdmin = true;

// // can also override the values in the object if it is already in the object
// person.age = 31;

// // // DELETE
// // // how to delete a property from an object
// // delete person.hobbies;
// // // should never do this but is possible
// // person.hobbies = undefined;
// // // null can be used but leaves the property
// // person.hobbies = null;

// const keyName = 'first name';

// // // Calling the method from the function
// // person.greet();
// console.log(person);
// console.log(person[1.5]);
// console.log('keyName', person[keyName]);

// console.log('first name', person['first name']);
