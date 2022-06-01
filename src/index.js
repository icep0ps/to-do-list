import { createDayTodos } from './tasks-constructors';
import { createProjectTodos } from './tasks-constructors';
import { setActiveTab } from './general-display-controller';
import { todayLoader, displayPage } from './task-display-controller';
import { projectLoader } from './project-display-controller';

let activePage = new createDayTodos('today');
activePage.project();
activePage.inputs();
todayLoader();
projectLoader();

const DefaultactiveButton = (() => {
  const Today = document.querySelector('li');
  Today.addEventListener('click', (e) => {
    setActiveTab(e.target);
    displayPage(Today.textContent);
  });
})();

const createProjectPage = (() => {
  const createPage = (button) => {
    activePage = new createProjectTodos(button.title);
    activePage.project();
    activePage.inputs();
  };

  return { createPage };
})();

export { createProjectPage };
