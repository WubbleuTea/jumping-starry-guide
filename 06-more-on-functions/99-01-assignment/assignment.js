const DEFAULT_NAME = 'JAKE';
const DEFAULT_PHRASE = 'HOWDY';

const sayHello = name => {
  console.log('Hi ' + name);
};

const sayGreeting = (name, greeting = DEFAULT_PHRASE) => {
  console.log(`${greeting} ${name}`);
};

const sayHelloStatic = () => {
  console.log('Greetings Joe');
};

const sayHelloReturned = (name = DEFAULT_NAME) => {
  const greeting = 'Hi ' + name;
  return greeting;
};

const checkInput = (greeting, ...names) => {};

sayHello('Josh');

sayGreeting('Jane', 'Not howdy');

sayHelloStatic();

console.log(sayHelloReturned('JOHNNY'));
