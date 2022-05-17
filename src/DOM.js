import { tasks } from './inbox';

const container = document.querySelector('.tasks');
const exist = [];

const showTasks = () => {
  tasks.forEach((task) => {
    if (!exist.includes(task.title)) {
      exist.push(task.title);
      const div = document.createElement('div');
      container.append(div);
      div.classList.add('task');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.addEventListener('click', (e) => {
        moveTask(checkbox);
      });
      div.append(checkbox);
      const title = document.createElement('label');
      div.append(title);
      title.textContent = task.title;
    }
  });
};
const completed = document.querySelector('.completed');

const moveTask = (input) => {
  completed.append(input.parentElement);
};

export { showTasks };
