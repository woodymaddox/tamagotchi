import util from '../helpers/util';

const createMonster = () => {
  let domString = '';

  monster.forEach(() => {
    domString += ' <div id="monster">';
    domString += ' <div class="image"><img src="http://www.tamashell.com/i/monster.png" style="width:70%"></div>';
    domString += ' </div>';
    domString += ' </div>';
  })
  printToDom('main-content', domString);
}
export default { createMonster };
