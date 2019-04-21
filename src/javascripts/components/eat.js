import util from '../helpers/util';

let eating = 100;

const healthyFood = () => {
  eating += 1;
  if (eating > 100) {
    eating = 100;
  }
  util.printToDom('strength-level', eating);
};

const unhealthyFood = () => {
  eating -= 10;
  if (eating < 0) {
    eating = 0;
  }
  util.printToDom('eating-level', eating);
};

const eatButtonEvents = () => {
  document.getElementById('healthyButton').addEventListener('click', healthyFood);
  document.getElementById('unhealthyButton').addEventListener('click', unhealthyFood);
};

const getEatModule = () => {
  let domString = '';
  domString += '<div id="eatSection">';
  domString += '<h3>EAT!!</h3>';
  domString += '<button id="healthyButton">Nourish!</button>';
  domString += '<button id="unhealthyButton">Mal Nourish!</button>';
  domString += `<div id="eating-level">Eating Level: ${eating}</div>`;
  domString += '</div>';
  util.printToDom('eat', domString);
  eatButtonEvents();
};

export default { getEatModule };
