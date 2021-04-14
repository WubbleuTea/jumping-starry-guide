const task3Element = document.getElementById('task-3');

function firstAlert() {
  alert('This is the first alert.');
}

function secondAlert(name) {
  alert(`Hi ${name}, you made it to the second alert!`);
}

task3Element.addEventListener('click', firstAlert);

function threeString(partOne, partTwo, partThree) {
  let finalString = `${partOne} ${partTwo} ${partThree}`;
  return finalString;
}

firstAlert();
secondAlert('Josh');
alert(threeString('You', 'were', 'here!'));
