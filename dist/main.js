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
          let mainProject = new _projects__WEBPACK_IMPORTED_MODULE_2__.projects(project.title);
          (0,_index__WEBPACK_IMPORTED_MODULE_1__.displayPage)(project.title);
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
/* harmony export */   "createPage": () => (/* binding */ createPage),
/* harmony export */   "displayPage": () => (/* binding */ displayPage)
/* harmony export */ });
/* harmony import */ var _taskConstructors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskConstructors */ "./src/taskConstructors.js");



let activePage = new _taskConstructors__WEBPACK_IMPORTED_MODULE_0__.createDayTodos('today');
activePage.project();
activePage.inputs();
const next = document.querySelectorAll('li');
const buttons = Array.from(next);
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', (e) => {
    displayPage(buttons[i].textContent);
  });
}

const displayPage = (button) => {
  const content = document.querySelector('.content');
  const getdiv = content.querySelector(`.${button}`);
  if (content.contains(getdiv)) {
    const divs = content.querySelectorAll('#group');
    Array.from(divs).forEach((div) => {
      if (div.getAttribute('class') === getdiv.getAttribute('class')) {
        console.log('show');
        div.style.display = 'block';
      } else {
        console.log('hide ');
        div.style.display = 'none';
      }
    });
  } else {
    console.log('me');
    const hide = content.querySelectorAll('#group');
    hide.forEach((div) => {
      div.style.display = 'none';
    });
    createPage(button);
  }
};

const createPage = (button) => {
  switch (button) {
    default:
      activePage = new _taskConstructors__WEBPACK_IMPORTED_MODULE_0__.createProjectTodos(button);
      activePage.project();
      activePage.inputs();
  }
};




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
    page.className = `${this.title}`;
    page.setAttribute('id', 'group');
    content.append(page);
    const title = document.createElement('h1');
    page.append(title);
    title.textContent = this.title;

    const pending = document.createElement('div');
    pending.classList.add('pending');
    page.append(pending);

    const completed = document.createElement('div');
    completed.className = 'pending completed';
    page.append(completed);

    const completedtitle = document.createElement('h1');
    completed.append(completedtitle);
    completedtitle.textContent = 'Completed';
  };

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDcUM7Ozs7Ozs7VUNsQnJDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFza0NvbnN0cnVjdG9ycy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZG9zLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdGFza3MgfSBmcm9tICcuL3RvZG9zJztcclxuaW1wb3J0IHsgZGlzcGxheVBhZ2UgfSBmcm9tICcuL2luZGV4JztcclxuaW1wb3J0IHsgY3JlYXRlZFByb2plY3RzLCBwcm9qZWN0cyB9IGZyb20gJy4vcHJvamVjdHMnO1xyXG5cclxuY29uc3QgZGlzcGxheVRhc2tzID0gKCgpID0+IHtcclxuICBjb25zdCBleGlzdCA9IFtdO1xyXG5cclxuICBjb25zdCBzaG93VGFza3MgPSAoKSA9PiB7XHJcbiAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgIGlmICghZXhpc3QuaW5jbHVkZXModGFzay50aXRsZSkpIHtcclxuICAgICAgICBleGlzdC5wdXNoKHRhc2sudGl0bGUpO1xyXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHBlbmRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGVuZGluZycpO1xyXG4gICAgICAgIHBlbmRpbmcuYXBwZW5kKGRpdik7XHJcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcclxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgZGlzcGxheWNvbXBsZXRlZFRhc2tzLm1vdmVUYXNrKGNoZWNrYm94KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkaXYuYXBwZW5kKGNoZWNrYm94KTtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgZGl2LmFwcGVuZCh0aXRsZSk7XHJcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIHJldHVybiB7IHNob3dUYXNrcyB9O1xyXG59KSgpO1xyXG5cclxuY29uc3QgZGlzcGxheWNvbXBsZXRlZFRhc2tzID0gKCgpID0+IHtcclxuICBjb25zdCBtb3ZlVGFzayA9IChpbnB1dCkgPT4ge1xyXG4gICAgaWYgKGlucHV0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT0gJ3BlbmRpbmcnKSB7XHJcbiAgICAgIGNvbnN0IGNvbXBsZXRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wbGV0ZWQnKTtcclxuICAgICAgY29tcGxldGVkLmFwcGVuZChpbnB1dC5wYXJlbnRFbGVtZW50KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHBlbmRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGVuZGluZycpO1xyXG4gICAgICBwZW5kaW5nLmFwcGVuZChpbnB1dC5wYXJlbnRFbGVtZW50KTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiB7IG1vdmVUYXNrIH07XHJcbn0pKCk7XHJcblxyXG5jb25zdCBkaXNwbGF5UHJvamVjdHMgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGV4aXN0ID0gW107XHJcbiAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcclxuXHJcbiAgY29uc3Qgc2hvd1Byb2plY3RzID0gKCkgPT4ge1xyXG4gICAgY3JlYXRlZFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgaWYgKCFleGlzdC5pbmNsdWRlcyhwcm9qZWN0LnRpdGxlKSkge1xyXG4gICAgICAgIGV4aXN0LnB1c2gocHJvamVjdC50aXRsZSk7XHJcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kKG5ld1Byb2plY3QpO1xyXG4gICAgICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xyXG4gICAgICAgIG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgbGV0IG1haW5Qcm9qZWN0ID0gbmV3IHByb2plY3RzKHByb2plY3QudGl0bGUpO1xyXG4gICAgICAgICAgZGlzcGxheVBhZ2UocHJvamVjdC50aXRsZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcbiAgcmV0dXJuIHsgc2hvd1Byb2plY3RzIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBkaXNwbGF5VGFza3MsIGRpc3BsYXlQcm9qZWN0cyB9O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVEYXlUb2RvcyB9IGZyb20gJy4vdGFza0NvbnN0cnVjdG9ycyc7XHJcbmltcG9ydCB7IGNyZWF0ZVByb2plY3RUb2RvcyB9IGZyb20gJy4vdGFza0NvbnN0cnVjdG9ycyc7XHJcblxyXG5sZXQgYWN0aXZlUGFnZSA9IG5ldyBjcmVhdGVEYXlUb2RvcygndG9kYXknKTtcclxuYWN0aXZlUGFnZS5wcm9qZWN0KCk7XHJcbmFjdGl2ZVBhZ2UuaW5wdXRzKCk7XHJcbmNvbnN0IG5leHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xyXG5jb25zdCBidXR0b25zID0gQXJyYXkuZnJvbShuZXh0KTtcclxuZm9yIChsZXQgaSA9IDA7IGkgPCBidXR0b25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgYnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBkaXNwbGF5UGFnZShidXR0b25zW2ldLnRleHRDb250ZW50KTtcclxuICB9KTtcclxufVxyXG5cclxuY29uc3QgZGlzcGxheVBhZ2UgPSAoYnV0dG9uKSA9PiB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgY29uc3QgZ2V0ZGl2ID0gY29udGVudC5xdWVyeVNlbGVjdG9yKGAuJHtidXR0b259YCk7XHJcbiAgaWYgKGNvbnRlbnQuY29udGFpbnMoZ2V0ZGl2KSkge1xyXG4gICAgY29uc3QgZGl2cyA9IGNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnI2dyb3VwJyk7XHJcbiAgICBBcnJheS5mcm9tKGRpdnMpLmZvckVhY2goKGRpdikgPT4ge1xyXG4gICAgICBpZiAoZGl2LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PT0gZ2V0ZGl2LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzaG93Jyk7XHJcbiAgICAgICAgZGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdoaWRlICcpO1xyXG4gICAgICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5sb2coJ21lJyk7XHJcbiAgICBjb25zdCBoaWRlID0gY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCcjZ3JvdXAnKTtcclxuICAgIGhpZGUuZm9yRWFjaCgoZGl2KSA9PiB7XHJcbiAgICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSk7XHJcbiAgICBjcmVhdGVQYWdlKGJ1dHRvbik7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlUGFnZSA9IChidXR0b24pID0+IHtcclxuICBzd2l0Y2ggKGJ1dHRvbikge1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYWN0aXZlUGFnZSA9IG5ldyBjcmVhdGVQcm9qZWN0VG9kb3MoYnV0dG9uKTtcclxuICAgICAgYWN0aXZlUGFnZS5wcm9qZWN0KCk7XHJcbiAgICAgIGFjdGl2ZVBhZ2UuaW5wdXRzKCk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlUGFnZSwgZGlzcGxheVBhZ2UgfTtcclxuIiwiaW1wb3J0IHsgdG9kb3MgfSBmcm9tICcuL3RvZG9zJztcclxuaW1wb3J0IHsgZGlzcGxheVByb2plY3RzIH0gZnJvbSAnLi9ET00nO1xyXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUnKTtcclxuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XHJcblxyXG5jb25zdCBjcmVhdGVkUHJvamVjdHMgPSBbXTtcclxuXHJcbmNsYXNzIHByb2plY3RzIHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy50YXNrcyA9IFtdO1xyXG4gIH1cclxuICBhZGRUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbikge1xyXG4gICAgbGV0IHRhc2sgPSBuZXcgdG9kb3ModGl0bGUsIGRlc2NyaXB0aW9uKTtcclxuICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZVByb2plY3QgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGFkZFByb2plY3QgPSAodGl0bGUpID0+IHtcclxuICAgIGxldCBwcm9qZWN0ID0gbmV3IHByb2plY3RzKHRpdGxlKTtcclxuICAgIGNyZWF0ZWRQcm9qZWN0cy5wdXNoKHByb2plY3QpO1xyXG4gIH07XHJcbiAgcmV0dXJuIHsgYWRkUHJvamVjdCB9O1xyXG59KSgpO1xyXG5cclxuY29uc3QgY3JlYXRlUHJvamVjdFRhc2sgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGNyZWF0ZVByb2plY3RUYXNrID0gKCkgPT4ge1xyXG4gICAgY3JlYXRlUHJvamVjdC5wcm9qZWN0LmFkZFRhc2soJ3dhdGNoIHNsYW0gZHVuaycsICdpcyBpdCBnb29kIHRob3VnaCcpO1xyXG4gIH07XHJcbn0pKCk7XHJcblxyXG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGNyZWF0ZVByb2plY3QuYWRkUHJvamVjdChpbnB1dC52YWx1ZSk7XHJcbiAgZGlzcGxheVByb2plY3RzLnNob3dQcm9qZWN0cygpO1xyXG59KTtcclxuXHJcbmV4cG9ydCB7IHByb2plY3RzLCBjcmVhdGVkUHJvamVjdHMgfTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlVGFza3MgfSBmcm9tICcuL3RvZG9zJztcclxuaW1wb3J0IHsgZGlzcGxheVRhc2tzIH0gZnJvbSAnLi9ET00nO1xyXG5cclxuY2xhc3MgY3JlYXRlUHJvamVjdFRvZG9zIHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gIH1cclxuXHJcbiAgcHJvamVjdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG5cclxuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHBhZ2UuY2xhc3NOYW1lID0gYCR7dGhpcy50aXRsZX1gO1xyXG4gICAgcGFnZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2dyb3VwJyk7XHJcbiAgICBjb250ZW50LmFwcGVuZChwYWdlKTtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIHBhZ2UuYXBwZW5kKHRpdGxlKTtcclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGhpcy50aXRsZTtcclxuXHJcbiAgICBjb25zdCBwZW5kaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwZW5kaW5nLmNsYXNzTGlzdC5hZGQoJ3BlbmRpbmcnKTtcclxuICAgIHBhZ2UuYXBwZW5kKHBlbmRpbmcpO1xyXG5cclxuICAgIGNvbnN0IGNvbXBsZXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29tcGxldGVkLmNsYXNzTmFtZSA9ICdwZW5kaW5nIGNvbXBsZXRlZCc7XHJcbiAgICBwYWdlLmFwcGVuZChjb21wbGV0ZWQpO1xyXG5cclxuICAgIGNvbnN0IGNvbXBsZXRlZHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIGNvbXBsZXRlZC5hcHBlbmQoY29tcGxldGVkdGl0bGUpO1xyXG4gICAgY29tcGxldGVkdGl0bGUudGV4dENvbnRlbnQgPSAnQ29tcGxldGVkJztcclxuICB9O1xyXG5cclxuICBpbnB1dHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGhpcy50aXRsZX1gKTtcclxuICAgIGNvbnN0IGFkZFRhc2tCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhZGRUYXNrQnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzaycpO1xyXG4gICAgcGFnZS5hcHBlbmQoYWRkVGFza0J1dHRvbnMpO1xyXG5cclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0aGlzLnRpdGxlfWApO1xyXG4gICAgYWRkVGFza0J1dHRvbnMuYXBwZW5kKGlucHV0KTtcclxuICAgIGNvbnN0IHZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy50aXRsZX1gKTtcclxuXHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZCcpO1xyXG4gICAgYWRkVGFza0J1dHRvbnMuYXBwZW5kKGJ1dHRvbik7XHJcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgY3JlYXRlVGFza3MuYWRkVGFzayh2YWx1ZS52YWx1ZSwgJ3NvbWUgcmFuZG9tIHdvcmRzJyk7XHJcbiAgICAgIGRpc3BsYXlUYXNrcy5zaG93VGFza3MoKTtcclxuICAgIH0pO1xyXG4gIH07XHJcbn1cclxuXHJcbmNsYXNzIGNyZWF0ZURheVRvZG9zIGV4dGVuZHMgY3JlYXRlUHJvamVjdFRvZG9zIHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xyXG4gICAgc3VwZXIodGl0bGUpO1xyXG4gICAgdGhpcy50aXRsZSA9ICdUb2RheSc7XHJcbiAgfVxyXG5cclxuICBpbnB1dHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGhpcy50aXRsZX1gKTtcclxuICAgIGNvbnN0IGFkZFRhc2tCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhZGRUYXNrQnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzaycpO1xyXG4gICAgcGFnZS5hcHBlbmQoYWRkVGFza0J1dHRvbnMpO1xyXG5cclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0aGlzLnRpdGxlfWApO1xyXG4gICAgYWRkVGFza0J1dHRvbnMuYXBwZW5kKGlucHV0KTtcclxuICAgIGNvbnN0IHZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy50aXRsZX1gKTtcclxuXHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZCcpO1xyXG4gICAgYWRkVGFza0J1dHRvbnMuYXBwZW5kKGJ1dHRvbik7XHJcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgY3JlYXRlVGFza3MuYWRkVGFzayh2YWx1ZS52YWx1ZSwgJ3NvbWUgcmFuZG9tIHdvcmRzJyk7XHJcbiAgICAgIGRpc3BsYXlUYXNrcy5zaG93VGFza3MoKTtcclxuICAgIH0pO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVByb2plY3RUb2RvcywgY3JlYXRlRGF5VG9kb3MgfTtcclxuIiwiaW1wb3J0IHsgZGlzcGxheVRhc2tzIH0gZnJvbSAnLi9ET00nO1xyXG5jb25zdCB0YXNrcyA9IFtdO1xyXG5cclxuY2xhc3MgdG9kb3Mge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbikge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgY3JlYXRlVGFza3MgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGFkZFRhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uKSA9PiB7XHJcbiAgICBsZXQgdGFzayA9IG5ldyB0b2Rvcyh0aXRsZSwgZGVzY3JpcHRpb24pO1xyXG4gICAgdGFza3MucHVzaCh0YXNrKTtcclxuICB9O1xyXG4gIHJldHVybiB7IGFkZFRhc2sgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCB7IHRvZG9zLCBjcmVhdGVUYXNrcywgdGFza3MgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==