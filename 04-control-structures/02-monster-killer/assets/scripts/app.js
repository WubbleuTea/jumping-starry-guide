const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

const enteredValue = prompt('Maximum life for you and the monster.', '100');

let chosenMaxLife = parseInt(enteredValue);
let battleLog = [];
let lastLoggedEntry;

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
  chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function writeToLog(ev, val, monsterHealth, playerHealth) {
  // maybe include what game you are on
  let logEntry = {
    event: ev,
    value: val,
    finalMonsterHealth: monsterHealth,
    finalPlayerHealth: playerHealth
  };

  switch (ev) {
    case LOG_EVENT_PLAYER_ATTACK:
      logEntry.target = 'MONSTER';
      break;
    case LOG_EVENT_PLAYER_STRONG_ATTACK:
      logEntry = {
        event: ev,
        value: val,
        target: 'MONSTER',
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
      };
      break;
    case LOG_EVENT_MONSTER_ATTACK:
      logEntry = {
        event: ev,
        value: val,
        target: 'PLAYER',
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
      };
      break;
    case LOG_EVENT_PLAYER_HEAL:
      logEntry = {
        event: ev,
        value: val,
        target: 'PLAYER',
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
      };
      break;
    case LOG_EVENT_GAME_OVER:
      logEntry = {
        event: ev,
        value: val,
        target: 'NONE - GAME IS OVER',
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
      };
      break;
    default:
      logEntry = {};
      return;
  }

  battleLog.push(logEntry);
}

// if (ev === LOG_EVENT_PLAYER_ATTACK) {
//   logEntry = {
//     event: ev,
//     value: val,
//     target: 'MONSTER',
//     finalMonsterHealth: monsterHealth,
//     finalPlayerHealth: playerHealth
//   };
// } else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK) {
//   logEntry = {
//     event: ev,
//     value: val,
//     target: 'MONSTER',
//     finalMonsterHealth: monsterHealth,
//     finalPlayerHealth: playerHealth
//   };
// } else if (ev === LOG_EVENT_MONSTER_ATTACK) {
//   logEntry = {
//     event: ev,
//     value: val,
//     target: 'PLAYER',
//     finalMonsterHealth: monsterHealth,
//     finalPlayerHealth: playerHealth
//   };
// } else if (ev === LOG_EVENT_PLAYER_HEAL) {
//   logEntry = {
//     event: ev,
//     value: val,
//     target: 'PLAYER',
//     finalMonsterHealth: monsterHealth,
//     finalPlayerHealth: playerHealth
//   };
// } else if (ev === LOG_EVENT_GAME_OVER) {
//   logEntry = {
//     event: ev,
//     value: val,
//     target: 'NONE - GAME IS OVER',
//     finalMonsterHealth: monsterHealth,
//     finalPlayerHealth: playerHealth
//   };
// } else {
//   return;
// }
// ALSO A VALID WAY TO SET THE LOG ENTRIES.
// the .target adds to the object instead of trying to create the entire object in many different if statements.
// function writeToLog(ev, val, monsterHealth, playerHealth) {
//   let logEntry = {
//     event: ev,
//     value: val,
//     target: 'MONSTER',
//     finalMonsterHealth: monsterHealth,
//     finalPlayerHealth: playerHealth
//   };

//   if (ev === LOG_EVENT_PLAYER_ATTACK || ev === LOG_EVENT_PLAYER_STRONG_ATTACK) {
//       logEntry.target = 'MONSTER',
//   } else if (ev === LOG_EVENT_MONSTER_ATTACK || ev === LOG_EVENT_PLAYER_HEAL) {
//     logEntry.target = 'PLAYER',
//   } else if (ev === LOG_EVENT_GAME_OVER) {
//     logEntry.target = 'GAME OVER'
//   } else {
//     return;
//   }
//   battleLog.push(logEntry);
// }

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  // Bonus life only exists once (can add functionality for that)
  resetGame(chosenMaxLife);
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  writeToLog(
    LOG_EVENT_MONSTER_ATTACK,
    playerDamage,
    currentMonsterHealth,
    currentPlayerHealth
  );

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert('You would be dead but the bonus life saved you');
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You won');
    writeToLog(
      LOG_EVENT_GAME_OVER,
      'PLAYER WON',
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You Lost');
    writeToLog(
      LOG_EVENT_GAME_OVER,
      'MONSTER WON',
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (currentPlayerHealth <= 0 || currentMonsterHealth <= 0) {
    alert('This battle is a draw');
    writeToLog(
      LOG_EVENT_GAME_OVER,
      'THIS GAME WAS A DRAW!',
      currentMonsterHealth,
      currentPlayerHealth
    );
  }

  if (currentPlayerHealth <= 0 || currentMonsterHealth <= 0) {
    alert(
      'Game is reseting! If you used your BONUS LIFE at any time that will not reset.'
    );
    reset();
  }
}

function attackMonster(mode) {
  const maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
  const logEvent =
    mode === MODE_ATTACK
      ? LOG_EVENT_PLAYER_ATTACK
      : LOG_EVENT_PLAYER_STRONG_ATTACK;

  // if (mode === MODE_ATTACK) {
  //   maxDamage = ATTACK_VALUE;
  //   logEvent = LOG_EVENT_PLAYER_ATTACK;
  // } else if (mode === MODE_STRONG_ATTACK) {
  //   maxDamage = STRONG_ATTACK_VALUE;
  //   logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
  // }

  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  writeToLog(logEvent, damage, currentMonsterHealth, currentPlayerHealth);
  endRound();
}

function attackHandler() {
  attackMonster(MODE_ATTACK);
}

function strongAttackHandler() {
  attackMonster(MODE_STRONG_ATTACK);
}

function healPlayerHandler() {
  let healValue;
  if (currentPlayerHealth > chosenMaxLife - HEAL_VALUE) {
    alert(
      "You can't heal more than the max health value.\nYour health will be healed up to max health and the monster will attack you."
    );
    healValue = chosenMaxLife - currentPlayerHealth;
  } else if (currentPlayerHealth <= chosenMaxLife - HEAL_VALUE) {
    healValue = HEAL_VALUE;
  }
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  writeToLog(
    LOG_EVENT_PLAYER_HEAL,
    healValue,
    currentMonsterHealth,
    currentPlayerHealth
  );

  endRound();
}

function printLogHandler() {
  // decrement in the {}
  // for (let i =10; i > 0;) {
  //   i--;
  //   console.log(i)
  // }

  // while loop
  // let j = 0;
  // while (j < 3) {
  //   console.log('-----------')
  // }

  // do-while
  // also Labeled expression
  let j = 0;
  outerWhile: do {
    console.log('Outer', j);
    innerFor: for (let k = 0; k < 5; k++) {
      //lets us break the outer do-while loop within the inner loop
      if (k === 3) {
        break outerWhile;
        // continue outerWhile //creates an infinite loop because we are not going to j++
      }
      console.log('Inner', k);
    }
    j++;
  } while (j < 3);

  // normal for loop
  // for (let i = 0; i < 3; i++) {
  //   console.log('----------')
  // }

  //for loop using length of array/object (gives you access to index)
  // for (let i = 0; i < battleLog.length; i++) {
  //   console.log(battleLog[i]);
  // }

  // for-of loop (no access to index)
  // index can be created outside of for-of loop
  let i = 0;
  for (const logEntry of battleLog) {
    if ((!lastLoggedEntry && lastLoggedEntry !== 0) || lastLoggedEntry < i) {
      console.log(`#${i}`);
      // for-in loop
      for (const key in logEntry) {
        //the bracket is grabing the value of the key
        console.log(`${key} => ${logEntry[key]}`);
      }
      lastLoggedEntry = i;
      break;
    }
    i++;
  }
  console.log(battleLog);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);
