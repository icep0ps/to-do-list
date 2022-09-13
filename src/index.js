import { TodaylocalStorage } from './logic/todos-logic';
import { ProjectslocalStorage } from './logic/projects-logic';
import { projectsModule, tasksModule } from './dom/DisplayController';
import { createNewProjectInputField, createPopUp } from './dom/Events';

const loadTasksAndProjects = (() => {
  if (ProjectslocalStorage != null && TodaylocalStorage != null) {
    tasksModule.todayLoader();
    projectsModule.projectLoader();
  }
})();

const addEventListeners = (() => {
  const create_project_btn = document.querySelector('#createProject');
  const delete_project_btn = document.querySelector('#deleteProject');
  const addTasksBtn = document.querySelector('#add-task-btn');

  addTasksBtn.addEventListener('click', (e) => createPopUp);
  create_project_btn.addEventListener('click', createNewProjectInputField);
  delete_project_btn.addEventListener('click', projectsModule.deleteProject);
})();
