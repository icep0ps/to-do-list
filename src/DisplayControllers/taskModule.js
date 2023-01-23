var moment = require('moment');
import { removePopup } from './events';
import { TodaylocalStorage, deleteTask } from '../Logic/todos-logic';
import { setTabAsActive, loadPage, moveTask } from '../Logic/Loaders';

const tasksModule = (() => {
  function handleTaskData(add_task_function, project) {
    const title_input = document.querySelector('#task-input');
    const DueDate_input = document.querySelector('#date-input');
    const title = title_input.value;
    const DueDate = DueDate_input.value;
    const bindedAddTasksFunction = add_task_function.bind(project);
    bindedAddTasksFunction(title, DueDate);
    removePopup();
  }

  const displayTask = (taskObject, deleteTaskFunction, type, projectId) => {
    const { id, title, DueDate, completed } = taskObject;

    const task_container = document.createElement('div');

    task_container.classList.add('task');
    task_container.setAttribute('data-task', id);

    const checkboxContainer = document.createElement('div');
    checkboxContainer.setAttribute('class', 'task-container');
    task_container.append(checkboxContainer);

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('data-task', id);
    checkbox.setAttribute('data-task-type', type);
    checkbox.setAttribute('data-project-id', projectId);
    checkboxContainer.append(checkbox);
    checkbox.addEventListener('click', moveTask);

    const task_name = document.createElement('label');
    checkboxContainer.append(task_name);
    task_name.textContent = title;

    const dateContainer = document.createElement('div');
    dateContainer.setAttribute('class', 'task-container');
    task_container.append(dateContainer);

    const task_due_date = document.createElement('p');
    dateContainer.append(task_due_date);

    if (completed) {
      const completed_sectoion = document.querySelector('.completed');
      completed_sectoion.append(task_container);
      checkbox.checked = 'checked';
    } else {
      checkbox.setAttribute('data-task-iscompleted', false);
      const pending_section = document.querySelector('.pending');
      pending_section.append(task_container);
    }

    if (DueDate == '') {
      task_due_date.textContent = 'with no date set';
    } else {
      task_due_date.textContent = moment(DueDate).calendar();
    }

    const remove_task_button = document.createElement('span');
    remove_task_button.setAttribute('id', id);
    dateContainer.append(remove_task_button);
    remove_task_button.innerText = 'cancel';
    remove_task_button.addEventListener('click', deleteTaskFunction);
  };

  const deleteTaskFromDom = (event) => {
    const remove_task_btn = event.currentTarget;
    const id = remove_task_btn.getAttribute('id');
    console.log(id);
    const container = document.querySelector(`[data-task=${id}]`);
    container.remove();
  };

  const loadContent = (project, event) => {
    setTabAsActive(event.target);
    loadPage(project.id, 'today', project);
  };

  const todayLoader = () => {
    let completedTasks = 0;
    const today = document.querySelector('.active');
    const completedTaskCounter = document.querySelector('.counter');
    today.addEventListener('click', (event) =>
      loadContent(TodaylocalStorage, event)
    );
    TodaylocalStorage.tasks.forEach((task) => {
      task.completed === true && completedTasks++;
      displayTask(task, deleteTask, TodaylocalStorage.type);
    });
    completedTaskCounter.innerText = completedTasks;
  };

  return { displayTask, deleteTaskFromDom, todayLoader, handleTaskData };
})();

export { tasksModule };
