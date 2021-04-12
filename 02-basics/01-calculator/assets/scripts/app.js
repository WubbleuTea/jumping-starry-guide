// uninitialized variable
// let currentResult;
const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
  const result = num1 + num2;
  return result;
}

currentResult = add(5, 10);

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;
let errorMessage = 'An Error \n' + 'Occurred';

outputResult(currentResult, calculationDescription);
