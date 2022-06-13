import {
  tasks,
  deletetask as deletetaskFromArray,
  saved,
  deleteTaskFromLocal,
} from './todos-logic';
import { displaycompletedTasks } from './general-display-controller';
import { createProjectPage } from './index';
var moment = require('moment');

const displayTasks = (() => {
  const exist = [];
  const createTask = (task) => {
    const div = document.createElement('div');
    const pending = document.querySelector('.pending');
    pending.append(div);
    div.classList.add('task');
    div.setAttribute('data-task', `${task.title}`);
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    const date = document.createElement('p');
    console.log(task.DueDate);
    if (task.DueDate == '') {
      date.textContent = 'with no date set';
    } else {
      date.textContent = moment(task.DueDate).calendar();
    }

    checkbox.addEventListener('click', (e) => {
      displaycompletedTasks.moveTask(checkbox);
    });
    div.append(checkbox);
    const title = document.createElement('label');
    div.append(title);
    title.textContent = task.title;
    div.append(date);
    const removeIcon = document.createElement('span');
    removeIcon.innerText = 'cancel';
    removeIcon.addEventListener('click', (e) => {
      e.stopPropagation();
      deleteTask(e.target);
    });
    div.append(removeIcon);
  };
  const showTasks = () => {
    tasks.forEach((task) => {
      if (!exist.includes(task.title)) {
        exist.push(task.title);
        createTask(task);
      }
    });
  };
  return { showTasks, createTask };
})();

const displayPage = (button) => {
  const content = document.querySelector('.content');
  const getdiv = content.querySelector(`[data-name="${button}"]`);
  if (content.contains(getdiv)) {
    const divs = content.querySelectorAll('#group');
    Array.from(divs).forEach((div) => {
      if (div.getAttribute('class') === getdiv.getAttribute('class')) {
        div.style.display = 'flex';
      } else {
        div.style.display = 'none';
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
const checkStorage = () => {
  return saved == null ? true : false;
};

const deleteTask = (item) => {
  if (saved == null) {
    tasks.forEach((task) => {
      const taskDiv = item.parentElement.getAttribute('data-task');
      if (task.title == taskDiv) {
        item.parentElement.remove();
        deletetaskFromArray(taskDiv);
      }
    });
  } else {
    saved.forEach((task) => {
      const taskDiv = item.parentElement.getAttribute('data-task');
      if (task.title == taskDiv) {
        item.parentElement.remove();
        deletetaskFromArray(taskDiv);
        deleteTaskFromLocal(taskDiv);
      }
    });
  }
};

const todayLoader = () => {
  if (saved != null) {
    saved.forEach((task) => {
      displayTasks.createTask(task);
    });
  }
};

export { displayTasks, todayLoader, displayPage };
