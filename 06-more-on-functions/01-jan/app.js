const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;

const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameisRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER}, ${SCISSORS}`, '').toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();

  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

// if (cChoice === pChoice) {
//   return RESULT_DRAW;
// } else if (
//   (cChoice === ROCK && pChoice === PAPER) ||
//   (cChoice === PAPER && pChoice === SCISSORS) ||
//   (cChoice === SCISSORS && pChoice === ROCK)
// ) {
//   return RESULT_PLAYER_WINS;
// } else {
//   return RESULT_COMPUTER_WINS;
// }

startGameBtn.addEventListener('click', () => {
  if (gameisRunning) {
    return;
  }

  gameisRunning = true;
  console.log('Game is starting...');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice, playerChoice);
  }

  let message = `You picked ${
    playerChoice || DEFAULT_USER_CHOICE
  } and the computer picked ${computerChoice}, the end result was `;

  if (winner === RESULT_DRAW) {
    message += `a DRAW!`;
  } else if (winner === RESULT_PLAYER_WINS) {
    message += `that the PLAYER WINS!`;
  } else {
    message += `that the COMPUTER WINS!`;
  }

  alert(message);
  gameisRunning = false;
});

// const start = function () {
//   console.log('Game is starting...');
// };

// startGameBtn.addEventListener('click', start);

// function startGame() {
//   console.log('Game is starting...');
// }

// startGameBtn.addEventListener('click', startGame);

// Functions in objects are called methods.
// const person = {
//   name: 'Josh'
//   greet: function greet() {
//     console.log('Hello there!');
//   }
// };

// person.greet();

// NOT RELATED TO THE GAME
// rest operator turns arguments into an array.
const sumUp = (resultHandler, ...numbers) => {
  const validateNumber = number => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const num of numbers) {
    sum += validateNumber(num);
  }
  resultHandler(sum);
};

//
const subtractUp = function () {
  let sum = 0;
  for (const num of arguments) {
    sum -= num;
  }
  return sum;
};

const showResult = result => {
  alert(`The result after adding all numbers is: ${result}`);
};

sumUp(showResult, 1, 2, 3, 4, 5, 6, 7, 8, -100);
console.log(subtractUp(1, 2, 3, 4, 5, 6, 7, 8, -100));
