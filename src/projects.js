import { todos } from './todos';

const createdProjects = [];

class projects {
  constructor(title) {
    this.title = title;
    this.tasks = [];
  }
  addTask(title, description) {
    let task = new todos(title, description);
    this.tasks.push(task);
  }
}

const createProject = (() => {
  const project = new projects('whats the move');
  createdProjects.push(project);
  return { project };
})();

const createProjectTask = (() => {
  const createProjectTask = () => {
    createProject.project.addTask('watch slam dunk', 'is it good though');
  };
})();

export { projects };
