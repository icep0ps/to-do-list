import { tasks, deletetask as deletetaskFromArray, saved } from './todos-logic';
import { displaycompletedTasks } from './general-display-controller';

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
    const date = document.createElement('input');
    date.setAttribute('type', 'date');
    date.textContent = 'No Date';
    checkbox.addEventListener('click', (e) => {
      displaycompletedTasks.moveTask(checkbox);
    });
    div.append(checkbox);
    const title = document.createElement('label');
    div.append(title);
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
        console.log(task.title);
        createTask(task);
      }
    });
  };
  return { showTasks, createTask };
})();

const deleteTask = (item) => {
  tasks.forEach((task) => {
    const taskDiv = item.parentElement.getAttribute('data-task');
    if (task.title == taskDiv) {
      item.parentElement.remove();
      deletetaskFromArray(taskDiv);
    }
  });
};

const todayLoader = () => {
  if (saved != null) {
    saved.forEach((task) => {
      displayTasks.createTask(task);
    });
  }
};

export { displayTasks, todayLoader };
