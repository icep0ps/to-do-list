import { tasks, deletetask as deletetaskFromArray } from './todos';
import { createdProjects, deleteProjectFromArray } from './projects';
import { currentProject, currentdiv } from './taskConstructors';
import { createProjectPage } from './index';

const displayTasks = (() => {
  const exist = [];

  const showTasks = () => {
    tasks.forEach((task) => {
      if (!exist.includes(task.title)) {
        exist.push(task.title);
        const div = document.createElement('div');
        const pending = document.querySelector('.pending');
        pending.append(div);
        div.classList.add('task');
        div.setAttribute('data-task', `${task.title}`);
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        const date = document.createElement('input');
        date.setAttribute('type', 'date');
        date.textContent = 'No Date';
        checkbox.addEventListener('click', (e) => {
          displaycompletedTasks.moveTask(checkbox);
        });

        div.append(checkbox);
        const title = document.createElement('label');
        div.append(title);
        title.textContent = task.title;
        div.append(date);
        const removeIcon = document.createElement('img');
        removeIcon.setAttribute('src', '/src/img/icons8-xbox-x-30.png');
        removeIcon.addEventListener('click', (e) => {
          e.stopPropagation();
          deleteTask(e.target);
        });
        div.append(removeIcon);
      }
    });
  };

  const showProjectTasks = () => {
    currentProject.forEach((projectsTask) => {
      if (!exist.includes(projectsTask.title)) {
        exist.push(projectsTask.title);

        const div = document.createElement('div');
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
      }
    });
  };
  return { showTasks, showProjectTasks };
})();

const deleteTask = (item) => {
  tasks.forEach((task) => {
    const taskDiv = item.parentElement.getAttribute('data-task');
    if (task.title == taskDiv) {
      item.parentElement.remove();
      deletetaskFromArray(taskDiv);
      console.log(tasks);
    }
  });
};

const displaycompletedTasks = (() => {
  let completedTasks = 0;
  const moveTask = (input) => {
    if (input.parentElement.parentElement.getAttribute('class') == 'pending') {
      const completed = document.querySelector('.completed');
      completed.append(input.parentElement);
      const span = completed.querySelector('span');
      console.log(span);
      completedTasks++;
      span.textContent = completedTasks;
    } else {
      const pending = document.querySelector('.pending');
      pending.append(input.parentElement);
      const completed = document.querySelector('.completed');
      const span = completed.querySelector('span');
      console.log(span);
      completedTasks--;
      span.textContent = completedTasks;
    }
  };
  return { moveTask };
})();

const displaycompletedProjectTasks = (() => {
  let completedTasks = 0;
  const moveTask = (input) => {
    if (input.parentElement.parentElement.getAttribute('class') == 'pending') {
      const completed = currentdiv.querySelector('.completed');
      console.log(currentdiv);
      completed.append(input.parentElement);
      const span = completed.querySelector('span');
      console.log(span);
      completedTasks++;
      span.textContent = completedTasks;
    } else {
      const pending = currentdiv.querySelector('.pending');
      pending.append(input.parentElement);
      const completed = currentdiv.querySelector('.completed');
      const span = completed.querySelector('span');
      console.log(span);
      completedTasks--;
      span.textContent = completedTasks;
    }
  };
  return { moveTask };
})();

const displayProjects = (() => {
  const exist = [];
  const projectList = document.querySelector('.projects');

  const showProjects = () => {
    localStorage.getItem(createdProjects).forEach((project) => {
      if (!exist.includes(project.title)) {
        exist.push(project.title);
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
          displayPage(project.title);
        });
      }
    });
  };
  return { showProjects };
})();

const setActiveTab = (tab) => {
  const tabs = document.querySelectorAll('li');
  Array.from(tabs).forEach((li) => {
    if (li.classList.contains('active')) {
      li.classList.remove('active');
    }
  });
  if (tab.classList.contains('active')) {
    tab.classList.remove('active');
  } else {
    tab.setAttribute('class', 'active');
  }
};

const displayPage = (button) => {
  const content = document.querySelector('.content');
  const getdiv = content.querySelector(`[data-name="${button}"]`);
  if (content.contains(getdiv)) {
    const divs = content.querySelectorAll('#group');
    Array.from(divs).forEach((div) => {
      if (div.getAttribute('class') === getdiv.getAttribute('class')) {
        div.style.display = 'flex';
      } else {
        div.style.display = 'none';
      }
    });
  } else {
    const hide = content.querySelectorAll('#group');
    hide.forEach((div) => {
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
      console.log(createdProjects);
    }
  });
};
export { displayTasks, displayProjects, setActiveTab, displayPage };
