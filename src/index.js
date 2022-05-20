import { createDayTodos } from './taskConstructors';
import { createProjectTodos } from './taskConstructors';
import { projects } from './projects';
import { setActiveTab, displayPage } from './DOM';

const DefaultactiveButton = (() => {
  const Today = document.querySelector('li');
  Today.addEventListener('click', (e) => {
    setActiveTab(e.target);
    displayPage(Today.textContent);
  });
})();

let activePage = new createDayTodos('today');
activePage.project();
activePage.inputs();

const createProjectPage = (() => {
  const createPage = (button) => {
    switch (button) {
      default:
        activePage = new createProjectTodos(button);
        activePage.project();
        activePage.inputs();
    }
  };

  return { createPage };
})();

export { createProjectPage };
