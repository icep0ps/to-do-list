import { collection, addDoc, getDocs } from 'firebase/firestore';
import uniqid from 'uniqid';
import { database } from './projects-logic';
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
        completedTasks: 0,
      })
    );
  }
})();

let TodaylocalStorage = JSON.parse(localStorage.getItem('today'));
let CloudStorage = await getDocs(collection(database, 'today'));

class todos {
  constructor(title, DueDate) {
    this.id = uniqid();
    this.title = title;
    this.DueDate = DueDate;
    this.completed = false;
  }
}

const createTask = (title, DueDate) => {
  const task = new todos(title, DueDate);
  savetoLocalStorage(task);
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

const savetoLocalStorage = (data) => {
  TodaylocalStorage.tasks.push(data);
  localStorage.setItem('today', JSON.stringify(TodaylocalStorage));
};

export { todos, createTask, TodaylocalStorage, deleteTask };
