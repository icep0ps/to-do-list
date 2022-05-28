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
/* harmony export */   "displayPage": () => (/* binding */ displayPage),
/* harmony export */   "displaycompletedProjectTasks": () => (/* binding */ displaycompletedProjectTasks),
/* harmony export */   "displaycompletedTasks": () => (/* binding */ displaycompletedTasks),
/* harmony export */   "setActiveTab": () => (/* binding */ setActiveTab)
/* harmony export */ });
/* harmony import */ var _todos_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos-logic */ "./src/todos-logic.js");
/* harmony import */ var _tasks_constructors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks-constructors */ "./src/tasks-constructors.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/index.js");





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
      const completed = _tasks_constructors__WEBPACK_IMPORTED_MODULE_1__.currentdiv.querySelector('.completed');
      console.log(_tasks_constructors__WEBPACK_IMPORTED_MODULE_1__.currentdiv);
      completed.append(input.parentElement);
      const span = completed.querySelector('span');
      console.log(span);
      completedTasks++;
      span.textContent = completedTasks;
    } else {
      const pending = _tasks_constructors__WEBPACK_IMPORTED_MODULE_1__.currentdiv.querySelector('.pending');
      pending.append(input.parentElement);
      const completed = _tasks_constructors__WEBPACK_IMPORTED_MODULE_1__.currentdiv.querySelector('.completed');
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




let activePage = new _tasks_constructors__WEBPACK_IMPORTED_MODULE_0__.createDayTodos('today');
activePage.project();
activePage.inputs();

const DefaultactiveButton = (() => {
  const Today = document.querySelector('li');
  Today.addEventListener('click', (e) => {
    (0,_general_display_controller__WEBPACK_IMPORTED_MODULE_1__.setActiveTab)(e.target);
    (0,_general_display_controller__WEBPACK_IMPORTED_MODULE_1__.displayPage)(Today.textContent);
  });
})();

const createProjectPage = (() => {
  const createPage = (button) => {
    activePage = new _tasks_constructors__WEBPACK_IMPORTED_MODULE_0__.createProjectTodos(button);
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
/* harmony export */   "displayProjects": () => (/* binding */ displayProjects),
/* harmony export */   "displayTasks": () => (/* binding */ displayTasks)
/* harmony export */ });
/* harmony import */ var _projects_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects-logic */ "./src/projects-logic.js");
/* harmony import */ var _tasks_constructors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks-constructors */ "./src/tasks-constructors.js");
/* harmony import */ var _general_display_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general-display-controller */ "./src/general-display-controller.js");




const displayProjects = (() => {
  const exist = [];
  const projectList = document.querySelector('.projects');
  const createProject = (project) => {
    const newProject = document.createElement('li');
    projectList.append(newProject);
    newProject.textContent = project;
    const deleteIcon = document.createElement('img');
    deleteIcon.setAttribute('src', '/src/img/icons8-remove-48.png');
    deleteIcon.addEventListener('click', (e) => {
      deleteProject(e.target);
      e.stopPropagation();
    });
    newProject.append(deleteIcon);
    newProject.addEventListener('click', (e) => {
      (0,_general_display_controller__WEBPACK_IMPORTED_MODULE_2__.setActiveTab)(e.target);
      (0,_general_display_controller__WEBPACK_IMPORTED_MODULE_2__.displayPage)(project);
    });
  };

  const showProjects = () => {
    _projects_logic__WEBPACK_IMPORTED_MODULE_0__.createdProjects.forEach((project) => {
      if (!exist.includes(project.title)) {
        exist.push(project.title);
        createProject(project.title);
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
/* harmony export */   "projects": () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _todos_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos-logic */ "./src/todos-logic.js");
/* harmony import */ var _project_display_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-display-controller */ "./src/project-display-controller.js");



const button1 = document.querySelector('#createProject');
button1.addEventListener('click', (e) => {
  console.log('clicked');
  createInput();
});

const createdProjects = [];

class projects {
  constructor(title) {
    this.title = title;
    this.tasks = [];
  }
  addTask(title, description) {
    let task = new _todos_logic__WEBPACK_IMPORTED_MODULE_0__.todos(title, description);
    this.tasks.push(task);
  }
}

const createProject = (() => {
  const addProject = (title) => {
    let project = new projects(title);
    createdProjects.push(project);
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




/***/ }),

/***/ "./src/task-display-controller.js":
/*!****************************************!*\
  !*** ./src/task-display-controller.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayTasks": () => (/* binding */ displayTasks)
/* harmony export */ });
/* harmony import */ var _todos_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos-logic */ "./src/todos-logic.js");
/* harmony import */ var _general_display_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./general-display-controller */ "./src/general-display-controller.js");



const displayTasks = (() => {
  const exist = [];

  const createTask = (task) => {
    const div = document.createElement('div');
    const pending = document.querySelector('.pending');
    pending.append(div);
    div.classList.add('task');
    div.setAttribute('data-task', `${task}`);
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
    title.textContent = task;
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
        createTask(task.title);
      }
    });
  };
  return { showTasks, createTask };
})();

const deleteTask = (item) => {
  _todos_logic__WEBPACK_IMPORTED_MODULE_0__.tasks.forEach((task) => {
    const taskDiv = item.parentElement.getAttribute('data-task');
    if (task.title == taskDiv) {
      item.parentElement.remove();
      (0,_todos_logic__WEBPACK_IMPORTED_MODULE_0__.deletetask)(taskDiv);
    }
  });
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





//create mutiple projects

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
      _projects_logic__WEBPACK_IMPORTED_MODULE_3__.createdProjects.forEach((project) => {
        if (project.title == page.getAttribute('class')) {
          project.addTask(input.value, 'some randome');
          currentProject = project.tasks;
          currentdiv = page;
          _project_display_controller__WEBPACK_IMPORTED_MODULE_2__.displayTasks.showProjectTasks();
        }
      });
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
/* harmony export */   "tasks": () => (/* binding */ tasks),
/* harmony export */   "todos": () => (/* binding */ todos)
/* harmony export */ });
/* harmony import */ var _task_display_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-display-controller */ "./src/task-display-controller.js");

const tasks = [];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxvRUFBdUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHNGQUFvQztBQUM5QztBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsV0FBVztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLFdBQVc7QUFDM0M7QUFDQSw2Q0FBNkMsV0FBVztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDZEQUFtQjtBQUN6QixNQUFNLDRFQUFzQjtBQUM1QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQzBFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEdqQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNpRDs7Ozs7OztVQzFCakQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2dlbmVyYWwtZGlzcGxheS1jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0LWRpc3BsYXktY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3RzLWxvZ2ljLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFzay1kaXNwbGF5LWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrcy1jb25zdHJ1Y3RvcnMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2Rvcy1sb2dpYy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRhc2tzLCBkZWxldGV0YXNrIGFzIGRlbGV0ZXRhc2tGcm9tQXJyYXkgfSBmcm9tICcuL3RvZG9zLWxvZ2ljJztcclxuXHJcbmltcG9ydCB7IGN1cnJlbnRQcm9qZWN0LCBjdXJyZW50ZGl2IH0gZnJvbSAnLi90YXNrcy1jb25zdHJ1Y3RvcnMnO1xyXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0UGFnZSB9IGZyb20gJy4vaW5kZXgnO1xyXG5cclxuY29uc3QgZGlzcGxheWNvbXBsZXRlZFRhc2tzID0gKCgpID0+IHtcclxuICBsZXQgY29tcGxldGVkVGFza3MgPSAwO1xyXG4gIGNvbnN0IG1vdmVUYXNrID0gKGlucHV0KSA9PiB7XHJcbiAgICBpZiAoaW5wdXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PSAncGVuZGluZycpIHtcclxuICAgICAgY29uc3QgY29tcGxldGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlZCcpO1xyXG4gICAgICBjb21wbGV0ZWQuYXBwZW5kKGlucHV0LnBhcmVudEVsZW1lbnQpO1xyXG4gICAgICBjb25zdCBzcGFuID0gY29tcGxldGVkLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcclxuICAgICAgY29uc29sZS5sb2coc3Bhbik7XHJcbiAgICAgIGNvbXBsZXRlZFRhc2tzKys7XHJcbiAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBjb21wbGV0ZWRUYXNrcztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHBlbmRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGVuZGluZycpO1xyXG4gICAgICBwZW5kaW5nLmFwcGVuZChpbnB1dC5wYXJlbnRFbGVtZW50KTtcclxuICAgICAgY29uc3QgY29tcGxldGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlZCcpO1xyXG4gICAgICBjb25zdCBzcGFuID0gY29tcGxldGVkLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcclxuICAgICAgY29uc29sZS5sb2coc3Bhbik7XHJcbiAgICAgIGNvbXBsZXRlZFRhc2tzLS07XHJcbiAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBjb21wbGV0ZWRUYXNrcztcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiB7IG1vdmVUYXNrIH07XHJcbn0pKCk7XHJcblxyXG5jb25zdCBkaXNwbGF5Y29tcGxldGVkUHJvamVjdFRhc2tzID0gKCgpID0+IHtcclxuICBsZXQgY29tcGxldGVkVGFza3MgPSAwO1xyXG4gIGNvbnN0IG1vdmVUYXNrID0gKGlucHV0KSA9PiB7XHJcbiAgICBpZiAoaW5wdXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PSAncGVuZGluZycpIHtcclxuICAgICAgY29uc3QgY29tcGxldGVkID0gY3VycmVudGRpdi5xdWVyeVNlbGVjdG9yKCcuY29tcGxldGVkJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRkaXYpO1xyXG4gICAgICBjb21wbGV0ZWQuYXBwZW5kKGlucHV0LnBhcmVudEVsZW1lbnQpO1xyXG4gICAgICBjb25zdCBzcGFuID0gY29tcGxldGVkLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcclxuICAgICAgY29uc29sZS5sb2coc3Bhbik7XHJcbiAgICAgIGNvbXBsZXRlZFRhc2tzKys7XHJcbiAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBjb21wbGV0ZWRUYXNrcztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHBlbmRpbmcgPSBjdXJyZW50ZGl2LnF1ZXJ5U2VsZWN0b3IoJy5wZW5kaW5nJyk7XHJcbiAgICAgIHBlbmRpbmcuYXBwZW5kKGlucHV0LnBhcmVudEVsZW1lbnQpO1xyXG4gICAgICBjb25zdCBjb21wbGV0ZWQgPSBjdXJyZW50ZGl2LnF1ZXJ5U2VsZWN0b3IoJy5jb21wbGV0ZWQnKTtcclxuICAgICAgY29uc3Qgc3BhbiA9IGNvbXBsZXRlZC5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHNwYW4pO1xyXG4gICAgICBjb21wbGV0ZWRUYXNrcy0tO1xyXG4gICAgICBzcGFuLnRleHRDb250ZW50ID0gY29tcGxldGVkVGFza3M7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4geyBtb3ZlVGFzayB9O1xyXG59KSgpO1xyXG5cclxuY29uc3Qgc2V0QWN0aXZlVGFiID0gKHRhYikgPT4ge1xyXG4gIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xyXG4gIEFycmF5LmZyb20odGFicykuZm9yRWFjaCgobGkpID0+IHtcclxuICAgIGlmIChsaS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgIGxpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGlmICh0YWIuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0YWIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhY3RpdmUnKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBkaXNwbGF5UGFnZSA9IChidXR0b24pID0+IHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcclxuICBjb25zdCBnZXRkaXYgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW5hbWU9XCIke2J1dHRvbn1cIl1gKTtcclxuICBpZiAoY29udGVudC5jb250YWlucyhnZXRkaXYpKSB7XHJcbiAgICBjb25zdCBkaXZzID0gY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCcjZ3JvdXAnKTtcclxuICAgIEFycmF5LmZyb20oZGl2cykuZm9yRWFjaCgoZGl2KSA9PiB7XHJcbiAgICAgIGlmIChkaXYuZ2V0QXR0cmlidXRlKCdjbGFzcycpID09PSBnZXRkaXYuZ2V0QXR0cmlidXRlKCdjbGFzcycpKSB7XHJcbiAgICAgICAgZGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBoaWRlID0gY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCcjZ3JvdXAnKTtcclxuICAgIGhpZGUuZm9yRWFjaCgoZGl2KSA9PiB7XHJcbiAgICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSk7XHJcbiAgICBjcmVhdGVQcm9qZWN0UGFnZS5jcmVhdGVQYWdlKGJ1dHRvbik7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICBzZXRBY3RpdmVUYWIsXHJcbiAgZGlzcGxheVBhZ2UsXHJcbiAgZGlzcGxheWNvbXBsZXRlZFByb2plY3RUYXNrcyxcclxuICBkaXNwbGF5Y29tcGxldGVkVGFza3MsXHJcbn07XHJcbiIsImltcG9ydCB7IGNyZWF0ZURheVRvZG9zIH0gZnJvbSAnLi90YXNrcy1jb25zdHJ1Y3RvcnMnO1xyXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0VG9kb3MgfSBmcm9tICcuL3Rhc2tzLWNvbnN0cnVjdG9ycyc7XHJcbmltcG9ydCB7IHNldEFjdGl2ZVRhYiwgZGlzcGxheVBhZ2UgfSBmcm9tICcuL2dlbmVyYWwtZGlzcGxheS1jb250cm9sbGVyJztcclxuXHJcbmxldCBhY3RpdmVQYWdlID0gbmV3IGNyZWF0ZURheVRvZG9zKCd0b2RheScpO1xyXG5hY3RpdmVQYWdlLnByb2plY3QoKTtcclxuYWN0aXZlUGFnZS5pbnB1dHMoKTtcclxuXHJcbmNvbnN0IERlZmF1bHRhY3RpdmVCdXR0b24gPSAoKCkgPT4ge1xyXG4gIGNvbnN0IFRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGknKTtcclxuICBUb2RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVUYWIoZS50YXJnZXQpO1xyXG4gICAgZGlzcGxheVBhZ2UoVG9kYXkudGV4dENvbnRlbnQpO1xyXG4gIH0pO1xyXG59KSgpO1xyXG5cclxuY29uc3QgY3JlYXRlUHJvamVjdFBhZ2UgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGNyZWF0ZVBhZ2UgPSAoYnV0dG9uKSA9PiB7XHJcbiAgICBhY3RpdmVQYWdlID0gbmV3IGNyZWF0ZVByb2plY3RUb2RvcyhidXR0b24pO1xyXG4gICAgYWN0aXZlUGFnZS5wcm9qZWN0KCk7XHJcbiAgICBhY3RpdmVQYWdlLmlucHV0cygpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7IGNyZWF0ZVBhZ2UgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVByb2plY3RQYWdlIH07XHJcbiIsImltcG9ydCB7IGNyZWF0ZWRQcm9qZWN0cywgZGVsZXRlUHJvamVjdEZyb21BcnJheSB9IGZyb20gJy4vcHJvamVjdHMtbG9naWMnO1xyXG5pbXBvcnQgeyBjdXJyZW50ZGl2LCBjdXJyZW50UHJvamVjdCB9IGZyb20gJy4vdGFza3MtY29uc3RydWN0b3JzJztcclxuaW1wb3J0IHtcclxuICBzZXRBY3RpdmVUYWIsXHJcbiAgZGlzcGxheVBhZ2UsXHJcbiAgZGlzcGxheWNvbXBsZXRlZFByb2plY3RUYXNrcyxcclxufSBmcm9tICcuL2dlbmVyYWwtZGlzcGxheS1jb250cm9sbGVyJztcclxuXHJcbmNvbnN0IGRpc3BsYXlQcm9qZWN0cyA9ICgoKSA9PiB7XHJcbiAgY29uc3QgZXhpc3QgPSBbXTtcclxuICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xyXG4gIGNvbnN0IGNyZWF0ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xyXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmQobmV3UHJvamVjdCk7XHJcbiAgICBuZXdQcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdDtcclxuICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGRlbGV0ZUljb24uc2V0QXR0cmlidXRlKCdzcmMnLCAnL3NyYy9pbWcvaWNvbnM4LXJlbW92ZS00OC5wbmcnKTtcclxuICAgIGRlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBkZWxldGVQcm9qZWN0KGUudGFyZ2V0KTtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH0pO1xyXG4gICAgbmV3UHJvamVjdC5hcHBlbmQoZGVsZXRlSWNvbik7XHJcbiAgICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgc2V0QWN0aXZlVGFiKGUudGFyZ2V0KTtcclxuICAgICAgZGlzcGxheVBhZ2UocHJvamVjdCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaG93UHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgICBjcmVhdGVkUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICBpZiAoIWV4aXN0LmluY2x1ZGVzKHByb2plY3QudGl0bGUpKSB7XHJcbiAgICAgICAgZXhpc3QucHVzaChwcm9qZWN0LnRpdGxlKTtcclxuICAgICAgICBjcmVhdGVQcm9qZWN0KHByb2plY3QudGl0bGUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIHJldHVybiB7IHNob3dQcm9qZWN0cywgY3JlYXRlUHJvamVjdCB9O1xyXG59KSgpO1xyXG5cclxuY29uc3QgZGlzcGxheVRhc2tzID0gKCgpID0+IHtcclxuICBjb25zdCBleGlzdCA9IFtdO1xyXG5cclxuICBjb25zdCBjcmVhdGVUYXNrID0gKHByb2plY3RzVGFzaykgPT4ge1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBwZW5kaW5nID0gY3VycmVudGRpdi5xdWVyeVNlbGVjdG9yKCcucGVuZGluZycpO1xyXG4gICAgcGVuZGluZy5hcHBlbmQoZGl2KTtcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XHJcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcclxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xyXG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBkaXNwbGF5Y29tcGxldGVkUHJvamVjdFRhc2tzLm1vdmVUYXNrKGNoZWNrYm94KTtcclxuICAgIH0pO1xyXG4gICAgZGl2LmFwcGVuZChjaGVja2JveCk7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBkaXYuYXBwZW5kKHRpdGxlKTtcclxuICAgIGRpdi5hcHBlbmQoZGF0ZSk7XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHByb2plY3RzVGFzay50aXRsZTtcclxuXHJcbiAgICAvL2ZpeCBkZWxldGUgZmVhdHVyZVxyXG4gICAgY29uc3QgcmVtb3ZlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgcmVtb3ZlSWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsICcvc3JjL2ltZy9pY29uczgteGJveC14LTMwLnBuZycpO1xyXG4gICAgcmVtb3ZlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGRlbGV0ZVRhc2soZS50YXJnZXQpO1xyXG4gICAgfSk7XHJcbiAgICBkaXYuYXBwZW5kKHJlbW92ZUljb24pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNob3dQcm9qZWN0VGFza3MgPSAoKSA9PiB7XHJcbiAgICBjdXJyZW50UHJvamVjdC5mb3JFYWNoKChwcm9qZWN0c1Rhc2spID0+IHtcclxuICAgICAgaWYgKCFleGlzdC5pbmNsdWRlcyhwcm9qZWN0c1Rhc2sudGl0bGUpKSB7XHJcbiAgICAgICAgZXhpc3QucHVzaChwcm9qZWN0c1Rhc2sudGl0bGUpO1xyXG4gICAgICAgIGNyZWF0ZVRhc2socHJvamVjdHNUYXNrKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuICByZXR1cm4geyBzaG93UHJvamVjdFRhc2tzLCBjcmVhdGVUYXNrIH07XHJcbn0pKCk7XHJcblxyXG5jb25zdCBkZWxldGVQcm9qZWN0ID0gKHRpdGxlKSA9PiB7XHJcbiAgY3JlYXRlZFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgIGlmIChwcm9qZWN0LnRpdGxlID09IHRpdGxlLnBhcmVudEVsZW1lbnQudGV4dENvbnRlbnQpIHtcclxuICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgICAgIGNvbnN0IHByb2plY3REaXYgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgYFtkYXRhLW5hbWU9XCIke3Byb2plY3QudGl0bGV9XCJdYFxyXG4gICAgICApO1xyXG4gICAgICBpZiAoY29udGVudC5jb250YWlucyhwcm9qZWN0RGl2KSkge1xyXG4gICAgICAgIHByb2plY3REaXYucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgICAgZGVsZXRlUHJvamVjdEZyb21BcnJheSh0aXRsZSk7XHJcbiAgICAgIHRpdGxlLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBkaXNwbGF5UHJvamVjdHMsIGRpc3BsYXlUYXNrcyB9O1xyXG4iLCJpbXBvcnQgeyB0b2RvcyB9IGZyb20gJy4vdG9kb3MtbG9naWMnO1xyXG5pbXBvcnQgeyBkaXNwbGF5UHJvamVjdHMgfSBmcm9tICcuL3Byb2plY3QtZGlzcGxheS1jb250cm9sbGVyJztcclxuXHJcbmNvbnN0IGJ1dHRvbjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlUHJvamVjdCcpO1xyXG5idXR0b24xLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBjb25zb2xlLmxvZygnY2xpY2tlZCcpO1xyXG4gIGNyZWF0ZUlucHV0KCk7XHJcbn0pO1xyXG5cclxuY29uc3QgY3JlYXRlZFByb2plY3RzID0gW107XHJcblxyXG5jbGFzcyBwcm9qZWN0cyB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMudGFza3MgPSBbXTtcclxuICB9XHJcbiAgYWRkVGFzayh0aXRsZSwgZGVzY3JpcHRpb24pIHtcclxuICAgIGxldCB0YXNrID0gbmV3IHRvZG9zKHRpdGxlLCBkZXNjcmlwdGlvbik7XHJcbiAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKCgpID0+IHtcclxuICBjb25zdCBhZGRQcm9qZWN0ID0gKHRpdGxlKSA9PiB7XHJcbiAgICBsZXQgcHJvamVjdCA9IG5ldyBwcm9qZWN0cyh0aXRsZSk7XHJcbiAgICBjcmVhdGVkUHJvamVjdHMucHVzaChwcm9qZWN0KTtcclxuICB9O1xyXG4gIHJldHVybiB7IGFkZFByb2plY3QgfTtcclxufSkoKTtcclxuXHJcbmNvbnN0IGRlbGV0ZVByb2plY3RGcm9tQXJyYXkgPSAodGl0bGUpID0+IHtcclxuICBjcmVhdGVkUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgaWYgKHByb2plY3QudGl0bGUgPT0gdGl0bGUpIHtcclxuICAgICAgY3JlYXRlZFByb2plY3RzLnNwbGljZShjcmVhdGVkUHJvamVjdHMuaW5kZXhPZih0YXNrKSwgMSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVJbnB1dCA9ICgpID0+IHtcclxuICBidXR0b24xLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbnMnKTtcclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdjcmVhdGVJbnB1dCcpO1xyXG4gIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBvcHRpb25zLmNsYXNzTGlzdC5hZGQoJ29wdGlvbnMnKTtcclxuICBjb25zdCBjcmVhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjcmVhdGVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdjcmVhdGVCdXR0b24nKTtcclxuICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdjcmVhdGVCdXR0b24nKTtcclxuICBjcmVhdGVCdXR0b24udGV4dENvbnRlbnQgPSAnQ3JlYXRlJztcclxuICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcclxuICBkaXYuYXBwZW5kKGlucHV0KTtcclxuICBkaXYuYXBwZW5kKG9wdGlvbnMpO1xyXG4gIG9wdGlvbnMuYXBwZW5kKGNyZWF0ZUJ1dHRvbik7XHJcbiAgb3B0aW9ucy5hcHBlbmQoY2FuY2VsQnV0dG9uKTtcclxuICBjcmVhdGVCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgY2FuY2VsQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBidXR0b24xLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgb3B0aW9ucy5yZW1vdmUoKTtcclxuICAgIGlucHV0LnJlbW92ZSgpO1xyXG4gIH0pO1xyXG4gIGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBjcmVhdGVQcm9qZWN0LmFkZFByb2plY3QoaW5wdXQudmFsdWUpO1xyXG4gICAgZGlzcGxheVByb2plY3RzLnNob3dQcm9qZWN0cygpO1xyXG4gICAgYnV0dG9uMS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIG9wdGlvbnMucmVtb3ZlKCk7XHJcbiAgICBpbnB1dC5yZW1vdmUoKTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCB7IHByb2plY3RzLCBjcmVhdGVkUHJvamVjdHMsIGRlbGV0ZVByb2plY3RGcm9tQXJyYXkgfTtcclxuIiwiaW1wb3J0IHsgdGFza3MsIGRlbGV0ZXRhc2sgYXMgZGVsZXRldGFza0Zyb21BcnJheSB9IGZyb20gJy4vdG9kb3MtbG9naWMnO1xyXG5pbXBvcnQgeyBkaXNwbGF5Y29tcGxldGVkVGFza3MgfSBmcm9tICcuL2dlbmVyYWwtZGlzcGxheS1jb250cm9sbGVyJztcclxuXHJcbmNvbnN0IGRpc3BsYXlUYXNrcyA9ICgoKSA9PiB7XHJcbiAgY29uc3QgZXhpc3QgPSBbXTtcclxuXHJcbiAgY29uc3QgY3JlYXRlVGFzayA9ICh0YXNrKSA9PiB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHBlbmRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGVuZGluZycpO1xyXG4gICAgcGVuZGluZy5hcHBlbmQoZGl2KTtcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XHJcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdkYXRhLXRhc2snLCBgJHt0YXNrfWApO1xyXG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcclxuICAgIGRhdGUudGV4dENvbnRlbnQgPSAnTm8gRGF0ZSc7XHJcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGRpc3BsYXljb21wbGV0ZWRUYXNrcy5tb3ZlVGFzayhjaGVja2JveCk7XHJcbiAgICB9KTtcclxuICAgIGRpdi5hcHBlbmQoY2hlY2tib3gpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgZGl2LmFwcGVuZCh0aXRsZSk7XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2s7XHJcbiAgICBkaXYuYXBwZW5kKGRhdGUpO1xyXG4gICAgY29uc3QgcmVtb3ZlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgcmVtb3ZlSWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsICcvc3JjL2ltZy9pY29uczgteGJveC14LTMwLnBuZycpO1xyXG4gICAgcmVtb3ZlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGRlbGV0ZVRhc2soZS50YXJnZXQpO1xyXG4gICAgfSk7XHJcbiAgICBkaXYuYXBwZW5kKHJlbW92ZUljb24pO1xyXG4gIH07XHJcbiAgY29uc3Qgc2hvd1Rhc2tzID0gKCkgPT4ge1xyXG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICBpZiAoIWV4aXN0LmluY2x1ZGVzKHRhc2sudGl0bGUpKSB7XHJcbiAgICAgICAgZXhpc3QucHVzaCh0YXNrLnRpdGxlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrLnRpdGxlKTtcclxuICAgICAgICBjcmVhdGVUYXNrKHRhc2sudGl0bGUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIHJldHVybiB7IHNob3dUYXNrcywgY3JlYXRlVGFzayB9O1xyXG59KSgpO1xyXG5cclxuY29uc3QgZGVsZXRlVGFzayA9IChpdGVtKSA9PiB7XHJcbiAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgY29uc3QgdGFza0RpdiA9IGl0ZW0ucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzaycpO1xyXG4gICAgaWYgKHRhc2sudGl0bGUgPT0gdGFza0Rpdikge1xyXG4gICAgICBpdGVtLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgIGRlbGV0ZXRhc2tGcm9tQXJyYXkodGFza0Rpdik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBkaXNwbGF5VGFza3MgfTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlVGFza3MgfSBmcm9tICcuL3RvZG9zLWxvZ2ljJztcclxuaW1wb3J0IHsgZGlzcGxheVRhc2tzIH0gZnJvbSAnLi90YXNrLWRpc3BsYXktY29udHJvbGxlcic7XHJcbmltcG9ydCB7IGRpc3BsYXlUYXNrcyBhcyBkaXNwbGF5UHJvamVjdFRhc2tzIH0gZnJvbSAnLi9wcm9qZWN0LWRpc3BsYXktY29udHJvbGxlcic7XHJcbmltcG9ydCB7IGNyZWF0ZWRQcm9qZWN0cyB9IGZyb20gJy4vcHJvamVjdHMtbG9naWMnO1xyXG5cclxuLy9jcmVhdGUgbXV0aXBsZSBwcm9qZWN0c1xyXG5cclxubGV0IGN1cnJlbnRQcm9qZWN0ID0gJyc7XHJcbmxldCBjdXJyZW50ZGl2ID0gJyc7XHJcblxyXG5jbGFzcyBjcmVhdGVQcm9qZWN0VG9kb3Mge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgfVxyXG5cclxuICBwcm9qZWN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcblxyXG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcGFnZS5jbGFzc05hbWUgPSBgJHt0aGlzLnRpdGxlfWA7XHJcbiAgICBwYWdlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZ3JvdXAnKTtcclxuICAgIHBhZ2Uuc2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnLCBgJHt0aGlzLnRpdGxlfWApO1xyXG4gICAgY29udGVudC5hcHBlbmQocGFnZSk7XHJcblxyXG4gICAgY29uc3QgcGVuZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcGVuZGluZy5jbGFzc0xpc3QuYWRkKCdwZW5kaW5nJyk7XHJcbiAgICBwYWdlLmFwcGVuZChwZW5kaW5nKTtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIHBlbmRpbmcuYXBwZW5kKHRpdGxlKTtcclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGhpcy50aXRsZTtcclxuXHJcbiAgICBjb25zdCBjb21wbGV0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbXBsZXRlZC5jbGFzc05hbWUgPSAncGVuZGluZyBjb21wbGV0ZWQnO1xyXG4gICAgcGFnZS5hcHBlbmQoY29tcGxldGVkKTtcclxuXHJcbiAgICBjb25zdCBjb21wbGV0ZWR0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBjb21wbGV0ZWQuYXBwZW5kKGNvbXBsZXRlZHRpdGxlKTtcclxuICAgIGNvbXBsZXRlZHRpdGxlLnRleHRDb250ZW50ID0gJ0NvbXBsZXRlZCc7XHJcbiAgICBjb25zdCBjb3VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgY29tcGxldGVkdGl0bGUuYXBwZW5kKGNvdW50ZXIpO1xyXG4gICAgY291bnRlci5jbGFzc0xpc3QuYWRkKCdjb3VudGVyJyk7XHJcbiAgICBjb3VudGVyLnRleHRDb250ZW50ID0gMDtcclxuICB9O1xyXG5cclxuICBpbnB1dHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtbmFtZT1cIiR7dGhpcy50aXRsZX1cIl1gKTtcclxuICAgIGNvbnN0IGFkZFRhc2tCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhZGRUYXNrQnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzaycpO1xyXG4gICAgcGFnZS5hcHBlbmQoYWRkVGFza0J1dHRvbnMpO1xyXG5cclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnZGF0YS1pbnB1dCcsIGAke3RoaXMudGl0bGV9YCk7XHJcbiAgICBhZGRUYXNrQnV0dG9ucy5hcHBlbmQoaW5wdXQpO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdBZGQgYSBwcm9qZWN0IHRhc2sgaGVyZScpO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkJyk7XHJcbiAgICBhZGRUYXNrQnV0dG9ucy5hcHBlbmQoYnV0dG9uKTtcclxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBjcmVhdGVkUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9qZWN0LnRpdGxlID09IHBhZ2UuZ2V0QXR0cmlidXRlKCdjbGFzcycpKSB7XHJcbiAgICAgICAgICBwcm9qZWN0LmFkZFRhc2soaW5wdXQudmFsdWUsICdzb21lIHJhbmRvbWUnKTtcclxuICAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdC50YXNrcztcclxuICAgICAgICAgIGN1cnJlbnRkaXYgPSBwYWdlO1xyXG4gICAgICAgICAgZGlzcGxheVByb2plY3RUYXNrcy5zaG93UHJvamVjdFRhc2tzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH07XHJcbn1cclxuXHJcbmNsYXNzIGNyZWF0ZURheVRvZG9zIGV4dGVuZHMgY3JlYXRlUHJvamVjdFRvZG9zIHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xyXG4gICAgc3VwZXIodGl0bGUpO1xyXG4gICAgdGhpcy50aXRsZSA9ICdUb2RheSc7XHJcbiAgfVxyXG5cclxuICBpbnB1dHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGhpcy50aXRsZX1gKTtcclxuICAgIGNvbnN0IGFkZFRhc2tCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhZGRUYXNrQnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzaycpO1xyXG4gICAgcGFnZS5hcHBlbmQoYWRkVGFza0J1dHRvbnMpO1xyXG5cclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0aGlzLnRpdGxlfWApO1xyXG4gICAgYWRkVGFza0J1dHRvbnMuYXBwZW5kKGlucHV0KTtcclxuICAgIGNvbnN0IHZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy50aXRsZX1gKTtcclxuXHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZCcpO1xyXG4gICAgYWRkVGFza0J1dHRvbnMuYXBwZW5kKGJ1dHRvbik7XHJcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgY3JlYXRlVGFza3MuYWRkVGFzayh2YWx1ZS52YWx1ZSwgJ3NvbWUgcmFuZG9tIHdvcmRzJyk7XHJcbiAgICAgIGRpc3BsYXlUYXNrcy5zaG93VGFza3MoKTtcclxuICAgIH0pO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVByb2plY3RUb2RvcywgY3JlYXRlRGF5VG9kb3MsIGN1cnJlbnRQcm9qZWN0LCBjdXJyZW50ZGl2IH07XHJcbiIsImltcG9ydCB7IGRpc3BsYXlUYXNrcyB9IGZyb20gJy4vdGFzay1kaXNwbGF5LWNvbnRyb2xsZXInO1xyXG5jb25zdCB0YXNrcyA9IFtdO1xyXG5cclxuY2xhc3MgdG9kb3Mge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbikge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgY3JlYXRlVGFza3MgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGFkZFRhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uKSA9PiB7XHJcbiAgICBsZXQgdGFzayA9IG5ldyB0b2Rvcyh0aXRsZSwgZGVzY3JpcHRpb24pO1xyXG4gICAgdGFza3MucHVzaCh0YXNrKTtcclxuICB9O1xyXG4gIHJldHVybiB7IGFkZFRhc2sgfTtcclxufSkoKTtcclxuXHJcbmNvbnN0IGRlbGV0ZXRhc2sgPSAoaXRlbSkgPT4ge1xyXG4gIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgIGlmICh0YXNrLnRpdGxlID09IGl0ZW0pIHtcclxuICAgICAgdGFza3Muc3BsaWNlKHRhc2tzLmluZGV4T2YodGFzayksIDEpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgdG9kb3MsIGNyZWF0ZVRhc2tzLCB0YXNrcywgZGVsZXRldGFzayB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9