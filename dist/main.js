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
      //this problem see genreal display
      console.log(project.title);
      displayPage(project);
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
    const pending = _tasks_constructors__WEBPACK_IMPORTED_MODULE_1__.currentdiv.querySelector('.pending');
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

  const showProjectTasks = () => {
    _tasks_constructors__WEBPACK_IMPORTED_MODULE_1__.currentProject.forEach((projectsTask) => {
      if (!exist.includes(projectsTask.title)) {
        exist.push(projectsTask.title);
        createTask(projectsTask);
      }
    });
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
    console.log(this);
    const page = document.createElement('div');
    page.className = `${this.title}`;
    page.setAttribute('id', 'group');
    page.setAttribute('data-name', `${this.title}`);
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
            _project_display_controller__WEBPACK_IMPORTED_MODULE_2__.displayTasks.showProjectTasks();
          }
        });
      } else {
        console.log('created');
        _projects_logic__WEBPACK_IMPORTED_MODULE_3__.createdProjects.forEach((project) => {
          if (project.title == page.getAttribute('class')) {
            project.addTask(input.value, 'some randome');
            currentProject = project.tasks;
            currentdiv = page;
            _project_display_controller__WEBPACK_IMPORTED_MODULE_2__.displayTasks.showProjectTasks();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBLGdDQUFnQyxXQUFXO0FBQzNDO0FBQ0EsNkNBQTZDLFdBQVc7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw2REFBbUI7QUFDekIsTUFBTSw0RUFBc0I7QUFDNUIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUMwRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSGpCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUN3RDs7Ozs7OztVQ3ZDeEQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2dlbmVyYWwtZGlzcGxheS1jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0LWRpc3BsYXktY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3RzLWxvZ2ljLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFzay1kaXNwbGF5LWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrcy1jb25zdHJ1Y3RvcnMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2Rvcy1sb2dpYy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1cnJlbnRQcm9qZWN0LCBjdXJyZW50ZGl2IH0gZnJvbSAnLi90YXNrcy1jb25zdHJ1Y3RvcnMnO1xyXG5cclxuY29uc3QgZGlzcGxheWNvbXBsZXRlZFRhc2tzID0gKCgpID0+IHtcclxuICBsZXQgY29tcGxldGVkVGFza3MgPSAwO1xyXG4gIGNvbnN0IG1vdmVUYXNrID0gKGlucHV0KSA9PiB7XHJcbiAgICBpZiAoaW5wdXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PSAncGVuZGluZycpIHtcclxuICAgICAgY29uc3QgY29tcGxldGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlZCcpO1xyXG4gICAgICBjb21wbGV0ZWQuYXBwZW5kKGlucHV0LnBhcmVudEVsZW1lbnQpO1xyXG4gICAgICBjb25zdCBzcGFuID0gY29tcGxldGVkLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcclxuICAgICAgY29uc29sZS5sb2coc3Bhbik7XHJcbiAgICAgIGNvbXBsZXRlZFRhc2tzKys7XHJcbiAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBjb21wbGV0ZWRUYXNrcztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHBlbmRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGVuZGluZycpO1xyXG4gICAgICBwZW5kaW5nLmFwcGVuZChpbnB1dC5wYXJlbnRFbGVtZW50KTtcclxuICAgICAgY29uc3QgY29tcGxldGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlZCcpO1xyXG4gICAgICBjb25zdCBzcGFuID0gY29tcGxldGVkLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcclxuICAgICAgY29uc29sZS5sb2coc3Bhbik7XHJcbiAgICAgIGNvbXBsZXRlZFRhc2tzLS07XHJcbiAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBjb21wbGV0ZWRUYXNrcztcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiB7IG1vdmVUYXNrIH07XHJcbn0pKCk7XHJcblxyXG5jb25zdCBkaXNwbGF5Y29tcGxldGVkUHJvamVjdFRhc2tzID0gKCgpID0+IHtcclxuICBsZXQgY29tcGxldGVkVGFza3MgPSAwO1xyXG4gIGNvbnN0IG1vdmVUYXNrID0gKGlucHV0KSA9PiB7XHJcbiAgICBpZiAoaW5wdXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PSAncGVuZGluZycpIHtcclxuICAgICAgY29uc3QgY29tcGxldGVkID0gY3VycmVudGRpdi5xdWVyeVNlbGVjdG9yKCcuY29tcGxldGVkJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRkaXYpO1xyXG4gICAgICBjb21wbGV0ZWQuYXBwZW5kKGlucHV0LnBhcmVudEVsZW1lbnQpO1xyXG4gICAgICBjb25zdCBzcGFuID0gY29tcGxldGVkLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcclxuICAgICAgY29uc29sZS5sb2coc3Bhbik7XHJcbiAgICAgIGNvbXBsZXRlZFRhc2tzKys7XHJcbiAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBjb21wbGV0ZWRUYXNrcztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHBlbmRpbmcgPSBjdXJyZW50ZGl2LnF1ZXJ5U2VsZWN0b3IoJy5wZW5kaW5nJyk7XHJcbiAgICAgIHBlbmRpbmcuYXBwZW5kKGlucHV0LnBhcmVudEVsZW1lbnQpO1xyXG4gICAgICBjb25zdCBjb21wbGV0ZWQgPSBjdXJyZW50ZGl2LnF1ZXJ5U2VsZWN0b3IoJy5jb21wbGV0ZWQnKTtcclxuICAgICAgY29uc3Qgc3BhbiA9IGNvbXBsZXRlZC5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHNwYW4pO1xyXG4gICAgICBjb21wbGV0ZWRUYXNrcy0tO1xyXG4gICAgICBzcGFuLnRleHRDb250ZW50ID0gY29tcGxldGVkVGFza3M7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4geyBtb3ZlVGFzayB9O1xyXG59KSgpO1xyXG5cclxuY29uc3Qgc2V0QWN0aXZlVGFiID0gKHRhYikgPT4ge1xyXG4gIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xyXG4gIEFycmF5LmZyb20odGFicykuZm9yRWFjaCgobGkpID0+IHtcclxuICAgIGlmIChsaS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgIGxpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGlmICh0YWIuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0YWIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhY3RpdmUnKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgeyBzZXRBY3RpdmVUYWIsIGRpc3BsYXljb21wbGV0ZWRQcm9qZWN0VGFza3MsIGRpc3BsYXljb21wbGV0ZWRUYXNrcyB9O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVEYXlUb2RvcyB9IGZyb20gJy4vdGFza3MtY29uc3RydWN0b3JzJztcclxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdFRvZG9zIH0gZnJvbSAnLi90YXNrcy1jb25zdHJ1Y3RvcnMnO1xyXG5pbXBvcnQgeyBzZXRBY3RpdmVUYWIgfSBmcm9tICcuL2dlbmVyYWwtZGlzcGxheS1jb250cm9sbGVyJztcclxuaW1wb3J0IHsgdG9kYXlMb2FkZXIsIGRpc3BsYXlQYWdlIH0gZnJvbSAnLi90YXNrLWRpc3BsYXktY29udHJvbGxlcic7XHJcbmltcG9ydCB7IHByb2plY3RMb2FkZXIgfSBmcm9tICcuL3Byb2plY3QtZGlzcGxheS1jb250cm9sbGVyJztcclxuXHJcbmxldCBhY3RpdmVQYWdlID0gbmV3IGNyZWF0ZURheVRvZG9zKCd0b2RheScpO1xyXG5hY3RpdmVQYWdlLnByb2plY3QoKTtcclxuYWN0aXZlUGFnZS5pbnB1dHMoKTtcclxudG9kYXlMb2FkZXIoKTtcclxucHJvamVjdExvYWRlcigpO1xyXG5cclxuY29uc3QgRGVmYXVsdGFjdGl2ZUJ1dHRvbiA9ICgoKSA9PiB7XHJcbiAgY29uc3QgVG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaScpO1xyXG4gIFRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIHNldEFjdGl2ZVRhYihlLnRhcmdldCk7XHJcbiAgICBkaXNwbGF5UGFnZShUb2RheS50ZXh0Q29udGVudCk7XHJcbiAgfSk7XHJcbn0pKCk7XHJcblxyXG5jb25zdCBjcmVhdGVQcm9qZWN0UGFnZSA9ICgoKSA9PiB7XHJcbiAgY29uc3QgY3JlYXRlUGFnZSA9IChidXR0b24pID0+IHtcclxuICAgIGFjdGl2ZVBhZ2UgPSBuZXcgY3JlYXRlUHJvamVjdFRvZG9zKGJ1dHRvbi50aXRsZSk7XHJcbiAgICBhY3RpdmVQYWdlLnByb2plY3QoKTtcclxuICAgIGFjdGl2ZVBhZ2UuaW5wdXRzKCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHsgY3JlYXRlUGFnZSB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdFBhZ2UgfTtcclxuIiwiaW1wb3J0IHtcclxuICBjcmVhdGVkUHJvamVjdHMsXHJcbiAgZGVsZXRlUHJvamVjdEZyb21BcnJheSxcclxuICBzYXZlZCxcclxufSBmcm9tICcuL3Byb2plY3RzLWxvZ2ljJztcclxuaW1wb3J0IHsgY3VycmVudGRpdiwgY3VycmVudFByb2plY3QgfSBmcm9tICcuL3Rhc2tzLWNvbnN0cnVjdG9ycyc7XHJcbmltcG9ydCB7XHJcbiAgc2V0QWN0aXZlVGFiLFxyXG4gIGRpc3BsYXljb21wbGV0ZWRQcm9qZWN0VGFza3MsXHJcbn0gZnJvbSAnLi9nZW5lcmFsLWRpc3BsYXktY29udHJvbGxlcic7XHJcbmltcG9ydCB7IGNyZWF0ZVByb2plY3RQYWdlIH0gZnJvbSAnLi9pbmRleCc7XHJcblxyXG5jb25zdCBkaXNwbGF5UHJvamVjdHMgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGV4aXN0ID0gW107XHJcbiAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcclxuICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcclxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgcHJvamVjdExpc3QuYXBwZW5kKG5ld1Byb2plY3QpO1xyXG4gICAgbmV3UHJvamVjdC50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XHJcbiAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBkZWxldGVJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgJy9zcmMvaW1nL2ljb25zOC1yZW1vdmUtNDgucG5nJyk7XHJcbiAgICBkZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgZGVsZXRlUHJvamVjdChlLnRhcmdldCk7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9KTtcclxuICAgIG5ld1Byb2plY3QuYXBwZW5kKGRlbGV0ZUljb24pO1xyXG4gICAgbmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIHNldEFjdGl2ZVRhYihlLnRhcmdldCk7XHJcbiAgICAgIC8vdGhpcyBwcm9ibGVtIHNlZSBnZW5yZWFsIGRpc3BsYXlcclxuICAgICAgY29uc29sZS5sb2cocHJvamVjdC50aXRsZSk7XHJcbiAgICAgIGRpc3BsYXlQYWdlKHByb2plY3QpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2hvd1Byb2plY3RzID0gKCkgPT4ge1xyXG4gICAgY3JlYXRlZFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgaWYgKCFleGlzdC5pbmNsdWRlcyhwcm9qZWN0LnRpdGxlKSkge1xyXG4gICAgICAgIGV4aXN0LnB1c2gocHJvamVjdC50aXRsZSk7XHJcbiAgICAgICAgY3JlYXRlUHJvamVjdChwcm9qZWN0KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuICByZXR1cm4geyBzaG93UHJvamVjdHMsIGNyZWF0ZVByb2plY3QgfTtcclxufSkoKTtcclxuXHJcbmNvbnN0IGRpc3BsYXlUYXNrcyA9ICgoKSA9PiB7XHJcbiAgY29uc3QgZXhpc3QgPSBbXTtcclxuXHJcbiAgY29uc3QgY3JlYXRlVGFzayA9IChwcm9qZWN0c1Rhc2spID0+IHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgcGVuZGluZyA9IGN1cnJlbnRkaXYucXVlcnlTZWxlY3RvcignLnBlbmRpbmcnKTtcclxuICAgIHBlbmRpbmcuYXBwZW5kKGRpdik7XHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xyXG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcclxuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgZGlzcGxheWNvbXBsZXRlZFByb2plY3RUYXNrcy5tb3ZlVGFzayhjaGVja2JveCk7XHJcbiAgICB9KTtcclxuICAgIGRpdi5hcHBlbmQoY2hlY2tib3gpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgZGl2LmFwcGVuZCh0aXRsZSk7XHJcbiAgICBkaXYuYXBwZW5kKGRhdGUpO1xyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0c1Rhc2sudGl0bGU7XHJcblxyXG4gICAgLy9maXggZGVsZXRlIGZlYXR1cmVcclxuICAgIGNvbnN0IHJlbW92ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIHJlbW92ZUljb24uc2V0QXR0cmlidXRlKCdzcmMnLCAnL3NyYy9pbWcvaWNvbnM4LXhib3gteC0zMC5wbmcnKTtcclxuICAgIHJlbW92ZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICBkZWxldGVUYXNrKGUudGFyZ2V0KTtcclxuICAgIH0pO1xyXG4gICAgZGl2LmFwcGVuZChyZW1vdmVJY29uKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaG93UHJvamVjdFRhc2tzID0gKCkgPT4ge1xyXG4gICAgY3VycmVudFByb2plY3QuZm9yRWFjaCgocHJvamVjdHNUYXNrKSA9PiB7XHJcbiAgICAgIGlmICghZXhpc3QuaW5jbHVkZXMocHJvamVjdHNUYXNrLnRpdGxlKSkge1xyXG4gICAgICAgIGV4aXN0LnB1c2gocHJvamVjdHNUYXNrLnRpdGxlKTtcclxuICAgICAgICBjcmVhdGVUYXNrKHByb2plY3RzVGFzayk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcbiAgcmV0dXJuIHsgc2hvd1Byb2plY3RUYXNrcywgY3JlYXRlVGFzayB9O1xyXG59KSgpO1xyXG5cclxuY29uc3QgZGlzcGxheVBhZ2UgPSAoYnV0dG9uKSA9PiB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgY29uc3QgZ2V0ZGl2ID0gY29udGVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1uYW1lPVwiJHtidXR0b24udGl0bGV9XCJdYCk7XHJcbiAgaWYgKGNvbnRlbnQuY29udGFpbnMoZ2V0ZGl2KSkge1xyXG4gICAgY29uc3QgZGl2cyA9IGNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnI2dyb3VwJyk7XHJcbiAgICBBcnJheS5mcm9tKGRpdnMpLmZvckVhY2goKGRpdikgPT4ge1xyXG4gICAgICBpZiAoZGl2LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PT0gZ2V0ZGl2LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSkge1xyXG4gICAgICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgaGlkZSA9IGNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnI2dyb3VwJyk7XHJcbiAgICBoaWRlLmZvckVhY2goKGRpdikgPT4ge1xyXG4gICAgICBkaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0pO1xyXG5cclxuICAgIGNyZWF0ZVByb2plY3RQYWdlLmNyZWF0ZVBhZ2UoYnV0dG9uKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBkZWxldGVQcm9qZWN0ID0gKHRpdGxlKSA9PiB7XHJcbiAgY3JlYXRlZFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgIGlmIChwcm9qZWN0LnRpdGxlID09IHRpdGxlLnBhcmVudEVsZW1lbnQudGV4dENvbnRlbnQpIHtcclxuICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgICAgIGNvbnN0IHByb2plY3REaXYgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgYFtkYXRhLW5hbWU9XCIke3Byb2plY3QudGl0bGV9XCJdYFxyXG4gICAgICApO1xyXG4gICAgICBpZiAoY29udGVudC5jb250YWlucyhwcm9qZWN0RGl2KSkge1xyXG4gICAgICAgIHByb2plY3REaXYucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgICAgZGVsZXRlUHJvamVjdEZyb21BcnJheSh0aXRsZSk7XHJcbiAgICAgIHRpdGxlLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBwcm9qZWN0TG9hZGVyID0gKCkgPT4ge1xyXG4gIGlmIChzYXZlZCAhPSBudWxsKSB7XHJcbiAgICBzYXZlZC5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgIGRpc3BsYXlQcm9qZWN0cy5jcmVhdGVQcm9qZWN0KHRhc2spO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgZGlzcGxheVByb2plY3RzLCBkaXNwbGF5VGFza3MsIHByb2plY3RMb2FkZXIsIGRpc3BsYXlQYWdlIH07XHJcbiIsImltcG9ydCB7IHRvZG9zIH0gZnJvbSAnLi90b2Rvcy1sb2dpYyc7XHJcbmltcG9ydCB7IGRpc3BsYXlQcm9qZWN0cyB9IGZyb20gJy4vcHJvamVjdC1kaXNwbGF5LWNvbnRyb2xsZXInO1xyXG5cclxuY29uc3QgYnV0dG9uMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGVQcm9qZWN0Jyk7XHJcbmJ1dHRvbjEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdjbGlja2VkJyk7XHJcbiAgY3JlYXRlSW5wdXQoKTtcclxufSk7XHJcblxyXG5jb25zdCBjcmVhdGVkUHJvamVjdHMgPSBbXTtcclxubGV0IHNhdmVkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSk7XHJcblxyXG5jbGFzcyBwcm9qZWN0cyB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMudGFza3MgPSBbXTtcclxuICB9XHJcbiAgYWRkVGFzayh0aXRsZSwgZGVzY3JpcHRpb24pIHtcclxuICAgIGxldCB0YXNrID0gbmV3IHRvZG9zKHRpdGxlLCBkZXNjcmlwdGlvbik7XHJcbiAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XHJcbiAgICBzYXZlUHJvamVjdFRhc2tUb0xvY2FsKHRhc2ssIHRoaXMudGl0bGUpO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc2F2ZXRvTG9hY2FsID0gKGRhdGEpID0+IHtcclxuICBpZiAoc2F2ZWQgPT0gbnVsbCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoY3JlYXRlZFByb2plY3RzKSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHNhdmVkLnB1c2goZGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHNhdmVkKSk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3Qgc2F2ZVByb2plY3RUYXNrVG9Mb2NhbCA9IChkYXRhLCBwYXJlbnQpID0+IHtcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICBpZiAoc2F2ZWQgPT0gbnVsbCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoY3JlYXRlZFByb2plY3RzKSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHNhdmVkLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgaWYgKHByb2plY3QudGl0bGUgPT0gcGFyZW50KSB7XHJcbiAgICAgICAgcHJvamVjdC50YXNrcy5wdXNoKGRhdGEpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHNhdmVkKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coc2F2ZWQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKCgpID0+IHtcclxuICBjb25zdCBhZGRQcm9qZWN0ID0gKHRpdGxlKSA9PiB7XHJcbiAgICBsZXQgcHJvamVjdCA9IG5ldyBwcm9qZWN0cyh0aXRsZSk7XHJcbiAgICBjcmVhdGVkUHJvamVjdHMucHVzaChwcm9qZWN0KTtcclxuICAgIHNhdmV0b0xvYWNhbChwcm9qZWN0KTtcclxuICB9O1xyXG4gIHJldHVybiB7IGFkZFByb2plY3QgfTtcclxufSkoKTtcclxuXHJcbmNvbnN0IGRlbGV0ZVByb2plY3RGcm9tQXJyYXkgPSAodGl0bGUpID0+IHtcclxuICBjcmVhdGVkUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgaWYgKHByb2plY3QudGl0bGUgPT0gdGl0bGUpIHtcclxuICAgICAgY3JlYXRlZFByb2plY3RzLnNwbGljZShjcmVhdGVkUHJvamVjdHMuaW5kZXhPZih0YXNrKSwgMSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVJbnB1dCA9ICgpID0+IHtcclxuICBidXR0b24xLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbnMnKTtcclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdjcmVhdGVJbnB1dCcpO1xyXG4gIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBvcHRpb25zLmNsYXNzTGlzdC5hZGQoJ29wdGlvbnMnKTtcclxuICBjb25zdCBjcmVhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjcmVhdGVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdjcmVhdGVCdXR0b24nKTtcclxuICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdjcmVhdGVCdXR0b24nKTtcclxuICBjcmVhdGVCdXR0b24udGV4dENvbnRlbnQgPSAnQ3JlYXRlJztcclxuICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcclxuICBkaXYuYXBwZW5kKGlucHV0KTtcclxuICBkaXYuYXBwZW5kKG9wdGlvbnMpO1xyXG4gIG9wdGlvbnMuYXBwZW5kKGNyZWF0ZUJ1dHRvbik7XHJcbiAgb3B0aW9ucy5hcHBlbmQoY2FuY2VsQnV0dG9uKTtcclxuICBjcmVhdGVCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgY2FuY2VsQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBidXR0b24xLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgb3B0aW9ucy5yZW1vdmUoKTtcclxuICAgIGlucHV0LnJlbW92ZSgpO1xyXG4gIH0pO1xyXG4gIGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBjcmVhdGVQcm9qZWN0LmFkZFByb2plY3QoaW5wdXQudmFsdWUpO1xyXG4gICAgZGlzcGxheVByb2plY3RzLnNob3dQcm9qZWN0cygpO1xyXG4gICAgYnV0dG9uMS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIG9wdGlvbnMucmVtb3ZlKCk7XHJcbiAgICBpbnB1dC5yZW1vdmUoKTtcclxuICB9KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHByb2plY3RNZXRob2RzKGRhdGEpIHtcclxuICB0aGlzLnRpdGxlID0gZGF0YS50aXRsZTtcclxuICB0aGlzLnRhc2tzID0gW107XHJcbn1cclxuXHJcbnByb2plY3RNZXRob2RzLnByb3RvdHlwZS5hZGRUYXNrID0gZnVuY3Rpb24gKHRpdGxlLCBkZXNjcmlwdGlvbikge1xyXG4gIGxldCB0YXNrID0gbmV3IHRvZG9zKHRpdGxlLCBkZXNjcmlwdGlvbik7XHJcbiAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xyXG4gIHNhdmVQcm9qZWN0VGFza1RvTG9jYWwodGFzaywgdGhpcy50aXRsZSk7XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gIHByb2plY3RzLFxyXG4gIGNyZWF0ZWRQcm9qZWN0cyxcclxuICBkZWxldGVQcm9qZWN0RnJvbUFycmF5LFxyXG4gIHNhdmVkLFxyXG4gIHByb2plY3RNZXRob2RzLFxyXG59O1xyXG4iLCJpbXBvcnQgeyB0YXNrcywgZGVsZXRldGFzayBhcyBkZWxldGV0YXNrRnJvbUFycmF5LCBzYXZlZCB9IGZyb20gJy4vdG9kb3MtbG9naWMnO1xyXG5pbXBvcnQgeyBkaXNwbGF5Y29tcGxldGVkVGFza3MgfSBmcm9tICcuL2dlbmVyYWwtZGlzcGxheS1jb250cm9sbGVyJztcclxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdFBhZ2UgfSBmcm9tICcuL2luZGV4JztcclxuXHJcbmNvbnN0IGRpc3BsYXlUYXNrcyA9ICgoKSA9PiB7XHJcbiAgY29uc3QgZXhpc3QgPSBbXTtcclxuICBjb25zdCBjcmVhdGVUYXNrID0gKHRhc2spID0+IHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgcGVuZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wZW5kaW5nJyk7XHJcbiAgICBwZW5kaW5nLmFwcGVuZChkaXYpO1xyXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcclxuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzaycsIGAke3Rhc2sudGl0bGV9YCk7XHJcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcclxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xyXG4gICAgZGF0ZS50ZXh0Q29udGVudCA9ICdObyBEYXRlJztcclxuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgZGlzcGxheWNvbXBsZXRlZFRhc2tzLm1vdmVUYXNrKGNoZWNrYm94KTtcclxuICAgIH0pO1xyXG4gICAgZGl2LmFwcGVuZChjaGVja2JveCk7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBkaXYuYXBwZW5kKHRpdGxlKTtcclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcclxuICAgIGRpdi5hcHBlbmQoZGF0ZSk7XHJcbiAgICBjb25zdCByZW1vdmVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICByZW1vdmVJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgJy9zcmMvaW1nL2ljb25zOC14Ym94LXgtMzAucG5nJyk7XHJcbiAgICByZW1vdmVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgZGVsZXRlVGFzayhlLnRhcmdldCk7XHJcbiAgICB9KTtcclxuICAgIGRpdi5hcHBlbmQocmVtb3ZlSWNvbik7XHJcbiAgfTtcclxuICBjb25zdCBzaG93VGFza3MgPSAoKSA9PiB7XHJcbiAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgIGlmICghZXhpc3QuaW5jbHVkZXModGFzay50aXRsZSkpIHtcclxuICAgICAgICBleGlzdC5wdXNoKHRhc2sudGl0bGUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2sudGl0bGUpO1xyXG4gICAgICAgIGNyZWF0ZVRhc2sodGFzayk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcbiAgcmV0dXJuIHsgc2hvd1Rhc2tzLCBjcmVhdGVUYXNrIH07XHJcbn0pKCk7XHJcblxyXG5jb25zdCBkaXNwbGF5UGFnZSA9IChidXR0b24pID0+IHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcclxuICBjb25zdCBnZXRkaXYgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW5hbWU9XCIke2J1dHRvbn1cIl1gKTtcclxuICBpZiAoY29udGVudC5jb250YWlucyhnZXRkaXYpKSB7XHJcbiAgICBjb25zdCBkaXZzID0gY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCcjZ3JvdXAnKTtcclxuICAgIEFycmF5LmZyb20oZGl2cykuZm9yRWFjaCgoZGl2KSA9PiB7XHJcbiAgICAgIGlmIChkaXYuZ2V0QXR0cmlidXRlKCdjbGFzcycpID09PSBnZXRkaXYuZ2V0QXR0cmlidXRlKCdjbGFzcycpKSB7XHJcbiAgICAgICAgZGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBoaWRlID0gY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCcjZ3JvdXAnKTtcclxuICAgIGhpZGUuZm9yRWFjaCgoZGl2KSA9PiB7XHJcbiAgICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY3JlYXRlUHJvamVjdFBhZ2UuY3JlYXRlUGFnZShidXR0b24pO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGRlbGV0ZVRhc2sgPSAoaXRlbSkgPT4ge1xyXG4gIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgIGNvbnN0IHRhc2tEaXYgPSBpdGVtLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhc2snKTtcclxuICAgIGlmICh0YXNrLnRpdGxlID09IHRhc2tEaXYpIHtcclxuICAgICAgaXRlbS5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICBkZWxldGV0YXNrRnJvbUFycmF5KHRhc2tEaXYpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgdG9kYXlMb2FkZXIgPSAoKSA9PiB7XHJcbiAgaWYgKHNhdmVkICE9IG51bGwpIHtcclxuICAgIHNhdmVkLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgZGlzcGxheVRhc2tzLmNyZWF0ZVRhc2sodGFzayk7XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgeyBkaXNwbGF5VGFza3MsIHRvZGF5TG9hZGVyLCBkaXNwbGF5UGFnZSB9O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVUYXNrcyB9IGZyb20gJy4vdG9kb3MtbG9naWMnO1xyXG5pbXBvcnQgeyBkaXNwbGF5VGFza3MgfSBmcm9tICcuL3Rhc2stZGlzcGxheS1jb250cm9sbGVyJztcclxuaW1wb3J0IHsgZGlzcGxheVRhc2tzIGFzIGRpc3BsYXlQcm9qZWN0VGFza3MgfSBmcm9tICcuL3Byb2plY3QtZGlzcGxheS1jb250cm9sbGVyJztcclxuaW1wb3J0IHsgc2F2ZWQsIHByb2plY3RNZXRob2RzLCBjcmVhdGVkUHJvamVjdHMgfSBmcm9tICcuL3Byb2plY3RzLWxvZ2ljJztcclxuXHJcbmxldCBjdXJyZW50UHJvamVjdCA9ICcnO1xyXG5sZXQgY3VycmVudGRpdiA9ICcnO1xyXG5cclxuY2xhc3MgY3JlYXRlUHJvamVjdFRvZG9zIHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gIH1cclxuXHJcbiAgcHJvamVjdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG4gICAgY29uc29sZS5sb2codGhpcyk7XHJcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwYWdlLmNsYXNzTmFtZSA9IGAke3RoaXMudGl0bGV9YDtcclxuICAgIHBhZ2Uuc2V0QXR0cmlidXRlKCdpZCcsICdncm91cCcpO1xyXG4gICAgcGFnZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScsIGAke3RoaXMudGl0bGV9YCk7XHJcbiAgICBjb250ZW50LmFwcGVuZChwYWdlKTtcclxuXHJcbiAgICBjb25zdCBwZW5kaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwZW5kaW5nLmNsYXNzTGlzdC5hZGQoJ3BlbmRpbmcnKTtcclxuICAgIHBhZ2UuYXBwZW5kKHBlbmRpbmcpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgcGVuZGluZy5hcHBlbmQodGl0bGUpO1xyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLnRpdGxlO1xyXG5cclxuICAgIGNvbnN0IGNvbXBsZXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29tcGxldGVkLmNsYXNzTmFtZSA9ICdwZW5kaW5nIGNvbXBsZXRlZCc7XHJcbiAgICBwYWdlLmFwcGVuZChjb21wbGV0ZWQpO1xyXG5cclxuICAgIGNvbnN0IGNvbXBsZXRlZHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIGNvbXBsZXRlZC5hcHBlbmQoY29tcGxldGVkdGl0bGUpO1xyXG4gICAgY29tcGxldGVkdGl0bGUudGV4dENvbnRlbnQgPSAnQ29tcGxldGVkJztcclxuICAgIGNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBjb21wbGV0ZWR0aXRsZS5hcHBlbmQoY291bnRlcik7XHJcbiAgICBjb3VudGVyLmNsYXNzTGlzdC5hZGQoJ2NvdW50ZXInKTtcclxuICAgIGNvdW50ZXIudGV4dENvbnRlbnQgPSAwO1xyXG4gIH07XHJcblxyXG4gIGlucHV0cyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1uYW1lPVwiJHt0aGlzLnRpdGxlfVwiXWApO1xyXG4gICAgY29uc29sZS5sb2codGhpcyk7XHJcbiAgICBjb25zdCBhZGRUYXNrQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYWRkVGFza0J1dHRvbnMuY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2snKTtcclxuICAgIHBhZ2UuYXBwZW5kKGFkZFRhc2tCdXR0b25zKTtcclxuXHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5wdXQnLCBgJHt0aGlzLnRpdGxlfWApO1xyXG4gICAgYWRkVGFza0J1dHRvbnMuYXBwZW5kKGlucHV0KTtcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnQWRkIGEgcHJvamVjdCB0YXNrIGhlcmUnKTtcclxuXHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZCcpO1xyXG4gICAgYWRkVGFza0J1dHRvbnMuYXBwZW5kKGJ1dHRvbik7XHJcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgaWYgKHNhdmVkICE9PSBudWxsKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NhdmVkJyk7XHJcbiAgICAgICAgc2F2ZWQuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHByb2plY3QudGl0bGUgPT0gcGFnZS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykpIHtcclxuICAgICAgICAgICAgY29uc3QgYWRkTWV0aG9kcyA9IG5ldyBwcm9qZWN0TWV0aG9kcyhwcm9qZWN0KTtcclxuICAgICAgICAgICAgYWRkTWV0aG9kcy5hZGRUYXNrKGlucHV0LnZhbHVlLCAnc29tZSByYW5kb21ldGhpZycpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhZGRNZXRob2RzKTtcclxuICAgICAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0LnRhc2tzO1xyXG4gICAgICAgICAgICBjdXJyZW50ZGl2ID0gcGFnZTtcclxuICAgICAgICAgICAgZGlzcGxheVByb2plY3RUYXNrcy5zaG93UHJvamVjdFRhc2tzKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NyZWF0ZWQnKTtcclxuICAgICAgICBjcmVhdGVkUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHByb2plY3QudGl0bGUgPT0gcGFnZS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykpIHtcclxuICAgICAgICAgICAgcHJvamVjdC5hZGRUYXNrKGlucHV0LnZhbHVlLCAnc29tZSByYW5kb21lJyk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdC50YXNrcztcclxuICAgICAgICAgICAgY3VycmVudGRpdiA9IHBhZ2U7XHJcbiAgICAgICAgICAgIGRpc3BsYXlQcm9qZWN0VGFza3Muc2hvd1Byb2plY3RUYXNrcygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcblxyXG5jbGFzcyBjcmVhdGVEYXlUb2RvcyBleHRlbmRzIGNyZWF0ZVByb2plY3RUb2RvcyB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUpIHtcclxuICAgIHN1cGVyKHRpdGxlKTtcclxuICAgIHRoaXMudGl0bGUgPSAnVG9kYXknO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMudGl0bGV9YCk7XHJcbiAgICBjb25zdCBhZGRUYXNrQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYWRkVGFza0J1dHRvbnMuY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2snKTtcclxuICAgIHBhZ2UuYXBwZW5kKGFkZFRhc2tCdXR0b25zKTtcclxuXHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGhpcy50aXRsZX1gKTtcclxuICAgIGFkZFRhc2tCdXR0b25zLmFwcGVuZChpbnB1dCk7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMudGl0bGV9YCk7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdhZGQnKTtcclxuICAgIGFkZFRhc2tCdXR0b25zLmFwcGVuZChidXR0b24pO1xyXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGNyZWF0ZVRhc2tzLmFkZFRhc2sodmFsdWUudmFsdWUsICdzb21lIHJhbmRvbSB3b3JkcycpO1xyXG4gICAgICBkaXNwbGF5VGFza3Muc2hvd1Rhc2tzKCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0VG9kb3MsIGNyZWF0ZURheVRvZG9zLCBjdXJyZW50UHJvamVjdCwgY3VycmVudGRpdiB9O1xyXG4iLCJpbXBvcnQgeyBkaXNwbGF5VGFza3MgfSBmcm9tICcuL3Rhc2stZGlzcGxheS1jb250cm9sbGVyJztcclxuXHJcbmNvbnN0IHRhc2tzID0gW107XHJcbmxldCBzYXZlZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZGF5JykpO1xyXG5cclxuY29uc3Qgc2F2ZXRvTG9hY2FsID0gKGRhdGEpID0+IHtcclxuICBpZiAoc2F2ZWQgPT0gbnVsbCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZGF5JywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcclxuICB9IGVsc2Uge1xyXG4gICAgc2F2ZWQucHVzaChkYXRhKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RheScsIEpTT04uc3RyaW5naWZ5KHNhdmVkKSk7XHJcbiAgfVxyXG59O1xyXG5cclxuY2xhc3MgdG9kb3Mge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbikge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgY3JlYXRlVGFza3MgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGFkZFRhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uKSA9PiB7XHJcbiAgICBsZXQgdGFzayA9IG5ldyB0b2Rvcyh0aXRsZSwgZGVzY3JpcHRpb24pO1xyXG4gICAgdGFza3MucHVzaCh0YXNrKTtcclxuICAgIHNhdmV0b0xvYWNhbCh0YXNrKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4geyBhZGRUYXNrIH07XHJcbn0pKCk7XHJcblxyXG5jb25zdCBkZWxldGV0YXNrID0gKGl0ZW0pID0+IHtcclxuICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICBpZiAodGFzay50aXRsZSA9PSBpdGVtKSB7XHJcbiAgICAgIHRhc2tzLnNwbGljZSh0YXNrcy5pbmRleE9mKHRhc2spLCAxKTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCB7IHRvZG9zLCBjcmVhdGVUYXNrcywgdGFza3MsIGRlbGV0ZXRhc2ssIHNhdmVkIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=