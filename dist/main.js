/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayPage": () => (/* binding */ displayPage),
/* harmony export */   "displayProjects": () => (/* binding */ displayProjects),
/* harmony export */   "displayTasks": () => (/* binding */ displayTasks),
/* harmony export */   "setActiveTab": () => (/* binding */ setActiveTab)
/* harmony export */ });
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos */ "./src/todos.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _taskConstructors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskConstructors */ "./src/taskConstructors.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./src/index.js");





const displayTasks = (() => {
  const exist = [];

  const showTasks = () => {
    _todos__WEBPACK_IMPORTED_MODULE_0__.tasks.forEach((task) => {
      if (!exist.includes(task.title)) {
        exist.push(task.title);
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
          displaycompletedTasks.moveTask(checkbox);
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
      }
    });
  };

  const showProjectTasks = () => {
    _taskConstructors__WEBPACK_IMPORTED_MODULE_2__.currentProject.forEach((projectsTask) => {
      if (!exist.includes(projectsTask.title)) {
        exist.push(projectsTask.title);

        const div = document.createElement('div');
        const pending = _taskConstructors__WEBPACK_IMPORTED_MODULE_2__.currentdiv.querySelector('.pending');
        pending.append(div);
        div.classList.add('task');
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        const date = document.createElement('input');
        date.setAttribute('type', 'date');
        checkbox.addEventListener('click', (e) => {
          displaycompletedProjectTasks.moveTask(checkbox);
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
      }
    });
  };
  return { showTasks, showProjectTasks };
})();

const deleteTask = (item) => {
  _todos__WEBPACK_IMPORTED_MODULE_0__.tasks.forEach((task) => {
    const taskDiv = item.parentElement.getAttribute('data-task');
    if (task.title == taskDiv) {
      item.parentElement.remove();
      (0,_todos__WEBPACK_IMPORTED_MODULE_0__.deletetask)(taskDiv);
      console.log(_todos__WEBPACK_IMPORTED_MODULE_0__.tasks);
    }
  });
};

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
      const completed = _taskConstructors__WEBPACK_IMPORTED_MODULE_2__.currentdiv.querySelector('.completed');
      console.log(_taskConstructors__WEBPACK_IMPORTED_MODULE_2__.currentdiv);
      completed.append(input.parentElement);
      const span = completed.querySelector('span');
      console.log(span);
      completedTasks++;
      span.textContent = completedTasks;
    } else {
      const pending = _taskConstructors__WEBPACK_IMPORTED_MODULE_2__.currentdiv.querySelector('.pending');
      pending.append(input.parentElement);
      const completed = _taskConstructors__WEBPACK_IMPORTED_MODULE_2__.currentdiv.querySelector('.completed');
      const span = completed.querySelector('span');
      console.log(span);
      completedTasks--;
      span.textContent = completedTasks;
    }
  };
  return { moveTask };
})();

const displayProjects = (() => {
  const exist = [];
  const projectList = document.querySelector('.projects');

  const showProjects = () => {
    localStorage.getItem(_projects__WEBPACK_IMPORTED_MODULE_1__.createdProjects).forEach((project) => {
      if (!exist.includes(project.title)) {
        exist.push(project.title);
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
          setActiveTab(e.target);
          displayPage(project.title);
        });
      }
    });
  };
  return { showProjects };
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
    _index__WEBPACK_IMPORTED_MODULE_3__.createProjectPage.createPage(button);
  }
};

const deleteProject = (title) => {
  _projects__WEBPACK_IMPORTED_MODULE_1__.createdProjects.forEach((project) => {
    if (project.title == title.parentElement.textContent) {
      const content = document.querySelector('.content');
      const projectDiv = content.querySelector(
        `[data-name="${project.title}"]`
      );
      if (content.contains(projectDiv)) {
        projectDiv.remove();
      }
      (0,_projects__WEBPACK_IMPORTED_MODULE_1__.deleteProjectFromArray)(title);
      title.parentElement.remove();
      console.log(_projects__WEBPACK_IMPORTED_MODULE_1__.createdProjects);
    }
  });
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
/* harmony import */ var _taskConstructors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskConstructors */ "./src/taskConstructors.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");





const DefaultactiveButton = (() => {
  const Today = document.querySelector('li');
  Today.addEventListener('click', (e) => {
    (0,_DOM__WEBPACK_IMPORTED_MODULE_2__.setActiveTab)(e.target);
    (0,_DOM__WEBPACK_IMPORTED_MODULE_2__.displayPage)(Today.textContent);
  });
})();

let activePage = new _taskConstructors__WEBPACK_IMPORTED_MODULE_0__.createDayTodos('today');
activePage.project();
activePage.inputs();

const createProjectPage = (() => {
  const createPage = (button) => {
    switch (button) {
      default:
        activePage = new _taskConstructors__WEBPACK_IMPORTED_MODULE_0__.createProjectTodos(button);
        activePage.project();
        activePage.inputs();
    }
  };

  return { createPage };
})();




/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createdProjects": () => (/* binding */ createdProjects),
/* harmony export */   "deleteProjectFromArray": () => (/* binding */ deleteProjectFromArray),
/* harmony export */   "projects": () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos */ "./src/todos.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");


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
    let task = new _todos__WEBPACK_IMPORTED_MODULE_0__.todos(title, description);
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
    _DOM__WEBPACK_IMPORTED_MODULE_1__.displayProjects.showProjects();
    button1.style.display = 'block';
    options.remove();
    input.remove();
  });
};




/***/ }),

/***/ "./src/taskConstructors.js":
/*!*********************************!*\
  !*** ./src/taskConstructors.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDayTodos": () => (/* binding */ createDayTodos),
/* harmony export */   "createProjectTodos": () => (/* binding */ createProjectTodos),
/* harmony export */   "currentProject": () => (/* binding */ currentProject),
/* harmony export */   "currentdiv": () => (/* binding */ currentdiv)
/* harmony export */ });
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos */ "./src/todos.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects */ "./src/projects.js");





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
      _projects__WEBPACK_IMPORTED_MODULE_3__.createdProjects.forEach((project) => {
        if (project.title == page.getAttribute('class')) {
          project.addTask(input.value, 'some randome');
          currentProject = project.tasks;
          currentdiv = page;
          _DOM__WEBPACK_IMPORTED_MODULE_1__.displayTasks.showProjectTasks();
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
      _todos__WEBPACK_IMPORTED_MODULE_0__.createTasks.addTask(value.value, 'some random words');
      _DOM__WEBPACK_IMPORTED_MODULE_1__.displayTasks.showTasks();
    });
  };
}




/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTasks": () => (/* binding */ createTasks),
/* harmony export */   "deletetask": () => (/* binding */ deletetask),
/* harmony export */   "tasks": () => (/* binding */ tasks),
/* harmony export */   "todos": () => (/* binding */ todos)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQSw0Q0FBNEMsV0FBVztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLFdBQVc7QUFDM0M7QUFDQSw2Q0FBNkMsV0FBVztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHVEQUFtQjtBQUN6QixNQUFNLHdEQUFzQjtBQUM1QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQzBFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEdyQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNpRDs7Ozs7OztVQzFCakQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrQ29uc3RydWN0b3JzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0YXNrcywgZGVsZXRldGFzayBhcyBkZWxldGV0YXNrRnJvbUFycmF5IH0gZnJvbSAnLi90b2Rvcyc7XHJcbmltcG9ydCB7IGNyZWF0ZWRQcm9qZWN0cywgZGVsZXRlUHJvamVjdEZyb21BcnJheSB9IGZyb20gJy4vcHJvamVjdHMnO1xyXG5pbXBvcnQgeyBjdXJyZW50UHJvamVjdCwgY3VycmVudGRpdiB9IGZyb20gJy4vdGFza0NvbnN0cnVjdG9ycyc7XHJcbmltcG9ydCB7IGNyZWF0ZVByb2plY3RQYWdlIH0gZnJvbSAnLi9pbmRleCc7XHJcblxyXG5jb25zdCBkaXNwbGF5VGFza3MgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGV4aXN0ID0gW107XHJcblxyXG4gIGNvbnN0IHNob3dUYXNrcyA9ICgpID0+IHtcclxuICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgaWYgKCFleGlzdC5pbmNsdWRlcyh0YXNrLnRpdGxlKSkge1xyXG4gICAgICAgIGV4aXN0LnB1c2godGFzay50aXRsZSk7XHJcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgcGVuZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wZW5kaW5nJyk7XHJcbiAgICAgICAgcGVuZGluZy5hcHBlbmQoZGl2KTtcclxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xyXG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzaycsIGAke3Rhc2sudGl0bGV9YCk7XHJcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcclxuICAgICAgICBkYXRlLnRleHRDb250ZW50ID0gJ05vIERhdGUnO1xyXG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgIGRpc3BsYXljb21wbGV0ZWRUYXNrcy5tb3ZlVGFzayhjaGVja2JveCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRpdi5hcHBlbmQoY2hlY2tib3gpO1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBkaXYuYXBwZW5kKHRpdGxlKTtcclxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XHJcbiAgICAgICAgZGl2LmFwcGVuZChkYXRlKTtcclxuICAgICAgICBjb25zdCByZW1vdmVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgcmVtb3ZlSWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsICcvc3JjL2ltZy9pY29uczgteGJveC14LTMwLnBuZycpO1xyXG4gICAgICAgIHJlbW92ZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgIGRlbGV0ZVRhc2soZS50YXJnZXQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRpdi5hcHBlbmQocmVtb3ZlSWNvbik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNob3dQcm9qZWN0VGFza3MgPSAoKSA9PiB7XHJcbiAgICBjdXJyZW50UHJvamVjdC5mb3JFYWNoKChwcm9qZWN0c1Rhc2spID0+IHtcclxuICAgICAgaWYgKCFleGlzdC5pbmNsdWRlcyhwcm9qZWN0c1Rhc2sudGl0bGUpKSB7XHJcbiAgICAgICAgZXhpc3QucHVzaChwcm9qZWN0c1Rhc2sudGl0bGUpO1xyXG5cclxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBwZW5kaW5nID0gY3VycmVudGRpdi5xdWVyeVNlbGVjdG9yKCcucGVuZGluZycpO1xyXG4gICAgICAgIHBlbmRpbmcuYXBwZW5kKGRpdik7XHJcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcclxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xyXG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgIGRpc3BsYXljb21wbGV0ZWRQcm9qZWN0VGFza3MubW92ZVRhc2soY2hlY2tib3gpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRpdi5hcHBlbmQoY2hlY2tib3gpO1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBkaXYuYXBwZW5kKHRpdGxlKTtcclxuICAgICAgICBkaXYuYXBwZW5kKGRhdGUpO1xyXG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdHNUYXNrLnRpdGxlO1xyXG4gICAgICAgIC8vZml4IGRlbGV0ZSBmZWF0dXJlXHJcbiAgICAgICAgY29uc3QgcmVtb3ZlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIHJlbW92ZUljb24uc2V0QXR0cmlidXRlKCdzcmMnLCAnL3NyYy9pbWcvaWNvbnM4LXhib3gteC0zMC5wbmcnKTtcclxuICAgICAgICByZW1vdmVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICBkZWxldGVUYXNrKGUudGFyZ2V0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkaXYuYXBwZW5kKHJlbW92ZUljb24pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIHJldHVybiB7IHNob3dUYXNrcywgc2hvd1Byb2plY3RUYXNrcyB9O1xyXG59KSgpO1xyXG5cclxuY29uc3QgZGVsZXRlVGFzayA9IChpdGVtKSA9PiB7XHJcbiAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgY29uc3QgdGFza0RpdiA9IGl0ZW0ucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzaycpO1xyXG4gICAgaWYgKHRhc2sudGl0bGUgPT0gdGFza0Rpdikge1xyXG4gICAgICBpdGVtLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgIGRlbGV0ZXRhc2tGcm9tQXJyYXkodGFza0Rpdik7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRhc2tzKTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGRpc3BsYXljb21wbGV0ZWRUYXNrcyA9ICgoKSA9PiB7XHJcbiAgbGV0IGNvbXBsZXRlZFRhc2tzID0gMDtcclxuICBjb25zdCBtb3ZlVGFzayA9IChpbnB1dCkgPT4ge1xyXG4gICAgaWYgKGlucHV0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT0gJ3BlbmRpbmcnKSB7XHJcbiAgICAgIGNvbnN0IGNvbXBsZXRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wbGV0ZWQnKTtcclxuICAgICAgY29tcGxldGVkLmFwcGVuZChpbnB1dC5wYXJlbnRFbGVtZW50KTtcclxuICAgICAgY29uc3Qgc3BhbiA9IGNvbXBsZXRlZC5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHNwYW4pO1xyXG4gICAgICBjb21wbGV0ZWRUYXNrcysrO1xyXG4gICAgICBzcGFuLnRleHRDb250ZW50ID0gY29tcGxldGVkVGFza3M7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBwZW5kaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBlbmRpbmcnKTtcclxuICAgICAgcGVuZGluZy5hcHBlbmQoaW5wdXQucGFyZW50RWxlbWVudCk7XHJcbiAgICAgIGNvbnN0IGNvbXBsZXRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wbGV0ZWQnKTtcclxuICAgICAgY29uc3Qgc3BhbiA9IGNvbXBsZXRlZC5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHNwYW4pO1xyXG4gICAgICBjb21wbGV0ZWRUYXNrcy0tO1xyXG4gICAgICBzcGFuLnRleHRDb250ZW50ID0gY29tcGxldGVkVGFza3M7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4geyBtb3ZlVGFzayB9O1xyXG59KSgpO1xyXG5cclxuY29uc3QgZGlzcGxheWNvbXBsZXRlZFByb2plY3RUYXNrcyA9ICgoKSA9PiB7XHJcbiAgbGV0IGNvbXBsZXRlZFRhc2tzID0gMDtcclxuICBjb25zdCBtb3ZlVGFzayA9IChpbnB1dCkgPT4ge1xyXG4gICAgaWYgKGlucHV0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT0gJ3BlbmRpbmcnKSB7XHJcbiAgICAgIGNvbnN0IGNvbXBsZXRlZCA9IGN1cnJlbnRkaXYucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlZCcpO1xyXG4gICAgICBjb25zb2xlLmxvZyhjdXJyZW50ZGl2KTtcclxuICAgICAgY29tcGxldGVkLmFwcGVuZChpbnB1dC5wYXJlbnRFbGVtZW50KTtcclxuICAgICAgY29uc3Qgc3BhbiA9IGNvbXBsZXRlZC5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHNwYW4pO1xyXG4gICAgICBjb21wbGV0ZWRUYXNrcysrO1xyXG4gICAgICBzcGFuLnRleHRDb250ZW50ID0gY29tcGxldGVkVGFza3M7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBwZW5kaW5nID0gY3VycmVudGRpdi5xdWVyeVNlbGVjdG9yKCcucGVuZGluZycpO1xyXG4gICAgICBwZW5kaW5nLmFwcGVuZChpbnB1dC5wYXJlbnRFbGVtZW50KTtcclxuICAgICAgY29uc3QgY29tcGxldGVkID0gY3VycmVudGRpdi5xdWVyeVNlbGVjdG9yKCcuY29tcGxldGVkJyk7XHJcbiAgICAgIGNvbnN0IHNwYW4gPSBjb21wbGV0ZWQucXVlcnlTZWxlY3Rvcignc3BhbicpO1xyXG4gICAgICBjb25zb2xlLmxvZyhzcGFuKTtcclxuICAgICAgY29tcGxldGVkVGFza3MtLTtcclxuICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGNvbXBsZXRlZFRhc2tzO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIHsgbW92ZVRhc2sgfTtcclxufSkoKTtcclxuXHJcbmNvbnN0IGRpc3BsYXlQcm9qZWN0cyA9ICgoKSA9PiB7XHJcbiAgY29uc3QgZXhpc3QgPSBbXTtcclxuICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xyXG5cclxuICBjb25zdCBzaG93UHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjcmVhdGVkUHJvamVjdHMpLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgaWYgKCFleGlzdC5pbmNsdWRlcyhwcm9qZWN0LnRpdGxlKSkge1xyXG4gICAgICAgIGV4aXN0LnB1c2gocHJvamVjdC50aXRsZSk7XHJcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kKG5ld1Byb2plY3QpO1xyXG4gICAgICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBkZWxldGVJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgJy9zcmMvaW1nL2ljb25zOC1yZW1vdmUtNDgucG5nJyk7XHJcbiAgICAgICAgZGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICBkZWxldGVQcm9qZWN0KGUudGFyZ2V0KTtcclxuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbmV3UHJvamVjdC5hcHBlbmQoZGVsZXRlSWNvbik7XHJcbiAgICAgICAgbmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICBzZXRBY3RpdmVUYWIoZS50YXJnZXQpO1xyXG4gICAgICAgICAgZGlzcGxheVBhZ2UocHJvamVjdC50aXRsZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcbiAgcmV0dXJuIHsgc2hvd1Byb2plY3RzIH07XHJcbn0pKCk7XHJcblxyXG5jb25zdCBzZXRBY3RpdmVUYWIgPSAodGFiKSA9PiB7XHJcbiAgY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XHJcbiAgQXJyYXkuZnJvbSh0YWJzKS5mb3JFYWNoKChsaSkgPT4ge1xyXG4gICAgaWYgKGxpLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgICAgbGkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgaWYgKHRhYi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRhYi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FjdGl2ZScpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGRpc3BsYXlQYWdlID0gKGJ1dHRvbikgPT4ge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG4gIGNvbnN0IGdldGRpdiA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtbmFtZT1cIiR7YnV0dG9ufVwiXWApO1xyXG4gIGlmIChjb250ZW50LmNvbnRhaW5zKGdldGRpdikpIHtcclxuICAgIGNvbnN0IGRpdnMgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNncm91cCcpO1xyXG4gICAgQXJyYXkuZnJvbShkaXZzKS5mb3JFYWNoKChkaXYpID0+IHtcclxuICAgICAgaWYgKGRpdi5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT09IGdldGRpdi5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykpIHtcclxuICAgICAgICBkaXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IGhpZGUgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNncm91cCcpO1xyXG4gICAgaGlkZS5mb3JFYWNoKChkaXYpID0+IHtcclxuICAgICAgZGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9KTtcclxuICAgIGNyZWF0ZVByb2plY3RQYWdlLmNyZWF0ZVBhZ2UoYnV0dG9uKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBkZWxldGVQcm9qZWN0ID0gKHRpdGxlKSA9PiB7XHJcbiAgY3JlYXRlZFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgIGlmIChwcm9qZWN0LnRpdGxlID09IHRpdGxlLnBhcmVudEVsZW1lbnQudGV4dENvbnRlbnQpIHtcclxuICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgICAgIGNvbnN0IHByb2plY3REaXYgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgYFtkYXRhLW5hbWU9XCIke3Byb2plY3QudGl0bGV9XCJdYFxyXG4gICAgICApO1xyXG4gICAgICBpZiAoY29udGVudC5jb250YWlucyhwcm9qZWN0RGl2KSkge1xyXG4gICAgICAgIHByb2plY3REaXYucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgICAgZGVsZXRlUHJvamVjdEZyb21BcnJheSh0aXRsZSk7XHJcbiAgICAgIHRpdGxlLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGNyZWF0ZWRQcm9qZWN0cyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcbmV4cG9ydCB7IGRpc3BsYXlUYXNrcywgZGlzcGxheVByb2plY3RzLCBzZXRBY3RpdmVUYWIsIGRpc3BsYXlQYWdlIH07XHJcbiIsImltcG9ydCB7IGNyZWF0ZURheVRvZG9zIH0gZnJvbSAnLi90YXNrQ29uc3RydWN0b3JzJztcclxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdFRvZG9zIH0gZnJvbSAnLi90YXNrQ29uc3RydWN0b3JzJztcclxuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tICcuL3Byb2plY3RzJztcclxuaW1wb3J0IHsgc2V0QWN0aXZlVGFiLCBkaXNwbGF5UGFnZSB9IGZyb20gJy4vRE9NJztcclxuXHJcbmNvbnN0IERlZmF1bHRhY3RpdmVCdXR0b24gPSAoKCkgPT4ge1xyXG4gIGNvbnN0IFRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGknKTtcclxuICBUb2RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVUYWIoZS50YXJnZXQpO1xyXG4gICAgZGlzcGxheVBhZ2UoVG9kYXkudGV4dENvbnRlbnQpO1xyXG4gIH0pO1xyXG59KSgpO1xyXG5cclxubGV0IGFjdGl2ZVBhZ2UgPSBuZXcgY3JlYXRlRGF5VG9kb3MoJ3RvZGF5Jyk7XHJcbmFjdGl2ZVBhZ2UucHJvamVjdCgpO1xyXG5hY3RpdmVQYWdlLmlucHV0cygpO1xyXG5cclxuY29uc3QgY3JlYXRlUHJvamVjdFBhZ2UgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGNyZWF0ZVBhZ2UgPSAoYnV0dG9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGJ1dHRvbikge1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGFjdGl2ZVBhZ2UgPSBuZXcgY3JlYXRlUHJvamVjdFRvZG9zKGJ1dHRvbik7XHJcbiAgICAgICAgYWN0aXZlUGFnZS5wcm9qZWN0KCk7XHJcbiAgICAgICAgYWN0aXZlUGFnZS5pbnB1dHMoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4geyBjcmVhdGVQYWdlIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0UGFnZSB9O1xyXG4iLCJpbXBvcnQgeyB0b2RvcyB9IGZyb20gJy4vdG9kb3MnO1xyXG5pbXBvcnQgeyBkaXNwbGF5UHJvamVjdHMgfSBmcm9tICcuL0RPTSc7XHJcbmNvbnN0IGJ1dHRvbjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlUHJvamVjdCcpO1xyXG5idXR0b24xLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBjb25zb2xlLmxvZygnY2xpY2tlZCcpO1xyXG4gIGNyZWF0ZUlucHV0KCk7XHJcbn0pO1xyXG5cclxuY29uc3QgY3JlYXRlZFByb2plY3RzID0gW107XHJcblxyXG5jbGFzcyBwcm9qZWN0cyB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMudGFza3MgPSBbXTtcclxuICB9XHJcbiAgYWRkVGFzayh0aXRsZSwgZGVzY3JpcHRpb24pIHtcclxuICAgIGxldCB0YXNrID0gbmV3IHRvZG9zKHRpdGxlLCBkZXNjcmlwdGlvbik7XHJcbiAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKCgpID0+IHtcclxuICBjb25zdCBhZGRQcm9qZWN0ID0gKHRpdGxlKSA9PiB7XHJcbiAgICBsZXQgcHJvamVjdCA9IG5ldyBwcm9qZWN0cyh0aXRsZSk7XHJcbiAgICBjcmVhdGVkUHJvamVjdHMucHVzaChwcm9qZWN0KTtcclxuICB9O1xyXG4gIHJldHVybiB7IGFkZFByb2plY3QgfTtcclxufSkoKTtcclxuXHJcbmNvbnN0IGRlbGV0ZVByb2plY3RGcm9tQXJyYXkgPSAodGl0bGUpID0+IHtcclxuICBjcmVhdGVkUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgaWYgKHByb2plY3QudGl0bGUgPT0gdGl0bGUpIHtcclxuICAgICAgY3JlYXRlZFByb2plY3RzLnNwbGljZShjcmVhdGVkUHJvamVjdHMuaW5kZXhPZih0YXNrKSwgMSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVJbnB1dCA9ICgpID0+IHtcclxuICBidXR0b24xLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbnMnKTtcclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdjcmVhdGVJbnB1dCcpO1xyXG4gIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBvcHRpb25zLmNsYXNzTGlzdC5hZGQoJ29wdGlvbnMnKTtcclxuICBjb25zdCBjcmVhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjcmVhdGVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdjcmVhdGVCdXR0b24nKTtcclxuICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdjcmVhdGVCdXR0b24nKTtcclxuICBjcmVhdGVCdXR0b24udGV4dENvbnRlbnQgPSAnQ3JlYXRlJztcclxuICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcclxuICBkaXYuYXBwZW5kKGlucHV0KTtcclxuICBkaXYuYXBwZW5kKG9wdGlvbnMpO1xyXG4gIG9wdGlvbnMuYXBwZW5kKGNyZWF0ZUJ1dHRvbik7XHJcbiAgb3B0aW9ucy5hcHBlbmQoY2FuY2VsQnV0dG9uKTtcclxuICBjcmVhdGVCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgY2FuY2VsQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBidXR0b24xLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgb3B0aW9ucy5yZW1vdmUoKTtcclxuICAgIGlucHV0LnJlbW92ZSgpO1xyXG4gIH0pO1xyXG4gIGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBjcmVhdGVQcm9qZWN0LmFkZFByb2plY3QoaW5wdXQudmFsdWUpO1xyXG4gICAgZGlzcGxheVByb2plY3RzLnNob3dQcm9qZWN0cygpO1xyXG4gICAgYnV0dG9uMS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIG9wdGlvbnMucmVtb3ZlKCk7XHJcbiAgICBpbnB1dC5yZW1vdmUoKTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCB7IHByb2plY3RzLCBjcmVhdGVkUHJvamVjdHMsIGRlbGV0ZVByb2plY3RGcm9tQXJyYXkgfTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlVGFza3MgfSBmcm9tICcuL3RvZG9zJztcclxuaW1wb3J0IHsgZGlzcGxheVRhc2tzIH0gZnJvbSAnLi9ET00nO1xyXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0UGFnZSB9IGZyb20gJy4vaW5kZXgnO1xyXG5pbXBvcnQgeyBjcmVhdGVkUHJvamVjdHMgfSBmcm9tICcuL3Byb2plY3RzJztcclxuXHJcbi8vY3JlYXRlIG11dGlwbGUgcHJvamVjdHNcclxuXHJcbmxldCBjdXJyZW50UHJvamVjdCA9ICcnO1xyXG5sZXQgY3VycmVudGRpdiA9ICcnO1xyXG5cclxuY2xhc3MgY3JlYXRlUHJvamVjdFRvZG9zIHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gIH1cclxuXHJcbiAgcHJvamVjdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG5cclxuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHBhZ2UuY2xhc3NOYW1lID0gYCR7dGhpcy50aXRsZX1gO1xyXG4gICAgcGFnZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2dyb3VwJyk7XHJcbiAgICBwYWdlLnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgYCR7dGhpcy50aXRsZX1gKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kKHBhZ2UpO1xyXG5cclxuICAgIGNvbnN0IHBlbmRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHBlbmRpbmcuY2xhc3NMaXN0LmFkZCgncGVuZGluZycpO1xyXG4gICAgcGFnZS5hcHBlbmQocGVuZGluZyk7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBwZW5kaW5nLmFwcGVuZCh0aXRsZSk7XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRoaXMudGl0bGU7XHJcblxyXG4gICAgY29uc3QgY29tcGxldGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb21wbGV0ZWQuY2xhc3NOYW1lID0gJ3BlbmRpbmcgY29tcGxldGVkJztcclxuICAgIHBhZ2UuYXBwZW5kKGNvbXBsZXRlZCk7XHJcblxyXG4gICAgY29uc3QgY29tcGxldGVkdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgY29tcGxldGVkLmFwcGVuZChjb21wbGV0ZWR0aXRsZSk7XHJcbiAgICBjb21wbGV0ZWR0aXRsZS50ZXh0Q29udGVudCA9ICdDb21wbGV0ZWQnO1xyXG4gICAgY29uc3QgY291bnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGNvbXBsZXRlZHRpdGxlLmFwcGVuZChjb3VudGVyKTtcclxuICAgIGNvdW50ZXIuY2xhc3NMaXN0LmFkZCgnY291bnRlcicpO1xyXG4gICAgY291bnRlci50ZXh0Q29udGVudCA9IDA7XHJcbiAgfTtcclxuXHJcbiAgaW5wdXRzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW5hbWU9XCIke3RoaXMudGl0bGV9XCJdYCk7XHJcbiAgICBjb25zdCBhZGRUYXNrQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYWRkVGFza0J1dHRvbnMuY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2snKTtcclxuICAgIHBhZ2UuYXBwZW5kKGFkZFRhc2tCdXR0b25zKTtcclxuXHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5wdXQnLCBgJHt0aGlzLnRpdGxlfWApO1xyXG4gICAgYWRkVGFza0J1dHRvbnMuYXBwZW5kKGlucHV0KTtcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnQWRkIGEgcHJvamVjdCB0YXNrIGhlcmUnKTtcclxuXHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZCcpO1xyXG4gICAgYWRkVGFza0J1dHRvbnMuYXBwZW5kKGJ1dHRvbik7XHJcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgY3JlYXRlZFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgICBpZiAocHJvamVjdC50aXRsZSA9PSBwYWdlLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSkge1xyXG4gICAgICAgICAgcHJvamVjdC5hZGRUYXNrKGlucHV0LnZhbHVlLCAnc29tZSByYW5kb21lJyk7XHJcbiAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3QudGFza3M7XHJcbiAgICAgICAgICBjdXJyZW50ZGl2ID0gcGFnZTtcclxuICAgICAgICAgIGRpc3BsYXlUYXNrcy5zaG93UHJvamVjdFRhc2tzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH07XHJcbn1cclxuXHJcbmNsYXNzIGNyZWF0ZURheVRvZG9zIGV4dGVuZHMgY3JlYXRlUHJvamVjdFRvZG9zIHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xyXG4gICAgc3VwZXIodGl0bGUpO1xyXG4gICAgdGhpcy50aXRsZSA9ICdUb2RheSc7XHJcbiAgfVxyXG5cclxuICBpbnB1dHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGhpcy50aXRsZX1gKTtcclxuICAgIGNvbnN0IGFkZFRhc2tCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhZGRUYXNrQnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzaycpO1xyXG4gICAgcGFnZS5hcHBlbmQoYWRkVGFza0J1dHRvbnMpO1xyXG5cclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0aGlzLnRpdGxlfWApO1xyXG4gICAgYWRkVGFza0J1dHRvbnMuYXBwZW5kKGlucHV0KTtcclxuICAgIGNvbnN0IHZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy50aXRsZX1gKTtcclxuXHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZCcpO1xyXG4gICAgYWRkVGFza0J1dHRvbnMuYXBwZW5kKGJ1dHRvbik7XHJcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgY3JlYXRlVGFza3MuYWRkVGFzayh2YWx1ZS52YWx1ZSwgJ3NvbWUgcmFuZG9tIHdvcmRzJyk7XHJcbiAgICAgIGRpc3BsYXlUYXNrcy5zaG93VGFza3MoKTtcclxuICAgIH0pO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVByb2plY3RUb2RvcywgY3JlYXRlRGF5VG9kb3MsIGN1cnJlbnRQcm9qZWN0LCBjdXJyZW50ZGl2IH07XHJcbiIsImltcG9ydCB7IGRpc3BsYXlUYXNrcyB9IGZyb20gJy4vRE9NJztcclxuY29uc3QgdGFza3MgPSBbXTtcclxuXHJcbmNsYXNzIHRvZG9zIHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24pIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZVRhc2tzID0gKCgpID0+IHtcclxuICBjb25zdCBhZGRUYXNrID0gKHRpdGxlLCBkZXNjcmlwdGlvbikgPT4ge1xyXG4gICAgbGV0IHRhc2sgPSBuZXcgdG9kb3ModGl0bGUsIGRlc2NyaXB0aW9uKTtcclxuICAgIHRhc2tzLnB1c2godGFzayk7XHJcbiAgfTtcclxuICByZXR1cm4geyBhZGRUYXNrIH07XHJcbn0pKCk7XHJcblxyXG5jb25zdCBkZWxldGV0YXNrID0gKGl0ZW0pID0+IHtcclxuICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICBpZiAodGFzay50aXRsZSA9PSBpdGVtKSB7XHJcbiAgICAgIHRhc2tzLnNwbGljZSh0YXNrcy5pbmRleE9mKHRhc2spLCAxKTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCB7IHRvZG9zLCBjcmVhdGVUYXNrcywgdGFza3MsIGRlbGV0ZXRhc2sgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==