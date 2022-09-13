import { projectMethods } from './projects-logic';
import { ProjectslocalStorage } from './projects-logic';
import { projectsModule } from '../dom/DisplayController';

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

const loadPage = (page_id, project_type, project) => {
  const title_container = document.querySelector('#titles');
  const heading = title_container.querySelector('h1');
  const completed_counter = document.querySelector('.counter');
  const addTasksBtn = document.querySelector('#add-task-btn');
  const newProjectWithMethods = new projectMethods(project);

  if (project_type === 'project') {
    addTasksBtn.addEventListener('click', (e) =>
      createPopUp(newProjectWithMethods.addTask, newProjectWithMethods)
    );
  } else {
    addTasksBtn.addEventListener('click', (e) => createPopUp(createTask));
  }

  ProjectslocalStorage.forEach((project) => {
    if (project.id === page_id) {
      clearPreviousPageTasks();
      heading.innerText = project.title;
      completed_counter.innerText = project.completedTasks;
      projectsModule.projectTaskLoader(page_id);
    }
  });
};

const clearPreviousPageTasks = () => {
  const tasks = document.querySelectorAll('.task');
  [...tasks].map((task) => task.remove());
};

const moveTask = (event) => {
  const input = event.currentTarget;
  if (input.parentElement.parentElement.getAttribute('class') == 'pending') {
    const completed = document.querySelector('.completed');
    completed.append(input.parentElement);
    const span = document.querySelector('.counter');
    completedTasks++;
    span.textContent = completedTasks;
  } else {
    const pending = document.querySelector('.pending');
    pending.append(input.parentElement);
    const span = document.querySelector('.counter');
    completedTasks--;
    span.textContent = completedTasks;
  }
};

export { setTabAsActive, loadPage, moveTask };
