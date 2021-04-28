const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;

let gameisRunning = false;

const getPlayerChoice = function () {
  const selection = prompt(`${ROCK}, ${PAPER}, ${SCISSORS}`, '').toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

startGameBtn.addEventListener('click', function startGame() {
  if (gameisRunning) {
    return;
  }
  gameisRunning = true;
  console.log('Game is starting...');
  const playerSelection = getPlayerChoice();
  console.log(playerSelection);
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
