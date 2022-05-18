import { tasks } from './todos';
import { clear } from './index';
import { createdProjects } from './projects';

const displayTasks = (() => {
  const exist = [];

  const showTasks = () => {
    tasks.forEach((task) => {
      if (!exist.includes(task.title)) {
        exist.push(task.title);
        const div = document.createElement('div');
        const pending = document.querySelector('.pending');
        pending.append(div);
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
  const moveTask = (input) => {
    if (input.parentElement.parentElement.getAttribute('class') == 'pending') {
      const completed = document.querySelector('.completed');
      completed.append(input.parentElement);
    } else {
      const pending = document.querySelector('.pending');
      pending.append(input.parentElement);
    }
  };
  return { moveTask };
})();

const displayProjects = (() => {
  const exist = [];
  const projectList = document.querySelector('.projects');

  const showProjects = () => {
    createdProjects.forEach((project) => {
      if (!exist.includes(project.title)) {
        exist.push(project.title);
        const newProject = document.createElement('li');
        projectList.append(newProject);
        newProject.textContent = project.title;
        newProject.addEventListener('click', (e) => {
          clear(project.title);
        });
      }
    });
  };
  return { showProjects };
})();

export { displayTasks, displayProjects };
