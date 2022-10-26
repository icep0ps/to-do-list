import {
  deleteProjectFromLocal,
  ProjectslocalStorage,
} from '../Logic/projects-logic';

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

export default projectsModule;
