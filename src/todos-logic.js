import { displayTasks } from './task-display-controller';
const tasks = [];

class todos {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }
}

const createTasks = (() => {
  const addTask = (title, description) => {
    let task = new todos(title, description);
    tasks.push(task);
  };
  return { addTask };
})();

const deletetask = (item) => {
  tasks.forEach((task) => {
    if (task.title == item) {
      tasks.splice(tasks.indexOf(task), 1);
    }
  });
};

export { todos, createTasks, tasks, deletetask };
