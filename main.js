/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/DOM.js":
/*!******************************!*\
  !*** ./src/functions/DOM.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOM": () => (/* binding */ DOM)
/* harmony export */ });
let DOM = {
  sideButtons: document.querySelectorAll('.side-buttons'),
  projectContainer: document.querySelector('.side-projects'),
  addProjectButton: document.querySelector('#addProjects'),
  projectButtons: document.querySelectorAll('.project-button'),
  projectDelButtons: document.querySelectorAll(
    '.project-delete-button'
  ),
  mainPage: document.querySelector('.tasks-container'),
  pageTitle: document.querySelector('#page-title'),
};


/***/ }),

/***/ "./src/functions/projectCreate.js":
/*!****************************************!*\
  !*** ./src/functions/projectCreate.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNewProject": () => (/* binding */ createNewProject),
/* harmony export */   "project": () => (/* binding */ project),
/* harmony export */   "projects": () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/functions/DOM.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/functions/projects.js");



let projects = [];

const projectPage = () => {
  const mainToDoPage = document.createElement('div');
  mainToDoPage.classList.add('main-todo-container');

  const button = document.createElement('button');
  button.innerHTML = 'test';

  button.addEventListener('click', () => {
    const paraTest = document.createElement('p');
    paraTest.innerHTML = 'This is a test';
    mainToDoPage.appendChild(paraTest);
  });

  mainToDoPage.appendChild(button);
  return mainToDoPage;
};

const projectDelete = (projectDeleteButton) => {
  let deleteButton = projectDeleteButton;

  deleteButton.addEventListener('click', (e) => {
    let target = deleteButton.previousElementSibling.textContent;
    let targetContainer = e.currentTarget.parentNode;

    let matchItem = projects.find((item) => item.name === target);
    projects.splice(projects.indexOf(matchItem), 1);

    targetContainer.remove();
    console.log(projects);
  });
};

const projectNameCheck = (projectName) => {
  if (projectName === '') {
    alert('Project should have a name!');
    return true;
  }
  if (projects.some((item) => projectName === item.name)) {
    alert("You can't have same named projects!");
    return true;
  }
};

let project = {
  projectAdd: function (projectName) {
    if (projectNameCheck(projectName)) {
      return;
    }

    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project-container');

    const projectNamePara = document.createElement('button');
    projectNamePara.classList.add('project-button');
    projectNamePara.textContent = projectName;

    const projectDeleteButton = document.createElement('button');
    projectDeleteButton.classList.add('project-delete-button');

    const projectDeleteIcon = document.createElement('span');
    projectDeleteIcon.innerHTML = 'close';
    projectDeleteIcon.classList.add('material-symbols-outlined');

    projectDeleteButton.appendChild(projectDeleteIcon);
    projectDiv.appendChild(projectNamePara);
    projectDiv.appendChild(projectDeleteButton);
    _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.projectContainer.appendChild(projectDiv);

    let name = projectNamePara.textContent;

    let newProject = new _projects__WEBPACK_IMPORTED_MODULE_1__["default"](
      name,
      projectNamePara,
      projectPage()
    );

    newProject.projectNamePara.addEventListener('click', () => {
      document
        .querySelector('.main-todo-container')
        .replaceWith(newProject.createPage());
      _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.pageTitle.textContent = name;
    });

    projects.push(newProject);
    console.log(projects);

    projectDelete(projectDeleteButton);
  },

  projectCancel: function (newTaskDiv) {
    newTaskDiv.remove();
  },

  listener: function (
    taskAddButton,
    taskCancelButton,
    newTaskField,
    newTaskDiv
  ) {
    taskAddButton.addEventListener('click', () => {
      let projectName = newTaskField.value;
      this.projectAdd(projectName);
      newTaskField.value = '';
    });
    taskCancelButton.addEventListener('click', () => {
      this.projectCancel(newTaskDiv);
    });
  },
};

function createNewProject() {
  const newTaskDiv = document.createElement('div');
  newTaskDiv.classList.add('new-task-field');

  const newTaskField = document.createElement('input');
  newTaskField.setAttribute('type', 'text');
  newTaskField.classList.add('new-task-input');

  const newTaskButtons = document.createElement('div');
  newTaskButtons.classList.add('new-task-buttons-container');

  const taskAddButton = document.createElement('button');
  taskAddButton.textContent = 'Add';
  taskAddButton.classList.add('new-task-button-add');

  const taskCancelButton = document.createElement('button');
  taskCancelButton.textContent = 'Cancel';
  taskCancelButton.classList.add('new-task-button-cancel');

  newTaskButtons.appendChild(taskAddButton);
  newTaskButtons.appendChild(taskCancelButton);
  newTaskDiv.appendChild(newTaskField);
  newTaskDiv.appendChild(newTaskButtons);
  _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.projectContainer.insertBefore(
    newTaskDiv,
    _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.projectContainer.children[2]
  );

  project.listener(
    taskAddButton,
    taskCancelButton,
    newTaskField,
    newTaskDiv
  );
}




/***/ }),

/***/ "./src/functions/projects.js":
/*!***********************************!*\
  !*** ./src/functions/projects.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project {
  constructor(name, projectNamePara, projectPage) {
    this.name = name;
    this.projectNamePara = projectNamePara;
    this.projectPage = projectPage;
  }

  createPage() {
    return this.projectPage;
  }

  getName() {
    return this.name;
  }

  changeName(name) {
    this.name = name;
    return this.name;
  }
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/DOM */ "./src/functions/DOM.js");
/* harmony import */ var _functions_projectCreate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/projectCreate */ "./src/functions/projectCreate.js");



let page = {
  // changePage: function (buttonText) {
  //   if (buttonText === 'Important') {
  //     changeTitleImportant(DOM.pageTitle);
  //   } else if (buttonText === 'All Tasks') {
  //     changeTitleTasks(DOM.pageTitle);
  //   } else {
  //     changeTitleToday(DOM.pageTitle);
  //   }
  // },

  bindEvents: function () {
    // DOM.sideButtons.forEach((button) => {
    //   button.addEventListener('click', () => {
    //     let buttonText = button.textContent;
    //     this.changePage(buttonText);
    //   });
    // });
    _functions_DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.addProjectButton.addEventListener('click', () => {
      if (document.querySelector('.new-task-field')) {
        document.querySelector('.new-task-input').focus();
        return;
      }
      (0,_functions_projectCreate__WEBPACK_IMPORTED_MODULE_1__.createNewProject)();
    });
  },
};

page.bindEvents();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWNEI7QUFDSztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrRUFBZ0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGlEQUFPO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMkRBQXlCO0FBQy9CLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxtRUFBaUM7QUFDbkM7QUFDQSxJQUFJLGtFQUFnQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrQzs7Ozs7Ozs7Ozs7Ozs7O0FDdkpoQztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDbkJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnNDO0FBQ3VCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsUUFBUTtBQUNSLElBQUksaUZBQXFDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwwRUFBZ0I7QUFDdEIsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9mdW5jdGlvbnMvRE9NLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Z1bmN0aW9ucy9wcm9qZWN0Q3JlYXRlLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Z1bmN0aW9ucy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgbGV0IERPTSA9IHtcclxuICBzaWRlQnV0dG9uczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGUtYnV0dG9ucycpLFxyXG4gIHByb2plY3RDb250YWluZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlLXByb2plY3RzJyksXHJcbiAgYWRkUHJvamVjdEJ1dHRvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFByb2plY3RzJyksXHJcbiAgcHJvamVjdEJ1dHRvbnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWJ1dHRvbicpLFxyXG4gIHByb2plY3REZWxCdXR0b25zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgJy5wcm9qZWN0LWRlbGV0ZS1idXR0b24nXHJcbiAgKSxcclxuICBtYWluUGFnZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzLWNvbnRhaW5lcicpLFxyXG4gIHBhZ2VUaXRsZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhZ2UtdGl0bGUnKSxcclxufTtcclxuIiwiaW1wb3J0IHsgRE9NIH0gZnJvbSAnLi9ET00nO1xyXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3RzJztcclxuXHJcbmxldCBwcm9qZWN0cyA9IFtdO1xyXG5cclxuY29uc3QgcHJvamVjdFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgbWFpblRvRG9QYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbWFpblRvRG9QYWdlLmNsYXNzTGlzdC5hZGQoJ21haW4tdG9kby1jb250YWluZXInKTtcclxuXHJcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgYnV0dG9uLmlubmVySFRNTCA9ICd0ZXN0JztcclxuXHJcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29uc3QgcGFyYVRlc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwYXJhVGVzdC5pbm5lckhUTUwgPSAnVGhpcyBpcyBhIHRlc3QnO1xyXG4gICAgbWFpblRvRG9QYWdlLmFwcGVuZENoaWxkKHBhcmFUZXN0KTtcclxuICB9KTtcclxuXHJcbiAgbWFpblRvRG9QYWdlLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgcmV0dXJuIG1haW5Ub0RvUGFnZTtcclxufTtcclxuXHJcbmNvbnN0IHByb2plY3REZWxldGUgPSAocHJvamVjdERlbGV0ZUJ1dHRvbikgPT4ge1xyXG4gIGxldCBkZWxldGVCdXR0b24gPSBwcm9qZWN0RGVsZXRlQnV0dG9uO1xyXG5cclxuICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgbGV0IHRhcmdldCA9IGRlbGV0ZUJ1dHRvbi5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnRleHRDb250ZW50O1xyXG4gICAgbGV0IHRhcmdldENvbnRhaW5lciA9IGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlO1xyXG5cclxuICAgIGxldCBtYXRjaEl0ZW0gPSBwcm9qZWN0cy5maW5kKChpdGVtKSA9PiBpdGVtLm5hbWUgPT09IHRhcmdldCk7XHJcbiAgICBwcm9qZWN0cy5zcGxpY2UocHJvamVjdHMuaW5kZXhPZihtYXRjaEl0ZW0pLCAxKTtcclxuXHJcbiAgICB0YXJnZXRDb250YWluZXIucmVtb3ZlKCk7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBwcm9qZWN0TmFtZUNoZWNrID0gKHByb2plY3ROYW1lKSA9PiB7XHJcbiAgaWYgKHByb2plY3ROYW1lID09PSAnJykge1xyXG4gICAgYWxlcnQoJ1Byb2plY3Qgc2hvdWxkIGhhdmUgYSBuYW1lIScpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIGlmIChwcm9qZWN0cy5zb21lKChpdGVtKSA9PiBwcm9qZWN0TmFtZSA9PT0gaXRlbS5uYW1lKSkge1xyXG4gICAgYWxlcnQoXCJZb3UgY2FuJ3QgaGF2ZSBzYW1lIG5hbWVkIHByb2plY3RzIVwiKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufTtcclxuXHJcbmxldCBwcm9qZWN0ID0ge1xyXG4gIHByb2plY3RBZGQ6IGZ1bmN0aW9uIChwcm9qZWN0TmFtZSkge1xyXG4gICAgaWYgKHByb2plY3ROYW1lQ2hlY2socHJvamVjdE5hbWUpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY29udGFpbmVyJyk7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdE5hbWVQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBwcm9qZWN0TmFtZVBhcmEuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1idXR0b24nKTtcclxuICAgIHByb2plY3ROYW1lUGFyYS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3REZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHByb2plY3REZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1kZWxldGUtYnV0dG9uJyk7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdERlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBwcm9qZWN0RGVsZXRlSWNvbi5pbm5lckhUTUwgPSAnY2xvc2UnO1xyXG4gICAgcHJvamVjdERlbGV0ZUljb24uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCcpO1xyXG5cclxuICAgIHByb2plY3REZWxldGVCdXR0b24uYXBwZW5kQ2hpbGQocHJvamVjdERlbGV0ZUljb24pO1xyXG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZVBhcmEpO1xyXG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0RGVsZXRlQnV0dG9uKTtcclxuICAgIERPTS5wcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xyXG5cclxuICAgIGxldCBuYW1lID0gcHJvamVjdE5hbWVQYXJhLnRleHRDb250ZW50O1xyXG5cclxuICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoXHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHByb2plY3ROYW1lUGFyYSxcclxuICAgICAgcHJvamVjdFBhZ2UoKVxyXG4gICAgKTtcclxuXHJcbiAgICBuZXdQcm9qZWN0LnByb2plY3ROYW1lUGFyYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgZG9jdW1lbnRcclxuICAgICAgICAucXVlcnlTZWxlY3RvcignLm1haW4tdG9kby1jb250YWluZXInKVxyXG4gICAgICAgIC5yZXBsYWNlV2l0aChuZXdQcm9qZWN0LmNyZWF0ZVBhZ2UoKSk7XHJcbiAgICAgIERPTS5wYWdlVGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcclxuXHJcbiAgICBwcm9qZWN0RGVsZXRlKHByb2plY3REZWxldGVCdXR0b24pO1xyXG4gIH0sXHJcblxyXG4gIHByb2plY3RDYW5jZWw6IGZ1bmN0aW9uIChuZXdUYXNrRGl2KSB7XHJcbiAgICBuZXdUYXNrRGl2LnJlbW92ZSgpO1xyXG4gIH0sXHJcblxyXG4gIGxpc3RlbmVyOiBmdW5jdGlvbiAoXHJcbiAgICB0YXNrQWRkQnV0dG9uLFxyXG4gICAgdGFza0NhbmNlbEJ1dHRvbixcclxuICAgIG5ld1Rhc2tGaWVsZCxcclxuICAgIG5ld1Rhc2tEaXZcclxuICApIHtcclxuICAgIHRhc2tBZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGxldCBwcm9qZWN0TmFtZSA9IG5ld1Rhc2tGaWVsZC52YWx1ZTtcclxuICAgICAgdGhpcy5wcm9qZWN0QWRkKHByb2plY3ROYW1lKTtcclxuICAgICAgbmV3VGFza0ZpZWxkLnZhbHVlID0gJyc7XHJcbiAgICB9KTtcclxuICAgIHRhc2tDYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvamVjdENhbmNlbChuZXdUYXNrRGl2KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbn07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KCkge1xyXG4gIGNvbnN0IG5ld1Rhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBuZXdUYXNrRGl2LmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrLWZpZWxkJyk7XHJcblxyXG4gIGNvbnN0IG5ld1Rhc2tGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgbmV3VGFza0ZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgbmV3VGFza0ZpZWxkLmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrLWlucHV0Jyk7XHJcblxyXG4gIGNvbnN0IG5ld1Rhc2tCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbmV3VGFza0J1dHRvbnMuY2xhc3NMaXN0LmFkZCgnbmV3LXRhc2stYnV0dG9ucy1jb250YWluZXInKTtcclxuXHJcbiAgY29uc3QgdGFza0FkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHRhc2tBZGRCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkJztcclxuICB0YXNrQWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrLWJ1dHRvbi1hZGQnKTtcclxuXHJcbiAgY29uc3QgdGFza0NhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHRhc2tDYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcclxuICB0YXNrQ2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrLWJ1dHRvbi1jYW5jZWwnKTtcclxuXHJcbiAgbmV3VGFza0J1dHRvbnMuYXBwZW5kQ2hpbGQodGFza0FkZEJ1dHRvbik7XHJcbiAgbmV3VGFza0J1dHRvbnMuYXBwZW5kQ2hpbGQodGFza0NhbmNlbEJ1dHRvbik7XHJcbiAgbmV3VGFza0Rpdi5hcHBlbmRDaGlsZChuZXdUYXNrRmllbGQpO1xyXG4gIG5ld1Rhc2tEaXYuYXBwZW5kQ2hpbGQobmV3VGFza0J1dHRvbnMpO1xyXG4gIERPTS5wcm9qZWN0Q29udGFpbmVyLmluc2VydEJlZm9yZShcclxuICAgIG5ld1Rhc2tEaXYsXHJcbiAgICBET00ucHJvamVjdENvbnRhaW5lci5jaGlsZHJlblsyXVxyXG4gICk7XHJcblxyXG4gIHByb2plY3QubGlzdGVuZXIoXHJcbiAgICB0YXNrQWRkQnV0dG9uLFxyXG4gICAgdGFza0NhbmNlbEJ1dHRvbixcclxuICAgIG5ld1Rhc2tGaWVsZCxcclxuICAgIG5ld1Rhc2tEaXZcclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVOZXdQcm9qZWN0LCBwcm9qZWN0LCBwcm9qZWN0cyB9O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcclxuICBjb25zdHJ1Y3RvcihuYW1lLCBwcm9qZWN0TmFtZVBhcmEsIHByb2plY3RQYWdlKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5wcm9qZWN0TmFtZVBhcmEgPSBwcm9qZWN0TmFtZVBhcmE7XHJcbiAgICB0aGlzLnByb2plY3RQYWdlID0gcHJvamVjdFBhZ2U7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVQYWdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvamVjdFBhZ2U7XHJcbiAgfVxyXG5cclxuICBnZXROYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICB9XHJcblxyXG4gIGNoYW5nZU5hbWUobmFtZSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgRE9NIH0gZnJvbSAnLi9mdW5jdGlvbnMvRE9NJztcclxuaW1wb3J0IHsgY3JlYXRlTmV3UHJvamVjdCB9IGZyb20gJy4vZnVuY3Rpb25zL3Byb2plY3RDcmVhdGUnO1xyXG5cclxubGV0IHBhZ2UgPSB7XHJcbiAgLy8gY2hhbmdlUGFnZTogZnVuY3Rpb24gKGJ1dHRvblRleHQpIHtcclxuICAvLyAgIGlmIChidXR0b25UZXh0ID09PSAnSW1wb3J0YW50Jykge1xyXG4gIC8vICAgICBjaGFuZ2VUaXRsZUltcG9ydGFudChET00ucGFnZVRpdGxlKTtcclxuICAvLyAgIH0gZWxzZSBpZiAoYnV0dG9uVGV4dCA9PT0gJ0FsbCBUYXNrcycpIHtcclxuICAvLyAgICAgY2hhbmdlVGl0bGVUYXNrcyhET00ucGFnZVRpdGxlKTtcclxuICAvLyAgIH0gZWxzZSB7XHJcbiAgLy8gICAgIGNoYW5nZVRpdGxlVG9kYXkoRE9NLnBhZ2VUaXRsZSk7XHJcbiAgLy8gICB9XHJcbiAgLy8gfSxcclxuXHJcbiAgYmluZEV2ZW50czogZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gRE9NLnNpZGVCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgLy8gICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAvLyAgICAgbGV0IGJ1dHRvblRleHQgPSBidXR0b24udGV4dENvbnRlbnQ7XHJcbiAgICAvLyAgICAgdGhpcy5jaGFuZ2VQYWdlKGJ1dHRvblRleHQpO1xyXG4gICAgLy8gICB9KTtcclxuICAgIC8vIH0pO1xyXG4gICAgRE9NLmFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2stZmllbGQnKSkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzay1pbnB1dCcpLmZvY3VzKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNyZWF0ZU5ld1Byb2plY3QoKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbn07XHJcblxyXG5wYWdlLmJpbmRFdmVudHMoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9