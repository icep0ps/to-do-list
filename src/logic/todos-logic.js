import { collection, addDoc, getDocs } from 'firebase/firestore';
import uniqid from 'uniqid';
import { database } from '../configs/firebase-config';
import { tasksModule } from '../DisplayControllers/taskModule';

const isLocalStorageInitialized = (() => {
  if (localStorage.getItem('today') === null) {
    localStorage.setItem(
      'today',
      JSON.stringify({
        type: 'today',
        id: uniqid(),
        title: 'today',
        tasks: [],
      })
    );
  }
})();

let CloudStorage = await getDocs(collection(database, 'today'));
let TodaylocalStorage = JSON.parse(localStorage.getItem('today'));

class todos {
  constructor(title, DueDate) {
    this.id = uniqid();
    this.title = title;
    this.DueDate = DueDate;
    this.completed = false;
  }
}

function createTask(title, DueDate) {
  const task = new todos(title, DueDate);
  savetoLocalStorage(task);
  tasksModule.displayTask(task, deleteTask, 'today', 'today');
}

const deleteTask = (event) => {
  const task_id = event.currentTarget.id;
  tasksModule.deleteTaskFromDom(event);
  deleteTaskFromLocal(task_id);
};

const deleteTaskFromLocal = (id) => {
  TodaylocalStorage.tasks.forEach((task) => {
    if (task.id === id) {
      TodaylocalStorage.tasks.splice(TodaylocalStorage.tasks.indexOf(task), 1);
      localStorage.setItem('today', JSON.stringify(TodaylocalStorage));
    }
  });
};

function markTaskAsCompleted(id) {
  const task = TodaylocalStorage.tasks.filter((task) => task.id === id);
  task[0].completed = !task[0].completed;
  deleteTaskFromLocal(id);
  savetoLocalStorage(task[0]);
}

const savetoLocalStorage = (data) => {
  TodaylocalStorage.tasks.push(data);
  localStorage.setItem('today', JSON.stringify(TodaylocalStorage));
};

export {
  todos,
  createTask,
  TodaylocalStorage,
  deleteTask,
  savetoLocalStorage,
  deleteTaskFromLocal,
  markTaskAsCompleted,
};
