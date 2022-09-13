var moment = require('moment');
import { removePopup } from './Events';
import { TodaylocalStorage, deleteTask } from '../logic/todos-logic';
import { setTabAsActive, loadPage, moveTask } from '../logic/Loaders';
import {
  deleteProjectFromLocal,
  ProjectslocalStorage,
} from '../logic/projects-logic';

const tasksModule = (() => {
  const handleTaskData = (add_task_function, project) => {
    const title_input = document.getElementById('task-input');
    const DueDate_input = document.getElementById('date-input');
    const title = title_input.value;
    const DueDate = DueDate_input.value;
    const binded = add_task_function.bind(project);
    binded(title, DueDate);
    removePopup();
  };

  const displayTask = (taskObject, deleteTaskFunction) => {
    const { id, title, DueDate } = taskObject;

    const task_container = document.createElement('div');
    const pending_section = document.querySelector('.pending');
    pending_section.append(task_container);
    task_container.classList.add('task');
    task_container.setAttribute('data-task', id);

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('data-task', id);
    task_container.append(checkbox);
    checkbox.addEventListener('click', moveTask);

    const task_name = document.createElement('label');
    task_container.append(task_name);
    task_name.textContent = title;

    const task_due_date = document.createElement('p');
    task_container.append(task_due_date);
    if (DueDate == '') {
      task_due_date.textContent = 'with no date set';
    } else {
      task_due_date.textContent = moment(DueDate).calendar();
    }

    const remove_task_button = document.createElement('span');
    remove_task_button.setAttribute('id', id);
    task_container.append(remove_task_button);
    remove_task_button.innerText = 'cancel';
    remove_task_button.addEventListener('click', deleteTaskFunction);
  };

  const deleteTaskFromDom = (event) => {
    const remove_task_btn = event.currentTarget;
    remove_task_btn.parentElement.remove();
  };

  const loadContent = (project, event) => {
    setTabAsActive(event.target);
    loadPage(project.id, 'today', project);
  };

  const todayLoader = () => {
    const today = document.querySelector('.active');
    const today_id = today.getAttribute('data-id');
    today.addEventListener('click', (event) => loadContent(today_id, event));
    TodaylocalStorage.forEach((task) => {
      displayTask(task, deleteTask);
    });
  };

  return { displayTask, deleteTaskFromDom, todayLoader, handleTaskData };
})();

const projectsModule = (() => {
  const displayProjectInDom = (project) => {
    const projects_container = document.querySelector('.projects');
    const new_project = document.createElement('li');
    projects_container.append(new_project);
    new_project.setAttribute('data-id', project.id);
    new_project.textContent = project.title;
    new_project.addEventListener('click', (event) =>
      loadContent(project, event)
    );
  };

  const loadContent = (project, event) => {
    setTabAsActive(event.target);
    loadPage(project.id, project.type, project);
  };

  const deleteProject = () => {
    const selected_project = document.querySelector('.active');
    const project_page_id = selected_project.getAttribute('data-id');
    ProjectslocalStorage.forEach((project) => {
      if (project.id == project_page_id) {
        deleteProjectFromDom(selected_project);
        deleteProjectFromLocal(project_page_id);
        // deleteProjectFromCloud(project_page_id, project.id);
      }
    });
  };

  const deleteProjectFromDom = (selected_project) => {
    selected_project.remove();
  };

  const projectLoader = () => {
    ProjectslocalStorage.forEach((project) => {
      displayProjectInDom(project);
    });
  };

  const projectTaskLoader = (project_id) => {
    ProjectslocalStorage.forEach((project) => {
      if (project_id === project.id) {
        project.tasks.forEach((task) =>
          tasksModule.displayTask(task, deleteTask)
        );
      }
    });
  };

  return {
    displayProjectInDom,
    deleteProject,
    deleteProjectFromDom,
    projectLoader,
    projectTaskLoader,
  };
})();

export { tasksModule, projectsModule };
