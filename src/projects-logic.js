import { todos } from './todos-logic';
import { displayProjects } from './project-display-controller';

const button1 = document.querySelector('#createProject');
button1.addEventListener('click', (e) => {
  console.log('clicked');
  createInput();
});

const createdProjects = [];
let saved = JSON.parse(localStorage.getItem('projects'));

class projects {
  constructor(title) {
    this.title = title;
    this.tasks = [];
  }
  addTask(title, description) {
    let task = new todos(title, description);
    this.tasks.push(task);
    localStorage.setItem(`${this.title}`, JSON.stringify(this.tasks));
  }
}

const savetoLoacal = (data) => {
  if (saved == null) {
    localStorage.setItem('projects', JSON.stringify(createdProjects));
  } else {
    saved.push(data);
    localStorage.setItem('projects', JSON.stringify(saved));
  }
};

const createProject = (() => {
  const addProject = (title) => {
    let project = new projects(title);
    createdProjects.push(project);
    savetoLoacal(project);
  };
  return { addProject };
})();

const deleteProjectFromArray = (title) => {
  createdProjects.forEach((project) => {
    if (project.title == title) {
      createdProjects.splice(createdProjects.indexOf(task), 1);
    }
  });
};

const createInput = () => {
  button1.style.display = 'none';
  const div = document.querySelector('.buttons');
  const input = document.createElement('input');
  input.setAttribute('id', 'createInput');
  const options = document.createElement('div');
  options.classList.add('options');
  const createButton = document.createElement('button');
  const cancelButton = document.createElement('button');
  createButton.setAttribute('id', 'createButton');
  cancelButton.setAttribute('id', 'createButton');
  createButton.textContent = 'Create';
  cancelButton.textContent = 'Cancel';
  div.append(input);
  div.append(options);
  options.append(createButton);
  options.append(cancelButton);
  createButton.style.display = 'block';
  cancelButton.style.display = 'block';
  cancelButton.addEventListener('click', (e) => {
    button1.style.display = 'block';
    options.remove();
    input.remove();
  });
  createButton.addEventListener('click', (e) => {
    createProject.addProject(input.value);
    displayProjects.showProjects();
    button1.style.display = 'block';
    options.remove();
    input.remove();
  });
};

// function projectMethods(data) {
//   this.title = data.title;
//   this.tasks = [data.task];
// }

// projectMethods.prototype.addTask = function (title, description) {
//   let task = new todos(title, description);
//   this.tasks.push(task);
//   localStorage.setItem(`${this.title}`, JSON.stringify(this.tasks));
// };

export { projects, createdProjects, deleteProjectFromArray, saved };
