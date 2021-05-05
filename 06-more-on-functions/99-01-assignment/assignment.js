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
const sayHelloCheck = (resultHandler, ...names) => {
  const validateName = name => {
    return typeof name === 'string' ? name : null;
  };

  for (individualName of names) {
    if (validateName(individualName)) {
      resultHandler(individualName);
    }
  }
};

const checkInput = name => {
  alert(`Hello ${name}`);
};

sayHello('Josh');

sayGreeting('Jane', 'Not howdy');

sayHelloStatic();

console.log(sayHelloReturned('JOHNNY'));

sayHelloCheck(checkInput, 'Josh', 'Jane', 'Jill', 'Jack');
