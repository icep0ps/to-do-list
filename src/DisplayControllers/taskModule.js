var moment = require('moment');
import { removePopup } from './events';
import { TodaylocalStorage, deleteTask } from '../Logic/todos-logic';
import { setTabAsActive, loadPage, moveTask } from '../Logic/Loaders';

const tasksModule = (() => {
  const handleTaskData = (add_task_function, project) => {
    const title_input = document.querySelector('#task-input');
    const DueDate_input = document.querySelector('#date-input');
    console.log(title_input.value, DueDate_input);
    const title = title_input.value;
    const DueDate = DueDate_input.value;
    const binded = add_task_function.bind(project);
    binded(title, DueDate);
    removePopup();
  };

  const displayTask = (taskObject, deleteTaskFunction) => {
    console.log(taskObject);
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
    today.addEventListener('click', (event) =>
      loadContent(TodaylocalStorage, event)
    );
    TodaylocalStorage.tasks.forEach((task) => {
      console.log(TodaylocalStorage.tasks);
      displayTask(task, deleteTask);
    });
  };

  return { displayTask, deleteTaskFromDom, todayLoader, handleTaskData };
})();

export { tasksModule };
