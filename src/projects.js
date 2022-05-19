import { todos } from './todos';
import { displayProjects } from './DOM';
const input = document.querySelector('#project-name');
const button = document.querySelector('button');

const createdProjects = [];

class projects {
  constructor(title) {
    this.title = title;
    this.tasks = [];
  }
  addTask(title, description) {
    let task = new todos(title, description);
    this.tasks.push(task);
  }
}

const createProject = (() => {
  const addProject = (title) => {
    let project = new projects(title);
    createdProjects.push(project);
    console.log(createdProjects);
  };
  return { addProject };
})();

button.addEventListener('click', (e) => {
  console.log('run');
  createProject.addProject(input.value);
  displayProjects.showProjects();
});

export { projects, createdProjects };
