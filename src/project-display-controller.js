import {
  createdProjects,
  deleteProjectFromArray,
  saved,
  deleteTaskFromLocal,
  deleteProjectFromLocal,
} from './projects-logic';
import { currentProject } from './tasks-constructors';
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
    const deleteBtn = document.querySelector('#deleteProject');
    deleteBtn.addEventListener('click', (e) => {
      deleteProject();
      e.stopPropagation();
    });
    newProject.addEventListener('click', (e) => {
      setActiveTab(e.target);
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
    div.setAttribute('data-task', `${projectsTask.title}`);
    const con = document.createElement('div');
    div.append(con);
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    const date = document.createElement('p');
    checkbox.addEventListener('click', (e) => {
      displaycompletedProjectTasks.moveTask(checkbox);
    });
    con.append(checkbox);

    const title = document.createElement('label');
    con.append(title);
    con.append(date);
    title.textContent = projectsTask.title;

    const removeIcon = document.createElement('img');
    removeIcon.setAttribute('src', '/src/img/icons8-xbox-x-30.png');
    removeIcon.addEventListener('click', (e) => {
      e.stopPropagation();
      let tag = e.target.parentElement.parentElement.getAttribute('data-title');
      removeIcon.parentElement.remove();
      deleteTaskFromLocal(tag, e.target);
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

const deleteProject = () => {
  const active = document.querySelector('.active');
  const title = active.textContent;
  saved.forEach((project) => {
    if (project.title == title) {
      const content = document.querySelector('.content');
      const projectDiv = content.querySelector(
        `[data-name="${project.title}"]`
      );
      if (content.contains(projectDiv)) {
        projectDiv.remove();
      }
      deleteProjectFromArray(title);
      deleteProjectFromLocal(title);
      active.remove();
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
