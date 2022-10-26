import { tasksModule } from './taskModule';
import { createProject } from '../Logic/projects-logic';

const create_project_btn = document.querySelector('#createProject');
const delete_project_btn = document.querySelector('#deleteProject');

const createPopUp = (add_task_function, project) => {
  const content = document.querySelector('.content');
  const popup_box = document.createElement('div');
  popup_box.setAttribute('class', 'task-popup');
  content.append(popup_box);

  const form = document.createElement('form');
  popup_box.append(form);

  const heading = document.createElement('h1');
  heading.innerText = `Create Task`;
  form.append(heading);

  const instruction = document.createElement('p');
  instruction.innerText = 'Create a quick task and set a date & time!\n';
  form.append(instruction);

  const input_containers = document.createElement('div');
  form.append(input_containers);
  const title_label = document.createElement('label');
  input_containers.append(title_label);
  title_label.innerText = 'Task';

  const task_input = document.createElement('input');
  task_input.setAttribute('type', 'text');
  task_input.setAttribute('id', 'task-input');
  input_containers.append(task_input);

  const date_container = document.createElement('div');
  form.append(date_container);
  const date_label = document.createElement('label');
  date_label.innerText = 'Due Date';
  date_container.append(date_label);

  const date_input = document.createElement('input');
  date_input.setAttribute('id', `date-input`);
  date_input.setAttribute('type', 'datetime-local');
  date_container.append(date_input);

  const button_container = document.createElement('div');
  button_container.setAttribute('class', 'form-buttons');
  form.append(button_container);

  const create_task_button = document.createElement('button');
  create_task_button.setAttribute('type', 'button');
  create_task_button.innerText = 'Create';
  button_container.append(create_task_button);
  addPopUpEvents(create_task_button, project);

  const cancel_button = document.createElement('button');
  cancel_button.setAttribute('type', 'button');
  cancel_button.innerText = 'Cancel';
  button_container.append(cancel_button);
  cancel_button.addEventListener('click', removePopup);

  function addPopUpEvents(create_task_button, project) {
    create_task_button.addEventListener('click', (e) =>
      tasksModule.handleTaskData(add_task_function, project)
    );
  }
};

const removePopup = () => {
  const popup_box = document.querySelector('.task-popup');
  popup_box.remove();
};

const createNewProjectInputField = () => {
  create_project_btn.style.display = 'none';
  delete_project_btn.style.display = 'none';

  const buttons_container = document.querySelector('.buttons');
  const input = document.createElement('input');
  const createButton = document.createElement('button');
  const cancelButton = document.createElement('button');
  const options = document.createElement('div');

  options.classList.add('options');
  input.setAttribute('id', 'createInput');
  createButton.setAttribute('id', 'createButton');
  cancelButton.setAttribute('id', 'cancelButton');

  createButton.textContent = 'Create';
  cancelButton.textContent = 'Cancel';

  buttons_container.append(input);
  buttons_container.append(options);
  options.append(createButton);
  options.append(cancelButton);

  createButton.style.display = 'block';
  cancelButton.style.display = 'block';

  cancelButton.addEventListener('click', removeNewProjectInputField);
  createButton.addEventListener('click', createProject);
};

function removeNewProjectInputField() {
  const options = document.querySelector('.options');
  const input = document.getElementById('createInput');
  create_project_btn.style.display = 'block';
  delete_project_btn.style.display = 'block';
  options.remove();
  input.remove();
}

export {
  createNewProjectInputField,
  createPopUp,
  removePopup,
  removeNewProjectInputField,
};
