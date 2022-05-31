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

//here is the problem you might have to create a separate module because in project display you are putting the whole object
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
    (0,_general_display_controller__WEBPACK_IMPORTED_MODULE_1__.displayPage)(Today.textContent);
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
/* harmony export */   "displayProjects": () => (/* binding */ displayProjects),
/* harmony export */   "displayTasks": () => (/* binding */ displayTasks),
/* harmony export */   "projectLoader": () => (/* binding */ projectLoader)
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
      (0,_general_display_controller__WEBPACK_IMPORTED_MODULE_2__.displayPage)(project);
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
    localStorage.setItem(`${this.title}`, JSON.stringify(this.tasks));
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

// function projectMethods(data) {
//   this.title = data.title;
//   this.tasks = [data.task];
// }

// projectMethods.prototype.addTask = function (title, description) {
//   let task = new todos(title, description);
//   this.tasks.push(task);
//   localStorage.setItem(`${this.title}`, JSON.stringify(this.tasks));
// };




/***/ }),

/***/ "./src/task-display-controller.js":
/*!****************************************!*\
  !*** ./src/task-display-controller.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayTasks": () => (/* binding */ displayTasks),
/* harmony export */   "todayLoader": () => (/* binding */ todayLoader)
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





//create mutiple projects

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDd0Q7Ozs7Ozs7VUN2Q3hEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9nZW5lcmFsLWRpc3BsYXktY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdC1kaXNwbGF5LWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy1sb2dpYy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2stZGlzcGxheS1jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFza3MtY29uc3RydWN0b3JzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kb3MtbG9naWMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0YXNrcywgZGVsZXRldGFzayBhcyBkZWxldGV0YXNrRnJvbUFycmF5IH0gZnJvbSAnLi90b2Rvcy1sb2dpYyc7XHJcblxyXG5pbXBvcnQgeyBjdXJyZW50UHJvamVjdCwgY3VycmVudGRpdiB9IGZyb20gJy4vdGFza3MtY29uc3RydWN0b3JzJztcclxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdFBhZ2UgfSBmcm9tICcuL2luZGV4JztcclxuXHJcbmNvbnN0IGRpc3BsYXljb21wbGV0ZWRUYXNrcyA9ICgoKSA9PiB7XHJcbiAgbGV0IGNvbXBsZXRlZFRhc2tzID0gMDtcclxuICBjb25zdCBtb3ZlVGFzayA9IChpbnB1dCkgPT4ge1xyXG4gICAgaWYgKGlucHV0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT0gJ3BlbmRpbmcnKSB7XHJcbiAgICAgIGNvbnN0IGNvbXBsZXRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wbGV0ZWQnKTtcclxuICAgICAgY29tcGxldGVkLmFwcGVuZChpbnB1dC5wYXJlbnRFbGVtZW50KTtcclxuICAgICAgY29uc3Qgc3BhbiA9IGNvbXBsZXRlZC5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHNwYW4pO1xyXG4gICAgICBjb21wbGV0ZWRUYXNrcysrO1xyXG4gICAgICBzcGFuLnRleHRDb250ZW50ID0gY29tcGxldGVkVGFza3M7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBwZW5kaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBlbmRpbmcnKTtcclxuICAgICAgcGVuZGluZy5hcHBlbmQoaW5wdXQucGFyZW50RWxlbWVudCk7XHJcbiAgICAgIGNvbnN0IGNvbXBsZXRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wbGV0ZWQnKTtcclxuICAgICAgY29uc3Qgc3BhbiA9IGNvbXBsZXRlZC5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHNwYW4pO1xyXG4gICAgICBjb21wbGV0ZWRUYXNrcy0tO1xyXG4gICAgICBzcGFuLnRleHRDb250ZW50ID0gY29tcGxldGVkVGFza3M7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4geyBtb3ZlVGFzayB9O1xyXG59KSgpO1xyXG5cclxuY29uc3QgZGlzcGxheWNvbXBsZXRlZFByb2plY3RUYXNrcyA9ICgoKSA9PiB7XHJcbiAgbGV0IGNvbXBsZXRlZFRhc2tzID0gMDtcclxuICBjb25zdCBtb3ZlVGFzayA9IChpbnB1dCkgPT4ge1xyXG4gICAgaWYgKGlucHV0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT0gJ3BlbmRpbmcnKSB7XHJcbiAgICAgIGNvbnN0IGNvbXBsZXRlZCA9IGN1cnJlbnRkaXYucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlZCcpO1xyXG4gICAgICBjb25zb2xlLmxvZyhjdXJyZW50ZGl2KTtcclxuICAgICAgY29tcGxldGVkLmFwcGVuZChpbnB1dC5wYXJlbnRFbGVtZW50KTtcclxuICAgICAgY29uc3Qgc3BhbiA9IGNvbXBsZXRlZC5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHNwYW4pO1xyXG4gICAgICBjb21wbGV0ZWRUYXNrcysrO1xyXG4gICAgICBzcGFuLnRleHRDb250ZW50ID0gY29tcGxldGVkVGFza3M7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBwZW5kaW5nID0gY3VycmVudGRpdi5xdWVyeVNlbGVjdG9yKCcucGVuZGluZycpO1xyXG4gICAgICBwZW5kaW5nLmFwcGVuZChpbnB1dC5wYXJlbnRFbGVtZW50KTtcclxuICAgICAgY29uc3QgY29tcGxldGVkID0gY3VycmVudGRpdi5xdWVyeVNlbGVjdG9yKCcuY29tcGxldGVkJyk7XHJcbiAgICAgIGNvbnN0IHNwYW4gPSBjb21wbGV0ZWQucXVlcnlTZWxlY3Rvcignc3BhbicpO1xyXG4gICAgICBjb25zb2xlLmxvZyhzcGFuKTtcclxuICAgICAgY29tcGxldGVkVGFza3MtLTtcclxuICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGNvbXBsZXRlZFRhc2tzO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIHsgbW92ZVRhc2sgfTtcclxufSkoKTtcclxuXHJcbmNvbnN0IHNldEFjdGl2ZVRhYiA9ICh0YWIpID0+IHtcclxuICBjb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcclxuICBBcnJheS5mcm9tKHRhYnMpLmZvckVhY2goKGxpKSA9PiB7XHJcbiAgICBpZiAobGkuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICBsaS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICB9KTtcclxuICBpZiAodGFiLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGFiLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWN0aXZlJyk7XHJcbiAgfVxyXG59O1xyXG5cclxuLy9oZXJlIGlzIHRoZSBwcm9ibGVtIHlvdSBtaWdodCBoYXZlIHRvIGNyZWF0ZSBhIHNlcGFyYXRlIG1vZHVsZSBiZWNhdXNlIGluIHByb2plY3QgZGlzcGxheSB5b3UgYXJlIHB1dHRpbmcgdGhlIHdob2xlIG9iamVjdFxyXG5jb25zdCBkaXNwbGF5UGFnZSA9IChidXR0b24pID0+IHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcclxuICBjb25zdCBnZXRkaXYgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW5hbWU9XCIke2J1dHRvbn1cIl1gKTtcclxuICBpZiAoY29udGVudC5jb250YWlucyhnZXRkaXYpKSB7XHJcbiAgICBjb25zdCBkaXZzID0gY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCcjZ3JvdXAnKTtcclxuICAgIEFycmF5LmZyb20oZGl2cykuZm9yRWFjaCgoZGl2KSA9PiB7XHJcbiAgICAgIGlmIChkaXYuZ2V0QXR0cmlidXRlKCdjbGFzcycpID09PSBnZXRkaXYuZ2V0QXR0cmlidXRlKCdjbGFzcycpKSB7XHJcbiAgICAgICAgZGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBoaWRlID0gY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCcjZ3JvdXAnKTtcclxuICAgIGhpZGUuZm9yRWFjaCgoZGl2KSA9PiB7XHJcbiAgICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY3JlYXRlUHJvamVjdFBhZ2UuY3JlYXRlUGFnZShidXR0b24pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgc2V0QWN0aXZlVGFiLFxyXG4gIGRpc3BsYXlQYWdlLFxyXG4gIGRpc3BsYXljb21wbGV0ZWRQcm9qZWN0VGFza3MsXHJcbiAgZGlzcGxheWNvbXBsZXRlZFRhc2tzLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVEYXlUb2RvcyB9IGZyb20gJy4vdGFza3MtY29uc3RydWN0b3JzJztcclxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdFRvZG9zIH0gZnJvbSAnLi90YXNrcy1jb25zdHJ1Y3RvcnMnO1xyXG5pbXBvcnQgeyBzZXRBY3RpdmVUYWIsIGRpc3BsYXlQYWdlIH0gZnJvbSAnLi9nZW5lcmFsLWRpc3BsYXktY29udHJvbGxlcic7XHJcbmltcG9ydCB7IHRvZGF5TG9hZGVyIH0gZnJvbSAnLi90YXNrLWRpc3BsYXktY29udHJvbGxlcic7XHJcbmltcG9ydCB7IHByb2plY3RMb2FkZXIgfSBmcm9tICcuL3Byb2plY3QtZGlzcGxheS1jb250cm9sbGVyJztcclxuXHJcbmxldCBhY3RpdmVQYWdlID0gbmV3IGNyZWF0ZURheVRvZG9zKCd0b2RheScpO1xyXG5hY3RpdmVQYWdlLnByb2plY3QoKTtcclxuYWN0aXZlUGFnZS5pbnB1dHMoKTtcclxudG9kYXlMb2FkZXIoKTtcclxucHJvamVjdExvYWRlcigpO1xyXG5cclxuY29uc3QgRGVmYXVsdGFjdGl2ZUJ1dHRvbiA9ICgoKSA9PiB7XHJcbiAgY29uc3QgVG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaScpO1xyXG4gIFRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIHNldEFjdGl2ZVRhYihlLnRhcmdldCk7XHJcbiAgICBkaXNwbGF5UGFnZShUb2RheS50ZXh0Q29udGVudCk7XHJcbiAgfSk7XHJcbn0pKCk7XHJcblxyXG5jb25zdCBjcmVhdGVQcm9qZWN0UGFnZSA9ICgoKSA9PiB7XHJcbiAgY29uc3QgY3JlYXRlUGFnZSA9IChidXR0b24pID0+IHtcclxuICAgIGFjdGl2ZVBhZ2UgPSBuZXcgY3JlYXRlUHJvamVjdFRvZG9zKGJ1dHRvbi50aXRsZSk7XHJcbiAgICBhY3RpdmVQYWdlLnByb2plY3QoKTtcclxuICAgIGFjdGl2ZVBhZ2UuaW5wdXRzKCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHsgY3JlYXRlUGFnZSB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdFBhZ2UgfTtcclxuIiwiaW1wb3J0IHtcclxuICBjcmVhdGVkUHJvamVjdHMsXHJcbiAgZGVsZXRlUHJvamVjdEZyb21BcnJheSxcclxuICBzYXZlZCxcclxufSBmcm9tICcuL3Byb2plY3RzLWxvZ2ljJztcclxuaW1wb3J0IHsgY3VycmVudGRpdiwgY3VycmVudFByb2plY3QgfSBmcm9tICcuL3Rhc2tzLWNvbnN0cnVjdG9ycyc7XHJcbmltcG9ydCB7XHJcbiAgc2V0QWN0aXZlVGFiLFxyXG4gIGRpc3BsYXlQYWdlLFxyXG4gIGRpc3BsYXljb21wbGV0ZWRQcm9qZWN0VGFza3MsXHJcbn0gZnJvbSAnLi9nZW5lcmFsLWRpc3BsYXktY29udHJvbGxlcic7XHJcblxyXG5jb25zdCBkaXNwbGF5UHJvamVjdHMgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGV4aXN0ID0gW107XHJcbiAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcclxuICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcclxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgcHJvamVjdExpc3QuYXBwZW5kKG5ld1Byb2plY3QpO1xyXG4gICAgbmV3UHJvamVjdC50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XHJcbiAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBkZWxldGVJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgJy9zcmMvaW1nL2ljb25zOC1yZW1vdmUtNDgucG5nJyk7XHJcbiAgICBkZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgZGVsZXRlUHJvamVjdChlLnRhcmdldCk7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9KTtcclxuICAgIG5ld1Byb2plY3QuYXBwZW5kKGRlbGV0ZUljb24pO1xyXG4gICAgbmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIHNldEFjdGl2ZVRhYihlLnRhcmdldCk7XHJcbiAgICAgIC8vdGhpcyBwcm9ibGVtIHNlZSBnZW5yZWFsIGRpc3BsYXlcclxuICAgICAgY29uc29sZS5sb2cocHJvamVjdC50aXRsZSk7XHJcbiAgICAgIGRpc3BsYXlQYWdlKHByb2plY3QpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2hvd1Byb2plY3RzID0gKCkgPT4ge1xyXG4gICAgY3JlYXRlZFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgaWYgKCFleGlzdC5pbmNsdWRlcyhwcm9qZWN0LnRpdGxlKSkge1xyXG4gICAgICAgIGV4aXN0LnB1c2gocHJvamVjdC50aXRsZSk7XHJcbiAgICAgICAgY3JlYXRlUHJvamVjdChwcm9qZWN0KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuICByZXR1cm4geyBzaG93UHJvamVjdHMsIGNyZWF0ZVByb2plY3QgfTtcclxufSkoKTtcclxuXHJcbmNvbnN0IGRpc3BsYXlUYXNrcyA9ICgoKSA9PiB7XHJcbiAgY29uc3QgZXhpc3QgPSBbXTtcclxuXHJcbiAgY29uc3QgY3JlYXRlVGFzayA9IChwcm9qZWN0c1Rhc2spID0+IHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgcGVuZGluZyA9IGN1cnJlbnRkaXYucXVlcnlTZWxlY3RvcignLnBlbmRpbmcnKTtcclxuICAgIHBlbmRpbmcuYXBwZW5kKGRpdik7XHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xyXG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcclxuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgZGlzcGxheWNvbXBsZXRlZFByb2plY3RUYXNrcy5tb3ZlVGFzayhjaGVja2JveCk7XHJcbiAgICB9KTtcclxuICAgIGRpdi5hcHBlbmQoY2hlY2tib3gpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgZGl2LmFwcGVuZCh0aXRsZSk7XHJcbiAgICBkaXYuYXBwZW5kKGRhdGUpO1xyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0c1Rhc2sudGl0bGU7XHJcblxyXG4gICAgLy9maXggZGVsZXRlIGZlYXR1cmVcclxuICAgIGNvbnN0IHJlbW92ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIHJlbW92ZUljb24uc2V0QXR0cmlidXRlKCdzcmMnLCAnL3NyYy9pbWcvaWNvbnM4LXhib3gteC0zMC5wbmcnKTtcclxuICAgIHJlbW92ZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICBkZWxldGVUYXNrKGUudGFyZ2V0KTtcclxuICAgIH0pO1xyXG4gICAgZGl2LmFwcGVuZChyZW1vdmVJY29uKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaG93UHJvamVjdFRhc2tzID0gKCkgPT4ge1xyXG4gICAgY3VycmVudFByb2plY3QuZm9yRWFjaCgocHJvamVjdHNUYXNrKSA9PiB7XHJcbiAgICAgIGlmICghZXhpc3QuaW5jbHVkZXMocHJvamVjdHNUYXNrLnRpdGxlKSkge1xyXG4gICAgICAgIGV4aXN0LnB1c2gocHJvamVjdHNUYXNrLnRpdGxlKTtcclxuICAgICAgICBjcmVhdGVUYXNrKHByb2plY3RzVGFzayk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcbiAgcmV0dXJuIHsgc2hvd1Byb2plY3RUYXNrcywgY3JlYXRlVGFzayB9O1xyXG59KSgpO1xyXG5cclxuY29uc3QgZGVsZXRlUHJvamVjdCA9ICh0aXRsZSkgPT4ge1xyXG4gIGNyZWF0ZWRQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICBpZiAocHJvamVjdC50aXRsZSA9PSB0aXRsZS5wYXJlbnRFbGVtZW50LnRleHRDb250ZW50KSB7XHJcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG4gICAgICBjb25zdCBwcm9qZWN0RGl2ID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIGBbZGF0YS1uYW1lPVwiJHtwcm9qZWN0LnRpdGxlfVwiXWBcclxuICAgICAgKTtcclxuICAgICAgaWYgKGNvbnRlbnQuY29udGFpbnMocHJvamVjdERpdikpIHtcclxuICAgICAgICBwcm9qZWN0RGl2LnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIGRlbGV0ZVByb2plY3RGcm9tQXJyYXkodGl0bGUpO1xyXG4gICAgICB0aXRsZS5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgcHJvamVjdExvYWRlciA9ICgpID0+IHtcclxuICBpZiAoc2F2ZWQgIT0gbnVsbCkge1xyXG4gICAgc2F2ZWQuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICBkaXNwbGF5UHJvamVjdHMuY3JlYXRlUHJvamVjdCh0YXNrKTtcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IGRpc3BsYXlQcm9qZWN0cywgZGlzcGxheVRhc2tzLCBwcm9qZWN0TG9hZGVyIH07XHJcbiIsImltcG9ydCB7IHRvZG9zIH0gZnJvbSAnLi90b2Rvcy1sb2dpYyc7XHJcbmltcG9ydCB7IGRpc3BsYXlQcm9qZWN0cyB9IGZyb20gJy4vcHJvamVjdC1kaXNwbGF5LWNvbnRyb2xsZXInO1xyXG5cclxuY29uc3QgYnV0dG9uMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGVQcm9qZWN0Jyk7XHJcbmJ1dHRvbjEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdjbGlja2VkJyk7XHJcbiAgY3JlYXRlSW5wdXQoKTtcclxufSk7XHJcblxyXG5jb25zdCBjcmVhdGVkUHJvamVjdHMgPSBbXTtcclxubGV0IHNhdmVkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSk7XHJcblxyXG5jbGFzcyBwcm9qZWN0cyB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMudGFza3MgPSBbXTtcclxuICB9XHJcbiAgYWRkVGFzayh0aXRsZSwgZGVzY3JpcHRpb24pIHtcclxuICAgIGxldCB0YXNrID0gbmV3IHRvZG9zKHRpdGxlLCBkZXNjcmlwdGlvbik7XHJcbiAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHt0aGlzLnRpdGxlfWAsIEpTT04uc3RyaW5naWZ5KHRoaXMudGFza3MpKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHNhdmV0b0xvYWNhbCA9IChkYXRhKSA9PiB7XHJcbiAgaWYgKHNhdmVkID09IG51bGwpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGNyZWF0ZWRQcm9qZWN0cykpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzYXZlZC5wdXNoKGRhdGEpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoc2F2ZWQpKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKCgpID0+IHtcclxuICBjb25zdCBhZGRQcm9qZWN0ID0gKHRpdGxlKSA9PiB7XHJcbiAgICBsZXQgcHJvamVjdCA9IG5ldyBwcm9qZWN0cyh0aXRsZSk7XHJcbiAgICBjcmVhdGVkUHJvamVjdHMucHVzaChwcm9qZWN0KTtcclxuICAgIHNhdmV0b0xvYWNhbChwcm9qZWN0KTtcclxuICB9O1xyXG4gIHJldHVybiB7IGFkZFByb2plY3QgfTtcclxufSkoKTtcclxuXHJcbmNvbnN0IGRlbGV0ZVByb2plY3RGcm9tQXJyYXkgPSAodGl0bGUpID0+IHtcclxuICBjcmVhdGVkUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgaWYgKHByb2plY3QudGl0bGUgPT0gdGl0bGUpIHtcclxuICAgICAgY3JlYXRlZFByb2plY3RzLnNwbGljZShjcmVhdGVkUHJvamVjdHMuaW5kZXhPZih0YXNrKSwgMSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVJbnB1dCA9ICgpID0+IHtcclxuICBidXR0b24xLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbnMnKTtcclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdjcmVhdGVJbnB1dCcpO1xyXG4gIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBvcHRpb25zLmNsYXNzTGlzdC5hZGQoJ29wdGlvbnMnKTtcclxuICBjb25zdCBjcmVhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjcmVhdGVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdjcmVhdGVCdXR0b24nKTtcclxuICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdjcmVhdGVCdXR0b24nKTtcclxuICBjcmVhdGVCdXR0b24udGV4dENvbnRlbnQgPSAnQ3JlYXRlJztcclxuICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcclxuICBkaXYuYXBwZW5kKGlucHV0KTtcclxuICBkaXYuYXBwZW5kKG9wdGlvbnMpO1xyXG4gIG9wdGlvbnMuYXBwZW5kKGNyZWF0ZUJ1dHRvbik7XHJcbiAgb3B0aW9ucy5hcHBlbmQoY2FuY2VsQnV0dG9uKTtcclxuICBjcmVhdGVCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgY2FuY2VsQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBidXR0b24xLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgb3B0aW9ucy5yZW1vdmUoKTtcclxuICAgIGlucHV0LnJlbW92ZSgpO1xyXG4gIH0pO1xyXG4gIGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBjcmVhdGVQcm9qZWN0LmFkZFByb2plY3QoaW5wdXQudmFsdWUpO1xyXG4gICAgZGlzcGxheVByb2plY3RzLnNob3dQcm9qZWN0cygpO1xyXG4gICAgYnV0dG9uMS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIG9wdGlvbnMucmVtb3ZlKCk7XHJcbiAgICBpbnB1dC5yZW1vdmUoKTtcclxuICB9KTtcclxufTtcclxuXHJcbi8vIGZ1bmN0aW9uIHByb2plY3RNZXRob2RzKGRhdGEpIHtcclxuLy8gICB0aGlzLnRpdGxlID0gZGF0YS50aXRsZTtcclxuLy8gICB0aGlzLnRhc2tzID0gW2RhdGEudGFza107XHJcbi8vIH1cclxuXHJcbi8vIHByb2plY3RNZXRob2RzLnByb3RvdHlwZS5hZGRUYXNrID0gZnVuY3Rpb24gKHRpdGxlLCBkZXNjcmlwdGlvbikge1xyXG4vLyAgIGxldCB0YXNrID0gbmV3IHRvZG9zKHRpdGxlLCBkZXNjcmlwdGlvbik7XHJcbi8vICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xyXG4vLyAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3RoaXMudGl0bGV9YCwgSlNPTi5zdHJpbmdpZnkodGhpcy50YXNrcykpO1xyXG4vLyB9O1xyXG5cclxuZXhwb3J0IHsgcHJvamVjdHMsIGNyZWF0ZWRQcm9qZWN0cywgZGVsZXRlUHJvamVjdEZyb21BcnJheSwgc2F2ZWQgfTtcclxuIiwiaW1wb3J0IHsgdGFza3MsIGRlbGV0ZXRhc2sgYXMgZGVsZXRldGFza0Zyb21BcnJheSwgc2F2ZWQgfSBmcm9tICcuL3RvZG9zLWxvZ2ljJztcclxuaW1wb3J0IHsgZGlzcGxheWNvbXBsZXRlZFRhc2tzIH0gZnJvbSAnLi9nZW5lcmFsLWRpc3BsYXktY29udHJvbGxlcic7XHJcblxyXG5jb25zdCBkaXNwbGF5VGFza3MgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGV4aXN0ID0gW107XHJcbiAgY29uc3QgY3JlYXRlVGFzayA9ICh0YXNrKSA9PiB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHBlbmRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGVuZGluZycpO1xyXG4gICAgcGVuZGluZy5hcHBlbmQoZGl2KTtcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XHJcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdkYXRhLXRhc2snLCBgJHt0YXNrLnRpdGxlfWApO1xyXG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcclxuICAgIGRhdGUudGV4dENvbnRlbnQgPSAnTm8gRGF0ZSc7XHJcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGRpc3BsYXljb21wbGV0ZWRUYXNrcy5tb3ZlVGFzayhjaGVja2JveCk7XHJcbiAgICB9KTtcclxuICAgIGRpdi5hcHBlbmQoY2hlY2tib3gpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgZGl2LmFwcGVuZCh0aXRsZSk7XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XHJcbiAgICBkaXYuYXBwZW5kKGRhdGUpO1xyXG4gICAgY29uc3QgcmVtb3ZlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgcmVtb3ZlSWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsICcvc3JjL2ltZy9pY29uczgteGJveC14LTMwLnBuZycpO1xyXG4gICAgcmVtb3ZlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGRlbGV0ZVRhc2soZS50YXJnZXQpO1xyXG4gICAgfSk7XHJcbiAgICBkaXYuYXBwZW5kKHJlbW92ZUljb24pO1xyXG4gIH07XHJcbiAgY29uc3Qgc2hvd1Rhc2tzID0gKCkgPT4ge1xyXG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICBpZiAoIWV4aXN0LmluY2x1ZGVzKHRhc2sudGl0bGUpKSB7XHJcbiAgICAgICAgZXhpc3QucHVzaCh0YXNrLnRpdGxlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrLnRpdGxlKTtcclxuICAgICAgICBjcmVhdGVUYXNrKHRhc2spO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIHJldHVybiB7IHNob3dUYXNrcywgY3JlYXRlVGFzayB9O1xyXG59KSgpO1xyXG5cclxuY29uc3QgZGVsZXRlVGFzayA9IChpdGVtKSA9PiB7XHJcbiAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgY29uc3QgdGFza0RpdiA9IGl0ZW0ucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzaycpO1xyXG4gICAgaWYgKHRhc2sudGl0bGUgPT0gdGFza0Rpdikge1xyXG4gICAgICBpdGVtLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgIGRlbGV0ZXRhc2tGcm9tQXJyYXkodGFza0Rpdik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCB0b2RheUxvYWRlciA9ICgpID0+IHtcclxuICBpZiAoc2F2ZWQgIT0gbnVsbCkge1xyXG4gICAgc2F2ZWQuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICBkaXNwbGF5VGFza3MuY3JlYXRlVGFzayh0YXNrKTtcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IGRpc3BsYXlUYXNrcywgdG9kYXlMb2FkZXIgfTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlVGFza3MgfSBmcm9tICcuL3RvZG9zLWxvZ2ljJztcclxuaW1wb3J0IHsgZGlzcGxheVRhc2tzIH0gZnJvbSAnLi90YXNrLWRpc3BsYXktY29udHJvbGxlcic7XHJcbmltcG9ydCB7IGRpc3BsYXlUYXNrcyBhcyBkaXNwbGF5UHJvamVjdFRhc2tzIH0gZnJvbSAnLi9wcm9qZWN0LWRpc3BsYXktY29udHJvbGxlcic7XHJcbmltcG9ydCB7IGNyZWF0ZWRQcm9qZWN0cyB9IGZyb20gJy4vcHJvamVjdHMtbG9naWMnO1xyXG5cclxuLy9jcmVhdGUgbXV0aXBsZSBwcm9qZWN0c1xyXG5cclxubGV0IGN1cnJlbnRQcm9qZWN0ID0gJyc7XHJcbmxldCBjdXJyZW50ZGl2ID0gJyc7XHJcblxyXG5jbGFzcyBjcmVhdGVQcm9qZWN0VG9kb3Mge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgfVxyXG5cclxuICBwcm9qZWN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzKTtcclxuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHBhZ2UuY2xhc3NOYW1lID0gYCR7dGhpcy50aXRsZX1gO1xyXG4gICAgcGFnZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2dyb3VwJyk7XHJcbiAgICBwYWdlLnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgYCR7dGhpcy50aXRsZX1gKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kKHBhZ2UpO1xyXG5cclxuICAgIGNvbnN0IHBlbmRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHBlbmRpbmcuY2xhc3NMaXN0LmFkZCgncGVuZGluZycpO1xyXG4gICAgcGFnZS5hcHBlbmQocGVuZGluZyk7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBwZW5kaW5nLmFwcGVuZCh0aXRsZSk7XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRoaXMudGl0bGU7XHJcblxyXG4gICAgY29uc3QgY29tcGxldGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb21wbGV0ZWQuY2xhc3NOYW1lID0gJ3BlbmRpbmcgY29tcGxldGVkJztcclxuICAgIHBhZ2UuYXBwZW5kKGNvbXBsZXRlZCk7XHJcblxyXG4gICAgY29uc3QgY29tcGxldGVkdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgY29tcGxldGVkLmFwcGVuZChjb21wbGV0ZWR0aXRsZSk7XHJcbiAgICBjb21wbGV0ZWR0aXRsZS50ZXh0Q29udGVudCA9ICdDb21wbGV0ZWQnO1xyXG4gICAgY29uc3QgY291bnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGNvbXBsZXRlZHRpdGxlLmFwcGVuZChjb3VudGVyKTtcclxuICAgIGNvdW50ZXIuY2xhc3NMaXN0LmFkZCgnY291bnRlcicpO1xyXG4gICAgY291bnRlci50ZXh0Q29udGVudCA9IDA7XHJcbiAgfTtcclxuXHJcbiAgaW5wdXRzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW5hbWU9XCIke3RoaXMudGl0bGV9XCJdYCk7XHJcbiAgICBjb25zdCBhZGRUYXNrQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYWRkVGFza0J1dHRvbnMuY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2snKTtcclxuICAgIHBhZ2UuYXBwZW5kKGFkZFRhc2tCdXR0b25zKTtcclxuXHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5wdXQnLCBgJHt0aGlzLnRpdGxlfWApO1xyXG4gICAgYWRkVGFza0J1dHRvbnMuYXBwZW5kKGlucHV0KTtcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnQWRkIGEgcHJvamVjdCB0YXNrIGhlcmUnKTtcclxuXHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZCcpO1xyXG4gICAgYWRkVGFza0J1dHRvbnMuYXBwZW5kKGJ1dHRvbik7XHJcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgY3JlYXRlZFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgICBpZiAocHJvamVjdC50aXRsZSA9PSBwYWdlLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSkge1xyXG4gICAgICAgICAgcHJvamVjdC5hZGRUYXNrKGlucHV0LnZhbHVlLCAnc29tZSByYW5kb21lJyk7XHJcbiAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3QudGFza3M7XHJcbiAgICAgICAgICBjdXJyZW50ZGl2ID0gcGFnZTtcclxuICAgICAgICAgIGRpc3BsYXlQcm9qZWN0VGFza3Muc2hvd1Byb2plY3RUYXNrcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcblxyXG5jbGFzcyBjcmVhdGVEYXlUb2RvcyBleHRlbmRzIGNyZWF0ZVByb2plY3RUb2RvcyB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUpIHtcclxuICAgIHN1cGVyKHRpdGxlKTtcclxuICAgIHRoaXMudGl0bGUgPSAnVG9kYXknO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMudGl0bGV9YCk7XHJcbiAgICBjb25zdCBhZGRUYXNrQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYWRkVGFza0J1dHRvbnMuY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2snKTtcclxuICAgIHBhZ2UuYXBwZW5kKGFkZFRhc2tCdXR0b25zKTtcclxuXHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGhpcy50aXRsZX1gKTtcclxuICAgIGFkZFRhc2tCdXR0b25zLmFwcGVuZChpbnB1dCk7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMudGl0bGV9YCk7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdhZGQnKTtcclxuICAgIGFkZFRhc2tCdXR0b25zLmFwcGVuZChidXR0b24pO1xyXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGNyZWF0ZVRhc2tzLmFkZFRhc2sodmFsdWUudmFsdWUsICdzb21lIHJhbmRvbSB3b3JkcycpO1xyXG4gICAgICBkaXNwbGF5VGFza3Muc2hvd1Rhc2tzKCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0VG9kb3MsIGNyZWF0ZURheVRvZG9zLCBjdXJyZW50UHJvamVjdCwgY3VycmVudGRpdiB9O1xyXG4iLCJpbXBvcnQgeyBkaXNwbGF5VGFza3MgfSBmcm9tICcuL3Rhc2stZGlzcGxheS1jb250cm9sbGVyJztcclxuXHJcbmNvbnN0IHRhc2tzID0gW107XHJcbmxldCBzYXZlZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZGF5JykpO1xyXG5cclxuY29uc3Qgc2F2ZXRvTG9hY2FsID0gKGRhdGEpID0+IHtcclxuICBpZiAoc2F2ZWQgPT0gbnVsbCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZGF5JywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcclxuICB9IGVsc2Uge1xyXG4gICAgc2F2ZWQucHVzaChkYXRhKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RheScsIEpTT04uc3RyaW5naWZ5KHNhdmVkKSk7XHJcbiAgfVxyXG59O1xyXG5cclxuY2xhc3MgdG9kb3Mge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbikge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgY3JlYXRlVGFza3MgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGFkZFRhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uKSA9PiB7XHJcbiAgICBsZXQgdGFzayA9IG5ldyB0b2Rvcyh0aXRsZSwgZGVzY3JpcHRpb24pO1xyXG4gICAgdGFza3MucHVzaCh0YXNrKTtcclxuICAgIHNhdmV0b0xvYWNhbCh0YXNrKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4geyBhZGRUYXNrIH07XHJcbn0pKCk7XHJcblxyXG5jb25zdCBkZWxldGV0YXNrID0gKGl0ZW0pID0+IHtcclxuICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICBpZiAodGFzay50aXRsZSA9PSBpdGVtKSB7XHJcbiAgICAgIHRhc2tzLnNwbGljZSh0YXNrcy5pbmRleE9mKHRhc2spLCAxKTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCB7IHRvZG9zLCBjcmVhdGVUYXNrcywgdGFza3MsIGRlbGV0ZXRhc2ssIHNhdmVkIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=