import { todos } from './todos';
import { displayTasks } from './DOM';

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

const deleteTask = () => {};

button.addEventListener('click', (e) => {
  createTasks.addTask(input.value, 'some random words');
  displayTasks.showTasks();
});

export { tasks };
