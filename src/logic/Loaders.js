import { createTask, TodaylocalStorage } from './todos-logic';
import { createPopUp } from '../DisplayControllers/events';
import { projectMethods } from './projects-logic';
import {
  ProjectslocalStorage,
  markProjectTaskAsCompleted,
} from './projects-logic';
import projectsModule from '../DisplayControllers/projectModule';
import { tasksModule } from '../DisplayControllers/taskModule';
import { markTaskAsCompleted } from './todos-logic';

const setTabAsActive = (tab) => {
  const tabs = document.querySelectorAll('li');
  const selected_tab_id = tab.getAttribute('data-id');
  [...tabs].map((tab) => {
    const currentTab = tab.getAttribute('data-id');
    if (currentTab === selected_tab_id) {
      tab.setAttribute('class', 'active');
    } else {
      tab.removeAttribute('class');
    }
  });
};

const loadPage = (page_id, page_type, project) => {
  const title_container = document.querySelector('#titles');
  const heading = title_container.querySelector('h1');
  const completed_counter = document.querySelector('.counter');

  const removePrevAddTaskBtn = document.querySelector('#add-task-btn');
  removePrevAddTaskBtn && removePrevAddTaskBtn.remove();

  const addTasksBtn = document.createElement('button');
  title_container.append(addTasksBtn);
  addTasksBtn.innerText = 'Add Tasks';
  addTasksBtn.setAttribute('id', 'add-task-btn');

  switch (page_type) {
    case 'project':
      const newProjectWithMethods = new projectMethods(project);
      addTasksBtn.addEventListener('click', () =>
        createPopUp(newProjectWithMethods.addTask, newProjectWithMethods)
      );

      ProjectslocalStorage.forEach((project) => {
        if (project.id === page_id) {
          clearPreviousPageTasks();
          heading.innerText = project.title;
          completed_counter.innerText = project.completedTasks;
          projectsModule.projectTaskLoader(page_id);
        }
      });
      break;
    case 'today':
      clearPreviousPageTasks();
      tasksModule.todayLoader();
      heading.innerText = 'Today';
      completed_counter.innerText = 0;
      addTasksBtn.addEventListener('click', (e) =>
        createPopUp(createTask, TodaylocalStorage)
      );
      break;
    default:
      return;
  }
};

const clearPreviousPageTasks = () => {
  const tasks = document.querySelectorAll('.task');
  [...tasks].map((task) => task.remove());
};

const moveTask = (event) => {
  const input = event.currentTarget;
  const taskId = input.getAttribute('data-task');
  const projectId = input.getAttribute('data-project-id');
  const span = document.querySelector('.counter');
  const type = input.getAttribute('data-task-type');
  const status = input.getAttribute('data-task-iscompleted');
  const task_container = document.querySelector(`[data-task=${taskId}]`);

  switch (type) {
    case 'today':
      markTaskAsCompleted(taskId);
      const completedTasks = TodaylocalStorage.tasks.filter(
        (task) => task.completed === true
      );
      span.textContent = completedTasks.length;
      break;
    case 'project':
      markProjectTaskAsCompleted(projectId, taskId);
      const project = ProjectslocalStorage.filter(
        (project) => project.id === projectId
      );
      const completedProjectTask = project[0].tasks.filter(
        (task) => task.completed === true
      );
      span.textContent = completedProjectTask.length;
      break;
    default:
      throw new Error('not valid project type');
  }

  if (status !== null) {
    console.log('adding to completed');
    const completed = document.querySelector('.completed');
    completed.append(task_container);
    input.removeAttribute('data-task-iscompleted');
  } else {
    console.log('adding to pending');
    const pending = document.querySelector('.pending');
    pending.append(task_container);

    input.setAttribute('data-task-iscompleted', false);
  }
};

export { setTabAsActive, loadPage, moveTask };
