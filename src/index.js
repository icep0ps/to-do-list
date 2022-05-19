import { createDayTodos } from './taskConstructors';
import { createProjectTodos } from './taskConstructors';
import { projects } from './projects';
import { setActiveTab } from './DOM';

const activeButton = (() => {
  const li = document.querySelectorAll('li');
  const buttons = Array.from(li);
  function getButton() {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', (e) => {
        setActiveTab(e.target);
        displayPage(buttons[i].textContent);
      });
    }
  }
  return { getButton };
})();

let activePage = new createDayTodos('today');
activePage.project();
activePage.inputs();
activeButton.getButton();

const displayPage = (button) => {
  const content = document.querySelector('.content');
  const getdiv = content.querySelector(`[data-name="${button}"]`);
  if (content.contains(getdiv)) {
    const divs = content.querySelectorAll('#group');
    Array.from(divs).forEach((div) => {
      if (div.getAttribute('class') === getdiv.getAttribute('class')) {
        div.style.display = 'flex';
        activeButton.getButton();
      } else {
        div.style.display = 'none';
        activeButton.getButton();
      }
    });
  } else {
    const hide = content.querySelectorAll('#group');
    hide.forEach((div) => {
      div.style.display = 'none';
    });
    createProjectPage.createPage(button);
  }
};

const createProjectPage = (() => {
  const createPage = (button) => {
    switch (button) {
      default:
        activePage = new createProjectTodos(button);
        activePage.project();
        activePage.inputs();
        activeButton.getButton();
    }
  };

  return { createPage };
})();

export { displayPage, createProjectPage };
