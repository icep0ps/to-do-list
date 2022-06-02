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
      const completed = _tasks_constructors__WEBPACK_IMPORTED_MODULE_0__.currentdiv.querySelector('.completed');
      console.log(_tasks_constructors__WEBPACK_IMPORTED_MODULE_0__.currentdiv);
      completed.append(input.parentElement);
      const span = completed.querySelector('span');
      console.log(span);
      completedTasks++;
      span.textContent = completedTasks;
    } else {
      const pending = _tasks_constructors__WEBPACK_IMPORTED_MODULE_0__.currentdiv.querySelector('.pending');
      pending.append(input.parentElement);
      const completed = _tasks_constructors__WEBPACK_IMPORTED_MODULE_0__.currentdiv.querySelector('.completed');
      const span = completed.querySelector('span');
      console.log(span);
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
    const deleteIcon = document.createElement('img');
    deleteIcon.setAttribute('src', '/src/img/icons8-remove-48.png');
    deleteIcon.addEventListener('click', (e) => {
      deleteProject(e.target);
      e.stopPropagation();
    });
    newProject.append(deleteIcon);
    newProject.addEventListener('click', (e) => {
      (0,_general_display_controller__WEBPACK_IMPORTED_MODULE_2__.setActiveTab)(e.target);
      console.log(project.title);
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
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    const date = document.createElement('input');
    date.setAttribute('type', 'date');
    checkbox.addEventListener('click', (e) => {
      _general_display_controller__WEBPACK_IMPORTED_MODULE_2__.displaycompletedProjectTasks.moveTask(checkbox);
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
          console.log('creating');
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

const deleteProject = (title) => {
  _projects_logic__WEBPACK_IMPORTED_MODULE_0__.createdProjects.forEach((project) => {
    if (project.title == title.parentElement.textContent) {
      const content = document.querySelector('.content');
      const projectDiv = content.querySelector(
        `[data-name="${project.title}"]`
      );
      if (content.contains(projectDiv)) {
        projectDiv.remove();
      }
      (0,_projects_logic__WEBPACK_IMPORTED_MODULE_0__.deleteProjectFromArray)(title);
      title.parentElement.remove();
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
/* harmony export */   "projectMethods": () => (/* binding */ projectMethods),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "saved": () => (/* binding */ saved)
/* harmony export */ });
/* harmony import */ var _todos_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos-logic */ "./src/todos-logic.js");
/* harmony import */ var _project_display_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-display-controller */ "./src/project-display-controller.js");



const button1 = document.querySelector('#createProject');
button1.addEventListener('click', (e) => {
  console.log('clicked');
  createInput();
});

const createdProjects = [];
let saved = JSON.parse(localStorage.getItem('projects'));

class projects {
  constructor(title) {
    this.title = title;
    this.tasks = [];
  }
  addTask(title, description) {
    let task = new _todos_logic__WEBPACK_IMPORTED_MODULE_0__.todos(title, description);
    this.tasks.push(task);
    saveProjectTaskToLocal(task, this.title);
  }
}

const savetoLoacal = (data) => {
  if (saved == null) {
    localStorage.setItem('projects', JSON.stringify(createdProjects));
  } else {
    saved.push(data);
    console.log(data);
    localStorage.setItem('projects', JSON.stringify(saved));
  }
};

const saveProjectTaskToLocal = (data, parent) => {
  console.log(data);
  if (saved == null) {
    localStorage.setItem('projects', JSON.stringify(createdProjects));
  } else {
    saved.forEach((project) => {
      if (project.title == parent) {
        project.tasks.push(data);
        localStorage.setItem('projects', JSON.stringify(saved));
        console.log(saved);
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
    options.remove();
    input.remove();
  });
  createButton.addEventListener('click', (e) => {
    createProject.addProject(input.value);
    _project_display_controller__WEBPACK_IMPORTED_MODULE_1__.displayProjects.showProjects();
    button1.style.display = 'block';
    options.remove();
    input.remove();
  });
};

function projectMethods(data) {
  this.title = data.title;
  this.tasks = [];
}

projectMethods.prototype.addTask = function (title, description) {
  let task = new _todos_logic__WEBPACK_IMPORTED_MODULE_0__.todos(title, description);
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
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    const date = document.createElement('input');
    date.setAttribute('type', 'date');
    date.textContent = 'No Date';
    checkbox.addEventListener('click', (e) => {
      _general_display_controller__WEBPACK_IMPORTED_MODULE_1__.displaycompletedTasks.moveTask(checkbox);
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
  };
  const showTasks = () => {
    _todos_logic__WEBPACK_IMPORTED_MODULE_0__.tasks.forEach((task) => {
      if (!exist.includes(task.title)) {
        exist.push(task.title);
        console.log(task.title);
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

const deleteTask = (item) => {
  _todos_logic__WEBPACK_IMPORTED_MODULE_0__.tasks.forEach((task) => {
    const taskDiv = item.parentElement.getAttribute('data-task');
    if (task.title == taskDiv) {
      item.parentElement.remove();
      (0,_todos_logic__WEBPACK_IMPORTED_MODULE_0__.deletetask)(taskDiv);
    }
  });
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

    const pending = document.createElement('div');
    pending.classList.add('pending');
    page.append(pending);
    const title = document.createElement('h1');
    pending.append(title);
    title.textContent = this.title;

    const completed = document.createElement('div');
    completed.className = 'pending completed';
    page.append(completed);

    const completedtitle = document.createElement('h1');
    completed.append(completedtitle);
    completedtitle.textContent = 'Completed';
    const counter = document.createElement('span');
    completedtitle.append(counter);
    counter.classList.add('counter');
    counter.textContent = 0;
  };

  inputs = () => {
    const page = document.querySelector(`[data-name="${this.title}"]`);
    console.log(this);
    const addTaskButtons = document.createElement('div');
    addTaskButtons.classList.add('add-task');
    page.append(addTaskButtons);

    const input = document.createElement('input');
    input.setAttribute('data-input', `${this.title}`);
    addTaskButtons.append(input);
    input.setAttribute('placeholder', 'Add a project task here');

    const button = document.createElement('button');
    button.setAttribute('id', 'add');
    addTaskButtons.append(button);
    button.textContent = 'Add Task';
    button.addEventListener('click', (e) => {
      if (_projects_logic__WEBPACK_IMPORTED_MODULE_3__.saved !== null) {
        console.log('saved');
        _projects_logic__WEBPACK_IMPORTED_MODULE_3__.saved.forEach((project) => {
          if (project.title == page.getAttribute('class')) {
            const addMethods = new _projects_logic__WEBPACK_IMPORTED_MODULE_3__.projectMethods(project);
            addMethods.addTask(input.value, 'some randomethig');
            console.log(addMethods);
            currentProject = project.tasks;
            currentdiv = page;
            _project_display_controller__WEBPACK_IMPORTED_MODULE_2__.displayTasks.showProjectTasks(project.title);
          }
        });
      } else {
        console.log('saved');
        _projects_logic__WEBPACK_IMPORTED_MODULE_3__.createdProjects.forEach((project) => {
          if (project.title == page.getAttribute('class')) {
            project.addTask(input.value, 'some randome');
            currentProject = project.tasks;
            currentdiv = page;
            _project_display_controller__WEBPACK_IMPORTED_MODULE_2__.displayTasks.showProjectTasks(project.title);
          }
        });
      }
    });
  };
}

class createDayTodos extends createProjectTodos {
  constructor(title) {
    super(title);
    this.title = 'Today';
  }

  inputs = () => {
    const page = document.querySelector(`.${this.title}`);
    const addTaskButtons = document.createElement('div');
    addTaskButtons.classList.add('add-task');
    page.append(addTaskButtons);

    const input = document.createElement('input');
    input.setAttribute('id', `${this.title}`);
    addTaskButtons.append(input);
    const value = document.querySelector(`#${this.title}`);

    const button = document.createElement('button');
    button.setAttribute('id', 'add');
    addTaskButtons.append(button);
    button.textContent = 'Add Task';
    button.addEventListener('click', (e) => {
      _todos_logic__WEBPACK_IMPORTED_MODULE_0__.createTasks.addTask(value.value, 'some random words');
      _task_display_controller__WEBPACK_IMPORTED_MODULE_1__.displayTasks.showTasks();
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
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }
}

const createTasks = (() => {
  const addTask = (title, description) => {
    let task = new todos(title, description);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsV0FBVztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLFdBQVc7QUFDM0M7QUFDQSw2Q0FBNkMsV0FBVztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDZEQUFtQjtBQUN6QixNQUFNLDRFQUFzQjtBQUM1QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQzBFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xIakI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ3dEOzs7Ozs7O1VDdkN4RDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZ2VuZXJhbC1kaXNwbGF5LWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QtZGlzcGxheS1jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdHMtbG9naWMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrLWRpc3BsYXktY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2tzLWNvbnN0cnVjdG9ycy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZG9zLWxvZ2ljLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VycmVudFByb2plY3QsIGN1cnJlbnRkaXYgfSBmcm9tICcuL3Rhc2tzLWNvbnN0cnVjdG9ycyc7XHJcblxyXG5jb25zdCBkaXNwbGF5Y29tcGxldGVkVGFza3MgPSAoKCkgPT4ge1xyXG4gIGxldCBjb21wbGV0ZWRUYXNrcyA9IDA7XHJcbiAgY29uc3QgbW92ZVRhc2sgPSAoaW5wdXQpID0+IHtcclxuICAgIGlmIChpbnB1dC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjbGFzcycpID09ICdwZW5kaW5nJykge1xyXG4gICAgICBjb25zdCBjb21wbGV0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcGxldGVkJyk7XHJcbiAgICAgIGNvbXBsZXRlZC5hcHBlbmQoaW5wdXQucGFyZW50RWxlbWVudCk7XHJcbiAgICAgIGNvbnN0IHNwYW4gPSBjb21wbGV0ZWQucXVlcnlTZWxlY3Rvcignc3BhbicpO1xyXG4gICAgICBjb25zb2xlLmxvZyhzcGFuKTtcclxuICAgICAgY29tcGxldGVkVGFza3MrKztcclxuICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGNvbXBsZXRlZFRhc2tzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgcGVuZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wZW5kaW5nJyk7XHJcbiAgICAgIHBlbmRpbmcuYXBwZW5kKGlucHV0LnBhcmVudEVsZW1lbnQpO1xyXG4gICAgICBjb25zdCBjb21wbGV0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcGxldGVkJyk7XHJcbiAgICAgIGNvbnN0IHNwYW4gPSBjb21wbGV0ZWQucXVlcnlTZWxlY3Rvcignc3BhbicpO1xyXG4gICAgICBjb25zb2xlLmxvZyhzcGFuKTtcclxuICAgICAgY29tcGxldGVkVGFza3MtLTtcclxuICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGNvbXBsZXRlZFRhc2tzO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIHsgbW92ZVRhc2sgfTtcclxufSkoKTtcclxuXHJcbmNvbnN0IGRpc3BsYXljb21wbGV0ZWRQcm9qZWN0VGFza3MgPSAoKCkgPT4ge1xyXG4gIGxldCBjb21wbGV0ZWRUYXNrcyA9IDA7XHJcbiAgY29uc3QgbW92ZVRhc2sgPSAoaW5wdXQpID0+IHtcclxuICAgIGlmIChpbnB1dC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjbGFzcycpID09ICdwZW5kaW5nJykge1xyXG4gICAgICBjb25zdCBjb21wbGV0ZWQgPSBjdXJyZW50ZGl2LnF1ZXJ5U2VsZWN0b3IoJy5jb21wbGV0ZWQnKTtcclxuICAgICAgY29uc29sZS5sb2coY3VycmVudGRpdik7XHJcbiAgICAgIGNvbXBsZXRlZC5hcHBlbmQoaW5wdXQucGFyZW50RWxlbWVudCk7XHJcbiAgICAgIGNvbnN0IHNwYW4gPSBjb21wbGV0ZWQucXVlcnlTZWxlY3Rvcignc3BhbicpO1xyXG4gICAgICBjb25zb2xlLmxvZyhzcGFuKTtcclxuICAgICAgY29tcGxldGVkVGFza3MrKztcclxuICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGNvbXBsZXRlZFRhc2tzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgcGVuZGluZyA9IGN1cnJlbnRkaXYucXVlcnlTZWxlY3RvcignLnBlbmRpbmcnKTtcclxuICAgICAgcGVuZGluZy5hcHBlbmQoaW5wdXQucGFyZW50RWxlbWVudCk7XHJcbiAgICAgIGNvbnN0IGNvbXBsZXRlZCA9IGN1cnJlbnRkaXYucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlZCcpO1xyXG4gICAgICBjb25zdCBzcGFuID0gY29tcGxldGVkLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcclxuICAgICAgY29uc29sZS5sb2coc3Bhbik7XHJcbiAgICAgIGNvbXBsZXRlZFRhc2tzLS07XHJcbiAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBjb21wbGV0ZWRUYXNrcztcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiB7IG1vdmVUYXNrIH07XHJcbn0pKCk7XHJcblxyXG5jb25zdCBzZXRBY3RpdmVUYWIgPSAodGFiKSA9PiB7XHJcbiAgY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XHJcbiAgQXJyYXkuZnJvbSh0YWJzKS5mb3JFYWNoKChsaSkgPT4ge1xyXG4gICAgaWYgKGxpLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgICAgbGkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgaWYgKHRhYi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRhYi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FjdGl2ZScpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IHNldEFjdGl2ZVRhYiwgZGlzcGxheWNvbXBsZXRlZFByb2plY3RUYXNrcywgZGlzcGxheWNvbXBsZXRlZFRhc2tzIH07XHJcbiIsImltcG9ydCB7IGNyZWF0ZURheVRvZG9zIH0gZnJvbSAnLi90YXNrcy1jb25zdHJ1Y3RvcnMnO1xyXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0VG9kb3MgfSBmcm9tICcuL3Rhc2tzLWNvbnN0cnVjdG9ycyc7XHJcbmltcG9ydCB7IHNldEFjdGl2ZVRhYiB9IGZyb20gJy4vZ2VuZXJhbC1kaXNwbGF5LWNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyB0b2RheUxvYWRlciwgZGlzcGxheVBhZ2UgfSBmcm9tICcuL3Rhc2stZGlzcGxheS1jb250cm9sbGVyJztcclxuaW1wb3J0IHsgcHJvamVjdExvYWRlciB9IGZyb20gJy4vcHJvamVjdC1kaXNwbGF5LWNvbnRyb2xsZXInO1xyXG5cclxubGV0IGFjdGl2ZVBhZ2UgPSBuZXcgY3JlYXRlRGF5VG9kb3MoJ3RvZGF5Jyk7XHJcbmFjdGl2ZVBhZ2UucHJvamVjdCgpO1xyXG5hY3RpdmVQYWdlLmlucHV0cygpO1xyXG50b2RheUxvYWRlcigpO1xyXG5wcm9qZWN0TG9hZGVyKCk7XHJcblxyXG5jb25zdCBEZWZhdWx0YWN0aXZlQnV0dG9uID0gKCgpID0+IHtcclxuICBjb25zdCBUb2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpJyk7XHJcbiAgVG9kYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgc2V0QWN0aXZlVGFiKGUudGFyZ2V0KTtcclxuICAgIGRpc3BsYXlQYWdlKFRvZGF5LnRleHRDb250ZW50KTtcclxuICB9KTtcclxufSkoKTtcclxuXHJcbmNvbnN0IGNyZWF0ZVByb2plY3RQYWdlID0gKCgpID0+IHtcclxuICBjb25zdCBjcmVhdGVQYWdlID0gKGJ1dHRvbikgPT4ge1xyXG4gICAgYWN0aXZlUGFnZSA9IG5ldyBjcmVhdGVQcm9qZWN0VG9kb3MoYnV0dG9uLnRpdGxlKTtcclxuICAgIGFjdGl2ZVBhZ2UucHJvamVjdCgpO1xyXG4gICAgYWN0aXZlUGFnZS5pbnB1dHMoKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4geyBjcmVhdGVQYWdlIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0UGFnZSB9O1xyXG4iLCJpbXBvcnQge1xyXG4gIGNyZWF0ZWRQcm9qZWN0cyxcclxuICBkZWxldGVQcm9qZWN0RnJvbUFycmF5LFxyXG4gIHNhdmVkLFxyXG59IGZyb20gJy4vcHJvamVjdHMtbG9naWMnO1xyXG5pbXBvcnQgeyBjdXJyZW50ZGl2LCBjdXJyZW50UHJvamVjdCB9IGZyb20gJy4vdGFza3MtY29uc3RydWN0b3JzJztcclxuaW1wb3J0IHtcclxuICBzZXRBY3RpdmVUYWIsXHJcbiAgZGlzcGxheWNvbXBsZXRlZFByb2plY3RUYXNrcyxcclxufSBmcm9tICcuL2dlbmVyYWwtZGlzcGxheS1jb250cm9sbGVyJztcclxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdFBhZ2UgfSBmcm9tICcuL2luZGV4JztcclxuXHJcbmNvbnN0IGRpc3BsYXlQcm9qZWN0cyA9ICgoKSA9PiB7XHJcbiAgY29uc3QgZXhpc3QgPSBbXTtcclxuICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xyXG4gIGNvbnN0IGNyZWF0ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xyXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmQobmV3UHJvamVjdCk7XHJcbiAgICBuZXdQcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcclxuICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGRlbGV0ZUljb24uc2V0QXR0cmlidXRlKCdzcmMnLCAnL3NyYy9pbWcvaWNvbnM4LXJlbW92ZS00OC5wbmcnKTtcclxuICAgIGRlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBkZWxldGVQcm9qZWN0KGUudGFyZ2V0KTtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH0pO1xyXG4gICAgbmV3UHJvamVjdC5hcHBlbmQoZGVsZXRlSWNvbik7XHJcbiAgICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgc2V0QWN0aXZlVGFiKGUudGFyZ2V0KTtcclxuICAgICAgY29uc29sZS5sb2cocHJvamVjdC50aXRsZSk7XHJcbiAgICAgIGRpc3BsYXlQYWdlKHByb2plY3QpO1xyXG4gICAgICBkaXNwbGF5VGFza3Muc2hvd1Byb2plY3RUYXNrcyhwcm9qZWN0LnRpdGxlKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNob3dQcm9qZWN0cyA9ICgpID0+IHtcclxuICAgIGNyZWF0ZWRQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgIGlmICghZXhpc3QuaW5jbHVkZXMocHJvamVjdC50aXRsZSkpIHtcclxuICAgICAgICBleGlzdC5wdXNoKHByb2plY3QudGl0bGUpO1xyXG4gICAgICAgIGNyZWF0ZVByb2plY3QocHJvamVjdCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcbiAgcmV0dXJuIHsgc2hvd1Byb2plY3RzLCBjcmVhdGVQcm9qZWN0IH07XHJcbn0pKCk7XHJcblxyXG5jb25zdCBkaXNwbGF5VGFza3MgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGV4aXN0ID0gW107XHJcblxyXG4gIGNvbnN0IGNyZWF0ZVRhc2sgPSAocHJvamVjdHNUYXNrKSA9PiB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCBjdXJyZW50ZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtYWN0aXZlXWApO1xyXG4gICAgY29uc3QgcGVuZGluZyA9IGN1cnJlbnRkaXYucXVlcnlTZWxlY3RvcignLnBlbmRpbmcnKTtcclxuICAgIHBlbmRpbmcuYXBwZW5kKGRpdik7XHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xyXG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcclxuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgZGlzcGxheWNvbXBsZXRlZFByb2plY3RUYXNrcy5tb3ZlVGFzayhjaGVja2JveCk7XHJcbiAgICB9KTtcclxuICAgIGRpdi5hcHBlbmQoY2hlY2tib3gpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgZGl2LmFwcGVuZCh0aXRsZSk7XHJcbiAgICBkaXYuYXBwZW5kKGRhdGUpO1xyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0c1Rhc2sudGl0bGU7XHJcblxyXG4gICAgLy9maXggZGVsZXRlIGZlYXR1cmVcclxuICAgIGNvbnN0IHJlbW92ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIHJlbW92ZUljb24uc2V0QXR0cmlidXRlKCdzcmMnLCAnL3NyYy9pbWcvaWNvbnM4LXhib3gteC0zMC5wbmcnKTtcclxuICAgIHJlbW92ZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICBkZWxldGVUYXNrKGUudGFyZ2V0KTtcclxuICAgIH0pO1xyXG4gICAgZGl2LmFwcGVuZChyZW1vdmVJY29uKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaG93UHJvamVjdFRhc2tzID0gKHRpdGxlKSA9PiB7XHJcbiAgICBpZiAoc2F2ZWQgPT0gbnVsbCkge1xyXG4gICAgICBjdXJyZW50UHJvamVjdC5mb3JFYWNoKChwcm9qZWN0c1Rhc2spID0+IHtcclxuICAgICAgICBpZiAoIWV4aXN0LmluY2x1ZGVzKHByb2plY3RzVGFzay50aXRsZSkpIHtcclxuICAgICAgICAgIGV4aXN0LnB1c2gocHJvamVjdHNUYXNrLnRpdGxlKTtcclxuICAgICAgICAgIGNyZWF0ZVRhc2socHJvamVjdHNUYXNrKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2F2ZWQuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9qZWN0LnRpdGxlID09PSB0aXRsZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2NyZWF0aW5nJyk7XHJcbiAgICAgICAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2goKHByb2plY3RzVGFzaykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWV4aXN0LmluY2x1ZGVzKHByb2plY3RzVGFzay50aXRsZSkpIHtcclxuICAgICAgICAgICAgICBleGlzdC5wdXNoKHByb2plY3RzVGFzay50aXRsZSk7XHJcbiAgICAgICAgICAgICAgY3JlYXRlVGFzayhwcm9qZWN0c1Rhc2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIHsgc2hvd1Byb2plY3RUYXNrcywgY3JlYXRlVGFzayB9O1xyXG59KSgpO1xyXG5cclxuY29uc3QgZGlzcGxheVBhZ2UgPSAoYnV0dG9uKSA9PiB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgY29uc3QgZ2V0ZGl2ID0gY29udGVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1uYW1lPVwiJHtidXR0b24udGl0bGV9XCJdYCk7XHJcbiAgaWYgKGNvbnRlbnQuY29udGFpbnMoZ2V0ZGl2KSkge1xyXG4gICAgY29uc3QgZGl2cyA9IGNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnI2dyb3VwJyk7XHJcbiAgICBBcnJheS5mcm9tKGRpdnMpLmZvckVhY2goKGRpdikgPT4ge1xyXG4gICAgICBpZiAoZGl2LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PT0gZ2V0ZGl2LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSkge1xyXG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aXZlJywgJ3RydWUnKTtcclxuICAgICAgICBkaXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkaXYucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWFjdGl2ZScsICd0cnVlJyk7XHJcbiAgICAgICAgZGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBoaWRlID0gY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCcjZ3JvdXAnKTtcclxuICAgIGhpZGUuZm9yRWFjaCgoZGl2KSA9PiB7XHJcbiAgICAgIGRpdi5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtYWN0aXZlJywgJ3RydWUnKTtcclxuICAgICAgZGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjcmVhdGVQcm9qZWN0UGFnZS5jcmVhdGVQYWdlKGJ1dHRvbik7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZGVsZXRlUHJvamVjdCA9ICh0aXRsZSkgPT4ge1xyXG4gIGNyZWF0ZWRQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICBpZiAocHJvamVjdC50aXRsZSA9PSB0aXRsZS5wYXJlbnRFbGVtZW50LnRleHRDb250ZW50KSB7XHJcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG4gICAgICBjb25zdCBwcm9qZWN0RGl2ID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIGBbZGF0YS1uYW1lPVwiJHtwcm9qZWN0LnRpdGxlfVwiXWBcclxuICAgICAgKTtcclxuICAgICAgaWYgKGNvbnRlbnQuY29udGFpbnMocHJvamVjdERpdikpIHtcclxuICAgICAgICBwcm9qZWN0RGl2LnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIGRlbGV0ZVByb2plY3RGcm9tQXJyYXkodGl0bGUpO1xyXG4gICAgICB0aXRsZS5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgcHJvamVjdExvYWRlciA9ICgpID0+IHtcclxuICBpZiAoc2F2ZWQgIT0gbnVsbCkge1xyXG4gICAgc2F2ZWQuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICBkaXNwbGF5UHJvamVjdHMuY3JlYXRlUHJvamVjdCh0YXNrKTtcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IGRpc3BsYXlQcm9qZWN0cywgZGlzcGxheVRhc2tzLCBwcm9qZWN0TG9hZGVyLCBkaXNwbGF5UGFnZSB9O1xyXG4iLCJpbXBvcnQgeyB0b2RvcyB9IGZyb20gJy4vdG9kb3MtbG9naWMnO1xyXG5pbXBvcnQgeyBkaXNwbGF5UHJvamVjdHMgfSBmcm9tICcuL3Byb2plY3QtZGlzcGxheS1jb250cm9sbGVyJztcclxuXHJcbmNvbnN0IGJ1dHRvbjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlUHJvamVjdCcpO1xyXG5idXR0b24xLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBjb25zb2xlLmxvZygnY2xpY2tlZCcpO1xyXG4gIGNyZWF0ZUlucHV0KCk7XHJcbn0pO1xyXG5cclxuY29uc3QgY3JlYXRlZFByb2plY3RzID0gW107XHJcbmxldCBzYXZlZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xyXG5cclxuY2xhc3MgcHJvamVjdHMge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLnRhc2tzID0gW107XHJcbiAgfVxyXG4gIGFkZFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uKSB7XHJcbiAgICBsZXQgdGFzayA9IG5ldyB0b2Rvcyh0aXRsZSwgZGVzY3JpcHRpb24pO1xyXG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xyXG4gICAgc2F2ZVByb2plY3RUYXNrVG9Mb2NhbCh0YXNrLCB0aGlzLnRpdGxlKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHNhdmV0b0xvYWNhbCA9IChkYXRhKSA9PiB7XHJcbiAgaWYgKHNhdmVkID09IG51bGwpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGNyZWF0ZWRQcm9qZWN0cykpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzYXZlZC5wdXNoKGRhdGEpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShzYXZlZCkpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHNhdmVQcm9qZWN0VGFza1RvTG9jYWwgPSAoZGF0YSwgcGFyZW50KSA9PiB7XHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgaWYgKHNhdmVkID09IG51bGwpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGNyZWF0ZWRQcm9qZWN0cykpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzYXZlZC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgIGlmIChwcm9qZWN0LnRpdGxlID09IHBhcmVudCkge1xyXG4gICAgICAgIHByb2plY3QudGFza3MucHVzaChkYXRhKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShzYXZlZCkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNhdmVkKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlUHJvamVjdCA9ICgoKSA9PiB7XHJcbiAgY29uc3QgYWRkUHJvamVjdCA9ICh0aXRsZSkgPT4ge1xyXG4gICAgbGV0IHByb2plY3QgPSBuZXcgcHJvamVjdHModGl0bGUpO1xyXG4gICAgY3JlYXRlZFByb2plY3RzLnB1c2gocHJvamVjdCk7XHJcbiAgICBzYXZldG9Mb2FjYWwocHJvamVjdCk7XHJcbiAgfTtcclxuICByZXR1cm4geyBhZGRQcm9qZWN0IH07XHJcbn0pKCk7XHJcblxyXG5jb25zdCBkZWxldGVQcm9qZWN0RnJvbUFycmF5ID0gKHRpdGxlKSA9PiB7XHJcbiAgY3JlYXRlZFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgIGlmIChwcm9qZWN0LnRpdGxlID09IHRpdGxlKSB7XHJcbiAgICAgIGNyZWF0ZWRQcm9qZWN0cy5zcGxpY2UoY3JlYXRlZFByb2plY3RzLmluZGV4T2YodGFzayksIDEpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlSW5wdXQgPSAoKSA9PiB7XHJcbiAgYnV0dG9uMS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25zJyk7XHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnY3JlYXRlSW5wdXQnKTtcclxuICBjb25zdCBvcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgb3B0aW9ucy5jbGFzc0xpc3QuYWRkKCdvcHRpb25zJyk7XHJcbiAgY29uc3QgY3JlYXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgY3JlYXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnY3JlYXRlQnV0dG9uJyk7XHJcbiAgY2FuY2VsQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnY3JlYXRlQnV0dG9uJyk7XHJcbiAgY3JlYXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ0NyZWF0ZSc7XHJcbiAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XHJcbiAgZGl2LmFwcGVuZChpbnB1dCk7XHJcbiAgZGl2LmFwcGVuZChvcHRpb25zKTtcclxuICBvcHRpb25zLmFwcGVuZChjcmVhdGVCdXR0b24pO1xyXG4gIG9wdGlvbnMuYXBwZW5kKGNhbmNlbEJ1dHRvbik7XHJcbiAgY3JlYXRlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIGNhbmNlbEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgYnV0dG9uMS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIG9wdGlvbnMucmVtb3ZlKCk7XHJcbiAgICBpbnB1dC5yZW1vdmUoKTtcclxuICB9KTtcclxuICBjcmVhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgY3JlYXRlUHJvamVjdC5hZGRQcm9qZWN0KGlucHV0LnZhbHVlKTtcclxuICAgIGRpc3BsYXlQcm9qZWN0cy5zaG93UHJvamVjdHMoKTtcclxuICAgIGJ1dHRvbjEuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBvcHRpb25zLnJlbW92ZSgpO1xyXG4gICAgaW5wdXQucmVtb3ZlKCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBwcm9qZWN0TWV0aG9kcyhkYXRhKSB7XHJcbiAgdGhpcy50aXRsZSA9IGRhdGEudGl0bGU7XHJcbiAgdGhpcy50YXNrcyA9IFtdO1xyXG59XHJcblxyXG5wcm9qZWN0TWV0aG9kcy5wcm90b3R5cGUuYWRkVGFzayA9IGZ1bmN0aW9uICh0aXRsZSwgZGVzY3JpcHRpb24pIHtcclxuICBsZXQgdGFzayA9IG5ldyB0b2Rvcyh0aXRsZSwgZGVzY3JpcHRpb24pO1xyXG4gIHRoaXMudGFza3MucHVzaCh0YXNrKTtcclxuICBzYXZlUHJvamVjdFRhc2tUb0xvY2FsKHRhc2ssIHRoaXMudGl0bGUpO1xyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICBwcm9qZWN0cyxcclxuICBjcmVhdGVkUHJvamVjdHMsXHJcbiAgZGVsZXRlUHJvamVjdEZyb21BcnJheSxcclxuICBzYXZlZCxcclxuICBwcm9qZWN0TWV0aG9kcyxcclxufTtcclxuIiwiaW1wb3J0IHsgdGFza3MsIGRlbGV0ZXRhc2sgYXMgZGVsZXRldGFza0Zyb21BcnJheSwgc2F2ZWQgfSBmcm9tICcuL3RvZG9zLWxvZ2ljJztcclxuaW1wb3J0IHsgZGlzcGxheWNvbXBsZXRlZFRhc2tzIH0gZnJvbSAnLi9nZW5lcmFsLWRpc3BsYXktY29udHJvbGxlcic7XHJcbmltcG9ydCB7IGNyZWF0ZVByb2plY3RQYWdlIH0gZnJvbSAnLi9pbmRleCc7XHJcblxyXG5jb25zdCBkaXNwbGF5VGFza3MgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGV4aXN0ID0gW107XHJcbiAgY29uc3QgY3JlYXRlVGFzayA9ICh0YXNrKSA9PiB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHBlbmRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGVuZGluZycpO1xyXG4gICAgcGVuZGluZy5hcHBlbmQoZGl2KTtcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XHJcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdkYXRhLXRhc2snLCBgJHt0YXNrLnRpdGxlfWApO1xyXG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcclxuICAgIGRhdGUudGV4dENvbnRlbnQgPSAnTm8gRGF0ZSc7XHJcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGRpc3BsYXljb21wbGV0ZWRUYXNrcy5tb3ZlVGFzayhjaGVja2JveCk7XHJcbiAgICB9KTtcclxuICAgIGRpdi5hcHBlbmQoY2hlY2tib3gpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgZGl2LmFwcGVuZCh0aXRsZSk7XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XHJcbiAgICBkaXYuYXBwZW5kKGRhdGUpO1xyXG4gICAgY29uc3QgcmVtb3ZlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgcmVtb3ZlSWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsICcvc3JjL2ltZy9pY29uczgteGJveC14LTMwLnBuZycpO1xyXG4gICAgcmVtb3ZlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGRlbGV0ZVRhc2soZS50YXJnZXQpO1xyXG4gICAgfSk7XHJcbiAgICBkaXYuYXBwZW5kKHJlbW92ZUljb24pO1xyXG4gIH07XHJcbiAgY29uc3Qgc2hvd1Rhc2tzID0gKCkgPT4ge1xyXG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICBpZiAoIWV4aXN0LmluY2x1ZGVzKHRhc2sudGl0bGUpKSB7XHJcbiAgICAgICAgZXhpc3QucHVzaCh0YXNrLnRpdGxlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrLnRpdGxlKTtcclxuICAgICAgICBjcmVhdGVUYXNrKHRhc2spO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIHJldHVybiB7IHNob3dUYXNrcywgY3JlYXRlVGFzayB9O1xyXG59KSgpO1xyXG5cclxuY29uc3QgZGlzcGxheVBhZ2UgPSAoYnV0dG9uKSA9PiB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgY29uc3QgZ2V0ZGl2ID0gY29udGVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1uYW1lPVwiJHtidXR0b259XCJdYCk7XHJcbiAgaWYgKGNvbnRlbnQuY29udGFpbnMoZ2V0ZGl2KSkge1xyXG4gICAgY29uc3QgZGl2cyA9IGNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnI2dyb3VwJyk7XHJcbiAgICBBcnJheS5mcm9tKGRpdnMpLmZvckVhY2goKGRpdikgPT4ge1xyXG4gICAgICBpZiAoZGl2LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PT0gZ2V0ZGl2LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSkge1xyXG4gICAgICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgaGlkZSA9IGNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnI2dyb3VwJyk7XHJcbiAgICBoaWRlLmZvckVhY2goKGRpdikgPT4ge1xyXG4gICAgICBkaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0pO1xyXG5cclxuICAgIGNyZWF0ZVByb2plY3RQYWdlLmNyZWF0ZVBhZ2UoYnV0dG9uKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBkZWxldGVUYXNrID0gKGl0ZW0pID0+IHtcclxuICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICBjb25zdCB0YXNrRGl2ID0gaXRlbS5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10YXNrJyk7XHJcbiAgICBpZiAodGFzay50aXRsZSA9PSB0YXNrRGl2KSB7XHJcbiAgICAgIGl0ZW0ucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgZGVsZXRldGFza0Zyb21BcnJheSh0YXNrRGl2KTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHRvZGF5TG9hZGVyID0gKCkgPT4ge1xyXG4gIGlmIChzYXZlZCAhPSBudWxsKSB7XHJcbiAgICBzYXZlZC5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgIGRpc3BsYXlUYXNrcy5jcmVhdGVUYXNrKHRhc2spO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgZGlzcGxheVRhc2tzLCB0b2RheUxvYWRlciwgZGlzcGxheVBhZ2UgfTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlVGFza3MgfSBmcm9tICcuL3RvZG9zLWxvZ2ljJztcclxuaW1wb3J0IHsgZGlzcGxheVRhc2tzIH0gZnJvbSAnLi90YXNrLWRpc3BsYXktY29udHJvbGxlcic7XHJcbmltcG9ydCB7IGRpc3BsYXlUYXNrcyBhcyBkaXNwbGF5UHJvamVjdFRhc2tzIH0gZnJvbSAnLi9wcm9qZWN0LWRpc3BsYXktY29udHJvbGxlcic7XHJcbmltcG9ydCB7IHNhdmVkLCBwcm9qZWN0TWV0aG9kcywgY3JlYXRlZFByb2plY3RzIH0gZnJvbSAnLi9wcm9qZWN0cy1sb2dpYyc7XHJcblxyXG5sZXQgY3VycmVudFByb2plY3QgPSAnJztcclxubGV0IGN1cnJlbnRkaXYgPSAnJztcclxuXHJcbmNsYXNzIGNyZWF0ZVByb2plY3RUb2RvcyB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICB9XHJcblxyXG4gIHByb2plY3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcclxuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHBhZ2UuY2xhc3NOYW1lID0gYCR7dGhpcy50aXRsZX1gO1xyXG4gICAgcGFnZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2dyb3VwJyk7XHJcbiAgICBwYWdlLnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgYCR7dGhpcy50aXRsZX1gKTtcclxuICAgIHBhZ2Uuc2V0QXR0cmlidXRlKCdkYXRhLWFjdGl2ZScsICd0cnVlJyk7XHJcbiAgICBjb250ZW50LmFwcGVuZChwYWdlKTtcclxuXHJcbiAgICBjb25zdCBwZW5kaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwZW5kaW5nLmNsYXNzTGlzdC5hZGQoJ3BlbmRpbmcnKTtcclxuICAgIHBhZ2UuYXBwZW5kKHBlbmRpbmcpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgcGVuZGluZy5hcHBlbmQodGl0bGUpO1xyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLnRpdGxlO1xyXG5cclxuICAgIGNvbnN0IGNvbXBsZXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29tcGxldGVkLmNsYXNzTmFtZSA9ICdwZW5kaW5nIGNvbXBsZXRlZCc7XHJcbiAgICBwYWdlLmFwcGVuZChjb21wbGV0ZWQpO1xyXG5cclxuICAgIGNvbnN0IGNvbXBsZXRlZHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIGNvbXBsZXRlZC5hcHBlbmQoY29tcGxldGVkdGl0bGUpO1xyXG4gICAgY29tcGxldGVkdGl0bGUudGV4dENvbnRlbnQgPSAnQ29tcGxldGVkJztcclxuICAgIGNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBjb21wbGV0ZWR0aXRsZS5hcHBlbmQoY291bnRlcik7XHJcbiAgICBjb3VudGVyLmNsYXNzTGlzdC5hZGQoJ2NvdW50ZXInKTtcclxuICAgIGNvdW50ZXIudGV4dENvbnRlbnQgPSAwO1xyXG4gIH07XHJcblxyXG4gIGlucHV0cyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1uYW1lPVwiJHt0aGlzLnRpdGxlfVwiXWApO1xyXG4gICAgY29uc29sZS5sb2codGhpcyk7XHJcbiAgICBjb25zdCBhZGRUYXNrQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYWRkVGFza0J1dHRvbnMuY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2snKTtcclxuICAgIHBhZ2UuYXBwZW5kKGFkZFRhc2tCdXR0b25zKTtcclxuXHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5wdXQnLCBgJHt0aGlzLnRpdGxlfWApO1xyXG4gICAgYWRkVGFza0J1dHRvbnMuYXBwZW5kKGlucHV0KTtcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnQWRkIGEgcHJvamVjdCB0YXNrIGhlcmUnKTtcclxuXHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZCcpO1xyXG4gICAgYWRkVGFza0J1dHRvbnMuYXBwZW5kKGJ1dHRvbik7XHJcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgaWYgKHNhdmVkICE9PSBudWxsKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NhdmVkJyk7XHJcbiAgICAgICAgc2F2ZWQuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHByb2plY3QudGl0bGUgPT0gcGFnZS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykpIHtcclxuICAgICAgICAgICAgY29uc3QgYWRkTWV0aG9kcyA9IG5ldyBwcm9qZWN0TWV0aG9kcyhwcm9qZWN0KTtcclxuICAgICAgICAgICAgYWRkTWV0aG9kcy5hZGRUYXNrKGlucHV0LnZhbHVlLCAnc29tZSByYW5kb21ldGhpZycpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhZGRNZXRob2RzKTtcclxuICAgICAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0LnRhc2tzO1xyXG4gICAgICAgICAgICBjdXJyZW50ZGl2ID0gcGFnZTtcclxuICAgICAgICAgICAgZGlzcGxheVByb2plY3RUYXNrcy5zaG93UHJvamVjdFRhc2tzKHByb2plY3QudGl0bGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzYXZlZCcpO1xyXG4gICAgICAgIGNyZWF0ZWRQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgICBpZiAocHJvamVjdC50aXRsZSA9PSBwYWdlLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSkge1xyXG4gICAgICAgICAgICBwcm9qZWN0LmFkZFRhc2soaW5wdXQudmFsdWUsICdzb21lIHJhbmRvbWUnKTtcclxuICAgICAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0LnRhc2tzO1xyXG4gICAgICAgICAgICBjdXJyZW50ZGl2ID0gcGFnZTtcclxuICAgICAgICAgICAgZGlzcGxheVByb2plY3RUYXNrcy5zaG93UHJvamVjdFRhc2tzKHByb2plY3QudGl0bGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcblxyXG5jbGFzcyBjcmVhdGVEYXlUb2RvcyBleHRlbmRzIGNyZWF0ZVByb2plY3RUb2RvcyB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUpIHtcclxuICAgIHN1cGVyKHRpdGxlKTtcclxuICAgIHRoaXMudGl0bGUgPSAnVG9kYXknO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMudGl0bGV9YCk7XHJcbiAgICBjb25zdCBhZGRUYXNrQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYWRkVGFza0J1dHRvbnMuY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2snKTtcclxuICAgIHBhZ2UuYXBwZW5kKGFkZFRhc2tCdXR0b25zKTtcclxuXHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGhpcy50aXRsZX1gKTtcclxuICAgIGFkZFRhc2tCdXR0b25zLmFwcGVuZChpbnB1dCk7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMudGl0bGV9YCk7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdhZGQnKTtcclxuICAgIGFkZFRhc2tCdXR0b25zLmFwcGVuZChidXR0b24pO1xyXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGNyZWF0ZVRhc2tzLmFkZFRhc2sodmFsdWUudmFsdWUsICdzb21lIHJhbmRvbSB3b3JkcycpO1xyXG4gICAgICBkaXNwbGF5VGFza3Muc2hvd1Rhc2tzKCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0VG9kb3MsIGNyZWF0ZURheVRvZG9zLCBjdXJyZW50UHJvamVjdCwgY3VycmVudGRpdiB9O1xyXG4iLCJpbXBvcnQgeyBkaXNwbGF5VGFza3MgfSBmcm9tICcuL3Rhc2stZGlzcGxheS1jb250cm9sbGVyJztcclxuXHJcbmNvbnN0IHRhc2tzID0gW107XHJcbmxldCBzYXZlZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZGF5JykpO1xyXG5cclxuY29uc3Qgc2F2ZXRvTG9hY2FsID0gKGRhdGEpID0+IHtcclxuICBpZiAoc2F2ZWQgPT0gbnVsbCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZGF5JywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcclxuICB9IGVsc2Uge1xyXG4gICAgc2F2ZWQucHVzaChkYXRhKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RheScsIEpTT04uc3RyaW5naWZ5KHNhdmVkKSk7XHJcbiAgfVxyXG59O1xyXG5cclxuY2xhc3MgdG9kb3Mge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbikge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgY3JlYXRlVGFza3MgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGFkZFRhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uKSA9PiB7XHJcbiAgICBsZXQgdGFzayA9IG5ldyB0b2Rvcyh0aXRsZSwgZGVzY3JpcHRpb24pO1xyXG4gICAgdGFza3MucHVzaCh0YXNrKTtcclxuICAgIHNhdmV0b0xvYWNhbCh0YXNrKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4geyBhZGRUYXNrIH07XHJcbn0pKCk7XHJcblxyXG5jb25zdCBkZWxldGV0YXNrID0gKGl0ZW0pID0+IHtcclxuICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICBpZiAodGFzay50aXRsZSA9PSBpdGVtKSB7XHJcbiAgICAgIHRhc2tzLnNwbGljZSh0YXNrcy5pbmRleE9mKHRhc2spLCAxKTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCB7IHRvZG9zLCBjcmVhdGVUYXNrcywgdGFza3MsIGRlbGV0ZXRhc2ssIHNhdmVkIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=