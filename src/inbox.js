import { todos } from './todos';
import { showTasks } from './DOM';

const input = document.querySelector('#title');
const button = document.querySelector('#add');

const tasks = [];

const createTasks = (() => {
  const addTask = (title, description) => {
    let task = new todos(title, description);
    tasks.push(task);
  };
  return { addTask };
})();

button.addEventListener('click', (e) => {
  createTasks.addTask(input.value, 'some random words');
  showTasks();
});

export { tasks };
