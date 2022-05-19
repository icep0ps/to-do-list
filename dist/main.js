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
/* harmony import */ var _taskConstructors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskConstructors */ "./src/taskConstructors.js");





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

  const showProjectTasks = () => {
    _taskConstructors__WEBPACK_IMPORTED_MODULE_3__.currentProject.forEach((projectsTask) => {
      if (!exist.includes(projectsTask.title)) {
        exist.push(projectsTask.title);

        const div = document.createElement('div');
        const pending = _taskConstructors__WEBPACK_IMPORTED_MODULE_3__.currentdiv.querySelector('.pending');
        pending.append(div);
        div.classList.add('task');
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.addEventListener('click', (e) => {
          displaycompletedProjectTasks.moveTask(checkbox);
        });
        div.append(checkbox);
        const title = document.createElement('label');
        div.append(title);
        title.textContent = projectsTask.title;
      }
    });
  };
  return { showTasks, showProjectTasks };
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

const displaycompletedProjectTasks = (() => {
  const moveTask = (input) => {
    if (input.parentElement.parentElement.getAttribute('class') == 'pending') {
      const completed = _taskConstructors__WEBPACK_IMPORTED_MODULE_3__.currentdiv.querySelector('.completed');
      completed.append(input.parentElement);
    } else {
      const pending = _taskConstructors__WEBPACK_IMPORTED_MODULE_3__.currentdiv.querySelector('.pending');
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
/* harmony export */   "createProjectPage": () => (/* binding */ createProjectPage),
/* harmony export */   "displayPage": () => (/* binding */ displayPage)
/* harmony export */ });
/* harmony import */ var _taskConstructors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskConstructors */ "./src/taskConstructors.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");




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
    createProjectPage.createPage(button);
  }
};

const createProjectPage = (() => {
  const createPage = (button) => {
    switch (button) {
      default:
        createReal(button);
        activePage = new _taskConstructors__WEBPACK_IMPORTED_MODULE_0__.createProjectTodos(button);
        activePage.project();
        activePage.inputs();
    }
  };

  const createReal = (button) => {
    let project = new _projects__WEBPACK_IMPORTED_MODULE_1__.projects(button);
    return project;
  };
  return { createPage, createReal };
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
    console.log(createdProjects);
  };
  return { addProject };
})();

button.addEventListener('click', (e) => {
  console.log('run');
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
      _projects__WEBPACK_IMPORTED_MODULE_3__.createdProjects.forEach((project) => {
        if (project.title == page.getAttribute('class')) {
          console.log('yes');
          project.addTask(value.value, 'some randome');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0EsVUFBVSwrREFBNkI7QUFDdkM7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFdBQVc7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxXQUFXO0FBQzNDO0FBQ0EsNkNBQTZDLFdBQVc7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx1REFBbUI7QUFDekIsTUFBTSx3REFBc0I7QUFDNUIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUMwRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEdyQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7QUFDRDtBQUNxQzs7Ozs7OztVQ2xCckM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrQ29uc3RydWN0b3JzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0YXNrcyB9IGZyb20gJy4vdG9kb3MnO1xyXG5pbXBvcnQgeyBkaXNwbGF5UGFnZSB9IGZyb20gJy4vaW5kZXgnO1xyXG5pbXBvcnQgeyBjcmVhdGVkUHJvamVjdHMsIHByb2plY3RzIH0gZnJvbSAnLi9wcm9qZWN0cyc7XHJcbmltcG9ydCB7IGN1cnJlbnRQcm9qZWN0LCBjdXJyZW50ZGl2IH0gZnJvbSAnLi90YXNrQ29uc3RydWN0b3JzJztcclxuXHJcbmNvbnN0IGRpc3BsYXlUYXNrcyA9ICgoKSA9PiB7XHJcbiAgY29uc3QgZXhpc3QgPSBbXTtcclxuXHJcbiAgY29uc3Qgc2hvd1Rhc2tzID0gKCkgPT4ge1xyXG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICBpZiAoIWV4aXN0LmluY2x1ZGVzKHRhc2sudGl0bGUpKSB7XHJcbiAgICAgICAgZXhpc3QucHVzaCh0YXNrLnRpdGxlKTtcclxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBwZW5kaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBlbmRpbmcnKTtcclxuICAgICAgICBwZW5kaW5nLmFwcGVuZChkaXYpO1xyXG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XHJcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xyXG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgIGRpc3BsYXljb21wbGV0ZWRUYXNrcy5tb3ZlVGFzayhjaGVja2JveCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZGl2LmFwcGVuZChjaGVja2JveCk7XHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGRpdi5hcHBlbmQodGl0bGUpO1xyXG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2hvd1Byb2plY3RUYXNrcyA9ICgpID0+IHtcclxuICAgIGN1cnJlbnRQcm9qZWN0LmZvckVhY2goKHByb2plY3RzVGFzaykgPT4ge1xyXG4gICAgICBpZiAoIWV4aXN0LmluY2x1ZGVzKHByb2plY3RzVGFzay50aXRsZSkpIHtcclxuICAgICAgICBleGlzdC5wdXNoKHByb2plY3RzVGFzay50aXRsZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHBlbmRpbmcgPSBjdXJyZW50ZGl2LnF1ZXJ5U2VsZWN0b3IoJy5wZW5kaW5nJyk7XHJcbiAgICAgICAgcGVuZGluZy5hcHBlbmQoZGl2KTtcclxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcclxuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICBkaXNwbGF5Y29tcGxldGVkUHJvamVjdFRhc2tzLm1vdmVUYXNrKGNoZWNrYm94KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkaXYuYXBwZW5kKGNoZWNrYm94KTtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgZGl2LmFwcGVuZCh0aXRsZSk7XHJcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0c1Rhc2sudGl0bGU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcbiAgcmV0dXJuIHsgc2hvd1Rhc2tzLCBzaG93UHJvamVjdFRhc2tzIH07XHJcbn0pKCk7XHJcblxyXG5jb25zdCBkaXNwbGF5Y29tcGxldGVkVGFza3MgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IG1vdmVUYXNrID0gKGlucHV0KSA9PiB7XHJcbiAgICBpZiAoaW5wdXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PSAncGVuZGluZycpIHtcclxuICAgICAgY29uc3QgY29tcGxldGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlZCcpO1xyXG4gICAgICBjb21wbGV0ZWQuYXBwZW5kKGlucHV0LnBhcmVudEVsZW1lbnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgcGVuZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wZW5kaW5nJyk7XHJcbiAgICAgIHBlbmRpbmcuYXBwZW5kKGlucHV0LnBhcmVudEVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIHsgbW92ZVRhc2sgfTtcclxufSkoKTtcclxuXHJcbmNvbnN0IGRpc3BsYXljb21wbGV0ZWRQcm9qZWN0VGFza3MgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IG1vdmVUYXNrID0gKGlucHV0KSA9PiB7XHJcbiAgICBpZiAoaW5wdXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PSAncGVuZGluZycpIHtcclxuICAgICAgY29uc3QgY29tcGxldGVkID0gY3VycmVudGRpdi5xdWVyeVNlbGVjdG9yKCcuY29tcGxldGVkJyk7XHJcbiAgICAgIGNvbXBsZXRlZC5hcHBlbmQoaW5wdXQucGFyZW50RWxlbWVudCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBwZW5kaW5nID0gY3VycmVudGRpdi5xdWVyeVNlbGVjdG9yKCcucGVuZGluZycpO1xyXG4gICAgICBwZW5kaW5nLmFwcGVuZChpbnB1dC5wYXJlbnRFbGVtZW50KTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiB7IG1vdmVUYXNrIH07XHJcbn0pKCk7XHJcblxyXG5jb25zdCBkaXNwbGF5UHJvamVjdHMgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGV4aXN0ID0gW107XHJcbiAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcclxuXHJcbiAgY29uc3Qgc2hvd1Byb2plY3RzID0gKCkgPT4ge1xyXG4gICAgY3JlYXRlZFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgaWYgKCFleGlzdC5pbmNsdWRlcyhwcm9qZWN0LnRpdGxlKSkge1xyXG4gICAgICAgIGV4aXN0LnB1c2gocHJvamVjdC50aXRsZSk7XHJcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kKG5ld1Byb2plY3QpO1xyXG4gICAgICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xyXG4gICAgICAgIG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgbGV0IG1haW5Qcm9qZWN0ID0gbmV3IHByb2plY3RzKHByb2plY3QudGl0bGUpO1xyXG4gICAgICAgICAgZGlzcGxheVBhZ2UocHJvamVjdC50aXRsZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcbiAgcmV0dXJuIHsgc2hvd1Byb2plY3RzIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBkaXNwbGF5VGFza3MsIGRpc3BsYXlQcm9qZWN0cyB9O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVEYXlUb2RvcyB9IGZyb20gJy4vdGFza0NvbnN0cnVjdG9ycyc7XHJcbmltcG9ydCB7IGNyZWF0ZVByb2plY3RUb2RvcyB9IGZyb20gJy4vdGFza0NvbnN0cnVjdG9ycyc7XHJcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSAnLi9wcm9qZWN0cyc7XHJcblxyXG5sZXQgYWN0aXZlUGFnZSA9IG5ldyBjcmVhdGVEYXlUb2RvcygndG9kYXknKTtcclxuYWN0aXZlUGFnZS5wcm9qZWN0KCk7XHJcbmFjdGl2ZVBhZ2UuaW5wdXRzKCk7XHJcbmNvbnN0IG5leHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xyXG5jb25zdCBidXR0b25zID0gQXJyYXkuZnJvbShuZXh0KTtcclxuZm9yIChsZXQgaSA9IDA7IGkgPCBidXR0b25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgYnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBkaXNwbGF5UGFnZShidXR0b25zW2ldLnRleHRDb250ZW50KTtcclxuICB9KTtcclxufVxyXG5cclxuY29uc3QgZGlzcGxheVBhZ2UgPSAoYnV0dG9uKSA9PiB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgY29uc3QgZ2V0ZGl2ID0gY29udGVudC5xdWVyeVNlbGVjdG9yKGAuJHtidXR0b259YCk7XHJcbiAgaWYgKGNvbnRlbnQuY29udGFpbnMoZ2V0ZGl2KSkge1xyXG4gICAgY29uc3QgZGl2cyA9IGNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnI2dyb3VwJyk7XHJcbiAgICBBcnJheS5mcm9tKGRpdnMpLmZvckVhY2goKGRpdikgPT4ge1xyXG4gICAgICBpZiAoZGl2LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PT0gZ2V0ZGl2LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzaG93Jyk7XHJcbiAgICAgICAgZGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdoaWRlICcpO1xyXG4gICAgICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5sb2coJ21lJyk7XHJcbiAgICBjb25zdCBoaWRlID0gY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCcjZ3JvdXAnKTtcclxuICAgIGhpZGUuZm9yRWFjaCgoZGl2KSA9PiB7XHJcbiAgICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSk7XHJcbiAgICBjcmVhdGVQcm9qZWN0UGFnZS5jcmVhdGVQYWdlKGJ1dHRvbik7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlUHJvamVjdFBhZ2UgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGNyZWF0ZVBhZ2UgPSAoYnV0dG9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGJ1dHRvbikge1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGNyZWF0ZVJlYWwoYnV0dG9uKTtcclxuICAgICAgICBhY3RpdmVQYWdlID0gbmV3IGNyZWF0ZVByb2plY3RUb2RvcyhidXR0b24pO1xyXG4gICAgICAgIGFjdGl2ZVBhZ2UucHJvamVjdCgpO1xyXG4gICAgICAgIGFjdGl2ZVBhZ2UuaW5wdXRzKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY3JlYXRlUmVhbCA9IChidXR0b24pID0+IHtcclxuICAgIGxldCBwcm9qZWN0ID0gbmV3IHByb2plY3RzKGJ1dHRvbik7XHJcbiAgICByZXR1cm4gcHJvamVjdDtcclxuICB9O1xyXG4gIHJldHVybiB7IGNyZWF0ZVBhZ2UsIGNyZWF0ZVJlYWwgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCB7IGRpc3BsYXlQYWdlLCBjcmVhdGVQcm9qZWN0UGFnZSB9O1xyXG4iLCJpbXBvcnQgeyB0b2RvcyB9IGZyb20gJy4vdG9kb3MnO1xyXG5pbXBvcnQgeyBkaXNwbGF5UHJvamVjdHMgfSBmcm9tICcuL0RPTSc7XHJcbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZScpO1xyXG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcclxuXHJcbmNvbnN0IGNyZWF0ZWRQcm9qZWN0cyA9IFtdO1xyXG5cclxuY2xhc3MgcHJvamVjdHMge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLnRhc2tzID0gW107XHJcbiAgfVxyXG4gIGFkZFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uKSB7XHJcbiAgICBsZXQgdGFzayA9IG5ldyB0b2Rvcyh0aXRsZSwgZGVzY3JpcHRpb24pO1xyXG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgY3JlYXRlUHJvamVjdCA9ICgoKSA9PiB7XHJcbiAgY29uc3QgYWRkUHJvamVjdCA9ICh0aXRsZSkgPT4ge1xyXG4gICAgbGV0IHByb2plY3QgPSBuZXcgcHJvamVjdHModGl0bGUpO1xyXG4gICAgY3JlYXRlZFByb2plY3RzLnB1c2gocHJvamVjdCk7XHJcbiAgICBjb25zb2xlLmxvZyhjcmVhdGVkUHJvamVjdHMpO1xyXG4gIH07XHJcbiAgcmV0dXJuIHsgYWRkUHJvamVjdCB9O1xyXG59KSgpO1xyXG5cclxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBjb25zb2xlLmxvZygncnVuJyk7XHJcbiAgY3JlYXRlUHJvamVjdC5hZGRQcm9qZWN0KGlucHV0LnZhbHVlKTtcclxuICBkaXNwbGF5UHJvamVjdHMuc2hvd1Byb2plY3RzKCk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IHsgcHJvamVjdHMsIGNyZWF0ZWRQcm9qZWN0cyB9O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVUYXNrcyB9IGZyb20gJy4vdG9kb3MnO1xyXG5pbXBvcnQgeyBkaXNwbGF5VGFza3MgfSBmcm9tICcuL0RPTSc7XHJcbmltcG9ydCB7IGNyZWF0ZVByb2plY3RQYWdlIH0gZnJvbSAnLi9pbmRleCc7XHJcbmltcG9ydCB7IGNyZWF0ZWRQcm9qZWN0cyB9IGZyb20gJy4vcHJvamVjdHMnO1xyXG5cclxuLy9jcmVhdGUgbXV0aXBsZSBwcm9qZWN0c1xyXG5cclxubGV0IGN1cnJlbnRQcm9qZWN0ID0gJyc7XHJcbmxldCBjdXJyZW50ZGl2ID0gJyc7XHJcblxyXG5jbGFzcyBjcmVhdGVQcm9qZWN0VG9kb3Mge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgfVxyXG5cclxuICBwcm9qZWN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcblxyXG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcGFnZS5jbGFzc05hbWUgPSBgJHt0aGlzLnRpdGxlfWA7XHJcbiAgICBwYWdlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZ3JvdXAnKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kKHBhZ2UpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgcGFnZS5hcHBlbmQodGl0bGUpO1xyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLnRpdGxlO1xyXG5cclxuICAgIGNvbnN0IHBlbmRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHBlbmRpbmcuY2xhc3NMaXN0LmFkZCgncGVuZGluZycpO1xyXG4gICAgcGFnZS5hcHBlbmQocGVuZGluZyk7XHJcblxyXG4gICAgY29uc3QgY29tcGxldGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb21wbGV0ZWQuY2xhc3NOYW1lID0gJ3BlbmRpbmcgY29tcGxldGVkJztcclxuICAgIHBhZ2UuYXBwZW5kKGNvbXBsZXRlZCk7XHJcblxyXG4gICAgY29uc3QgY29tcGxldGVkdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgY29tcGxldGVkLmFwcGVuZChjb21wbGV0ZWR0aXRsZSk7XHJcbiAgICBjb21wbGV0ZWR0aXRsZS50ZXh0Q29udGVudCA9ICdDb21wbGV0ZWQnO1xyXG4gIH07XHJcblxyXG4gIGlucHV0cyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLnRpdGxlfWApO1xyXG4gICAgY29uc3QgYWRkVGFza0J1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGFkZFRhc2tCdXR0b25zLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrJyk7XHJcbiAgICBwYWdlLmFwcGVuZChhZGRUYXNrQnV0dG9ucyk7XHJcblxyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGAke3RoaXMudGl0bGV9YCk7XHJcbiAgICBhZGRUYXNrQnV0dG9ucy5hcHBlbmQoaW5wdXQpO1xyXG4gICAgY29uc3QgdmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLnRpdGxlfWApO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkJyk7XHJcbiAgICBhZGRUYXNrQnV0dG9ucy5hcHBlbmQoYnV0dG9uKTtcclxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBjcmVhdGVkUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9qZWN0LnRpdGxlID09IHBhZ2UuZ2V0QXR0cmlidXRlKCdjbGFzcycpKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygneWVzJyk7XHJcbiAgICAgICAgICBwcm9qZWN0LmFkZFRhc2sodmFsdWUudmFsdWUsICdzb21lIHJhbmRvbWUnKTtcclxuICAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdC50YXNrcztcclxuICAgICAgICAgIGN1cnJlbnRkaXYgPSBwYWdlO1xyXG4gICAgICAgICAgZGlzcGxheVRhc2tzLnNob3dQcm9qZWN0VGFza3MoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxufVxyXG5cclxuY2xhc3MgY3JlYXRlRGF5VG9kb3MgZXh0ZW5kcyBjcmVhdGVQcm9qZWN0VG9kb3Mge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XHJcbiAgICBzdXBlcih0aXRsZSk7XHJcbiAgICB0aGlzLnRpdGxlID0gJ1RvZGF5JztcclxuICB9XHJcblxyXG4gIGlucHV0cyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLnRpdGxlfWApO1xyXG4gICAgY29uc3QgYWRkVGFza0J1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGFkZFRhc2tCdXR0b25zLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrJyk7XHJcbiAgICBwYWdlLmFwcGVuZChhZGRUYXNrQnV0dG9ucyk7XHJcblxyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGAke3RoaXMudGl0bGV9YCk7XHJcbiAgICBhZGRUYXNrQnV0dG9ucy5hcHBlbmQoaW5wdXQpO1xyXG4gICAgY29uc3QgdmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLnRpdGxlfWApO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkJyk7XHJcbiAgICBhZGRUYXNrQnV0dG9ucy5hcHBlbmQoYnV0dG9uKTtcclxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBjcmVhdGVUYXNrcy5hZGRUYXNrKHZhbHVlLnZhbHVlLCAnc29tZSByYW5kb20gd29yZHMnKTtcclxuICAgICAgZGlzcGxheVRhc2tzLnNob3dUYXNrcygpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdFRvZG9zLCBjcmVhdGVEYXlUb2RvcywgY3VycmVudFByb2plY3QsIGN1cnJlbnRkaXYgfTtcclxuIiwiaW1wb3J0IHsgZGlzcGxheVRhc2tzIH0gZnJvbSAnLi9ET00nO1xyXG5jb25zdCB0YXNrcyA9IFtdO1xyXG5cclxuY2xhc3MgdG9kb3Mge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbikge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgY3JlYXRlVGFza3MgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGFkZFRhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uKSA9PiB7XHJcbiAgICBsZXQgdGFzayA9IG5ldyB0b2Rvcyh0aXRsZSwgZGVzY3JpcHRpb24pO1xyXG4gICAgdGFza3MucHVzaCh0YXNrKTtcclxuICB9O1xyXG4gIHJldHVybiB7IGFkZFRhc2sgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCB7IHRvZG9zLCBjcmVhdGVUYXNrcywgdGFza3MgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==