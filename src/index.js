import { createDayTodos } from './tasks-constructors';
import { createProjectTodos } from './tasks-constructors';
import { setActiveTab, displayPage } from './general-display-controller';

let activePage = new createDayTodos('today');
activePage.project();
activePage.inputs();

const DefaultactiveButton = (() => {
  const Today = document.querySelector('li');
  Today.addEventListener('click', (e) => {
    setActiveTab(e.target);
    displayPage(Today.textContent);
  });
})();

const createProjectPage = (() => {
  const createPage = (button) => {
    activePage = new createProjectTodos(button);
    activePage.project();
    activePage.inputs();
  };

  return { createPage };
})();

export { createProjectPage };
