import { createDayTodos } from './taskConstructors';
import { createProjectTodos } from './taskConstructors';

function clear(button) {
  console.log(button);
  const content = document.querySelector('.content');
  const divs = content.querySelectorAll('div');
  for (let i = 0; i < divs.length; i++) {
    divs[i].remove();
  }
  switch (button) {
    case 'Today':
      let task = new createDayTodos(button);
      task.project();
      break;
    default:
      let project = new createProjectTodos(button);
      project.project();
  }
}

const next = document.querySelectorAll('li');
const buttons = Array.from(next);

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', (e) => {
    clear(buttons[i].textContent);
  });
}

export { clear };
