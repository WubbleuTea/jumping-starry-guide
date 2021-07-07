// Creating an object
// creating an object as a const you can not change the object

let person = {
  name: 'Josh',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  // functions in objects are called methods
  greet: function () {
    alert('Hi there');
  }
};

// WAYS TO ADD TO AN OBJECT
// // one way to add to an object is to copy the object and rewrite it
// // not typical
// person = {
//   name: 'Josh',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   // functions in objects are called methods
//   greet: function () {
//     alert('Hi there');
//   },
//   isAdmin: true
// };

// using dot properties
person.isAdmin = true;

// can also override the values in the object if it is already in the object
person.age = 31;

// // DELETE
// // how to delete a property from an object
// delete person.hobbies;
// // should never do this but is possible
// person.hobbies = undefined;
// // null can be used but leaves the property
// person.hobbies = null;

// // Calling the method from the function
// person.greet();
console.log(person);
