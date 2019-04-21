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
  domString += '<div class="image"><img src="https://vignette.wikia.nocookie.net/tamagotchi/images/6/69/2018P1Purple.jpg/revision/latest?cb=20180912030737" style="width:70%"></div>';
  domString += '<button id="healthyButton">Eat!</button>';
  domString += '<button id="unhealthyButton">Starve!</button>';
  domString += `<div id="eating-level">Eating Level: ${eating}</div>`;
  domString += '</div>';
  util.printToDom('eat', domString);
  eatButtonEvents();
};

export default { getEatModule };
