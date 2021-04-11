// uninitialized variable
// let currentResult;
const defaultResult = 0;
let currentResult = defaultResult;

currentResult = ((currentResult + 10) * 3) / 2 - 1;

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;
let errorMessage = 'An Error \n' + 'Occurred';

outputResult(currentResult, calculationDescription);
