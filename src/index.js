import { createDayTodos } from './taskConstructors';
import { createProjectTodos } from './taskConstructors';
import { projects } from './projects';

let activePage = new createDayTodos('today');
activePage.project();
activePage.inputs();
const next = document.querySelectorAll('li');
const buttons = Array.from(next);
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', (e) => {
    displayPage(buttons[i].textContent);
  });
}

const displayPage = (button) => {
  const content = document.querySelector('.content');
  const getdiv = content.querySelector(`.${button}`);
  if (content.contains(getdiv)) {
    const divs = content.querySelectorAll('#group');
    Array.from(divs).forEach((div) => {
      if (div.getAttribute('class') === getdiv.getAttribute('class')) {
        console.log('show');
        div.style.display = 'block';
      } else {
        console.log('hide ');
        div.style.display = 'none';
      }
    });
  } else {
    console.log('me');
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
        createReal(button);
        activePage = new createProjectTodos(button);
        activePage.project();
        activePage.inputs();
    }
  };

  const createReal = (button) => {
    let project = new projects(button);
    return project;
  };
  return { createPage, createReal };
})();

export { displayPage, createProjectPage };
