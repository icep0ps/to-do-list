import { todos } from './todos';
import { displayProjects } from './DOM';
// const input = document.querySelector('#project-name');
const button1 = document.querySelector('#createProject');
button1.addEventListener('click', (e) => {
  console.log('clicked');
  createInput();
});

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

const createInput = () => {
  button1.style.display = 'none';
  const div = document.querySelector('.buttons');
  const input = document.createElement('input');
  input.setAttribute('id', 'createInput');
  const createButton = document.createElement('button');
  createButton.setAttribute('id', 'createButton');
  createButton.textContent = 'Create';
  div.append(input);
  div.append(createButton);
  createButton.style.display = 'block';
  createButton.addEventListener('click', (e) => {
    createProject.addProject(input.value);
    displayProjects.showProjects();
    button1.style.display = 'block';
    input.remove();
    createButton.remove();
  });
};

export { projects, createdProjects };
