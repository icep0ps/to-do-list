import {
  tasks,
  deletetask as deletetaskFromArray,
  saved,
  deleteTaskFromLocal,
} from './todos-logic';
import { displaycompletedTasks } from './general-display-controller';
import { createProjectPage } from './index';

const displayTasks = (() => {
  const exist = [];
  const createTask = (task) => {
    const div = document.createElement('div');
    const pending = document.querySelector('.pending');
    pending.append(div);
    div.classList.add('task');
    div.setAttribute('data-task', `${task.title}`);
    const con = document.createElement('div');
    div.append(con);
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    const date = document.createElement('p');
    if (task.date == '') {
      date.textContent = 'no date';
    } else {
      date.textContent = task.DueDate;
    }
    checkbox.addEventListener('click', (e) => {
      displaycompletedTasks.moveTask(checkbox);
    });
    con.append(checkbox);
    const title = document.createElement('label');
    con.append(title);
    title.textContent = task.title;
    div.append(date);
    const removeIcon = document.createElement('img');
    removeIcon.setAttribute('src', '/src/img/icons8-xbox-x-30.png');
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
