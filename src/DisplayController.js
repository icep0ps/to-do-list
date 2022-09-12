import { TodaylocalStorage } from './todos-logic';
import { displaycompletedTasks } from './general-display-controller';
import { createProjectPage } from './index';
import { deleteTask } from './todos-logic';
import { deleteProjectFromLocal, ProjectslocalStorage } from './projects-logic';
var moment = require('moment');

const tasksModule = (() => {
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
    checkbox.addEventListener('click', displaycompletedTasks.moveTask);

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

  const todayLoader = () => {
    if (TodaylocalStorage != null) {
      TodaylocalStorage.forEach((task) => {
        displayTask(task, deleteTask);
      });
    }
  };

  return { displayTask, deleteTaskFromDom, todayLoader };
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
    loadPage(project.id);
    loadProjectTasks(project.title);
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
    if (ProjectslocalStorage != null) {
      ProjectslocalStorage.forEach((project) => {
        if (project_id === project.id) {
          project.tasks.forEach((task) =>
            tasksModule.displayTask(task, deleteTask)
          );
        }
      });
    }
  };

  return {
    displayProjectInDom,
    deleteProject,
    deleteProjectFromDom,
    projectLoader,
    projectTaskLoader,
  };
})();

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

const displayProjectPage = (button, id) => {
  const container = document.querySelector('.content');
  const pages = container.querySelectorAll('#group');
  const selected_page = content.querySelector(`[data-name="${button.title}"]`);
  createProjectPage.createPage(button, id);
};

const loadProjectTasks = (title) => {
  ProjectslocalStorage.forEach((project) => {
    if (project.title === title) {
      project.tasks.forEach((projectsTask) => {
        displayTasks(projectsTask);
      });
    }
  });
};

const loadPage = (page_id) => {
  const title_container = document.querySelector('#titles');
  const heading = title_container.querySelector('h1');
  const completed_counter = document.querySelector('.counter');

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

export { tasksModule, projectsModule };
