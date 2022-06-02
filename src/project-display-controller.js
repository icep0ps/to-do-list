import {
  createdProjects,
  deleteProjectFromArray,
  saved,
} from './projects-logic';
import { currentdiv, currentProject } from './tasks-constructors';
import {
  setActiveTab,
  displaycompletedProjectTasks,
} from './general-display-controller';
import { createProjectPage } from './index';

const displayProjects = (() => {
  const exist = [];
  const projectList = document.querySelector('.projects');
  const createProject = (project) => {
    const newProject = document.createElement('li');
    projectList.append(newProject);
    newProject.textContent = project.title;
    const deleteIcon = document.createElement('img');
    deleteIcon.setAttribute('src', '/src/img/icons8-remove-48.png');
    deleteIcon.addEventListener('click', (e) => {
      deleteProject(e.target);
      e.stopPropagation();
    });
    newProject.append(deleteIcon);
    newProject.addEventListener('click', (e) => {
      setActiveTab(e.target);
      console.log(project.title);
      displayPage(project);
      displayTasks.showProjectTasks(project.title);
    });
  };

  const showProjects = () => {
    createdProjects.forEach((project) => {
      if (!exist.includes(project.title)) {
        exist.push(project.title);
        createProject(project);
      }
    });
  };
  return { showProjects, createProject };
})();

const displayTasks = (() => {
  const exist = [];

  const createTask = (projectsTask) => {
    const div = document.createElement('div');
    let currentdiv = document.querySelector(`[data-active]`);
    const pending = currentdiv.querySelector('.pending');
    pending.append(div);
    div.classList.add('task');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    const date = document.createElement('input');
    date.setAttribute('type', 'date');
    checkbox.addEventListener('click', (e) => {
      displaycompletedProjectTasks.moveTask(checkbox);
    });
    div.append(checkbox);
    const title = document.createElement('label');
    div.append(title);
    div.append(date);
    title.textContent = projectsTask.title;

    //fix delete feature
    const removeIcon = document.createElement('img');
    removeIcon.setAttribute('src', '/src/img/icons8-xbox-x-30.png');
    removeIcon.addEventListener('click', (e) => {
      e.stopPropagation();
      deleteTask(e.target);
    });
    div.append(removeIcon);
  };

  const showProjectTasks = (title) => {
    if (saved == null) {
      currentProject.forEach((projectsTask) => {
        if (!exist.includes(projectsTask.title)) {
          exist.push(projectsTask.title);
          createTask(projectsTask);
        }
      });
    } else {
      saved.forEach((project) => {
        if (project.title === title) {
          project.tasks.forEach((projectsTask) => {
            if (!exist.includes(projectsTask.title)) {
              exist.push(projectsTask.title);
              createTask(projectsTask);
            }
          });
        }
      });
    }
  };
  return { showProjectTasks, createTask };
})();

const displayPage = (button) => {
  const content = document.querySelector('.content');
  const getdiv = content.querySelector(`[data-name="${button.title}"]`);
  if (content.contains(getdiv)) {
    const divs = content.querySelectorAll('#group');
    Array.from(divs).forEach((div) => {
      if (div.getAttribute('class') === getdiv.getAttribute('class')) {
        div.setAttribute('data-active', 'true');
        div.style.display = 'flex';
      } else {
        div.removeAttribute('data-active', 'true');
        div.style.display = 'none';
      }
    });
  } else {
    const hide = content.querySelectorAll('#group');
    hide.forEach((div) => {
      div.removeAttribute('data-active', 'true');
      div.style.display = 'none';
    });

    createProjectPage.createPage(button);
  }
};

const deleteProject = (title) => {
  createdProjects.forEach((project) => {
    if (project.title == title.parentElement.textContent) {
      const content = document.querySelector('.content');
      const projectDiv = content.querySelector(
        `[data-name="${project.title}"]`
      );
      if (content.contains(projectDiv)) {
        projectDiv.remove();
      }
      deleteProjectFromArray(title);
      title.parentElement.remove();
    }
  });
};

const projectLoader = () => {
  if (saved != null) {
    saved.forEach((task) => {
      displayProjects.createProject(task);
    });
  }
};

export { displayProjects, displayTasks, projectLoader, displayPage };
