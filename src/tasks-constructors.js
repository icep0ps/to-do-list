import { createTasks } from './todos-logic';
import { displayTasks } from './task-display-controller';
import { displayTasks as displayProjectTasks } from './project-display-controller';
import { saved, projectMethods, createdProjects } from './projects-logic';

let currentProject = '';
let currentdiv = '';

class createProjectTodos {
  constructor(title) {
    this.title = title;
  }

  project = () => {
    const content = document.querySelector('.content');
    const page = document.createElement('div');
    page.className = `${this.title}`;
    page.setAttribute('id', 'group');
    page.setAttribute('data-name', `${this.title}`);
    page.setAttribute('data-active', 'true');
    content.append(page);
    const title = document.createElement('h1');
    page.append(title);
    title.textContent = this.title;

    const pending = document.createElement('div');
    pending.classList.add('pending');
    pending.setAttribute('data-title', `${this.title}`);
    page.append(pending);

    const completedtitle = document.createElement('h1');
    page.append(completedtitle);
    completedtitle.textContent = 'Completed';
    const counter = document.createElement('span');
    completedtitle.append(counter);
    counter.classList.add('counter');
    counter.textContent = 0;

    const completed = document.createElement('div');
    completed.className = 'pending completed';
    page.append(completed);
  };

  createPopUp = () => {
    const content = document.querySelector(`[data-name="${this.title}"]`);
    const box = document.createElement('div');
    box.setAttribute('class', 'task-popup');
    content.append(box);

    const form = document.createElement('form');
    box.append(form);
    const h1 = document.createElement('h1');
    h1.innerText = 'Create Task';
    form.append(h1);

    const titleDiv = document.createElement('div');
    form.append(titleDiv);
    const labelTiltle = document.createElement('label');
    titleDiv.append(labelTiltle);
    labelTiltle.innerText = 'Task';

    const text = document.createElement('input');
    text.setAttribute('type', 'text');
    text.setAttribute('data-input', `${this.title}`);
    titleDiv.append(text);
    const dateDiv = document.createElement('div');
    form.append(dateDiv);
    const dateLabel = document.createElement('label');
    dateLabel.innerText = 'Due Date';
    dateDiv.append(dateLabel);
    const date = document.createElement('input');
    date.setAttribute('type', 'text');
    dateDiv.append(date);
    date.onfocus = function () {
      this.type = 'datetime-local';
    };
    date.onblur = function () {
      if (!this.value) {
        this.type = 'text';
      }
    };

    const btnDiv = document.createElement('div');
    btnDiv.setAttribute('class', 'form-buttons');
    form.append(btnDiv);
    const createBtn = document.createElement('button');
    createBtn.setAttribute('type', 'button');
    createBtn.innerText = 'Create';
    createBtn.addEventListener('click', (e) => {
      if (saved !== null) {
        saved.forEach((project) => {
          if (project.title == content.getAttribute('class')) {
            const addMethods = new projectMethods(project);
            addMethods.addTask(text.value, date.value);
            currentProject = project.tasks;
            currentdiv = content;
            displayProjectTasks.showProjectTasks(project.title);
            box.remove();
          }
        });
      } else {
        createdProjects.forEach((project) => {
          if (project.title == content.getAttribute('class')) {
            project.addTask(input.value, 'some randome');
            currentProject = project.tasks;
            currentdiv = content;
            displayProjectTasks.showProjectTasks(project.title);
            box.remove();
          }
        });
      }
    });
    btnDiv.append(createBtn);
    const cancelBtn = document.createElement('button');
    cancelBtn.innerText = 'Cancel';
    btnDiv.append(cancelBtn);
    cancelBtn.addEventListener('click', (e) => {
      box.remove();
    });
  };

  inputs = () => {
    const page = document.querySelector(`[data-name="${this.title}"]`);
    const addTaskButtons = document.createElement('div');
    addTaskButtons.classList.add('add-task');
    page.append(addTaskButtons);

    const button = document.createElement('button');
    button.setAttribute('id', 'add');
    addTaskButtons.append(button);
    button.textContent = 'Add Task';
    button.addEventListener('click', (e) => {
      this.createPopUp();
    });
  };
}

class createDayTodos extends createProjectTodos {
  constructor(title) {
    super(title);
    this.title = 'Today';
  }
  createPopUp = () => {
    const content = document.querySelector(`[data-name="${this.title}"]`);
    const box = document.createElement('div');
    box.setAttribute('class', 'task-popup');
    content.append(box);

    const form = document.createElement('form');
    box.append(form);
    const h1 = document.createElement('h1');
    h1.innerText = 'Create Task';
    form.append(h1);

    const titleDiv = document.createElement('div');
    form.append(titleDiv);
    const labelTiltle = document.createElement('label');
    titleDiv.append(labelTiltle);
    labelTiltle.innerText = 'Task';

    const text = document.createElement('input');
    text.setAttribute('type', 'text');
    text.setAttribute('data-input', `${this.title}`);
    titleDiv.append(text);
    const dateDiv = document.createElement('div');
    form.append(dateDiv);
    const dateLabel = document.createElement('label');
    dateLabel.innerText = 'Due Date';
    dateDiv.append(dateLabel);
    const date = document.createElement('input');
    date.setAttribute('type', 'text');
    dateDiv.append(date);
    date.onfocus = function () {
      this.type = 'datetime-local';
    };
    date.onblur = function () {
      if (!this.value) {
        this.type = 'text';
      }
    };

    const btnDiv = document.createElement('div');
    btnDiv.setAttribute('class', 'form-buttons');
    form.append(btnDiv);
    const createBtn = document.createElement('button');
    createBtn.setAttribute('type', 'button');
    createBtn.innerText = 'Create';
    createBtn.addEventListener('click', (e) => {
      createTasks.addTask(text.value, date.value);
      displayTasks.showTasks();
      box.remove();
    });
    btnDiv.append(createBtn);
    const cancelBtn = document.createElement('button');
    cancelBtn.innerText = 'Cancel';
    btnDiv.append(cancelBtn);
    cancelBtn.addEventListener('click', (e) => {
      box.remove();
    });
  };

  inputs = () => {
    const page = document.querySelector(`.${this.title}`);
    const addTaskButtons = document.createElement('div');
    addTaskButtons.classList.add('add-task');
    page.append(addTaskButtons);

    const button = document.createElement('button');
    button.setAttribute('id', 'add');
    addTaskButtons.append(button);
    button.textContent = 'Add Task';
    button.addEventListener('click', (e) => {
      this.createPopUp();
    });
  };
}

export { createProjectTodos, createDayTodos, currentProject, currentdiv };
