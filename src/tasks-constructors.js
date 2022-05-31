import { createTasks } from './todos-logic';
import { displayTasks } from './task-display-controller';
import { displayTasks as displayProjectTasks } from './project-display-controller';
import { createdProjects } from './projects-logic';

//create mutiple projects

let currentProject = '';
let currentdiv = '';

class createProjectTodos {
  constructor(title) {
    this.title = title;
  }

  project = () => {
    const content = document.querySelector('.content');
    console.log(this);
    const page = document.createElement('div');
    page.className = `${this.title}`;
    page.setAttribute('id', 'group');
    page.setAttribute('data-name', `${this.title}`);
    content.append(page);

    const pending = document.createElement('div');
    pending.classList.add('pending');
    page.append(pending);
    const title = document.createElement('h1');
    pending.append(title);
    title.textContent = this.title;

    const completed = document.createElement('div');
    completed.className = 'pending completed';
    page.append(completed);

    const completedtitle = document.createElement('h1');
    completed.append(completedtitle);
    completedtitle.textContent = 'Completed';
    const counter = document.createElement('span');
    completedtitle.append(counter);
    counter.classList.add('counter');
    counter.textContent = 0;
  };

  inputs = () => {
    const page = document.querySelector(`[data-name="${this.title}"]`);
    const addTaskButtons = document.createElement('div');
    addTaskButtons.classList.add('add-task');
    page.append(addTaskButtons);

    const input = document.createElement('input');
    input.setAttribute('data-input', `${this.title}`);
    addTaskButtons.append(input);
    input.setAttribute('placeholder', 'Add a project task here');

    const button = document.createElement('button');
    button.setAttribute('id', 'add');
    addTaskButtons.append(button);
    button.textContent = 'Add Task';
    button.addEventListener('click', (e) => {
      createdProjects.forEach((project) => {
        if (project.title == page.getAttribute('class')) {
          project.addTask(input.value, 'some randome');
          currentProject = project.tasks;
          currentdiv = page;
          displayProjectTasks.showProjectTasks();
        }
      });
    });
  };
}

class createDayTodos extends createProjectTodos {
  constructor(title) {
    super(title);
    this.title = 'Today';
  }

  inputs = () => {
    const page = document.querySelector(`.${this.title}`);
    const addTaskButtons = document.createElement('div');
    addTaskButtons.classList.add('add-task');
    page.append(addTaskButtons);

    const input = document.createElement('input');
    input.setAttribute('id', `${this.title}`);
    addTaskButtons.append(input);
    const value = document.querySelector(`#${this.title}`);

    const button = document.createElement('button');
    button.setAttribute('id', 'add');
    addTaskButtons.append(button);
    button.textContent = 'Add Task';
    button.addEventListener('click', (e) => {
      createTasks.addTask(value.value, 'some random words');
      displayTasks.showTasks();
    });
  };
}

export { createProjectTodos, createDayTodos, currentProject, currentdiv };
