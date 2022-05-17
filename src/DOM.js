import { tasks } from './inbox';

const displayTasks = (() => {
  const container = document.querySelector('.pending');
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
          displaycompletedTasks.moveTask(checkbox);
        });
        div.append(checkbox);
        const title = document.createElement('label');
        div.append(title);
        title.textContent = task.title;
      }
    });
  };
  return { showTasks };
})();

const displaycompletedTasks = (() => {
  const pending = document.querySelector('.pending');
  const completed = document.querySelector('.completed');
  const moveTask = (input) => {
    if (input.parentElement.parentElement.getAttribute('class') == 'pending') {
      completed.append(input.parentElement);
    } else {
      pending.append(input.parentElement);
    }
  };
  return { moveTask };
})();

export { displayTasks };
