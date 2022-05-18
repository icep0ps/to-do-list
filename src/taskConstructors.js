import { createTasks } from './todos';
import { displayTasks } from './DOM';

class createProjectTodos {
  constructor(title) {
    this.title = title;
  }

  project = () => {
    const content = document.querySelector('.content');

    const page = document.createElement('div');
    page.classList.add('page');
    content.append(page);
    const title = document.createElement('h1');
    page.append(title);
    title.textContent = this.title;

    const pending = document.createElement('div');
    pending.classList.add('pending');
    content.append(pending);

    const completed = document.createElement('div');
    completed.className = 'pending completed';
    content.append(completed);

    const completedtitle = document.createElement('h1');
    completed.append(completedtitle);
    completedtitle.textContent = 'Completed';

    const addTaskButtons = document.createElement('div');
    addTaskButtons.classList.add('add-task');
    content.append(addTaskButtons);

    const input = document.createElement('input');
    input.setAttribute('id', 'title');
    addTaskButtons.append(input);

    const button = document.createElement('button');
    button.setAttribute('id', 'add');
    addTaskButtons.append(button);
    button.textContent = 'Add Task';
    button.addEventListener('click', (e) => {
      createTasks.addTask(input.value, 'some random words');
      displayTasks.showTasks();
    });
  };
}

class createDayTodos extends createProjectTodos {
  constructor(title) {
    super(title);
    this.title = 'today';
  }
}

export { createProjectTodos, createDayTodos };
