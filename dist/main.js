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
/* harmony export */   "displayProjects": () => (/* binding */ displayProjects),
/* harmony export */   "displayTasks": () => (/* binding */ displayTasks)
/* harmony export */ });
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos */ "./src/todos.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ "./src/projects.js");




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
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.addEventListener('click', (e) => {
          displaycompletedTasks.moveTask(checkbox);
        });
        div.append(checkbox);
        const title = document.createElement('label');
        div.append(title);
        title.textContent = task.title;
      }
    });
  };
  return { showTasks };
})();

const displaycompletedTasks = (() => {
  const moveTask = (input) => {
    if (input.parentElement.parentElement.getAttribute('class') == 'pending') {
      const completed = document.querySelector('.completed');
      completed.append(input.parentElement);
    } else {
      const pending = document.querySelector('.pending');
      pending.append(input.parentElement);
    }
  };
  return { moveTask };
})();

const displayProjects = (() => {
  const exist = [];
  const projectList = document.querySelector('.projects');

  const showProjects = () => {
    _projects__WEBPACK_IMPORTED_MODULE_2__.createdProjects.forEach((project) => {
      if (!exist.includes(project.title)) {
        exist.push(project.title);
        const newProject = document.createElement('li');
        projectList.append(newProject);
        newProject.textContent = project.title;
        newProject.addEventListener('click', (e) => {
          (0,_index__WEBPACK_IMPORTED_MODULE_1__.clear)(project.title);
        });
      }
    });
  };
  return { showProjects };
})();




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clear": () => (/* binding */ clear)
/* harmony export */ });
/* harmony import */ var _taskConstructors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskConstructors */ "./src/taskConstructors.js");



function clear(button) {
  console.log(button);
  const content = document.querySelector('.content');
  const divs = content.querySelectorAll('div');
  for (let i = 0; i < divs.length; i++) {
    divs[i].remove();
  }
  switch (button) {
    case 'Today':
      let task = new _taskConstructors__WEBPACK_IMPORTED_MODULE_0__.createDayTodos(button);
      task.project();
      break;
    default:
      let project = new _taskConstructors__WEBPACK_IMPORTED_MODULE_0__.createProjectTodos(button);
      project.project();
  }
}

const next = document.querySelectorAll('li');
const buttons = Array.from(next);

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', (e) => {
    clear(buttons[i].textContent);
  });
}




/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createdProjects": () => (/* binding */ createdProjects),
/* harmony export */   "projects": () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos */ "./src/todos.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");


const input = document.querySelector('#project-name');
const button = document.querySelector('button');

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

const createProjectTask = (() => {
  const createProjectTask = () => {
    createProject.project.addTask('watch slam dunk', 'is it good though');
  };
})();

button.addEventListener('click', (e) => {
  createProject.addProject(input.value);
  _DOM__WEBPACK_IMPORTED_MODULE_1__.displayProjects.showProjects();
});




/***/ }),

/***/ "./src/taskConstructors.js":
/*!*********************************!*\
  !*** ./src/taskConstructors.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDayTodos": () => (/* binding */ createDayTodos),
/* harmony export */   "createProjectTodos": () => (/* binding */ createProjectTodos)
/* harmony export */ });
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos */ "./src/todos.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");



class createProjectTodos {
  constructor(title) {
    this.title = title;
  }

  project = () => {
    const content = document.querySelector('.content');

    const page = document.createElement('div');
    page.classList.add('page');
    content.append(page);
    const title = document.createElement('h1');
    page.append(title);
    title.textContent = this.title;

    const pending = document.createElement('div');
    pending.classList.add('pending');
    content.append(pending);

    const completed = document.createElement('div');
    completed.className = 'pending completed';
    content.append(completed);

    const completedtitle = document.createElement('h1');
    completed.append(completedtitle);
    completedtitle.textContent = 'Completed';

    const addTaskButtons = document.createElement('div');
    addTaskButtons.classList.add('add-task');
    content.append(addTaskButtons);

    const input = document.createElement('input');
    input.setAttribute('id', 'title');
    addTaskButtons.append(input);

    const button = document.createElement('button');
    button.setAttribute('id', 'add');
    addTaskButtons.append(button);
    button.textContent = 'Add Task';
    button.addEventListener('click', (e) => {
      _todos__WEBPACK_IMPORTED_MODULE_0__.createTasks.addTask(input.value, 'some random words');
      _DOM__WEBPACK_IMPORTED_MODULE_1__.displayTasks.showTasks();
    });
  };
}

class createDayTodos extends createProjectTodos {
  constructor(title) {
    super(title);
    this.title = 'today';
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDQTtBQUNhO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlEQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxXQUFXO0FBQ1gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4REFBdUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSw2Q0FBSztBQUNmLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVc7QUFDWCxDQUFDO0FBQ0Q7QUFDeUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRFc7QUFDSTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2REFBYztBQUNuQztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUVBQWtCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG9CQUFvQjtBQUNwQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDaUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCZTtBQUNRO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIseUNBQUs7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOERBQTRCO0FBQzlCLENBQUM7QUFDRDtBQUNxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNDO0FBQ0Q7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sdURBQW1CO0FBQ3pCLE1BQU0sd0RBQXNCO0FBQzVCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeERUO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsQ0FBQztBQUNEO0FBQ3FDOzs7Ozs7O1VDbEJyQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2tDb25zdHJ1Y3RvcnMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2Rvcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRhc2tzIH0gZnJvbSAnLi90b2Rvcyc7XHJcbmltcG9ydCB7IGNsZWFyIH0gZnJvbSAnLi9pbmRleCc7XHJcbmltcG9ydCB7IGNyZWF0ZWRQcm9qZWN0cyB9IGZyb20gJy4vcHJvamVjdHMnO1xyXG5cclxuY29uc3QgZGlzcGxheVRhc2tzID0gKCgpID0+IHtcclxuICBjb25zdCBleGlzdCA9IFtdO1xyXG5cclxuICBjb25zdCBzaG93VGFza3MgPSAoKSA9PiB7XHJcbiAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgIGlmICghZXhpc3QuaW5jbHVkZXModGFzay50aXRsZSkpIHtcclxuICAgICAgICBleGlzdC5wdXNoKHRhc2sudGl0bGUpO1xyXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHBlbmRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGVuZGluZycpO1xyXG4gICAgICAgIHBlbmRpbmcuYXBwZW5kKGRpdik7XHJcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcclxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgZGlzcGxheWNvbXBsZXRlZFRhc2tzLm1vdmVUYXNrKGNoZWNrYm94KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkaXYuYXBwZW5kKGNoZWNrYm94KTtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgZGl2LmFwcGVuZCh0aXRsZSk7XHJcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIHJldHVybiB7IHNob3dUYXNrcyB9O1xyXG59KSgpO1xyXG5cclxuY29uc3QgZGlzcGxheWNvbXBsZXRlZFRhc2tzID0gKCgpID0+IHtcclxuICBjb25zdCBtb3ZlVGFzayA9IChpbnB1dCkgPT4ge1xyXG4gICAgaWYgKGlucHV0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT0gJ3BlbmRpbmcnKSB7XHJcbiAgICAgIGNvbnN0IGNvbXBsZXRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wbGV0ZWQnKTtcclxuICAgICAgY29tcGxldGVkLmFwcGVuZChpbnB1dC5wYXJlbnRFbGVtZW50KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHBlbmRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGVuZGluZycpO1xyXG4gICAgICBwZW5kaW5nLmFwcGVuZChpbnB1dC5wYXJlbnRFbGVtZW50KTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiB7IG1vdmVUYXNrIH07XHJcbn0pKCk7XHJcblxyXG5jb25zdCBkaXNwbGF5UHJvamVjdHMgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGV4aXN0ID0gW107XHJcbiAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcclxuXHJcbiAgY29uc3Qgc2hvd1Byb2plY3RzID0gKCkgPT4ge1xyXG4gICAgY3JlYXRlZFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgaWYgKCFleGlzdC5pbmNsdWRlcyhwcm9qZWN0LnRpdGxlKSkge1xyXG4gICAgICAgIGV4aXN0LnB1c2gocHJvamVjdC50aXRsZSk7XHJcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kKG5ld1Byb2plY3QpO1xyXG4gICAgICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xyXG4gICAgICAgIG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgY2xlYXIocHJvamVjdC50aXRsZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcbiAgcmV0dXJuIHsgc2hvd1Byb2plY3RzIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBkaXNwbGF5VGFza3MsIGRpc3BsYXlQcm9qZWN0cyB9O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVEYXlUb2RvcyB9IGZyb20gJy4vdGFza0NvbnN0cnVjdG9ycyc7XHJcbmltcG9ydCB7IGNyZWF0ZVByb2plY3RUb2RvcyB9IGZyb20gJy4vdGFza0NvbnN0cnVjdG9ycyc7XHJcblxyXG5mdW5jdGlvbiBjbGVhcihidXR0b24pIHtcclxuICBjb25zb2xlLmxvZyhidXR0b24pO1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG4gIGNvbnN0IGRpdnMgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdicpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGl2cy5sZW5ndGg7IGkrKykge1xyXG4gICAgZGl2c1tpXS5yZW1vdmUoKTtcclxuICB9XHJcbiAgc3dpdGNoIChidXR0b24pIHtcclxuICAgIGNhc2UgJ1RvZGF5JzpcclxuICAgICAgbGV0IHRhc2sgPSBuZXcgY3JlYXRlRGF5VG9kb3MoYnV0dG9uKTtcclxuICAgICAgdGFzay5wcm9qZWN0KCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgbGV0IHByb2plY3QgPSBuZXcgY3JlYXRlUHJvamVjdFRvZG9zKGJ1dHRvbik7XHJcbiAgICAgIHByb2plY3QucHJvamVjdCgpO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XHJcbmNvbnN0IGJ1dHRvbnMgPSBBcnJheS5mcm9tKG5leHQpO1xyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCBidXR0b25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgYnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBjbGVhcihidXR0b25zW2ldLnRleHRDb250ZW50KTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHsgY2xlYXIgfTtcclxuIiwiaW1wb3J0IHsgdG9kb3MgfSBmcm9tICcuL3RvZG9zJztcclxuaW1wb3J0IHsgZGlzcGxheVByb2plY3RzIH0gZnJvbSAnLi9ET00nO1xyXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUnKTtcclxuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XHJcblxyXG5jb25zdCBjcmVhdGVkUHJvamVjdHMgPSBbXTtcclxuXHJcbmNsYXNzIHByb2plY3RzIHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy50YXNrcyA9IFtdO1xyXG4gIH1cclxuICBhZGRUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbikge1xyXG4gICAgbGV0IHRhc2sgPSBuZXcgdG9kb3ModGl0bGUsIGRlc2NyaXB0aW9uKTtcclxuICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZVByb2plY3QgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGFkZFByb2plY3QgPSAodGl0bGUpID0+IHtcclxuICAgIGxldCBwcm9qZWN0ID0gbmV3IHByb2plY3RzKHRpdGxlKTtcclxuICAgIGNyZWF0ZWRQcm9qZWN0cy5wdXNoKHByb2plY3QpO1xyXG4gIH07XHJcbiAgcmV0dXJuIHsgYWRkUHJvamVjdCB9O1xyXG59KSgpO1xyXG5cclxuY29uc3QgY3JlYXRlUHJvamVjdFRhc2sgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGNyZWF0ZVByb2plY3RUYXNrID0gKCkgPT4ge1xyXG4gICAgY3JlYXRlUHJvamVjdC5wcm9qZWN0LmFkZFRhc2soJ3dhdGNoIHNsYW0gZHVuaycsICdpcyBpdCBnb29kIHRob3VnaCcpO1xyXG4gIH07XHJcbn0pKCk7XHJcblxyXG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGNyZWF0ZVByb2plY3QuYWRkUHJvamVjdChpbnB1dC52YWx1ZSk7XHJcbiAgZGlzcGxheVByb2plY3RzLnNob3dQcm9qZWN0cygpO1xyXG59KTtcclxuXHJcbmV4cG9ydCB7IHByb2plY3RzLCBjcmVhdGVkUHJvamVjdHMgfTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlVGFza3MgfSBmcm9tICcuL3RvZG9zJztcclxuaW1wb3J0IHsgZGlzcGxheVRhc2tzIH0gZnJvbSAnLi9ET00nO1xyXG5cclxuY2xhc3MgY3JlYXRlUHJvamVjdFRvZG9zIHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gIH1cclxuXHJcbiAgcHJvamVjdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG5cclxuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHBhZ2UuY2xhc3NMaXN0LmFkZCgncGFnZScpO1xyXG4gICAgY29udGVudC5hcHBlbmQocGFnZSk7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBwYWdlLmFwcGVuZCh0aXRsZSk7XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRoaXMudGl0bGU7XHJcblxyXG4gICAgY29uc3QgcGVuZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcGVuZGluZy5jbGFzc0xpc3QuYWRkKCdwZW5kaW5nJyk7XHJcbiAgICBjb250ZW50LmFwcGVuZChwZW5kaW5nKTtcclxuXHJcbiAgICBjb25zdCBjb21wbGV0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbXBsZXRlZC5jbGFzc05hbWUgPSAncGVuZGluZyBjb21wbGV0ZWQnO1xyXG4gICAgY29udGVudC5hcHBlbmQoY29tcGxldGVkKTtcclxuXHJcbiAgICBjb25zdCBjb21wbGV0ZWR0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBjb21wbGV0ZWQuYXBwZW5kKGNvbXBsZXRlZHRpdGxlKTtcclxuICAgIGNvbXBsZXRlZHRpdGxlLnRleHRDb250ZW50ID0gJ0NvbXBsZXRlZCc7XHJcblxyXG4gICAgY29uc3QgYWRkVGFza0J1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGFkZFRhc2tCdXR0b25zLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrJyk7XHJcbiAgICBjb250ZW50LmFwcGVuZChhZGRUYXNrQnV0dG9ucyk7XHJcblxyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZScpO1xyXG4gICAgYWRkVGFza0J1dHRvbnMuYXBwZW5kKGlucHV0KTtcclxuXHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZCcpO1xyXG4gICAgYWRkVGFza0J1dHRvbnMuYXBwZW5kKGJ1dHRvbik7XHJcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgY3JlYXRlVGFza3MuYWRkVGFzayhpbnB1dC52YWx1ZSwgJ3NvbWUgcmFuZG9tIHdvcmRzJyk7XHJcbiAgICAgIGRpc3BsYXlUYXNrcy5zaG93VGFza3MoKTtcclxuICAgIH0pO1xyXG4gIH07XHJcbn1cclxuXHJcbmNsYXNzIGNyZWF0ZURheVRvZG9zIGV4dGVuZHMgY3JlYXRlUHJvamVjdFRvZG9zIHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xyXG4gICAgc3VwZXIodGl0bGUpO1xyXG4gICAgdGhpcy50aXRsZSA9ICd0b2RheSc7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0VG9kb3MsIGNyZWF0ZURheVRvZG9zIH07XHJcbiIsImltcG9ydCB7IGRpc3BsYXlUYXNrcyB9IGZyb20gJy4vRE9NJztcclxuY29uc3QgdGFza3MgPSBbXTtcclxuXHJcbmNsYXNzIHRvZG9zIHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24pIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZVRhc2tzID0gKCgpID0+IHtcclxuICBjb25zdCBhZGRUYXNrID0gKHRpdGxlLCBkZXNjcmlwdGlvbikgPT4ge1xyXG4gICAgbGV0IHRhc2sgPSBuZXcgdG9kb3ModGl0bGUsIGRlc2NyaXB0aW9uKTtcclxuICAgIHRhc2tzLnB1c2godGFzayk7XHJcbiAgfTtcclxuICByZXR1cm4geyBhZGRUYXNrIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyB0b2RvcywgY3JlYXRlVGFza3MsIHRhc2tzIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=