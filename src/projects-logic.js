import { todos } from './todos-logic';
import uniqid from 'uniqid';
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  setDoc,
  arrayUnion,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';
import { removeNewProjectInputField } from './Events';
import { initializeApp } from 'firebase/app';
import { projectsModule } from './DisplayController';

const firebaseConfig = {
  apiKey: 'AIzaSyBF-OvqaoPVGW3oXN6eRBved3q-he4vo7Q',
  authDomain: 'todo-app-5a6f9.firebaseapp.com',
  projectId: 'todo-app-5a6f9',
  storageBucket: 'todo-app-5a6f9.appspot.com',
  messagingSenderId: '764050344103',
  appId: '1:764050344103:web:d3d1cdf864950ca16e3382',
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);

let CloudStorage = await getDocs(collection(database, 'projects'));
let ProjectslocalStorage = JSON.parse(localStorage.getItem('projects'));

class projects {
  constructor(title) {
    this.id = uniqid();
    this.title = title;
    this.tasks = [];
    this.completedTasks = 0;
  }
}

const savetoLoacal = (data) => {
  if (ProjectslocalStorage === null) {
    localStorage.setItem('projects', JSON.stringify([]));
  }
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

const saveProjectTaskToLocal = (data, parent) => {
  if (ProjectslocalStorage == null) {
    localStorage.setItem('projects', JSON.stringify(['']));
    return;
  }
  ProjectslocalStorage.forEach((project) => {
    if (project.id == parent) {
      project.tasks.push(data);
      localStorage.setItem('projects', JSON.stringify(ProjectslocalStorage));
    }
  });
};

const createProject = () => {
  const input = document.querySelector('#createInput');
  const title = input.value;
  const project = new projects(title);
  savetoLoacal(project);
  ProjectslocalStorage.push(project);
  // saveDataToCloud(project);
  removeNewProjectInputField();
  projectsModule.displayProjectInDom(project);
};

const deleteProjectFromArray = (id) => {
  ProjectslocalStorage.forEach((project) => {
    if (project.id == id) {
      ProjectslocalStorage.splice(ProjectslocalStorage.indexOf(project), 1);
    }
  });
};

const deleteTaskFromLocal = (name, given) => {
  const taskDiv = given.parentElement.getAttribute('data-task');
  ProjectslocalStorage.forEach((project) => {
    if (project.id == name) {
      project.tasks.forEach((task) => {
        if (task.id == taskDiv) {
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
    console.log(typeof project.id, typeof title, project.id === title);
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

function projectMethods(data) {
  this.projectID = data.id;
  this.title = data.title;
  this.tasks = [];
}

projectMethods.prototype.addTask = function (title, DueDate) {
  let task = new todos(title, DueDate);
  this.tasks.push(task);
  console.log(task);
  saveProjectTaskToLocal(task, this.projectID);
  saveProjectTaskToCloud(task, this.projectID);
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
};
