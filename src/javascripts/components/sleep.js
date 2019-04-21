import util from '../helpers/util';

let sleep = 100;

const deepSleep = () => {
  sleep += 1;
  if (sleep > 100) {
    sleep = 100;
  }
  util.printToDom('sleep-level', sleep);
};

const wideAwake = () => {
  sleep -= 10;
  if (sleep < 0) {
    sleep = 0;
  }
  util.printToDom('sleep-level', sleep);
};

const sleepButtonEvents = () => {
  document.getElementById('sleepButton').addEventListener('click', deepSleep);
  document.getElementById('wakeButton').addEventListener('click', wideAwake);
};

const getSleepModule = () => {
  let domString = '';
  domString += '<div id="sleepSection">';
  domString += '<h3>Sleep!!</h3>';
  domString += '<button id="sleepButton">go to sleep!</button>';
  domString += '<button id="wakeButton">wake up!</button>';
  domString += `<div id="sleep-level">Sleep Level: ${sleep}</div>`;
  domString += '</div>';
  util.printToDom('sleep', domString);
  sleepButtonEvents();
};

export default { getSleepModule };
