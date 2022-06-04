import { displayTasks } from './task-display-controller';

const tasks = [];
let saved = JSON.parse(localStorage.getItem('today'));

const savetoLoacal = (data) => {
  if (saved == null) {
    localStorage.setItem('today', JSON.stringify(tasks));
  } else {
    saved.push(data);
    localStorage.setItem('today', JSON.stringify(saved));
  }
};

class todos {
  constructor(title, DueDate) {
    this.title = title;
    this.DueDate = DueDate;
  }
}

const createTasks = (() => {
  const addTask = (title, DueDate) => {
    let task = new todos(title, DueDate);
    tasks.push(task);
    savetoLoacal(task);
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

const deleteTaskFromLocal = (item) => {
  saved.forEach((task) => {
    if (task.title == item) {
      saved.splice(saved.indexOf(task), 1);
      localStorage.setItem('today', JSON.stringify(saved));
    }
  });
};

export { todos, createTasks, tasks, deletetask, deleteTaskFromLocal, saved };
