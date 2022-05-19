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
/* harmony export */   "displayTasks": () => (/* binding */ displayTasks),
/* harmony export */   "setActiveTab": () => (/* binding */ setActiveTab)
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
        const date = document.createElement('input');
        date.setAttribute('type', 'date');
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
        const date = document.createElement('input');
        date.setAttribute('type', 'date');
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
      const completed = _taskConstructors__WEBPACK_IMPORTED_MODULE_3__.currentdiv.querySelector('.completed');
      completed.append(input.parentElement);
      const span = completed.querySelector('span');
      console.log(span);
      completedTasks++;
      span.textContent = completedTasks;
    } else {
      const pending = _taskConstructors__WEBPACK_IMPORTED_MODULE_3__.currentdiv.querySelector('.pending');
      pending.append(input.parentElement);
      const completed = _taskConstructors__WEBPACK_IMPORTED_MODULE_3__.currentdiv.querySelector('.completed');
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
    _projects__WEBPACK_IMPORTED_MODULE_2__.createdProjects.forEach((project) => {
      if (!exist.includes(project.title)) {
        exist.push(project.title);
        const newProject = document.createElement('li');
        projectList.append(newProject);
        newProject.textContent = project.title;
        newProject.addEventListener('click', (e) => {
          setActiveTab(e.target);
          (0,_index__WEBPACK_IMPORTED_MODULE_1__.displayPage)(project.title);
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
      console.log('its there');
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
/* harmony export */   "createProjectPage": () => (/* binding */ createProjectPage),
/* harmony export */   "displayPage": () => (/* binding */ displayPage)
/* harmony export */ });
/* harmony import */ var _taskConstructors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskConstructors */ "./src/taskConstructors.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");





const activeButton = (() => {
  const li = document.querySelectorAll('li');
  const buttons = Array.from(li);
  function getButton() {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', (e) => {
        (0,_DOM__WEBPACK_IMPORTED_MODULE_2__.setActiveTab)(e.target);
        displayPage(buttons[i].textContent);
      });
    }
  }
  return { getButton };
})();

let activePage = new _taskConstructors__WEBPACK_IMPORTED_MODULE_0__.createDayTodos('today');
activePage.project();
activePage.inputs();
activeButton.getButton();

const displayPage = (button) => {
  const content = document.querySelector('.content');
  const getdiv = content.querySelector(`[data-name="${button}"]`);
  if (content.contains(getdiv)) {
    const divs = content.querySelectorAll('#group');
    Array.from(divs).forEach((div) => {
      if (div.getAttribute('class') === getdiv.getAttribute('class')) {
        div.style.display = 'flex';
        activeButton.getButton();
      } else {
        div.style.display = 'none';
        activeButton.getButton();
      }
    });
  } else {
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
        activePage = new _taskConstructors__WEBPACK_IMPORTED_MODULE_0__.createProjectTodos(button);
        activePage.project();
        activePage.inputs();
        activeButton.getButton();
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
/* harmony export */   "projects": () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos */ "./src/todos.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");


// const input = document.querySelector('#project-name');
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
    console.log(createdProjects);
  };
  return { addProject };
})();

const createInput = () => {
  button1.style.display = 'none';
  const div = document.querySelector('.buttons');
  const input = document.createElement('input');
  input.setAttribute('id', 'createInput');
  const createButton = document.createElement('button');
  createButton.setAttribute('id', 'createButton');
  createButton.textContent = 'Create';
  div.append(input);
  div.append(createButton);
  createButton.style.display = 'block';
  createButton.addEventListener('click', (e) => {
    createProject.addProject(input.value);
    _DOM__WEBPACK_IMPORTED_MODULE_1__.displayProjects.showProjects();
    button1.style.display = 'block';
    input.remove();
    createButton.remove();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrQ29uc3RydWN0b3JzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0YXNrcyB9IGZyb20gJy4vdG9kb3MnO1xyXG5pbXBvcnQgeyBkaXNwbGF5UGFnZSB9IGZyb20gJy4vaW5kZXgnO1xyXG5pbXBvcnQgeyBjcmVhdGVkUHJvamVjdHMsIHByb2plY3RzIH0gZnJvbSAnLi9wcm9qZWN0cyc7XHJcbmltcG9ydCB7IGN1cnJlbnRQcm9qZWN0LCBjdXJyZW50ZGl2IH0gZnJvbSAnLi90YXNrQ29uc3RydWN0b3JzJztcclxuXHJcbmNvbnN0IGRpc3BsYXlUYXNrcyA9ICgoKSA9PiB7XHJcbiAgY29uc3QgZXhpc3QgPSBbXTtcclxuXHJcbiAgY29uc3Qgc2hvd1Rhc2tzID0gKCkgPT4ge1xyXG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICBpZiAoIWV4aXN0LmluY2x1ZGVzKHRhc2sudGl0bGUpKSB7XHJcbiAgICAgICAgZXhpc3QucHVzaCh0YXNrLnRpdGxlKTtcclxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBwZW5kaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBlbmRpbmcnKTtcclxuICAgICAgICBwZW5kaW5nLmFwcGVuZChkaXYpO1xyXG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XHJcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcclxuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICBkaXNwbGF5Y29tcGxldGVkVGFza3MubW92ZVRhc2soY2hlY2tib3gpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRpdi5hcHBlbmQoY2hlY2tib3gpO1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBkaXYuYXBwZW5kKHRpdGxlKTtcclxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNob3dQcm9qZWN0VGFza3MgPSAoKSA9PiB7XHJcbiAgICBjdXJyZW50UHJvamVjdC5mb3JFYWNoKChwcm9qZWN0c1Rhc2spID0+IHtcclxuICAgICAgaWYgKCFleGlzdC5pbmNsdWRlcyhwcm9qZWN0c1Rhc2sudGl0bGUpKSB7XHJcbiAgICAgICAgZXhpc3QucHVzaChwcm9qZWN0c1Rhc2sudGl0bGUpO1xyXG5cclxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBwZW5kaW5nID0gY3VycmVudGRpdi5xdWVyeVNlbGVjdG9yKCcucGVuZGluZycpO1xyXG4gICAgICAgIHBlbmRpbmcuYXBwZW5kKGRpdik7XHJcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcclxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xyXG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgIGRpc3BsYXljb21wbGV0ZWRQcm9qZWN0VGFza3MubW92ZVRhc2soY2hlY2tib3gpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRpdi5hcHBlbmQoY2hlY2tib3gpO1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBkaXYuYXBwZW5kKHRpdGxlKTtcclxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHByb2plY3RzVGFzay50aXRsZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuICByZXR1cm4geyBzaG93VGFza3MsIHNob3dQcm9qZWN0VGFza3MgfTtcclxufSkoKTtcclxuXHJcbmNvbnN0IGRpc3BsYXljb21wbGV0ZWRUYXNrcyA9ICgoKSA9PiB7XHJcbiAgbGV0IGNvbXBsZXRlZFRhc2tzID0gMDtcclxuICBjb25zdCBtb3ZlVGFzayA9IChpbnB1dCkgPT4ge1xyXG4gICAgaWYgKGlucHV0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT0gJ3BlbmRpbmcnKSB7XHJcbiAgICAgIGNvbnN0IGNvbXBsZXRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wbGV0ZWQnKTtcclxuICAgICAgY29tcGxldGVkLmFwcGVuZChpbnB1dC5wYXJlbnRFbGVtZW50KTtcclxuICAgICAgY29uc3Qgc3BhbiA9IGNvbXBsZXRlZC5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHNwYW4pO1xyXG4gICAgICBjb21wbGV0ZWRUYXNrcysrO1xyXG4gICAgICBzcGFuLnRleHRDb250ZW50ID0gY29tcGxldGVkVGFza3M7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBwZW5kaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBlbmRpbmcnKTtcclxuICAgICAgcGVuZGluZy5hcHBlbmQoaW5wdXQucGFyZW50RWxlbWVudCk7XHJcbiAgICAgIGNvbnN0IGNvbXBsZXRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wbGV0ZWQnKTtcclxuICAgICAgY29uc3Qgc3BhbiA9IGNvbXBsZXRlZC5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHNwYW4pO1xyXG4gICAgICBjb21wbGV0ZWRUYXNrcy0tO1xyXG4gICAgICBzcGFuLnRleHRDb250ZW50ID0gY29tcGxldGVkVGFza3M7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4geyBtb3ZlVGFzayB9O1xyXG59KSgpO1xyXG5cclxuY29uc3QgZGlzcGxheWNvbXBsZXRlZFByb2plY3RUYXNrcyA9ICgoKSA9PiB7XHJcbiAgbGV0IGNvbXBsZXRlZFRhc2tzID0gMDtcclxuICBjb25zdCBtb3ZlVGFzayA9IChpbnB1dCkgPT4ge1xyXG4gICAgaWYgKGlucHV0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT0gJ3BlbmRpbmcnKSB7XHJcbiAgICAgIGNvbnN0IGNvbXBsZXRlZCA9IGN1cnJlbnRkaXYucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlZCcpO1xyXG4gICAgICBjb21wbGV0ZWQuYXBwZW5kKGlucHV0LnBhcmVudEVsZW1lbnQpO1xyXG4gICAgICBjb25zdCBzcGFuID0gY29tcGxldGVkLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcclxuICAgICAgY29uc29sZS5sb2coc3Bhbik7XHJcbiAgICAgIGNvbXBsZXRlZFRhc2tzKys7XHJcbiAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBjb21wbGV0ZWRUYXNrcztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHBlbmRpbmcgPSBjdXJyZW50ZGl2LnF1ZXJ5U2VsZWN0b3IoJy5wZW5kaW5nJyk7XHJcbiAgICAgIHBlbmRpbmcuYXBwZW5kKGlucHV0LnBhcmVudEVsZW1lbnQpO1xyXG4gICAgICBjb25zdCBjb21wbGV0ZWQgPSBjdXJyZW50ZGl2LnF1ZXJ5U2VsZWN0b3IoJy5jb21wbGV0ZWQnKTtcclxuICAgICAgY29uc3Qgc3BhbiA9IGNvbXBsZXRlZC5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHNwYW4pO1xyXG4gICAgICBjb21wbGV0ZWRUYXNrcy0tO1xyXG4gICAgICBzcGFuLnRleHRDb250ZW50ID0gY29tcGxldGVkVGFza3M7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4geyBtb3ZlVGFzayB9O1xyXG59KSgpO1xyXG5cclxuY29uc3QgZGlzcGxheVByb2plY3RzID0gKCgpID0+IHtcclxuICBjb25zdCBleGlzdCA9IFtdO1xyXG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XHJcblxyXG4gIGNvbnN0IHNob3dQcm9qZWN0cyA9ICgpID0+IHtcclxuICAgIGNyZWF0ZWRQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgIGlmICghZXhpc3QuaW5jbHVkZXMocHJvamVjdC50aXRsZSkpIHtcclxuICAgICAgICBleGlzdC5wdXNoKHByb2plY3QudGl0bGUpO1xyXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIHByb2plY3RMaXN0LmFwcGVuZChuZXdQcm9qZWN0KTtcclxuICAgICAgICBuZXdQcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcclxuICAgICAgICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgIHNldEFjdGl2ZVRhYihlLnRhcmdldCk7XHJcbiAgICAgICAgICBkaXNwbGF5UGFnZShwcm9qZWN0LnRpdGxlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuICByZXR1cm4geyBzaG93UHJvamVjdHMgfTtcclxufSkoKTtcclxuXHJcbmNvbnN0IHNldEFjdGl2ZVRhYiA9ICh0YWIpID0+IHtcclxuICBjb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcclxuICBBcnJheS5mcm9tKHRhYnMpLmZvckVhY2goKGxpKSA9PiB7XHJcbiAgICBpZiAobGkuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICBjb25zb2xlLmxvZygnaXRzIHRoZXJlJyk7XHJcbiAgICAgIGxpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGlmICh0YWIuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0YWIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhY3RpdmUnKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgeyBkaXNwbGF5VGFza3MsIGRpc3BsYXlQcm9qZWN0cywgc2V0QWN0aXZlVGFiIH07XHJcbiIsImltcG9ydCB7IGNyZWF0ZURheVRvZG9zIH0gZnJvbSAnLi90YXNrQ29uc3RydWN0b3JzJztcclxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdFRvZG9zIH0gZnJvbSAnLi90YXNrQ29uc3RydWN0b3JzJztcclxuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tICcuL3Byb2plY3RzJztcclxuaW1wb3J0IHsgc2V0QWN0aXZlVGFiIH0gZnJvbSAnLi9ET00nO1xyXG5cclxuY29uc3QgYWN0aXZlQnV0dG9uID0gKCgpID0+IHtcclxuICBjb25zdCBsaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XHJcbiAgY29uc3QgYnV0dG9ucyA9IEFycmF5LmZyb20obGkpO1xyXG4gIGZ1bmN0aW9uIGdldEJ1dHRvbigpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnV0dG9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBidXR0b25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBzZXRBY3RpdmVUYWIoZS50YXJnZXQpO1xyXG4gICAgICAgIGRpc3BsYXlQYWdlKGJ1dHRvbnNbaV0udGV4dENvbnRlbnQpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHsgZ2V0QnV0dG9uIH07XHJcbn0pKCk7XHJcblxyXG5sZXQgYWN0aXZlUGFnZSA9IG5ldyBjcmVhdGVEYXlUb2RvcygndG9kYXknKTtcclxuYWN0aXZlUGFnZS5wcm9qZWN0KCk7XHJcbmFjdGl2ZVBhZ2UuaW5wdXRzKCk7XHJcbmFjdGl2ZUJ1dHRvbi5nZXRCdXR0b24oKTtcclxuXHJcbmNvbnN0IGRpc3BsYXlQYWdlID0gKGJ1dHRvbikgPT4ge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG4gIGNvbnN0IGdldGRpdiA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtbmFtZT1cIiR7YnV0dG9ufVwiXWApO1xyXG4gIGlmIChjb250ZW50LmNvbnRhaW5zKGdldGRpdikpIHtcclxuICAgIGNvbnN0IGRpdnMgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNncm91cCcpO1xyXG4gICAgQXJyYXkuZnJvbShkaXZzKS5mb3JFYWNoKChkaXYpID0+IHtcclxuICAgICAgaWYgKGRpdi5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT09IGdldGRpdi5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykpIHtcclxuICAgICAgICBkaXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICBhY3RpdmVCdXR0b24uZ2V0QnV0dG9uKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgYWN0aXZlQnV0dG9uLmdldEJ1dHRvbigpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgaGlkZSA9IGNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnI2dyb3VwJyk7XHJcbiAgICBoaWRlLmZvckVhY2goKGRpdikgPT4ge1xyXG4gICAgICBkaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0pO1xyXG4gICAgY3JlYXRlUHJvamVjdFBhZ2UuY3JlYXRlUGFnZShidXR0b24pO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZVByb2plY3RQYWdlID0gKCgpID0+IHtcclxuICBjb25zdCBjcmVhdGVQYWdlID0gKGJ1dHRvbikgPT4ge1xyXG4gICAgc3dpdGNoIChidXR0b24pIHtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBhY3RpdmVQYWdlID0gbmV3IGNyZWF0ZVByb2plY3RUb2RvcyhidXR0b24pO1xyXG4gICAgICAgIGFjdGl2ZVBhZ2UucHJvamVjdCgpO1xyXG4gICAgICAgIGFjdGl2ZVBhZ2UuaW5wdXRzKCk7XHJcbiAgICAgICAgYWN0aXZlQnV0dG9uLmdldEJ1dHRvbigpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiB7IGNyZWF0ZVBhZ2UgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCB7IGRpc3BsYXlQYWdlLCBjcmVhdGVQcm9qZWN0UGFnZSB9O1xyXG4iLCJpbXBvcnQgeyB0b2RvcyB9IGZyb20gJy4vdG9kb3MnO1xyXG5pbXBvcnQgeyBkaXNwbGF5UHJvamVjdHMgfSBmcm9tICcuL0RPTSc7XHJcbi8vIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZScpO1xyXG5jb25zdCBidXR0b24xID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZVByb2plY3QnKTtcclxuYnV0dG9uMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ2NsaWNrZWQnKTtcclxuICBjcmVhdGVJbnB1dCgpO1xyXG59KTtcclxuXHJcbmNvbnN0IGNyZWF0ZWRQcm9qZWN0cyA9IFtdO1xyXG5cclxuY2xhc3MgcHJvamVjdHMge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLnRhc2tzID0gW107XHJcbiAgfVxyXG4gIGFkZFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uKSB7XHJcbiAgICBsZXQgdGFzayA9IG5ldyB0b2Rvcyh0aXRsZSwgZGVzY3JpcHRpb24pO1xyXG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgY3JlYXRlUHJvamVjdCA9ICgoKSA9PiB7XHJcbiAgY29uc3QgYWRkUHJvamVjdCA9ICh0aXRsZSkgPT4ge1xyXG4gICAgbGV0IHByb2plY3QgPSBuZXcgcHJvamVjdHModGl0bGUpO1xyXG4gICAgY3JlYXRlZFByb2plY3RzLnB1c2gocHJvamVjdCk7XHJcbiAgICBjb25zb2xlLmxvZyhjcmVhdGVkUHJvamVjdHMpO1xyXG4gIH07XHJcbiAgcmV0dXJuIHsgYWRkUHJvamVjdCB9O1xyXG59KSgpO1xyXG5cclxuY29uc3QgY3JlYXRlSW5wdXQgPSAoKSA9PiB7XHJcbiAgYnV0dG9uMS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25zJyk7XHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnY3JlYXRlSW5wdXQnKTtcclxuICBjb25zdCBjcmVhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjcmVhdGVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdjcmVhdGVCdXR0b24nKTtcclxuICBjcmVhdGVCdXR0b24udGV4dENvbnRlbnQgPSAnQ3JlYXRlJztcclxuICBkaXYuYXBwZW5kKGlucHV0KTtcclxuICBkaXYuYXBwZW5kKGNyZWF0ZUJ1dHRvbik7XHJcbiAgY3JlYXRlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBjcmVhdGVQcm9qZWN0LmFkZFByb2plY3QoaW5wdXQudmFsdWUpO1xyXG4gICAgZGlzcGxheVByb2plY3RzLnNob3dQcm9qZWN0cygpO1xyXG4gICAgYnV0dG9uMS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIGlucHV0LnJlbW92ZSgpO1xyXG4gICAgY3JlYXRlQnV0dG9uLnJlbW92ZSgpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgcHJvamVjdHMsIGNyZWF0ZWRQcm9qZWN0cyB9O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVUYXNrcyB9IGZyb20gJy4vdG9kb3MnO1xyXG5pbXBvcnQgeyBkaXNwbGF5VGFza3MgfSBmcm9tICcuL0RPTSc7XHJcbmltcG9ydCB7IGNyZWF0ZVByb2plY3RQYWdlIH0gZnJvbSAnLi9pbmRleCc7XHJcbmltcG9ydCB7IGNyZWF0ZWRQcm9qZWN0cyB9IGZyb20gJy4vcHJvamVjdHMnO1xyXG5cclxuLy9jcmVhdGUgbXV0aXBsZSBwcm9qZWN0c1xyXG5cclxubGV0IGN1cnJlbnRQcm9qZWN0ID0gJyc7XHJcbmxldCBjdXJyZW50ZGl2ID0gJyc7XHJcblxyXG5jbGFzcyBjcmVhdGVQcm9qZWN0VG9kb3Mge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgfVxyXG5cclxuICBwcm9qZWN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcblxyXG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcGFnZS5jbGFzc05hbWUgPSBgJHt0aGlzLnRpdGxlfWA7XHJcbiAgICBwYWdlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZ3JvdXAnKTtcclxuICAgIHBhZ2Uuc2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnLCBgJHt0aGlzLnRpdGxlfWApO1xyXG4gICAgY29udGVudC5hcHBlbmQocGFnZSk7XHJcblxyXG4gICAgY29uc3QgcGVuZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcGVuZGluZy5jbGFzc0xpc3QuYWRkKCdwZW5kaW5nJyk7XHJcbiAgICBwYWdlLmFwcGVuZChwZW5kaW5nKTtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIHBlbmRpbmcuYXBwZW5kKHRpdGxlKTtcclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGhpcy50aXRsZTtcclxuXHJcbiAgICBjb25zdCBjb21wbGV0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbXBsZXRlZC5jbGFzc05hbWUgPSAncGVuZGluZyBjb21wbGV0ZWQnO1xyXG4gICAgcGFnZS5hcHBlbmQoY29tcGxldGVkKTtcclxuXHJcbiAgICBjb25zdCBjb21wbGV0ZWR0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBjb21wbGV0ZWQuYXBwZW5kKGNvbXBsZXRlZHRpdGxlKTtcclxuICAgIGNvbXBsZXRlZHRpdGxlLnRleHRDb250ZW50ID0gJ0NvbXBsZXRlZCc7XHJcbiAgICBjb25zdCBjb3VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgY29tcGxldGVkdGl0bGUuYXBwZW5kKGNvdW50ZXIpO1xyXG4gICAgY291bnRlci5jbGFzc0xpc3QuYWRkKCdjb3VudGVyJyk7XHJcbiAgICBjb3VudGVyLnRleHRDb250ZW50ID0gMDtcclxuICB9O1xyXG5cclxuICBpbnB1dHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtbmFtZT1cIiR7dGhpcy50aXRsZX1cIl1gKTtcclxuICAgIGNvbnN0IGFkZFRhc2tCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhZGRUYXNrQnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzaycpO1xyXG4gICAgcGFnZS5hcHBlbmQoYWRkVGFza0J1dHRvbnMpO1xyXG5cclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnZGF0YS1pbnB1dCcsIGAke3RoaXMudGl0bGV9YCk7XHJcbiAgICBhZGRUYXNrQnV0dG9ucy5hcHBlbmQoaW5wdXQpO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdBZGQgYSBwcm9qZWN0IHRhc2sgaGVyZScpO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkJyk7XHJcbiAgICBhZGRUYXNrQnV0dG9ucy5hcHBlbmQoYnV0dG9uKTtcclxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBjcmVhdGVkUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9qZWN0LnRpdGxlID09IHBhZ2UuZ2V0QXR0cmlidXRlKCdjbGFzcycpKSB7XHJcbiAgICAgICAgICBwcm9qZWN0LmFkZFRhc2soaW5wdXQudmFsdWUsICdzb21lIHJhbmRvbWUnKTtcclxuICAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdC50YXNrcztcclxuICAgICAgICAgIGN1cnJlbnRkaXYgPSBwYWdlO1xyXG4gICAgICAgICAgZGlzcGxheVRhc2tzLnNob3dQcm9qZWN0VGFza3MoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxufVxyXG5cclxuY2xhc3MgY3JlYXRlRGF5VG9kb3MgZXh0ZW5kcyBjcmVhdGVQcm9qZWN0VG9kb3Mge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XHJcbiAgICBzdXBlcih0aXRsZSk7XHJcbiAgICB0aGlzLnRpdGxlID0gJ1RvZGF5JztcclxuICB9XHJcblxyXG4gIGlucHV0cyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLnRpdGxlfWApO1xyXG4gICAgY29uc3QgYWRkVGFza0J1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGFkZFRhc2tCdXR0b25zLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrJyk7XHJcbiAgICBwYWdlLmFwcGVuZChhZGRUYXNrQnV0dG9ucyk7XHJcblxyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGAke3RoaXMudGl0bGV9YCk7XHJcbiAgICBhZGRUYXNrQnV0dG9ucy5hcHBlbmQoaW5wdXQpO1xyXG4gICAgY29uc3QgdmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLnRpdGxlfWApO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkJyk7XHJcbiAgICBhZGRUYXNrQnV0dG9ucy5hcHBlbmQoYnV0dG9uKTtcclxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBjcmVhdGVUYXNrcy5hZGRUYXNrKHZhbHVlLnZhbHVlLCAnc29tZSByYW5kb20gd29yZHMnKTtcclxuICAgICAgZGlzcGxheVRhc2tzLnNob3dUYXNrcygpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdFRvZG9zLCBjcmVhdGVEYXlUb2RvcywgY3VycmVudFByb2plY3QsIGN1cnJlbnRkaXYgfTtcclxuIiwiaW1wb3J0IHsgZGlzcGxheVRhc2tzIH0gZnJvbSAnLi9ET00nO1xyXG5jb25zdCB0YXNrcyA9IFtdO1xyXG5cclxuY2xhc3MgdG9kb3Mge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbikge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgY3JlYXRlVGFza3MgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGFkZFRhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uKSA9PiB7XHJcbiAgICBsZXQgdGFzayA9IG5ldyB0b2Rvcyh0aXRsZSwgZGVzY3JpcHRpb24pO1xyXG4gICAgdGFza3MucHVzaCh0YXNrKTtcclxuICB9O1xyXG4gIHJldHVybiB7IGFkZFRhc2sgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCB7IHRvZG9zLCBjcmVhdGVUYXNrcywgdGFza3MgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==