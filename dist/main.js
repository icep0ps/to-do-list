/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/general-display-controller.js":
/*!*******************************************!*\
  !*** ./src/general-display-controller.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displaycompletedProjectTasks": () => (/* binding */ displaycompletedProjectTasks),
/* harmony export */   "displaycompletedTasks": () => (/* binding */ displaycompletedTasks),
/* harmony export */   "setActiveTab": () => (/* binding */ setActiveTab)
/* harmony export */ });
/* harmony import */ var _tasks_constructors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks-constructors */ "./src/tasks-constructors.js");


const displaycompletedTasks = (() => {
  let completedTasks = 0;
  const moveTask = (input) => {
    if (
      input.parentElement.parentElement.parentElement.getAttribute('class') ==
      'pending'
    ) {
      const completed = document.querySelector('.completed');
      completed.append(input.parentElement.parentElement);
      const span = completed.querySelector('.counter');
      completedTasks++;
      span.textContent = completedTasks;
    } else {
      const pending = document.querySelector('.pending');
      pending.append(input.parentElement.parentElement);
      const completed = document.querySelector('.completed');
      const span = completed.querySelector('span');
      completedTasks--;
      span.textContent = completedTasks;
    }
  };
  return { moveTask };
})();

const displaycompletedProjectTasks = (() => {
  let completedTasks = 0;
  const moveTask = (input) => {
    if (
      input.parentElement.parentElement.parentElement.getAttribute('class') ==
      'pending'
    ) {
      const completed = _tasks_constructors__WEBPACK_IMPORTED_MODULE_0__.currentdiv.querySelector('.completed');
      completed.append(input.parentElement.parentElement);
      const span = completed.querySelector('span');
      completedTasks++;
      span.textContent = completedTasks;
    } else {
      const pending = _tasks_constructors__WEBPACK_IMPORTED_MODULE_0__.currentdiv.querySelector('.pending');
      pending.append(input.parentElement.parentElement);
      const completed = _tasks_constructors__WEBPACK_IMPORTED_MODULE_0__.currentdiv.querySelector('.completed');
      const span = completed.querySelector('span');
      completedTasks--;
      span.textContent = completedTasks;
    }
  };
  return { moveTask };
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




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProjectPage": () => (/* binding */ createProjectPage)
/* harmony export */ });
/* harmony import */ var _tasks_constructors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks-constructors */ "./src/tasks-constructors.js");
/* harmony import */ var _general_display_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./general-display-controller */ "./src/general-display-controller.js");
/* harmony import */ var _task_display_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-display-controller */ "./src/task-display-controller.js");
/* harmony import */ var _project_display_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-display-controller */ "./src/project-display-controller.js");






let activePage = new _tasks_constructors__WEBPACK_IMPORTED_MODULE_0__.createDayTodos('today');
activePage.project();
activePage.inputs();
(0,_task_display_controller__WEBPACK_IMPORTED_MODULE_2__.todayLoader)();
(0,_project_display_controller__WEBPACK_IMPORTED_MODULE_3__.projectLoader)();

const DefaultactiveButton = (() => {
  const Today = document.querySelector('li');
  Today.addEventListener('click', (e) => {
    (0,_general_display_controller__WEBPACK_IMPORTED_MODULE_1__.setActiveTab)(e.target);
    (0,_task_display_controller__WEBPACK_IMPORTED_MODULE_2__.displayPage)(Today.textContent);
  });
})();

const createProjectPage = (() => {
  const createPage = (button) => {
    activePage = new _tasks_constructors__WEBPACK_IMPORTED_MODULE_0__.createProjectTodos(button.title);
    activePage.project();
    activePage.inputs();
  };

  return { createPage };
})();




/***/ }),

/***/ "./src/project-display-controller.js":
/*!*******************************************!*\
  !*** ./src/project-display-controller.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayPage": () => (/* binding */ displayPage),
/* harmony export */   "displayProjects": () => (/* binding */ displayProjects),
/* harmony export */   "displayTasks": () => (/* binding */ displayTasks),
/* harmony export */   "projectLoader": () => (/* binding */ projectLoader)
/* harmony export */ });
/* harmony import */ var _projects_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects-logic */ "./src/projects-logic.js");
/* harmony import */ var _tasks_constructors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks-constructors */ "./src/tasks-constructors.js");
/* harmony import */ var _general_display_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general-display-controller */ "./src/general-display-controller.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./src/index.js");





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
      (0,_general_display_controller__WEBPACK_IMPORTED_MODULE_2__.setActiveTab)(e.target);
      displayPage(project);
      displayTasks.showProjectTasks(project.title);
    });
  };

  const showProjects = () => {
    _projects_logic__WEBPACK_IMPORTED_MODULE_0__.createdProjects.forEach((project) => {
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
      _general_display_controller__WEBPACK_IMPORTED_MODULE_2__.displaycompletedProjectTasks.moveTask(checkbox);
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
      (0,_projects_logic__WEBPACK_IMPORTED_MODULE_0__.deleteTaskFromLocal)(tag, e.target);
    });
    div.append(removeIcon);
  };

  const showProjectTasks = (title) => {
    if (_projects_logic__WEBPACK_IMPORTED_MODULE_0__.saved == null) {
      _tasks_constructors__WEBPACK_IMPORTED_MODULE_1__.currentProject.forEach((projectsTask) => {
        if (!exist.includes(projectsTask.title)) {
          exist.push(projectsTask.title);
          createTask(projectsTask);
        }
      });
    } else {
      _projects_logic__WEBPACK_IMPORTED_MODULE_0__.saved.forEach((project) => {
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

    _index__WEBPACK_IMPORTED_MODULE_3__.createProjectPage.createPage(button);
  }
};

const deleteProject = () => {
  const active = document.querySelector('.active');
  const title = active.textContent;
  _projects_logic__WEBPACK_IMPORTED_MODULE_0__.saved.forEach((project) => {
    if (project.title == title) {
      const content = document.querySelector('.content');
      const projectDiv = content.querySelector(
        `[data-name="${project.title}"]`
      );
      if (content.contains(projectDiv)) {
        projectDiv.remove();
      }
      (0,_projects_logic__WEBPACK_IMPORTED_MODULE_0__.deleteProjectFromArray)(title);
      (0,_projects_logic__WEBPACK_IMPORTED_MODULE_0__.deleteProjectFromLocal)(title);
      active.remove();
    }
  });
};

const projectLoader = () => {
  if (_projects_logic__WEBPACK_IMPORTED_MODULE_0__.saved != null) {
    _projects_logic__WEBPACK_IMPORTED_MODULE_0__.saved.forEach((task) => {
      displayProjects.createProject(task);
    });
  }
};




/***/ }),

/***/ "./src/projects-logic.js":
/*!*******************************!*\
  !*** ./src/projects-logic.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createdProjects": () => (/* binding */ createdProjects),
/* harmony export */   "deleteProjectFromArray": () => (/* binding */ deleteProjectFromArray),
/* harmony export */   "deleteProjectFromLocal": () => (/* binding */ deleteProjectFromLocal),
/* harmony export */   "deleteTaskFromLocal": () => (/* binding */ deleteTaskFromLocal),
/* harmony export */   "projectMethods": () => (/* binding */ projectMethods),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "saved": () => (/* binding */ saved)
/* harmony export */ });
/* harmony import */ var _todos_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos-logic */ "./src/todos-logic.js");
/* harmony import */ var _project_display_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-display-controller */ "./src/project-display-controller.js");



const button1 = document.querySelector('#createProject');
const button2 = document.querySelector('#deleteProject');
button1.addEventListener('click', (e) => {
  createInput();
});

const createdProjects = [];
let saved = JSON.parse(localStorage.getItem('projects'));

class projects {
  constructor(title) {
    this.title = title;
    this.tasks = [];
  }
  addTask(title, DueDate) {
    let task = new _todos_logic__WEBPACK_IMPORTED_MODULE_0__.todos(title, DueDate);
    this.tasks.push(task);
    saveProjectTaskToLocal(task, this.title);
  }
}

const savetoLoacal = (data) => {
  if (saved == null) {
    localStorage.setItem('projects', JSON.stringify(createdProjects));
  } else {
    saved.push(data);
    localStorage.setItem('projects', JSON.stringify(saved));
  }
};

const saveProjectTaskToLocal = (data, parent) => {
  if (saved == null) {
    localStorage.setItem('projects', JSON.stringify(createdProjects));
  } else {
    saved.forEach((project) => {
      if (project.title == parent) {
        project.tasks.push(data);
        localStorage.setItem('projects', JSON.stringify(saved));
      }
    });
  }
};

const createProject = (() => {
  const addProject = (title) => {
    let project = new projects(title);
    createdProjects.push(project);
    savetoLoacal(project);
  };
  return { addProject };
})();

const deleteProjectFromArray = (title) => {
  createdProjects.forEach((project) => {
    if (project.title == title) {
      createdProjects.splice(createdProjects.indexOf(task), 1);
    }
  });
};

const createInput = () => {
  button1.style.display = 'none';
  button2.style.display = 'none';
  const div = document.querySelector('.buttons');
  const input = document.createElement('input');
  input.setAttribute('id', 'createInput');
  const options = document.createElement('div');
  options.classList.add('options');
  const createButton = document.createElement('button');
  const cancelButton = document.createElement('button');
  createButton.setAttribute('id', 'createButton');
  cancelButton.setAttribute('id', 'createButton');
  createButton.textContent = 'Create';
  cancelButton.textContent = 'Cancel';
  div.append(input);
  div.append(options);
  options.append(createButton);
  options.append(cancelButton);
  createButton.style.display = 'block';
  cancelButton.style.display = 'block';
  cancelButton.addEventListener('click', (e) => {
    button1.style.display = 'block';
    button2.style.display = 'block';
    options.remove();
    input.remove();
  });
  createButton.addEventListener('click', (e) => {
    createProject.addProject(input.value);
    _project_display_controller__WEBPACK_IMPORTED_MODULE_1__.displayProjects.showProjects();
    button1.style.display = 'block';
    button2.style.display = 'block';
    options.remove();
    input.remove();
  });
};

const deleteTaskFromLocal = (name, given) => {
  const taskDiv = given.parentElement.getAttribute('data-task');
  saved.forEach((project) => {
    if (project.title == name) {
      project.tasks.forEach((task) => {
        console.log(task.title);
        console.log(taskDiv);
        if (task.title == taskDiv) {
          project.tasks.splice(project.tasks.indexOf(task), 1);
          localStorage.setItem('projects', JSON.stringify(saved));
        }
      });
    }
  });
};

const deleteProjectFromLocal = (name) => {
  saved.forEach((project) => {
    if (project.title == name) {
      saved.splice(saved.indexOf(project), 1);
      localStorage.setItem('projects', JSON.stringify(saved));
    }
  });
};

function projectMethods(data) {
  this.title = data.title;
  this.tasks = [];
}

projectMethods.prototype.addTask = function (title, DueDate) {
  let task = new _todos_logic__WEBPACK_IMPORTED_MODULE_0__.todos(title, DueDate);
  this.tasks.push(task);
  saveProjectTaskToLocal(task, this.title);
};




/***/ }),

/***/ "./src/task-display-controller.js":
/*!****************************************!*\
  !*** ./src/task-display-controller.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayPage": () => (/* binding */ displayPage),
/* harmony export */   "displayTasks": () => (/* binding */ displayTasks),
/* harmony export */   "todayLoader": () => (/* binding */ todayLoader)
/* harmony export */ });
/* harmony import */ var _todos_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos-logic */ "./src/todos-logic.js");
/* harmony import */ var _general_display_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./general-display-controller */ "./src/general-display-controller.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/index.js");




const displayTasks = (() => {
  const exist = [];
  const createTask = (task) => {
    const div = document.createElement('div');
    const pending = document.querySelector('.pending');
    pending.append(div);
    div.classList.add('task');
    div.setAttribute('data-task', `${task.title}`);
    const con = document.createElement('div');
    div.append(con);
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    const date = document.createElement('p');
    if (task.date == '') {
      date.textContent = 'no date';
    } else {
      date.textContent = task.DueDate;
    }
    checkbox.addEventListener('click', (e) => {
      _general_display_controller__WEBPACK_IMPORTED_MODULE_1__.displaycompletedTasks.moveTask(checkbox);
    });
    con.append(checkbox);
    const title = document.createElement('label');
    con.append(title);
    title.textContent = task.title;
    div.append(date);
    const removeIcon = document.createElement('img');
    removeIcon.setAttribute('src', '/src/img/icons8-xbox-x-30.png');
    removeIcon.addEventListener('click', (e) => {
      e.stopPropagation();
      deleteTask(e.target);
    });
    div.append(removeIcon);
  };
  const showTasks = () => {
    _todos_logic__WEBPACK_IMPORTED_MODULE_0__.tasks.forEach((task) => {
      if (!exist.includes(task.title)) {
        exist.push(task.title);
        createTask(task);
      }
    });
  };
  return { showTasks, createTask };
})();

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

    _index__WEBPACK_IMPORTED_MODULE_2__.createProjectPage.createPage(button);
  }
};
const checkStorage = () => {
  return _todos_logic__WEBPACK_IMPORTED_MODULE_0__.saved == null ? true : false;
};

const deleteTask = (item) => {
  if (_todos_logic__WEBPACK_IMPORTED_MODULE_0__.saved == null) {
    _todos_logic__WEBPACK_IMPORTED_MODULE_0__.tasks.forEach((task) => {
      const taskDiv = item.parentElement.getAttribute('data-task');
      if (task.title == taskDiv) {
        item.parentElement.remove();
        (0,_todos_logic__WEBPACK_IMPORTED_MODULE_0__.deletetask)(taskDiv);
      }
    });
  } else {
    _todos_logic__WEBPACK_IMPORTED_MODULE_0__.saved.forEach((task) => {
      const taskDiv = item.parentElement.getAttribute('data-task');
      if (task.title == taskDiv) {
        item.parentElement.remove();
        (0,_todos_logic__WEBPACK_IMPORTED_MODULE_0__.deletetask)(taskDiv);
        (0,_todos_logic__WEBPACK_IMPORTED_MODULE_0__.deleteTaskFromLocal)(taskDiv);
      }
    });
  }
};

const todayLoader = () => {
  if (_todos_logic__WEBPACK_IMPORTED_MODULE_0__.saved != null) {
    _todos_logic__WEBPACK_IMPORTED_MODULE_0__.saved.forEach((task) => {
      displayTasks.createTask(task);
    });
  }
};




/***/ }),

/***/ "./src/tasks-constructors.js":
/*!***********************************!*\
  !*** ./src/tasks-constructors.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDayTodos": () => (/* binding */ createDayTodos),
/* harmony export */   "createProjectTodos": () => (/* binding */ createProjectTodos),
/* harmony export */   "currentProject": () => (/* binding */ currentProject),
/* harmony export */   "currentdiv": () => (/* binding */ currentdiv)
/* harmony export */ });
/* harmony import */ var _todos_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos-logic */ "./src/todos-logic.js");
/* harmony import */ var _task_display_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-display-controller */ "./src/task-display-controller.js");
/* harmony import */ var _project_display_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-display-controller */ "./src/project-display-controller.js");
/* harmony import */ var _projects_logic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects-logic */ "./src/projects-logic.js");





let currentProject = '';
let currentdiv = '';

class createProjectTodos {
  constructor(title) {
    this.title = title;
  }

  project = () => {
    const content = document.querySelector('.content');
    const page = document.createElement('div');
    page.className = `${this.title}`;
    page.setAttribute('id', 'group');
    page.setAttribute('data-name', `${this.title}`);
    page.setAttribute('data-active', 'true');
    content.append(page);
    const title = document.createElement('h1');
    page.append(title);
    title.textContent = this.title;

    const pending = document.createElement('div');
    pending.classList.add('pending');
    pending.setAttribute('data-title', `${this.title}`);
    page.append(pending);

    const completedtitle = document.createElement('h1');
    page.append(completedtitle);
    completedtitle.textContent = 'Completed';
    const counter = document.createElement('span');
    completedtitle.append(counter);
    counter.classList.add('counter');
    counter.textContent = 0;

    const completed = document.createElement('div');
    completed.className = 'pending completed';
    page.append(completed);
  };

  createPopUp = () => {
    const content = document.querySelector(`[data-name="${this.title}"]`);
    const box = document.createElement('div');
    box.setAttribute('class', 'task-popup');
    content.append(box);

    const form = document.createElement('form');
    box.append(form);
    const h1 = document.createElement('h1');
    h1.innerText = 'Create Task';
    form.append(h1);

    const titleDiv = document.createElement('div');
    form.append(titleDiv);
    const labelTiltle = document.createElement('label');
    titleDiv.append(labelTiltle);
    labelTiltle.innerText = 'Task';

    const text = document.createElement('input');
    text.setAttribute('type', 'text');
    text.setAttribute('data-input', `${this.title}`);
    titleDiv.append(text);
    const dateDiv = document.createElement('div');
    form.append(dateDiv);
    const dateLabel = document.createElement('label');
    dateLabel.innerText = 'Due Date';
    dateDiv.append(dateLabel);
    const date = document.createElement('input');
    date.setAttribute('type', 'date');
    dateDiv.append(date);

    const btnDiv = document.createElement('div');
    btnDiv.setAttribute('class', 'form-buttons');
    form.append(btnDiv);
    const createBtn = document.createElement('button');
    createBtn.setAttribute('type', 'button');
    createBtn.innerText = '+ Create';
    createBtn.addEventListener('click', (e) => {
      if (_projects_logic__WEBPACK_IMPORTED_MODULE_3__.saved !== null) {
        _projects_logic__WEBPACK_IMPORTED_MODULE_3__.saved.forEach((project) => {
          if (project.title == content.getAttribute('class')) {
            const addMethods = new _projects_logic__WEBPACK_IMPORTED_MODULE_3__.projectMethods(project);
            addMethods.addTask(text.value, date.value);
            currentProject = project.tasks;
            currentdiv = content;
            _project_display_controller__WEBPACK_IMPORTED_MODULE_2__.displayTasks.showProjectTasks(project.title);
            box.remove();
          }
        });
      } else {
        _projects_logic__WEBPACK_IMPORTED_MODULE_3__.createdProjects.forEach((project) => {
          if (project.title == content.getAttribute('class')) {
            project.addTask(input.value, 'some randome');
            currentProject = project.tasks;
            currentdiv = content;
            _project_display_controller__WEBPACK_IMPORTED_MODULE_2__.displayTasks.showProjectTasks(project.title);
            box.remove();
          }
        });
      }
    });
    btnDiv.append(createBtn);
    const cancelBtn = document.createElement('button');
    cancelBtn.innerText = 'Cancel';
    btnDiv.append(cancelBtn);
    cancelBtn.addEventListener('click', (e) => {
      box.remove();
    });
  };

  inputs = () => {
    const page = document.querySelector(`[data-name="${this.title}"]`);
    const addTaskButtons = document.createElement('div');
    addTaskButtons.classList.add('add-task');
    page.append(addTaskButtons);

    const button = document.createElement('button');
    button.setAttribute('id', 'add');
    addTaskButtons.append(button);
    button.textContent = 'Add Task';
    button.addEventListener('click', (e) => {
      this.createPopUp();
    });
  };
}

class createDayTodos extends createProjectTodos {
  constructor(title) {
    super(title);
    this.title = 'Today';
  }
  createPopUp = () => {
    const content = document.querySelector(`[data-name="${this.title}"]`);
    const box = document.createElement('div');
    box.setAttribute('class', 'task-popup');
    content.append(box);

    const form = document.createElement('form');
    box.append(form);
    const h1 = document.createElement('h1');
    h1.innerText = 'Create Task';
    form.append(h1);

    const titleDiv = document.createElement('div');
    form.append(titleDiv);
    const labelTiltle = document.createElement('label');
    titleDiv.append(labelTiltle);
    labelTiltle.innerText = 'Task';

    const text = document.createElement('input');
    text.setAttribute('type', 'text');
    text.setAttribute('data-input', `${this.title}`);
    titleDiv.append(text);
    const dateDiv = document.createElement('div');
    form.append(dateDiv);
    const dateLabel = document.createElement('label');
    dateLabel.innerText = 'Due Date';
    dateDiv.append(dateLabel);
    const date = document.createElement('input');
    date.setAttribute('type', 'date');
    dateDiv.append(date);

    const btnDiv = document.createElement('div');
    btnDiv.setAttribute('class', 'form-buttons');
    form.append(btnDiv);
    const createBtn = document.createElement('button');
    createBtn.setAttribute('type', 'button');
    createBtn.innerText = 'Create';
    createBtn.addEventListener('click', (e) => {
      _todos_logic__WEBPACK_IMPORTED_MODULE_0__.createTasks.addTask(text.value, date.value);
      _task_display_controller__WEBPACK_IMPORTED_MODULE_1__.displayTasks.showTasks();
      box.remove();
    });
    btnDiv.append(createBtn);
    const cancelBtn = document.createElement('button');
    cancelBtn.innerText = 'Cancel';
    btnDiv.append(cancelBtn);
    cancelBtn.addEventListener('click', (e) => {
      box.remove();
    });
  };

  inputs = () => {
    const page = document.querySelector(`.${this.title}`);
    const addTaskButtons = document.createElement('div');
    addTaskButtons.classList.add('add-task');
    page.append(addTaskButtons);

    const button = document.createElement('button');
    button.setAttribute('id', 'add');
    addTaskButtons.append(button);
    button.textContent = 'Add Task';
    button.addEventListener('click', (e) => {
      this.createPopUp();
    });
  };
}




/***/ }),

/***/ "./src/todos-logic.js":
/*!****************************!*\
  !*** ./src/todos-logic.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTasks": () => (/* binding */ createTasks),
/* harmony export */   "deleteTaskFromLocal": () => (/* binding */ deleteTaskFromLocal),
/* harmony export */   "deletetask": () => (/* binding */ deletetask),
/* harmony export */   "saved": () => (/* binding */ saved),
/* harmony export */   "tasks": () => (/* binding */ tasks),
/* harmony export */   "todos": () => (/* binding */ todos)
/* harmony export */ });
/* harmony import */ var _task_display_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-display-controller */ "./src/task-display-controller.js");


const tasks = [];
let saved = JSON.parse(localStorage.getItem('today'));

const savetoLoacal = (data) => {
  if (saved == null) {
    localStorage.setItem('today', JSON.stringify(tasks));
  } else {
    saved.push(data);
    localStorage.setItem('today', JSON.stringify(saved));
  }
};

class todos {
  constructor(title, DueDate) {
    this.title = title;
    this.DueDate = DueDate;
  }
}

const createTasks = (() => {
  const addTask = (title, DueDate) => {
    let task = new todos(title, DueDate);
    tasks.push(task);
    savetoLoacal(task);
  };

  return { addTask };
})();

const deletetask = (item) => {
  tasks.forEach((task) => {
    if (task.title == item) {
      tasks.splice(tasks.indexOf(task), 1);
    }
  });
};

const deleteTaskFromLocal = (item) => {
  saved.forEach((task) => {
    if (task.title == item) {
      saved.splice(saved.indexOf(task), 1);
      localStorage.setItem('today', JSON.stringify(saved));
    }
  });
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0sNEVBQXNCO0FBQzVCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsV0FBVztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDMEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pNakI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDNkU7Ozs7Ozs7VUNoRDdFO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9nZW5lcmFsLWRpc3BsYXktY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdC1kaXNwbGF5LWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy1sb2dpYy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2stZGlzcGxheS1jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFza3MtY29uc3RydWN0b3JzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kb3MtbG9naWMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjdXJyZW50UHJvamVjdCwgY3VycmVudGRpdiB9IGZyb20gJy4vdGFza3MtY29uc3RydWN0b3JzJztcclxuXHJcbmNvbnN0IGRpc3BsYXljb21wbGV0ZWRUYXNrcyA9ICgoKSA9PiB7XHJcbiAgbGV0IGNvbXBsZXRlZFRhc2tzID0gMDtcclxuICBjb25zdCBtb3ZlVGFzayA9IChpbnB1dCkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICBpbnB1dC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT1cclxuICAgICAgJ3BlbmRpbmcnXHJcbiAgICApIHtcclxuICAgICAgY29uc3QgY29tcGxldGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlZCcpO1xyXG4gICAgICBjb21wbGV0ZWQuYXBwZW5kKGlucHV0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCk7XHJcbiAgICAgIGNvbnN0IHNwYW4gPSBjb21wbGV0ZWQucXVlcnlTZWxlY3RvcignLmNvdW50ZXInKTtcclxuICAgICAgY29tcGxldGVkVGFza3MrKztcclxuICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGNvbXBsZXRlZFRhc2tzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgcGVuZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wZW5kaW5nJyk7XHJcbiAgICAgIHBlbmRpbmcuYXBwZW5kKGlucHV0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCk7XHJcbiAgICAgIGNvbnN0IGNvbXBsZXRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wbGV0ZWQnKTtcclxuICAgICAgY29uc3Qgc3BhbiA9IGNvbXBsZXRlZC5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XHJcbiAgICAgIGNvbXBsZXRlZFRhc2tzLS07XHJcbiAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBjb21wbGV0ZWRUYXNrcztcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiB7IG1vdmVUYXNrIH07XHJcbn0pKCk7XHJcblxyXG5jb25zdCBkaXNwbGF5Y29tcGxldGVkUHJvamVjdFRhc2tzID0gKCgpID0+IHtcclxuICBsZXQgY29tcGxldGVkVGFza3MgPSAwO1xyXG4gIGNvbnN0IG1vdmVUYXNrID0gKGlucHV0KSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGlucHV0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PVxyXG4gICAgICAncGVuZGluZydcclxuICAgICkge1xyXG4gICAgICBjb25zdCBjb21wbGV0ZWQgPSBjdXJyZW50ZGl2LnF1ZXJ5U2VsZWN0b3IoJy5jb21wbGV0ZWQnKTtcclxuICAgICAgY29tcGxldGVkLmFwcGVuZChpbnB1dC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpO1xyXG4gICAgICBjb25zdCBzcGFuID0gY29tcGxldGVkLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcclxuICAgICAgY29tcGxldGVkVGFza3MrKztcclxuICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGNvbXBsZXRlZFRhc2tzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgcGVuZGluZyA9IGN1cnJlbnRkaXYucXVlcnlTZWxlY3RvcignLnBlbmRpbmcnKTtcclxuICAgICAgcGVuZGluZy5hcHBlbmQoaW5wdXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50KTtcclxuICAgICAgY29uc3QgY29tcGxldGVkID0gY3VycmVudGRpdi5xdWVyeVNlbGVjdG9yKCcuY29tcGxldGVkJyk7XHJcbiAgICAgIGNvbnN0IHNwYW4gPSBjb21wbGV0ZWQucXVlcnlTZWxlY3Rvcignc3BhbicpO1xyXG4gICAgICBjb21wbGV0ZWRUYXNrcy0tO1xyXG4gICAgICBzcGFuLnRleHRDb250ZW50ID0gY29tcGxldGVkVGFza3M7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4geyBtb3ZlVGFzayB9O1xyXG59KSgpO1xyXG5cclxuY29uc3Qgc2V0QWN0aXZlVGFiID0gKHRhYikgPT4ge1xyXG4gIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xyXG4gIEFycmF5LmZyb20odGFicykuZm9yRWFjaCgobGkpID0+IHtcclxuICAgIGlmIChsaS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgIGxpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGlmICh0YWIuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0YWIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhY3RpdmUnKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgeyBzZXRBY3RpdmVUYWIsIGRpc3BsYXljb21wbGV0ZWRQcm9qZWN0VGFza3MsIGRpc3BsYXljb21wbGV0ZWRUYXNrcyB9O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVEYXlUb2RvcyB9IGZyb20gJy4vdGFza3MtY29uc3RydWN0b3JzJztcclxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdFRvZG9zIH0gZnJvbSAnLi90YXNrcy1jb25zdHJ1Y3RvcnMnO1xyXG5pbXBvcnQgeyBzZXRBY3RpdmVUYWIgfSBmcm9tICcuL2dlbmVyYWwtZGlzcGxheS1jb250cm9sbGVyJztcclxuaW1wb3J0IHsgdG9kYXlMb2FkZXIsIGRpc3BsYXlQYWdlIH0gZnJvbSAnLi90YXNrLWRpc3BsYXktY29udHJvbGxlcic7XHJcbmltcG9ydCB7IHByb2plY3RMb2FkZXIgfSBmcm9tICcuL3Byb2plY3QtZGlzcGxheS1jb250cm9sbGVyJztcclxuXHJcbmxldCBhY3RpdmVQYWdlID0gbmV3IGNyZWF0ZURheVRvZG9zKCd0b2RheScpO1xyXG5hY3RpdmVQYWdlLnByb2plY3QoKTtcclxuYWN0aXZlUGFnZS5pbnB1dHMoKTtcclxudG9kYXlMb2FkZXIoKTtcclxucHJvamVjdExvYWRlcigpO1xyXG5cclxuY29uc3QgRGVmYXVsdGFjdGl2ZUJ1dHRvbiA9ICgoKSA9PiB7XHJcbiAgY29uc3QgVG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaScpO1xyXG4gIFRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIHNldEFjdGl2ZVRhYihlLnRhcmdldCk7XHJcbiAgICBkaXNwbGF5UGFnZShUb2RheS50ZXh0Q29udGVudCk7XHJcbiAgfSk7XHJcbn0pKCk7XHJcblxyXG5jb25zdCBjcmVhdGVQcm9qZWN0UGFnZSA9ICgoKSA9PiB7XHJcbiAgY29uc3QgY3JlYXRlUGFnZSA9IChidXR0b24pID0+IHtcclxuICAgIGFjdGl2ZVBhZ2UgPSBuZXcgY3JlYXRlUHJvamVjdFRvZG9zKGJ1dHRvbi50aXRsZSk7XHJcbiAgICBhY3RpdmVQYWdlLnByb2plY3QoKTtcclxuICAgIGFjdGl2ZVBhZ2UuaW5wdXRzKCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHsgY3JlYXRlUGFnZSB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdFBhZ2UgfTtcclxuIiwiaW1wb3J0IHtcclxuICBjcmVhdGVkUHJvamVjdHMsXHJcbiAgZGVsZXRlUHJvamVjdEZyb21BcnJheSxcclxuICBzYXZlZCxcclxuICBkZWxldGVUYXNrRnJvbUxvY2FsLFxyXG4gIGRlbGV0ZVByb2plY3RGcm9tTG9jYWwsXHJcbn0gZnJvbSAnLi9wcm9qZWN0cy1sb2dpYyc7XHJcbmltcG9ydCB7IGN1cnJlbnRQcm9qZWN0IH0gZnJvbSAnLi90YXNrcy1jb25zdHJ1Y3RvcnMnO1xyXG5pbXBvcnQge1xyXG4gIHNldEFjdGl2ZVRhYixcclxuICBkaXNwbGF5Y29tcGxldGVkUHJvamVjdFRhc2tzLFxyXG59IGZyb20gJy4vZ2VuZXJhbC1kaXNwbGF5LWNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0UGFnZSB9IGZyb20gJy4vaW5kZXgnO1xyXG5cclxuY29uc3QgZGlzcGxheVByb2plY3RzID0gKCgpID0+IHtcclxuICBjb25zdCBleGlzdCA9IFtdO1xyXG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XHJcbiAgY29uc3QgY3JlYXRlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIHByb2plY3RMaXN0LmFwcGVuZChuZXdQcm9qZWN0KTtcclxuICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xyXG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RlbGV0ZVByb2plY3QnKTtcclxuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGRlbGV0ZVByb2plY3QoKTtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH0pO1xyXG4gICAgbmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIHNldEFjdGl2ZVRhYihlLnRhcmdldCk7XHJcbiAgICAgIGRpc3BsYXlQYWdlKHByb2plY3QpO1xyXG4gICAgICBkaXNwbGF5VGFza3Muc2hvd1Byb2plY3RUYXNrcyhwcm9qZWN0LnRpdGxlKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNob3dQcm9qZWN0cyA9ICgpID0+IHtcclxuICAgIGNyZWF0ZWRQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgIGlmICghZXhpc3QuaW5jbHVkZXMocHJvamVjdC50aXRsZSkpIHtcclxuICAgICAgICBleGlzdC5wdXNoKHByb2plY3QudGl0bGUpO1xyXG4gICAgICAgIGNyZWF0ZVByb2plY3QocHJvamVjdCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcbiAgcmV0dXJuIHsgc2hvd1Byb2plY3RzLCBjcmVhdGVQcm9qZWN0IH07XHJcbn0pKCk7XHJcblxyXG5jb25zdCBkaXNwbGF5VGFza3MgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGV4aXN0ID0gW107XHJcbiAgY29uc3QgY3JlYXRlVGFzayA9IChwcm9qZWN0c1Rhc2spID0+IHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IGN1cnJlbnRkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1hY3RpdmVdYCk7XHJcbiAgICBjb25zdCBwZW5kaW5nID0gY3VycmVudGRpdi5xdWVyeVNlbGVjdG9yKCcucGVuZGluZycpO1xyXG4gICAgcGVuZGluZy5hcHBlbmQoZGl2KTtcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XHJcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdkYXRhLXRhc2snLCBgJHtwcm9qZWN0c1Rhc2sudGl0bGV9YCk7XHJcbiAgICBjb25zdCBjb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdi5hcHBlbmQoY29uKTtcclxuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xyXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgZGlzcGxheWNvbXBsZXRlZFByb2plY3RUYXNrcy5tb3ZlVGFzayhjaGVja2JveCk7XHJcbiAgICB9KTtcclxuICAgIGNvbi5hcHBlbmQoY2hlY2tib3gpO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGNvbi5hcHBlbmQodGl0bGUpO1xyXG4gICAgY29uLmFwcGVuZChkYXRlKTtcclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdHNUYXNrLnRpdGxlO1xyXG5cclxuICAgIGNvbnN0IHJlbW92ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIHJlbW92ZUljb24uc2V0QXR0cmlidXRlKCdzcmMnLCAnL3NyYy9pbWcvaWNvbnM4LXhib3gteC0zMC5wbmcnKTtcclxuICAgIHJlbW92ZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICBsZXQgdGFnID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10aXRsZScpO1xyXG4gICAgICByZW1vdmVJY29uLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgIGRlbGV0ZVRhc2tGcm9tTG9jYWwodGFnLCBlLnRhcmdldCk7XHJcbiAgICB9KTtcclxuICAgIGRpdi5hcHBlbmQocmVtb3ZlSWNvbik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2hvd1Byb2plY3RUYXNrcyA9ICh0aXRsZSkgPT4ge1xyXG4gICAgaWYgKHNhdmVkID09IG51bGwpIHtcclxuICAgICAgY3VycmVudFByb2plY3QuZm9yRWFjaCgocHJvamVjdHNUYXNrKSA9PiB7XHJcbiAgICAgICAgaWYgKCFleGlzdC5pbmNsdWRlcyhwcm9qZWN0c1Rhc2sudGl0bGUpKSB7XHJcbiAgICAgICAgICBleGlzdC5wdXNoKHByb2plY3RzVGFzay50aXRsZSk7XHJcbiAgICAgICAgICBjcmVhdGVUYXNrKHByb2plY3RzVGFzayk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNhdmVkLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgICBpZiAocHJvamVjdC50aXRsZSA9PT0gdGl0bGUpIHtcclxuICAgICAgICAgIHByb2plY3QudGFza3MuZm9yRWFjaCgocHJvamVjdHNUYXNrKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZXhpc3QuaW5jbHVkZXMocHJvamVjdHNUYXNrLnRpdGxlKSkge1xyXG4gICAgICAgICAgICAgIGV4aXN0LnB1c2gocHJvamVjdHNUYXNrLnRpdGxlKTtcclxuICAgICAgICAgICAgICBjcmVhdGVUYXNrKHByb2plY3RzVGFzayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4geyBzaG93UHJvamVjdFRhc2tzLCBjcmVhdGVUYXNrIH07XHJcbn0pKCk7XHJcblxyXG5jb25zdCBkaXNwbGF5UGFnZSA9IChidXR0b24pID0+IHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcclxuICBjb25zdCBnZXRkaXYgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW5hbWU9XCIke2J1dHRvbi50aXRsZX1cIl1gKTtcclxuICBpZiAoY29udGVudC5jb250YWlucyhnZXRkaXYpKSB7XHJcbiAgICBjb25zdCBkaXZzID0gY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCcjZ3JvdXAnKTtcclxuICAgIEFycmF5LmZyb20oZGl2cykuZm9yRWFjaCgoZGl2KSA9PiB7XHJcbiAgICAgIGlmIChkaXYuZ2V0QXR0cmlidXRlKCdjbGFzcycpID09PSBnZXRkaXYuZ2V0QXR0cmlidXRlKCdjbGFzcycpKSB7XHJcbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnZGF0YS1hY3RpdmUnLCAndHJ1ZScpO1xyXG4gICAgICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpdi5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtYWN0aXZlJywgJ3RydWUnKTtcclxuICAgICAgICBkaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IGhpZGUgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNncm91cCcpO1xyXG4gICAgaGlkZS5mb3JFYWNoKChkaXYpID0+IHtcclxuICAgICAgZGl2LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1hY3RpdmUnLCAndHJ1ZScpO1xyXG4gICAgICBkaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0pO1xyXG5cclxuICAgIGNyZWF0ZVByb2plY3RQYWdlLmNyZWF0ZVBhZ2UoYnV0dG9uKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBkZWxldGVQcm9qZWN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKTtcclxuICBjb25zdCB0aXRsZSA9IGFjdGl2ZS50ZXh0Q29udGVudDtcclxuICBzYXZlZC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICBpZiAocHJvamVjdC50aXRsZSA9PSB0aXRsZSkge1xyXG4gICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcclxuICAgICAgY29uc3QgcHJvamVjdERpdiA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBgW2RhdGEtbmFtZT1cIiR7cHJvamVjdC50aXRsZX1cIl1gXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChjb250ZW50LmNvbnRhaW5zKHByb2plY3REaXYpKSB7XHJcbiAgICAgICAgcHJvamVjdERpdi5yZW1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgICBkZWxldGVQcm9qZWN0RnJvbUFycmF5KHRpdGxlKTtcclxuICAgICAgZGVsZXRlUHJvamVjdEZyb21Mb2NhbCh0aXRsZSk7XHJcbiAgICAgIGFjdGl2ZS5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHByb2plY3RMb2FkZXIgPSAoKSA9PiB7XHJcbiAgaWYgKHNhdmVkICE9IG51bGwpIHtcclxuICAgIHNhdmVkLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgZGlzcGxheVByb2plY3RzLmNyZWF0ZVByb2plY3QodGFzayk7XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgeyBkaXNwbGF5UHJvamVjdHMsIGRpc3BsYXlUYXNrcywgcHJvamVjdExvYWRlciwgZGlzcGxheVBhZ2UgfTtcclxuIiwiaW1wb3J0IHsgdG9kb3MgfSBmcm9tICcuL3RvZG9zLWxvZ2ljJztcclxuaW1wb3J0IHsgZGlzcGxheVByb2plY3RzIH0gZnJvbSAnLi9wcm9qZWN0LWRpc3BsYXktY29udHJvbGxlcic7XHJcblxyXG5jb25zdCBidXR0b24xID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZVByb2plY3QnKTtcclxuY29uc3QgYnV0dG9uMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZWxldGVQcm9qZWN0Jyk7XHJcbmJ1dHRvbjEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGNyZWF0ZUlucHV0KCk7XHJcbn0pO1xyXG5cclxuY29uc3QgY3JlYXRlZFByb2plY3RzID0gW107XHJcbmxldCBzYXZlZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xyXG5cclxuY2xhc3MgcHJvamVjdHMge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLnRhc2tzID0gW107XHJcbiAgfVxyXG4gIGFkZFRhc2sodGl0bGUsIER1ZURhdGUpIHtcclxuICAgIGxldCB0YXNrID0gbmV3IHRvZG9zKHRpdGxlLCBEdWVEYXRlKTtcclxuICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcclxuICAgIHNhdmVQcm9qZWN0VGFza1RvTG9jYWwodGFzaywgdGhpcy50aXRsZSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBzYXZldG9Mb2FjYWwgPSAoZGF0YSkgPT4ge1xyXG4gIGlmIChzYXZlZCA9PSBudWxsKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShjcmVhdGVkUHJvamVjdHMpKTtcclxuICB9IGVsc2Uge1xyXG4gICAgc2F2ZWQucHVzaChkYXRhKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHNhdmVkKSk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3Qgc2F2ZVByb2plY3RUYXNrVG9Mb2NhbCA9IChkYXRhLCBwYXJlbnQpID0+IHtcclxuICBpZiAoc2F2ZWQgPT0gbnVsbCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoY3JlYXRlZFByb2plY3RzKSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHNhdmVkLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgaWYgKHByb2plY3QudGl0bGUgPT0gcGFyZW50KSB7XHJcbiAgICAgICAgcHJvamVjdC50YXNrcy5wdXNoKGRhdGEpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHNhdmVkKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZVByb2plY3QgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGFkZFByb2plY3QgPSAodGl0bGUpID0+IHtcclxuICAgIGxldCBwcm9qZWN0ID0gbmV3IHByb2plY3RzKHRpdGxlKTtcclxuICAgIGNyZWF0ZWRQcm9qZWN0cy5wdXNoKHByb2plY3QpO1xyXG4gICAgc2F2ZXRvTG9hY2FsKHByb2plY3QpO1xyXG4gIH07XHJcbiAgcmV0dXJuIHsgYWRkUHJvamVjdCB9O1xyXG59KSgpO1xyXG5cclxuY29uc3QgZGVsZXRlUHJvamVjdEZyb21BcnJheSA9ICh0aXRsZSkgPT4ge1xyXG4gIGNyZWF0ZWRQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICBpZiAocHJvamVjdC50aXRsZSA9PSB0aXRsZSkge1xyXG4gICAgICBjcmVhdGVkUHJvamVjdHMuc3BsaWNlKGNyZWF0ZWRQcm9qZWN0cy5pbmRleE9mKHRhc2spLCAxKTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUlucHV0ID0gKCkgPT4ge1xyXG4gIGJ1dHRvbjEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICBidXR0b24yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbnMnKTtcclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdjcmVhdGVJbnB1dCcpO1xyXG4gIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBvcHRpb25zLmNsYXNzTGlzdC5hZGQoJ29wdGlvbnMnKTtcclxuICBjb25zdCBjcmVhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjcmVhdGVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdjcmVhdGVCdXR0b24nKTtcclxuICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdjcmVhdGVCdXR0b24nKTtcclxuICBjcmVhdGVCdXR0b24udGV4dENvbnRlbnQgPSAnQ3JlYXRlJztcclxuICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcclxuICBkaXYuYXBwZW5kKGlucHV0KTtcclxuICBkaXYuYXBwZW5kKG9wdGlvbnMpO1xyXG4gIG9wdGlvbnMuYXBwZW5kKGNyZWF0ZUJ1dHRvbik7XHJcbiAgb3B0aW9ucy5hcHBlbmQoY2FuY2VsQnV0dG9uKTtcclxuICBjcmVhdGVCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgY2FuY2VsQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBidXR0b24xLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgYnV0dG9uMi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIG9wdGlvbnMucmVtb3ZlKCk7XHJcbiAgICBpbnB1dC5yZW1vdmUoKTtcclxuICB9KTtcclxuICBjcmVhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgY3JlYXRlUHJvamVjdC5hZGRQcm9qZWN0KGlucHV0LnZhbHVlKTtcclxuICAgIGRpc3BsYXlQcm9qZWN0cy5zaG93UHJvamVjdHMoKTtcclxuICAgIGJ1dHRvbjEuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBidXR0b24yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgb3B0aW9ucy5yZW1vdmUoKTtcclxuICAgIGlucHV0LnJlbW92ZSgpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZGVsZXRlVGFza0Zyb21Mb2NhbCA9IChuYW1lLCBnaXZlbikgPT4ge1xyXG4gIGNvbnN0IHRhc2tEaXYgPSBnaXZlbi5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10YXNrJyk7XHJcbiAgc2F2ZWQuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgaWYgKHByb2plY3QudGl0bGUgPT0gbmFtZSkge1xyXG4gICAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrLnRpdGxlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrRGl2KTtcclxuICAgICAgICBpZiAodGFzay50aXRsZSA9PSB0YXNrRGl2KSB7XHJcbiAgICAgICAgICBwcm9qZWN0LnRhc2tzLnNwbGljZShwcm9qZWN0LnRhc2tzLmluZGV4T2YodGFzayksIDEpO1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoc2F2ZWQpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZGVsZXRlUHJvamVjdEZyb21Mb2NhbCA9IChuYW1lKSA9PiB7XHJcbiAgc2F2ZWQuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgaWYgKHByb2plY3QudGl0bGUgPT0gbmFtZSkge1xyXG4gICAgICBzYXZlZC5zcGxpY2Uoc2F2ZWQuaW5kZXhPZihwcm9qZWN0KSwgMSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHNhdmVkKSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBwcm9qZWN0TWV0aG9kcyhkYXRhKSB7XHJcbiAgdGhpcy50aXRsZSA9IGRhdGEudGl0bGU7XHJcbiAgdGhpcy50YXNrcyA9IFtdO1xyXG59XHJcblxyXG5wcm9qZWN0TWV0aG9kcy5wcm90b3R5cGUuYWRkVGFzayA9IGZ1bmN0aW9uICh0aXRsZSwgRHVlRGF0ZSkge1xyXG4gIGxldCB0YXNrID0gbmV3IHRvZG9zKHRpdGxlLCBEdWVEYXRlKTtcclxuICB0aGlzLnRhc2tzLnB1c2godGFzayk7XHJcbiAgc2F2ZVByb2plY3RUYXNrVG9Mb2NhbCh0YXNrLCB0aGlzLnRpdGxlKTtcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgcHJvamVjdHMsXHJcbiAgY3JlYXRlZFByb2plY3RzLFxyXG4gIGRlbGV0ZVByb2plY3RGcm9tQXJyYXksXHJcbiAgc2F2ZWQsXHJcbiAgcHJvamVjdE1ldGhvZHMsXHJcbiAgZGVsZXRlVGFza0Zyb21Mb2NhbCxcclxuICBkZWxldGVQcm9qZWN0RnJvbUxvY2FsLFxyXG59O1xyXG4iLCJpbXBvcnQge1xyXG4gIHRhc2tzLFxyXG4gIGRlbGV0ZXRhc2sgYXMgZGVsZXRldGFza0Zyb21BcnJheSxcclxuICBzYXZlZCxcclxuICBkZWxldGVUYXNrRnJvbUxvY2FsLFxyXG59IGZyb20gJy4vdG9kb3MtbG9naWMnO1xyXG5pbXBvcnQgeyBkaXNwbGF5Y29tcGxldGVkVGFza3MgfSBmcm9tICcuL2dlbmVyYWwtZGlzcGxheS1jb250cm9sbGVyJztcclxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdFBhZ2UgfSBmcm9tICcuL2luZGV4JztcclxuXHJcbmNvbnN0IGRpc3BsYXlUYXNrcyA9ICgoKSA9PiB7XHJcbiAgY29uc3QgZXhpc3QgPSBbXTtcclxuICBjb25zdCBjcmVhdGVUYXNrID0gKHRhc2spID0+IHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgcGVuZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wZW5kaW5nJyk7XHJcbiAgICBwZW5kaW5nLmFwcGVuZChkaXYpO1xyXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcclxuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzaycsIGAke3Rhc2sudGl0bGV9YCk7XHJcbiAgICBjb25zdCBjb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdi5hcHBlbmQoY29uKTtcclxuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xyXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGlmICh0YXNrLmRhdGUgPT0gJycpIHtcclxuICAgICAgZGF0ZS50ZXh0Q29udGVudCA9ICdubyBkYXRlJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRhdGUudGV4dENvbnRlbnQgPSB0YXNrLkR1ZURhdGU7XHJcbiAgICB9XHJcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGRpc3BsYXljb21wbGV0ZWRUYXNrcy5tb3ZlVGFzayhjaGVja2JveCk7XHJcbiAgICB9KTtcclxuICAgIGNvbi5hcHBlbmQoY2hlY2tib3gpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgY29uLmFwcGVuZCh0aXRsZSk7XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XHJcbiAgICBkaXYuYXBwZW5kKGRhdGUpO1xyXG4gICAgY29uc3QgcmVtb3ZlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgcmVtb3ZlSWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsICcvc3JjL2ltZy9pY29uczgteGJveC14LTMwLnBuZycpO1xyXG4gICAgcmVtb3ZlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGRlbGV0ZVRhc2soZS50YXJnZXQpO1xyXG4gICAgfSk7XHJcbiAgICBkaXYuYXBwZW5kKHJlbW92ZUljb24pO1xyXG4gIH07XHJcbiAgY29uc3Qgc2hvd1Rhc2tzID0gKCkgPT4ge1xyXG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICBpZiAoIWV4aXN0LmluY2x1ZGVzKHRhc2sudGl0bGUpKSB7XHJcbiAgICAgICAgZXhpc3QucHVzaCh0YXNrLnRpdGxlKTtcclxuICAgICAgICBjcmVhdGVUYXNrKHRhc2spO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIHJldHVybiB7IHNob3dUYXNrcywgY3JlYXRlVGFzayB9O1xyXG59KSgpO1xyXG5cclxuY29uc3QgZGlzcGxheVBhZ2UgPSAoYnV0dG9uKSA9PiB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgY29uc3QgZ2V0ZGl2ID0gY29udGVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1uYW1lPVwiJHtidXR0b259XCJdYCk7XHJcbiAgaWYgKGNvbnRlbnQuY29udGFpbnMoZ2V0ZGl2KSkge1xyXG4gICAgY29uc3QgZGl2cyA9IGNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnI2dyb3VwJyk7XHJcbiAgICBBcnJheS5mcm9tKGRpdnMpLmZvckVhY2goKGRpdikgPT4ge1xyXG4gICAgICBpZiAoZGl2LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PT0gZ2V0ZGl2LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSkge1xyXG4gICAgICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgaGlkZSA9IGNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnI2dyb3VwJyk7XHJcbiAgICBoaWRlLmZvckVhY2goKGRpdikgPT4ge1xyXG4gICAgICBkaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0pO1xyXG5cclxuICAgIGNyZWF0ZVByb2plY3RQYWdlLmNyZWF0ZVBhZ2UoYnV0dG9uKTtcclxuICB9XHJcbn07XHJcbmNvbnN0IGNoZWNrU3RvcmFnZSA9ICgpID0+IHtcclxuICByZXR1cm4gc2F2ZWQgPT0gbnVsbCA/IHRydWUgOiBmYWxzZTtcclxufTtcclxuXHJcbmNvbnN0IGRlbGV0ZVRhc2sgPSAoaXRlbSkgPT4ge1xyXG4gIGlmIChzYXZlZCA9PSBudWxsKSB7XHJcbiAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRhc2tEaXYgPSBpdGVtLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhc2snKTtcclxuICAgICAgaWYgKHRhc2sudGl0bGUgPT0gdGFza0Rpdikge1xyXG4gICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgICBkZWxldGV0YXNrRnJvbUFycmF5KHRhc2tEaXYpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgc2F2ZWQuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICBjb25zdCB0YXNrRGl2ID0gaXRlbS5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10YXNrJyk7XHJcbiAgICAgIGlmICh0YXNrLnRpdGxlID09IHRhc2tEaXYpIHtcclxuICAgICAgICBpdGVtLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgZGVsZXRldGFza0Zyb21BcnJheSh0YXNrRGl2KTtcclxuICAgICAgICBkZWxldGVUYXNrRnJvbUxvY2FsKHRhc2tEaXYpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCB0b2RheUxvYWRlciA9ICgpID0+IHtcclxuICBpZiAoc2F2ZWQgIT0gbnVsbCkge1xyXG4gICAgc2F2ZWQuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICBkaXNwbGF5VGFza3MuY3JlYXRlVGFzayh0YXNrKTtcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IGRpc3BsYXlUYXNrcywgdG9kYXlMb2FkZXIsIGRpc3BsYXlQYWdlIH07XHJcbiIsImltcG9ydCB7IGNyZWF0ZVRhc2tzIH0gZnJvbSAnLi90b2Rvcy1sb2dpYyc7XHJcbmltcG9ydCB7IGRpc3BsYXlUYXNrcyB9IGZyb20gJy4vdGFzay1kaXNwbGF5LWNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBkaXNwbGF5VGFza3MgYXMgZGlzcGxheVByb2plY3RUYXNrcyB9IGZyb20gJy4vcHJvamVjdC1kaXNwbGF5LWNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBzYXZlZCwgcHJvamVjdE1ldGhvZHMsIGNyZWF0ZWRQcm9qZWN0cyB9IGZyb20gJy4vcHJvamVjdHMtbG9naWMnO1xyXG5cclxubGV0IGN1cnJlbnRQcm9qZWN0ID0gJyc7XHJcbmxldCBjdXJyZW50ZGl2ID0gJyc7XHJcblxyXG5jbGFzcyBjcmVhdGVQcm9qZWN0VG9kb3Mge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgfVxyXG5cclxuICBwcm9qZWN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwYWdlLmNsYXNzTmFtZSA9IGAke3RoaXMudGl0bGV9YDtcclxuICAgIHBhZ2Uuc2V0QXR0cmlidXRlKCdpZCcsICdncm91cCcpO1xyXG4gICAgcGFnZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScsIGAke3RoaXMudGl0bGV9YCk7XHJcbiAgICBwYWdlLnNldEF0dHJpYnV0ZSgnZGF0YS1hY3RpdmUnLCAndHJ1ZScpO1xyXG4gICAgY29udGVudC5hcHBlbmQocGFnZSk7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBwYWdlLmFwcGVuZCh0aXRsZSk7XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRoaXMudGl0bGU7XHJcblxyXG4gICAgY29uc3QgcGVuZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcGVuZGluZy5jbGFzc0xpc3QuYWRkKCdwZW5kaW5nJyk7XHJcbiAgICBwZW5kaW5nLnNldEF0dHJpYnV0ZSgnZGF0YS10aXRsZScsIGAke3RoaXMudGl0bGV9YCk7XHJcbiAgICBwYWdlLmFwcGVuZChwZW5kaW5nKTtcclxuXHJcbiAgICBjb25zdCBjb21wbGV0ZWR0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBwYWdlLmFwcGVuZChjb21wbGV0ZWR0aXRsZSk7XHJcbiAgICBjb21wbGV0ZWR0aXRsZS50ZXh0Q29udGVudCA9ICdDb21wbGV0ZWQnO1xyXG4gICAgY29uc3QgY291bnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGNvbXBsZXRlZHRpdGxlLmFwcGVuZChjb3VudGVyKTtcclxuICAgIGNvdW50ZXIuY2xhc3NMaXN0LmFkZCgnY291bnRlcicpO1xyXG4gICAgY291bnRlci50ZXh0Q29udGVudCA9IDA7XHJcblxyXG4gICAgY29uc3QgY29tcGxldGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb21wbGV0ZWQuY2xhc3NOYW1lID0gJ3BlbmRpbmcgY29tcGxldGVkJztcclxuICAgIHBhZ2UuYXBwZW5kKGNvbXBsZXRlZCk7XHJcbiAgfTtcclxuXHJcbiAgY3JlYXRlUG9wVXAgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtbmFtZT1cIiR7dGhpcy50aXRsZX1cIl1gKTtcclxuICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYm94LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFzay1wb3B1cCcpO1xyXG4gICAgY29udGVudC5hcHBlbmQoYm94KTtcclxuXHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgYm94LmFwcGVuZChmb3JtKTtcclxuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIGgxLmlubmVyVGV4dCA9ICdDcmVhdGUgVGFzayc7XHJcbiAgICBmb3JtLmFwcGVuZChoMSk7XHJcblxyXG4gICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGZvcm0uYXBwZW5kKHRpdGxlRGl2KTtcclxuICAgIGNvbnN0IGxhYmVsVGlsdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIHRpdGxlRGl2LmFwcGVuZChsYWJlbFRpbHRsZSk7XHJcbiAgICBsYWJlbFRpbHRsZS5pbm5lclRleHQgPSAnVGFzayc7XHJcblxyXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICB0ZXh0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICB0ZXh0LnNldEF0dHJpYnV0ZSgnZGF0YS1pbnB1dCcsIGAke3RoaXMudGl0bGV9YCk7XHJcbiAgICB0aXRsZURpdi5hcHBlbmQodGV4dCk7XHJcbiAgICBjb25zdCBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBmb3JtLmFwcGVuZChkYXRlRGl2KTtcclxuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBkYXRlTGFiZWwuaW5uZXJUZXh0ID0gJ0R1ZSBEYXRlJztcclxuICAgIGRhdGVEaXYuYXBwZW5kKGRhdGVMYWJlbCk7XHJcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcclxuICAgIGRhdGVEaXYuYXBwZW5kKGRhdGUpO1xyXG5cclxuICAgIGNvbnN0IGJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYnRuRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9ybS1idXR0b25zJyk7XHJcbiAgICBmb3JtLmFwcGVuZChidG5EaXYpO1xyXG4gICAgY29uc3QgY3JlYXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjcmVhdGVCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xyXG4gICAgY3JlYXRlQnRuLmlubmVyVGV4dCA9ICcrIENyZWF0ZSc7XHJcbiAgICBjcmVhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBpZiAoc2F2ZWQgIT09IG51bGwpIHtcclxuICAgICAgICBzYXZlZC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgICBpZiAocHJvamVjdC50aXRsZSA9PSBjb250ZW50LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSkge1xyXG4gICAgICAgICAgICBjb25zdCBhZGRNZXRob2RzID0gbmV3IHByb2plY3RNZXRob2RzKHByb2plY3QpO1xyXG4gICAgICAgICAgICBhZGRNZXRob2RzLmFkZFRhc2sodGV4dC52YWx1ZSwgZGF0ZS52YWx1ZSk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdC50YXNrcztcclxuICAgICAgICAgICAgY3VycmVudGRpdiA9IGNvbnRlbnQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXlQcm9qZWN0VGFza3Muc2hvd1Byb2plY3RUYXNrcyhwcm9qZWN0LnRpdGxlKTtcclxuICAgICAgICAgICAgYm94LnJlbW92ZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNyZWF0ZWRQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgICBpZiAocHJvamVjdC50aXRsZSA9PSBjb250ZW50LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSkge1xyXG4gICAgICAgICAgICBwcm9qZWN0LmFkZFRhc2soaW5wdXQudmFsdWUsICdzb21lIHJhbmRvbWUnKTtcclxuICAgICAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0LnRhc2tzO1xyXG4gICAgICAgICAgICBjdXJyZW50ZGl2ID0gY29udGVudDtcclxuICAgICAgICAgICAgZGlzcGxheVByb2plY3RUYXNrcy5zaG93UHJvamVjdFRhc2tzKHByb2plY3QudGl0bGUpO1xyXG4gICAgICAgICAgICBib3gucmVtb3ZlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgYnRuRGl2LmFwcGVuZChjcmVhdGVCdG4pO1xyXG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjYW5jZWxCdG4uaW5uZXJUZXh0ID0gJ0NhbmNlbCc7XHJcbiAgICBidG5EaXYuYXBwZW5kKGNhbmNlbEJ0bik7XHJcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBib3gucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBpbnB1dHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtbmFtZT1cIiR7dGhpcy50aXRsZX1cIl1gKTtcclxuICAgIGNvbnN0IGFkZFRhc2tCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhZGRUYXNrQnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzaycpO1xyXG4gICAgcGFnZS5hcHBlbmQoYWRkVGFza0J1dHRvbnMpO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkJyk7XHJcbiAgICBhZGRUYXNrQnV0dG9ucy5hcHBlbmQoYnV0dG9uKTtcclxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICB0aGlzLmNyZWF0ZVBvcFVwKCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcblxyXG5jbGFzcyBjcmVhdGVEYXlUb2RvcyBleHRlbmRzIGNyZWF0ZVByb2plY3RUb2RvcyB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUpIHtcclxuICAgIHN1cGVyKHRpdGxlKTtcclxuICAgIHRoaXMudGl0bGUgPSAnVG9kYXknO1xyXG4gIH1cclxuICBjcmVhdGVQb3BVcCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1uYW1lPVwiJHt0aGlzLnRpdGxlfVwiXWApO1xyXG4gICAgY29uc3QgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBib3guc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrLXBvcHVwJyk7XHJcbiAgICBjb250ZW50LmFwcGVuZChib3gpO1xyXG5cclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICBib3guYXBwZW5kKGZvcm0pO1xyXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgaDEuaW5uZXJUZXh0ID0gJ0NyZWF0ZSBUYXNrJztcclxuICAgIGZvcm0uYXBwZW5kKGgxKTtcclxuXHJcbiAgICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZm9ybS5hcHBlbmQodGl0bGVEaXYpO1xyXG4gICAgY29uc3QgbGFiZWxUaWx0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgdGl0bGVEaXYuYXBwZW5kKGxhYmVsVGlsdGxlKTtcclxuICAgIGxhYmVsVGlsdGxlLmlubmVyVGV4dCA9ICdUYXNrJztcclxuXHJcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHRleHQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICAgIHRleHQuc2V0QXR0cmlidXRlKCdkYXRhLWlucHV0JywgYCR7dGhpcy50aXRsZX1gKTtcclxuICAgIHRpdGxlRGl2LmFwcGVuZCh0ZXh0KTtcclxuICAgIGNvbnN0IGRhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGZvcm0uYXBwZW5kKGRhdGVEaXYpO1xyXG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGRhdGVMYWJlbC5pbm5lclRleHQgPSAnRHVlIERhdGUnO1xyXG4gICAgZGF0ZURpdi5hcHBlbmQoZGF0ZUxhYmVsKTtcclxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xyXG4gICAgZGF0ZURpdi5hcHBlbmQoZGF0ZSk7XHJcblxyXG4gICAgY29uc3QgYnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBidG5EaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtLWJ1dHRvbnMnKTtcclxuICAgIGZvcm0uYXBwZW5kKGJ0bkRpdik7XHJcbiAgICBjb25zdCBjcmVhdGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNyZWF0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XHJcbiAgICBjcmVhdGVCdG4uaW5uZXJUZXh0ID0gJ0NyZWF0ZSc7XHJcbiAgICBjcmVhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBjcmVhdGVUYXNrcy5hZGRUYXNrKHRleHQudmFsdWUsIGRhdGUudmFsdWUpO1xyXG4gICAgICBkaXNwbGF5VGFza3Muc2hvd1Rhc2tzKCk7XHJcbiAgICAgIGJveC5yZW1vdmUoKTtcclxuICAgIH0pO1xyXG4gICAgYnRuRGl2LmFwcGVuZChjcmVhdGVCdG4pO1xyXG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjYW5jZWxCdG4uaW5uZXJUZXh0ID0gJ0NhbmNlbCc7XHJcbiAgICBidG5EaXYuYXBwZW5kKGNhbmNlbEJ0bik7XHJcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBib3gucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBpbnB1dHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGhpcy50aXRsZX1gKTtcclxuICAgIGNvbnN0IGFkZFRhc2tCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhZGRUYXNrQnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzaycpO1xyXG4gICAgcGFnZS5hcHBlbmQoYWRkVGFza0J1dHRvbnMpO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkJyk7XHJcbiAgICBhZGRUYXNrQnV0dG9ucy5hcHBlbmQoYnV0dG9uKTtcclxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICB0aGlzLmNyZWF0ZVBvcFVwKCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0VG9kb3MsIGNyZWF0ZURheVRvZG9zLCBjdXJyZW50UHJvamVjdCwgY3VycmVudGRpdiB9O1xyXG4iLCJpbXBvcnQgeyBkaXNwbGF5VGFza3MgfSBmcm9tICcuL3Rhc2stZGlzcGxheS1jb250cm9sbGVyJztcclxuXHJcbmNvbnN0IHRhc2tzID0gW107XHJcbmxldCBzYXZlZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZGF5JykpO1xyXG5cclxuY29uc3Qgc2F2ZXRvTG9hY2FsID0gKGRhdGEpID0+IHtcclxuICBpZiAoc2F2ZWQgPT0gbnVsbCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZGF5JywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcclxuICB9IGVsc2Uge1xyXG4gICAgc2F2ZWQucHVzaChkYXRhKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RheScsIEpTT04uc3RyaW5naWZ5KHNhdmVkKSk7XHJcbiAgfVxyXG59O1xyXG5cclxuY2xhc3MgdG9kb3Mge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBEdWVEYXRlKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLkR1ZURhdGUgPSBEdWVEYXRlO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgY3JlYXRlVGFza3MgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGFkZFRhc2sgPSAodGl0bGUsIER1ZURhdGUpID0+IHtcclxuICAgIGxldCB0YXNrID0gbmV3IHRvZG9zKHRpdGxlLCBEdWVEYXRlKTtcclxuICAgIHRhc2tzLnB1c2godGFzayk7XHJcbiAgICBzYXZldG9Mb2FjYWwodGFzayk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHsgYWRkVGFzayB9O1xyXG59KSgpO1xyXG5cclxuY29uc3QgZGVsZXRldGFzayA9IChpdGVtKSA9PiB7XHJcbiAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgaWYgKHRhc2sudGl0bGUgPT0gaXRlbSkge1xyXG4gICAgICB0YXNrcy5zcGxpY2UodGFza3MuaW5kZXhPZih0YXNrKSwgMSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBkZWxldGVUYXNrRnJvbUxvY2FsID0gKGl0ZW0pID0+IHtcclxuICBzYXZlZC5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICBpZiAodGFzay50aXRsZSA9PSBpdGVtKSB7XHJcbiAgICAgIHNhdmVkLnNwbGljZShzYXZlZC5pbmRleE9mKHRhc2spLCAxKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZGF5JywgSlNPTi5zdHJpbmdpZnkoc2F2ZWQpKTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCB7IHRvZG9zLCBjcmVhdGVUYXNrcywgdGFza3MsIGRlbGV0ZXRhc2ssIGRlbGV0ZVRhc2tGcm9tTG9jYWwsIHNhdmVkIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=