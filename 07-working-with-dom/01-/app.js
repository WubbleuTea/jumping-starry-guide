const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;

console.log(firstLi);

const section = document.querySelector('section');
const button = document.querySelector('button');

// section.style.backgroundColor = 'blue';

section.className = 'red-bg';

button.addEventListener('click', () => {
  // if (section.className === 'red-bg visable') {
  //   section.className = 'red-bg invisible';
  // } else {
  //   section.className = 'red-bg visable';
  // }

  section.classList.toggle('visible');
  section.classList.toggle('invisible');
});

// const h1 = document.getElementById('main-title');

// h1.textContent = 'Some new title!';
// h1.style.color = 'white';
// h1.style.backgroundColor = 'black';

// const li = document.querySelector('li:last-of-type');

// li.textContent = `${li.textContent} Changed!`;

// const body = document.body;

// // Does not give live changes to the elements (# of items in array)
// // const listItemElements = document.querySelectorAll('li');

// // Gives live changes to the element (# of items in array)
// const listItemElements = document.getElementsByTagName('li');

// for (const listItemEl of listItemElements) {
//   console.dir(listItemEl);
// }
