const originalResult = 18;
let result = originalResult;
let userNumInputAdd = 20;
let userNumInputSubtract = 8;
let userNumInputMultiply = 6;
let userNumInputDivide = 2;

result = result + userNumInputAdd;
result = result - userNumInputSubtract;
result = result * userNumInputMultiply;
result = result / userNumInputDivide;

window.alert(
  `The User inputs were add: ${userNumInputAdd}, subract: ${userNumInputSubtract}, multiply: ${userNumInputMultiply}, divide: ${userNumInputDivide}`
);

window.alert(
  `The Result: ${result} \n (${originalResult} + ${userNumInputAdd} - ${userNumInputSubtract}) * ${userNumInputMultiply} / ${userNumInputDivide}`
);
