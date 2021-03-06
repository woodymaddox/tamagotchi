import util from '../helpers/util';

let fun = 100;

const healthyFun = () => {
  fun += 1;
  if (fun > 100) {
    fun = 100;
  }
  util.printToDom('fun-level', fun);
};

const unhealthyFun = () => {
  fun -= 10;
  if (fun < 0) {
    fun = 0;
  }
  util.printToDom('fun-level', fun);
};

const funButtonEvents = () => {
  document.getElementById('funButton').addEventListener('click', healthyFun);
  document.getElementById('unFunButton').addEventListener('click', unhealthyFun);
};

const getFunModule = () => {
  let domString = '';
  domString += '<div id="funSection">';
  domString += '<h3>Fun!!</h3>';
  domString += '<div class="image"><img src="https://vignette.wikia.nocookie.net/tamagotchi/images/6/69/2018P1Purple.jpg/revision/latest?cb=20180912030737" style="width:70%"></div>';
  domString += '<button id="funButton">Play!</button>';
  domString += '<button id="unFunButton">Time out!</button>';
  domString += `<div id="fun-level">Fun Level: ${fun}</div>`;
  domString += '</div>';
  util.printToDom('play', domString);
  funButtonEvents();
};

export default { getFunModule };
