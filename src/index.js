import { setActiveTab } from './general-display-controller';
import { projectsModule, tasksModule } from './DisplayController';
import { createNewProjectInputField, createPopUp } from './Events';
import { ProjectslocalStorage } from './projects-logic';
import { TodaylocalStorage } from './todos-logic';

const loadTasksAndProjects = (() => {
  if (ProjectslocalStorage != null && TodaylocalStorage != null) {
    tasksModule.todayLoader();
    projectsModule.projectLoader();
  }
})();

const addEventListeners = (() => {
  const addTasks = document.querySelector('#add-task-btn');
  const create_project_btn = document.querySelector('#createProject');
  const delete_project_btn = document.querySelector('#deleteProject');

  addTasks.addEventListener('click', createPopUp);
  create_project_btn.addEventListener('click', createNewProjectInputField);
  delete_project_btn.addEventListener('click', projectsModule.deleteProject);
})();
