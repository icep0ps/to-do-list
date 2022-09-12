import { collection, addDoc, getDocs } from 'firebase/firestore';
import uniqid from 'uniqid';
import { database } from './projects-logic';
import { tasksModule } from '../src/DisplayController';
import { removePopup } from '../src/Events';

let TodaylocalStorage = JSON.parse(localStorage.getItem('today'));
let CloudStorage = await getDocs(collection(database, 'Todos'));

const savetoLocalStorage = (data) => {
  if (TodaylocalStorage == null) {
    localStorage.setItem('today', JSON.stringify([]));
  }
  TodaylocalStorage.push(data);
  localStorage.setItem('today', JSON.stringify(TodaylocalStorage));
};

class todos {
  constructor(title, DueDate) {
    this.id = uniqid();
    this.title = title;
    this.DueDate = DueDate;
    this.completed = false;
  }
}

const createAndDisplayTask = () => {
  const title = document.getElementById('task-input');
  const DueDate = document.getElementById('date-input');

  const task = new todos(title.value, DueDate.value);
  savetoLocalStorage(task);
  removePopup();
  tasksModule.displayTask(task, deleteTask);
};

const deleteTask = (event) => {
  const task_id = event.currentTarget.id;
  tasksModule.deleteTaskFromDom(event);
  deleteTaskFromLocal(task_id);
};

const deleteTaskFromLocal = (id) => {
  TodaylocalStorage.forEach((task) => {
    if (task.id === id) {
      TodaylocalStorage.splice(TodaylocalStorage.indexOf(task), 1);
      localStorage.setItem('today', JSON.stringify(TodaylocalStorage));
    }
  });
};

export { todos, createAndDisplayTask, TodaylocalStorage, deleteTask };
