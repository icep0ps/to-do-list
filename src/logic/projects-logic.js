import {
  getDocs,
  deleteDoc,
  collection,
  getDoc,
  doc,
  setDoc,
  arrayUnion,
  updateDoc,
} from 'firebase/firestore';
import uniqid from 'uniqid';
import { todos } from './todos-logic';
import { database } from '../configs/firebase-config';
import { tasksModule } from '../DisplayControllers/taskModule';
import projectsModule from '../DisplayControllers/projectModule';
import { removeNewProjectInputField } from '../DisplayControllers/events';

const isLocalStorageInitialized = (() => {
  if (localStorage.getItem('projects') === null) {
    localStorage.setItem('projects', JSON.stringify([]));
  }
})();

let CloudStorage = await getDocs(collection(database, 'projects'));
let ProjectslocalStorage = JSON.parse(localStorage.getItem('projects'));

class projects {
  constructor(title) {
    this.type = 'project';
    this.id = uniqid();
    this.title = title;
    this.tasks = [];
    this.completedTasks = 0;
  }
}

const savetoLoacal = (data) => {
  ProjectslocalStorage.push(data);
  localStorage.setItem('projects', JSON.stringify(ProjectslocalStorage));
};

const saveDataToCloud = async (data) => {
  try {
    setDoc(doc(database, 'projects', `${data.id}`), {
      title: data.title,
      tasks: data.tasks,
    });
  } catch (error) {
    console.log(`failed to add data: ${error}`);
  }
};

const saveProjectTaskToCloud = async (data, id) => {
  const docRef = doc(database, 'projects', `${id}`);
  await updateDoc(docRef, {
    tasks: arrayUnion({
      id: data.id,
      title: data.title,
      DueDate: data.DueDate,
    }),
  });
};

function markProjectTaskAsCompleted(projectId, taskId) {
  const project = ProjectslocalStorage.filter(
    (project) => project.id === projectId
  );
  const task = project[0].tasks.filter((task) => task.id === taskId);
  task[0].completed = !task[0].completed;
  deleteTaskFromLocal(projectId, taskId);
  saveProjectTaskToLocal(task[0], projectId);
}

const saveProjectTaskToLocal = (data, id) => {
  ProjectslocalStorage.forEach((project) => {
    if (project.id === id) {
      project.tasks.push(data);
      localStorage.setItem('projects', JSON.stringify(ProjectslocalStorage));
    }
  });
};

const createProject = () => {
  const input = document.querySelector('#createInput');
  const title = input.value;
  const project = new projects(title);
  ProjectslocalStorage.push(project);
  // saveDataToCloud(project);
  removeNewProjectInputField();
  projectsModule.displayProjectInDom(project);
  localStorage.setItem('projects', JSON.stringify(ProjectslocalStorage));
};

const deleteProjectFromArray = (id) => {
  ProjectslocalStorage.forEach((project) => {
    if (project.id == id) {
      ProjectslocalStorage.splice(ProjectslocalStorage.indexOf(project), 1);
    }
  });
};

const deleteTaskFromLocal = (projectId, taskId) => {
  ProjectslocalStorage.forEach((project) => {
    if (project.id == projectId) {
      project.tasks.forEach((task) => {
        if (task.id == taskId) {
          project.tasks.splice(project.tasks.indexOf(task), 1);
          localStorage.setItem(
            'projects',
            JSON.stringify(ProjectslocalStorage)
          );
        }
      });
    }
  });
};

const deleteTaskFromCloud = async (parentID, element) => {
  const taskID = element.parentElement.getAttribute('data-task');
  const docsRef = await getDoc(doc(database, 'projects', `${parentID}`));
  const projectTasks = docsRef.data();
  const newArray = projectTasks.tasks.filter(
    (cloudTask) => cloudTask.id !== taskID
  );
  await updateDoc(docsRef.ref, {
    tasks: newArray,
  });
};

const deleteProjectFromCloud = (title, projectID) => {
  CloudStorage.forEach((project) => {
    if (projectID === title) {
      const docRef = doc(database, `projects/${projectID}`);
      deleteDoc(docRef);
      return;
    }
  });
};

const deleteProjectFromLocal = (id) => {
  ProjectslocalStorage.forEach((project) => {
    if (project.id == id) {
      ProjectslocalStorage.splice(ProjectslocalStorage.indexOf(project), 1);
      localStorage.setItem('projects', JSON.stringify(ProjectslocalStorage));
    }
  });
};

function projectMethods(project) {
  this.type = project.type;
  this.projectID = project.id;
  this.title = project.title;
  this.tasks = [];
  this.completedTasks = project.completedTasks;
}

projectMethods.prototype.addTask = function (title, DueDate) {
  let task = new todos(title, DueDate);
  this.tasks.push(task);
  tasksModule.displayTask(task, deleteTaskFromLocal, 'project', this.projectID);
  saveProjectTaskToLocal(task, this.projectID);
  // saveProjectTaskToCloud(task, this.projectID);
};

export {
  projects,
  createProject,
  deleteProjectFromArray,
  ProjectslocalStorage,
  projectMethods,
  deleteTaskFromLocal,
  deleteProjectFromLocal,
  deleteTaskFromCloud,
  deleteProjectFromCloud,
  markProjectTaskAsCompleted,
};
