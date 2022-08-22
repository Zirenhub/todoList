/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

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
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todos */ "./src/functions/todos.js");




let projects = [];
let toDos = [];

const toDoContainer = (title, description, date) => {
  const toDoContainer = document.createElement('div');
  toDoContainer.classList.add('to-do-container');

  const check = document.createElement('div');
  check.classList.add('check-box');

  const toDoDetails = document.createElement('div');
  toDoDetails.classList.add('to-do-details');

  const toDoTitle = document.createElement('div');
  toDoTitle.classList.add('to-do-title');
  toDoTitle.innerHTML = title;

  const toDoDesc = document.createElement('div');
  toDoDesc.classList.add('to-do-desc');
  toDoDesc.innerHTML = description;

  toDoDetails.appendChild(toDoTitle);
  toDoDetails.appendChild(toDoDesc);

  const toDoDate = document.createElement('div');
  toDoDate.classList.add('to-do-date');
  toDoDate.innerHTML = date;

  const modifyToDo = document.createElement('div');
  modifyToDo.classList.add('modify-to-do');

  toDoContainer.appendChild(check);
  toDoContainer.appendChild(toDoDetails);
  toDoContainer.appendChild(toDoDate);
  toDoContainer.appendChild(modifyToDo);

  return toDoContainer;
};

const addToDo = (title, description, date) => {
  let newToDo = new _todos__WEBPACK_IMPORTED_MODULE_2__["default"](
    title,
    description,
    date,
    toDoContainer(title, description, date)
  );

  toDos.push(newToDo);
  console.log(toDos);

  document
    .querySelector('.main-todo-container')
    .appendChild(newToDo.createPage());
};

const projectPage = () => {
  const mainToDoPage = document.createElement('div');
  mainToDoPage.classList.add('main-todo-container');

  // add task button
  const button = document.createElement('button');
  button.classList.add('add-task-btn');
  button.innerHTML = 'Add Task';

  // add task button + icon
  const buttonIcon = document.createElement('span');
  buttonIcon.classList.add('material-symbols-outlined');
  buttonIcon.innerHTML = 'add';
  button.appendChild(buttonIcon);

  // task popup form div
  const taskDiv = document.createElement('form');
  taskDiv.classList.add('task-container');

  // task form container
  const taskField = document.createElement('div');
  taskField.classList.add('task-field');

  // task label for title
  const titleLabel = document.createElement('label');
  titleLabel.innerHTML = 'Title:';

  // input field for task title
  const titleInput = document.createElement('input');
  titleInput.classList.add('title-input');
  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute(
    'placeholder',
    'Enter a title for your ToDo!'
  );
  titleInput.setAttribute('required', '');

  // optional description label for description
  const descriptionLabel = document.createElement('label');
  descriptionLabel.innerHTML =
    'You can add description for your ToDo here.';

  // optional textarea for description
  const descriptionTextArea = document.createElement('textarea');
  descriptionTextArea.classList.add('description-text-area');
  descriptionTextArea.setAttribute('type', 'text');
  descriptionTextArea.setAttribute(
    'placeholder',
    'Add your description here (if you so wish to)'
  );

  // label for date input
  const dateLabel = document.createElement('label');
  dateLabel.innerHTML = 'Date:';

  const dateInput = document.createElement('input');
  dateInput.classList.add('date-input');
  dateInput.setAttribute('type', 'date');
  dateInput.setAttribute('required', '');

  // form submit button
  const SubmitButtonDiv = document.createElement('div');
  SubmitButtonDiv.classList.add('submit-container');

  // submit input
  const submitButton = document.createElement('input');
  submitButton.classList.add('submit-button');
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('value', 'Add');
  SubmitButtonDiv.appendChild(submitButton);

  // prevent submit from sending / refreshing
  submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    let title = titleInput.value;
    let description = descriptionTextArea.value;
    let date = dateInput.value;

    addToDo(title, description, date, toDoContainer());
  });

  taskDiv.appendChild(taskField);
  taskField.appendChild(titleLabel);
  taskField.appendChild(titleInput);
  taskField.appendChild(descriptionLabel);
  taskField.appendChild(descriptionTextArea);
  taskField.appendChild(dateLabel);
  taskField.appendChild(dateInput);
  taskField.appendChild(SubmitButtonDiv);

  button.addEventListener('click', () => {
    if (document.querySelector('.task-container')) {
      document.querySelector('.task-container').remove();
    } else {
      mainToDoPage.insertBefore(taskDiv, mainToDoPage.children[1]);
    }
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

    // if we are deleting the same page we are on right now
    if (_DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.pageTitle.textContent === target) {
      const replacement = document.createElement('div');
      replacement.classList.add('main-todo-container');
      matchItem.projectPage.replaceWith(replacement);
      _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.pageTitle.textContent = 'Page Deleted';
    }

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


/***/ }),

/***/ "./src/functions/todos.js":
/*!********************************!*\
  !*** ./src/functions/todos.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDoCons)
/* harmony export */ });
class toDoCons {
  constructor(title, description, date, toDoContainer) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.toDoContainer = toDoContainer;
  }

  createPage() {
    return this.toDoContainer;
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _functions_DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/DOM */ "./src/functions/DOM.js");
/* harmony import */ var _functions_projectCreate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/projectCreate */ "./src/functions/projectCreate.js");




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
    _functions_DOM__WEBPACK_IMPORTED_MODULE_1__.DOM.addProjectButton.addEventListener('click', () => {
      if (document.querySelector('.new-task-field')) {
        document.querySelector('.new-task-input').focus();
        return;
      }
      (0,_functions_projectCreate__WEBPACK_IMPORTED_MODULE_2__.createNewProject)();
    });
  },
};

page.bindEvents();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQytDOzs7Ozs7Ozs7Ozs7Ozs7QUMzU2hDO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ25CZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNYQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDaUI7QUFDdUI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixRQUFRO0FBQ1IsSUFBSSxpRkFBcUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDBFQUFnQjtBQUN0QixLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcz8xNDUzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Z1bmN0aW9ucy9ET00uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZnVuY3Rpb25zL3Byb2plY3RDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZnVuY3Rpb25zL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Z1bmN0aW9ucy90b2Rvcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgbGV0IERPTSA9IHtcclxuICBzaWRlQnV0dG9uczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGUtYnV0dG9ucycpLFxyXG4gIHByb2plY3RDb250YWluZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlLXByb2plY3RzJyksXHJcbiAgYWRkUHJvamVjdEJ1dHRvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFByb2plY3RzJyksXHJcbiAgcHJvamVjdEJ1dHRvbnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWJ1dHRvbicpLFxyXG4gIHByb2plY3REZWxCdXR0b25zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgJy5wcm9qZWN0LWRlbGV0ZS1idXR0b24nXHJcbiAgKSxcclxuICBtYWluUGFnZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzLWNvbnRhaW5lcicpLFxyXG4gIHBhZ2VUaXRsZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhZ2UtdGl0bGUnKSxcclxufTtcclxuIiwiaW1wb3J0IHsgRE9NIH0gZnJvbSAnLi9ET00nO1xyXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3RzJztcclxuaW1wb3J0IHRvRG9Db25zIGZyb20gJy4vdG9kb3MnO1xyXG5cclxubGV0IHByb2plY3RzID0gW107XHJcbmxldCB0b0RvcyA9IFtdO1xyXG5cclxuY29uc3QgdG9Eb0NvbnRhaW5lciA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUpID0+IHtcclxuICBjb25zdCB0b0RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdG9Eb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0by1kby1jb250YWluZXInKTtcclxuXHJcbiAgY29uc3QgY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjaGVjay5jbGFzc0xpc3QuYWRkKCdjaGVjay1ib3gnKTtcclxuXHJcbiAgY29uc3QgdG9Eb0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0b0RvRGV0YWlscy5jbGFzc0xpc3QuYWRkKCd0by1kby1kZXRhaWxzJyk7XHJcblxyXG4gIGNvbnN0IHRvRG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRvRG9UaXRsZS5jbGFzc0xpc3QuYWRkKCd0by1kby10aXRsZScpO1xyXG4gIHRvRG9UaXRsZS5pbm5lckhUTUwgPSB0aXRsZTtcclxuXHJcbiAgY29uc3QgdG9Eb0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0b0RvRGVzYy5jbGFzc0xpc3QuYWRkKCd0by1kby1kZXNjJyk7XHJcbiAgdG9Eb0Rlc2MuaW5uZXJIVE1MID0gZGVzY3JpcHRpb247XHJcblxyXG4gIHRvRG9EZXRhaWxzLmFwcGVuZENoaWxkKHRvRG9UaXRsZSk7XHJcbiAgdG9Eb0RldGFpbHMuYXBwZW5kQ2hpbGQodG9Eb0Rlc2MpO1xyXG5cclxuICBjb25zdCB0b0RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRvRG9EYXRlLmNsYXNzTGlzdC5hZGQoJ3RvLWRvLWRhdGUnKTtcclxuICB0b0RvRGF0ZS5pbm5lckhUTUwgPSBkYXRlO1xyXG5cclxuICBjb25zdCBtb2RpZnlUb0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbW9kaWZ5VG9Eby5jbGFzc0xpc3QuYWRkKCdtb2RpZnktdG8tZG8nKTtcclxuXHJcbiAgdG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVjayk7XHJcbiAgdG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b0RvRGV0YWlscyk7XHJcbiAgdG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b0RvRGF0ZSk7XHJcbiAgdG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RpZnlUb0RvKTtcclxuXHJcbiAgcmV0dXJuIHRvRG9Db250YWluZXI7XHJcbn07XHJcblxyXG5jb25zdCBhZGRUb0RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSkgPT4ge1xyXG4gIGxldCBuZXdUb0RvID0gbmV3IHRvRG9Db25zKFxyXG4gICAgdGl0bGUsXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICAgIGRhdGUsXHJcbiAgICB0b0RvQ29udGFpbmVyKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSlcclxuICApO1xyXG5cclxuICB0b0Rvcy5wdXNoKG5ld1RvRG8pO1xyXG4gIGNvbnNvbGUubG9nKHRvRG9zKTtcclxuXHJcbiAgZG9jdW1lbnRcclxuICAgIC5xdWVyeVNlbGVjdG9yKCcubWFpbi10b2RvLWNvbnRhaW5lcicpXHJcbiAgICAuYXBwZW5kQ2hpbGQobmV3VG9Eby5jcmVhdGVQYWdlKCkpO1xyXG59O1xyXG5cclxuY29uc3QgcHJvamVjdFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgbWFpblRvRG9QYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbWFpblRvRG9QYWdlLmNsYXNzTGlzdC5hZGQoJ21haW4tdG9kby1jb250YWluZXInKTtcclxuXHJcbiAgLy8gYWRkIHRhc2sgYnV0dG9uXHJcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrLWJ0bicpO1xyXG4gIGJ1dHRvbi5pbm5lckhUTUwgPSAnQWRkIFRhc2snO1xyXG5cclxuICAvLyBhZGQgdGFzayBidXR0b24gKyBpY29uXHJcbiAgY29uc3QgYnV0dG9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBidXR0b25JY29uLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQnKTtcclxuICBidXR0b25JY29uLmlubmVySFRNTCA9ICdhZGQnO1xyXG4gIGJ1dHRvbi5hcHBlbmRDaGlsZChidXR0b25JY29uKTtcclxuXHJcbiAgLy8gdGFzayBwb3B1cCBmb3JtIGRpdlxyXG4gIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRhaW5lcicpO1xyXG5cclxuICAvLyB0YXNrIGZvcm0gY29udGFpbmVyXHJcbiAgY29uc3QgdGFza0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGFza0ZpZWxkLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZmllbGQnKTtcclxuXHJcbiAgLy8gdGFzayBsYWJlbCBmb3IgdGl0bGVcclxuICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICB0aXRsZUxhYmVsLmlubmVySFRNTCA9ICdUaXRsZTonO1xyXG5cclxuICAvLyBpbnB1dCBmaWVsZCBmb3IgdGFzayB0aXRsZVxyXG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgndGl0bGUtaW5wdXQnKTtcclxuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAncGxhY2Vob2xkZXInLFxyXG4gICAgJ0VudGVyIGEgdGl0bGUgZm9yIHlvdXIgVG9EbyEnXHJcbiAgKTtcclxuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XHJcblxyXG4gIC8vIG9wdGlvbmFsIGRlc2NyaXB0aW9uIGxhYmVsIGZvciBkZXNjcmlwdGlvblxyXG4gIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIGRlc2NyaXB0aW9uTGFiZWwuaW5uZXJIVE1MID1cclxuICAgICdZb3UgY2FuIGFkZCBkZXNjcmlwdGlvbiBmb3IgeW91ciBUb0RvIGhlcmUuJztcclxuXHJcbiAgLy8gb3B0aW9uYWwgdGV4dGFyZWEgZm9yIGRlc2NyaXB0aW9uXHJcbiAgY29uc3QgZGVzY3JpcHRpb25UZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgZGVzY3JpcHRpb25UZXh0QXJlYS5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbi10ZXh0LWFyZWEnKTtcclxuICBkZXNjcmlwdGlvblRleHRBcmVhLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgZGVzY3JpcHRpb25UZXh0QXJlYS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAncGxhY2Vob2xkZXInLFxyXG4gICAgJ0FkZCB5b3VyIGRlc2NyaXB0aW9uIGhlcmUgKGlmIHlvdSBzbyB3aXNoIHRvKSdcclxuICApO1xyXG5cclxuICAvLyBsYWJlbCBmb3IgZGF0ZSBpbnB1dFxyXG4gIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgZGF0ZUxhYmVsLmlubmVySFRNTCA9ICdEYXRlOic7XHJcblxyXG4gIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgZGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2RhdGUtaW5wdXQnKTtcclxuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcclxuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcclxuXHJcbiAgLy8gZm9ybSBzdWJtaXQgYnV0dG9uXHJcbiAgY29uc3QgU3VibWl0QnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgU3VibWl0QnV0dG9uRGl2LmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC1jb250YWluZXInKTtcclxuXHJcbiAgLy8gc3VibWl0IGlucHV0XHJcbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnc3VibWl0LWJ1dHRvbicpO1xyXG4gIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XHJcbiAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnQWRkJyk7XHJcbiAgU3VibWl0QnV0dG9uRGl2LmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XHJcblxyXG4gIC8vIHByZXZlbnQgc3VibWl0IGZyb20gc2VuZGluZyAvIHJlZnJlc2hpbmdcclxuICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGxldCB0aXRsZSA9IHRpdGxlSW5wdXQudmFsdWU7XHJcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblRleHRBcmVhLnZhbHVlO1xyXG4gICAgbGV0IGRhdGUgPSBkYXRlSW5wdXQudmFsdWU7XHJcblxyXG4gICAgYWRkVG9Ebyh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHRvRG9Db250YWluZXIoKSk7XHJcbiAgfSk7XHJcblxyXG4gIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0ZpZWxkKTtcclxuICB0YXNrRmllbGQuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XHJcbiAgdGFza0ZpZWxkLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xyXG4gIHRhc2tGaWVsZC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcclxuICB0YXNrRmllbGQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25UZXh0QXJlYSk7XHJcbiAgdGFza0ZpZWxkLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XHJcbiAgdGFza0ZpZWxkLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XHJcbiAgdGFza0ZpZWxkLmFwcGVuZENoaWxkKFN1Ym1pdEJ1dHRvbkRpdik7XHJcblxyXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1jb250YWluZXInKSkge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1jb250YWluZXInKS5yZW1vdmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1haW5Ub0RvUGFnZS5pbnNlcnRCZWZvcmUodGFza0RpdiwgbWFpblRvRG9QYWdlLmNoaWxkcmVuWzFdKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgbWFpblRvRG9QYWdlLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgcmV0dXJuIG1haW5Ub0RvUGFnZTtcclxufTtcclxuXHJcbmNvbnN0IHByb2plY3REZWxldGUgPSAocHJvamVjdERlbGV0ZUJ1dHRvbikgPT4ge1xyXG4gIGxldCBkZWxldGVCdXR0b24gPSBwcm9qZWN0RGVsZXRlQnV0dG9uO1xyXG5cclxuICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgbGV0IHRhcmdldCA9IGRlbGV0ZUJ1dHRvbi5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnRleHRDb250ZW50O1xyXG4gICAgbGV0IHRhcmdldENvbnRhaW5lciA9IGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlO1xyXG5cclxuICAgIGxldCBtYXRjaEl0ZW0gPSBwcm9qZWN0cy5maW5kKChpdGVtKSA9PiBpdGVtLm5hbWUgPT09IHRhcmdldCk7XHJcbiAgICBwcm9qZWN0cy5zcGxpY2UocHJvamVjdHMuaW5kZXhPZihtYXRjaEl0ZW0pLCAxKTtcclxuXHJcbiAgICAvLyBpZiB3ZSBhcmUgZGVsZXRpbmcgdGhlIHNhbWUgcGFnZSB3ZSBhcmUgb24gcmlnaHQgbm93XHJcbiAgICBpZiAoRE9NLnBhZ2VUaXRsZS50ZXh0Q29udGVudCA9PT0gdGFyZ2V0KSB7XHJcbiAgICAgIGNvbnN0IHJlcGxhY2VtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHJlcGxhY2VtZW50LmNsYXNzTGlzdC5hZGQoJ21haW4tdG9kby1jb250YWluZXInKTtcclxuICAgICAgbWF0Y2hJdGVtLnByb2plY3RQYWdlLnJlcGxhY2VXaXRoKHJlcGxhY2VtZW50KTtcclxuICAgICAgRE9NLnBhZ2VUaXRsZS50ZXh0Q29udGVudCA9ICdQYWdlIERlbGV0ZWQnO1xyXG4gICAgfVxyXG5cclxuICAgIHRhcmdldENvbnRhaW5lci5yZW1vdmUoKTtcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHByb2plY3ROYW1lQ2hlY2sgPSAocHJvamVjdE5hbWUpID0+IHtcclxuICBpZiAocHJvamVjdE5hbWUgPT09ICcnKSB7XHJcbiAgICBhbGVydCgnUHJvamVjdCBzaG91bGQgaGF2ZSBhIG5hbWUhJyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgaWYgKHByb2plY3RzLnNvbWUoKGl0ZW0pID0+IHByb2plY3ROYW1lID09PSBpdGVtLm5hbWUpKSB7XHJcbiAgICBhbGVydChcIllvdSBjYW4ndCBoYXZlIHNhbWUgbmFtZWQgcHJvamVjdHMhXCIpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59O1xyXG5cclxubGV0IHByb2plY3QgPSB7XHJcbiAgcHJvamVjdEFkZDogZnVuY3Rpb24gKHByb2plY3ROYW1lKSB7XHJcbiAgICBpZiAocHJvamVjdE5hbWVDaGVjayhwcm9qZWN0TmFtZSkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250YWluZXInKTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0TmFtZVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHByb2plY3ROYW1lUGFyYS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWJ1dHRvbicpO1xyXG4gICAgcHJvamVjdE5hbWVQYXJhLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdERlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgcHJvamVjdERlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRlbGV0ZS1idXR0b24nKTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0RGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHByb2plY3REZWxldGVJY29uLmlubmVySFRNTCA9ICdjbG9zZSc7XHJcbiAgICBwcm9qZWN0RGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJyk7XHJcblxyXG4gICAgcHJvamVjdERlbGV0ZUJ1dHRvbi5hcHBlbmRDaGlsZChwcm9qZWN0RGVsZXRlSWNvbik7XHJcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3ROYW1lUGFyYSk7XHJcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3REZWxldGVCdXR0b24pO1xyXG4gICAgRE9NLnByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XHJcblxyXG4gICAgbGV0IG5hbWUgPSBwcm9qZWN0TmFtZVBhcmEudGV4dENvbnRlbnQ7XHJcblxyXG4gICAgbGV0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChcclxuICAgICAgbmFtZSxcclxuICAgICAgcHJvamVjdE5hbWVQYXJhLFxyXG4gICAgICBwcm9qZWN0UGFnZSgpXHJcbiAgICApO1xyXG5cclxuICAgIG5ld1Byb2plY3QucHJvamVjdE5hbWVQYXJhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudFxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKCcubWFpbi10b2RvLWNvbnRhaW5lcicpXHJcbiAgICAgICAgLnJlcGxhY2VXaXRoKG5ld1Byb2plY3QuY3JlYXRlUGFnZSgpKTtcclxuICAgICAgRE9NLnBhZ2VUaXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xyXG4gICAgY29uc29sZS5sb2cocHJvamVjdHMpO1xyXG5cclxuICAgIHByb2plY3REZWxldGUocHJvamVjdERlbGV0ZUJ1dHRvbik7XHJcbiAgfSxcclxuXHJcbiAgcHJvamVjdENhbmNlbDogZnVuY3Rpb24gKG5ld1Rhc2tEaXYpIHtcclxuICAgIG5ld1Rhc2tEaXYucmVtb3ZlKCk7XHJcbiAgfSxcclxuXHJcbiAgbGlzdGVuZXI6IGZ1bmN0aW9uIChcclxuICAgIHRhc2tBZGRCdXR0b24sXHJcbiAgICB0YXNrQ2FuY2VsQnV0dG9uLFxyXG4gICAgbmV3VGFza0ZpZWxkLFxyXG4gICAgbmV3VGFza0RpdlxyXG4gICkge1xyXG4gICAgdGFza0FkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgbGV0IHByb2plY3ROYW1lID0gbmV3VGFza0ZpZWxkLnZhbHVlO1xyXG4gICAgICB0aGlzLnByb2plY3RBZGQocHJvamVjdE5hbWUpO1xyXG4gICAgICBuZXdUYXNrRmllbGQudmFsdWUgPSAnJztcclxuICAgIH0pO1xyXG4gICAgdGFza0NhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdGhpcy5wcm9qZWN0Q2FuY2VsKG5ld1Rhc2tEaXYpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QoKSB7XHJcbiAgY29uc3QgbmV3VGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG5ld1Rhc2tEaXYuY2xhc3NMaXN0LmFkZCgnbmV3LXRhc2stZmllbGQnKTtcclxuXHJcbiAgY29uc3QgbmV3VGFza0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBuZXdUYXNrRmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICBuZXdUYXNrRmllbGQuY2xhc3NMaXN0LmFkZCgnbmV3LXRhc2staW5wdXQnKTtcclxuXHJcbiAgY29uc3QgbmV3VGFza0J1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBuZXdUYXNrQnV0dG9ucy5jbGFzc0xpc3QuYWRkKCduZXctdGFzay1idXR0b25zLWNvbnRhaW5lcicpO1xyXG5cclxuICBjb25zdCB0YXNrQWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgdGFza0FkZEJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQnO1xyXG4gIHRhc2tBZGRCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmV3LXRhc2stYnV0dG9uLWFkZCcpO1xyXG5cclxuICBjb25zdCB0YXNrQ2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgdGFza0NhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xyXG4gIHRhc2tDYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmV3LXRhc2stYnV0dG9uLWNhbmNlbCcpO1xyXG5cclxuICBuZXdUYXNrQnV0dG9ucy5hcHBlbmRDaGlsZCh0YXNrQWRkQnV0dG9uKTtcclxuICBuZXdUYXNrQnV0dG9ucy5hcHBlbmRDaGlsZCh0YXNrQ2FuY2VsQnV0dG9uKTtcclxuICBuZXdUYXNrRGl2LmFwcGVuZENoaWxkKG5ld1Rhc2tGaWVsZCk7XHJcbiAgbmV3VGFza0Rpdi5hcHBlbmRDaGlsZChuZXdUYXNrQnV0dG9ucyk7XHJcbiAgRE9NLnByb2plY3RDb250YWluZXIuaW5zZXJ0QmVmb3JlKFxyXG4gICAgbmV3VGFza0RpdixcclxuICAgIERPTS5wcm9qZWN0Q29udGFpbmVyLmNoaWxkcmVuWzJdXHJcbiAgKTtcclxuXHJcbiAgcHJvamVjdC5saXN0ZW5lcihcclxuICAgIHRhc2tBZGRCdXR0b24sXHJcbiAgICB0YXNrQ2FuY2VsQnV0dG9uLFxyXG4gICAgbmV3VGFza0ZpZWxkLFxyXG4gICAgbmV3VGFza0RpdlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZU5ld1Byb2plY3QsIHByb2plY3QsIHByb2plY3RzIH07XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUsIHByb2plY3ROYW1lUGFyYSwgcHJvamVjdFBhZ2UpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLnByb2plY3ROYW1lUGFyYSA9IHByb2plY3ROYW1lUGFyYTtcclxuICAgIHRoaXMucHJvamVjdFBhZ2UgPSBwcm9qZWN0UGFnZTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVBhZ2UoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0UGFnZTtcclxuICB9XHJcblxyXG4gIGdldE5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlTmFtZShuYW1lKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgdG9Eb0NvbnMge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgdG9Eb0NvbnRhaW5lcikge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcclxuICAgIHRoaXMudG9Eb0NvbnRhaW5lciA9IHRvRG9Db250YWluZXI7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVQYWdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9Eb0NvbnRhaW5lcjtcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgRE9NIH0gZnJvbSAnLi9mdW5jdGlvbnMvRE9NJztcclxuaW1wb3J0IHsgY3JlYXRlTmV3UHJvamVjdCB9IGZyb20gJy4vZnVuY3Rpb25zL3Byb2plY3RDcmVhdGUnO1xyXG5cclxubGV0IHBhZ2UgPSB7XHJcbiAgLy8gY2hhbmdlUGFnZTogZnVuY3Rpb24gKGJ1dHRvblRleHQpIHtcclxuICAvLyAgIGlmIChidXR0b25UZXh0ID09PSAnSW1wb3J0YW50Jykge1xyXG4gIC8vICAgICBjaGFuZ2VUaXRsZUltcG9ydGFudChET00ucGFnZVRpdGxlKTtcclxuICAvLyAgIH0gZWxzZSBpZiAoYnV0dG9uVGV4dCA9PT0gJ0FsbCBUYXNrcycpIHtcclxuICAvLyAgICAgY2hhbmdlVGl0bGVUYXNrcyhET00ucGFnZVRpdGxlKTtcclxuICAvLyAgIH0gZWxzZSB7XHJcbiAgLy8gICAgIGNoYW5nZVRpdGxlVG9kYXkoRE9NLnBhZ2VUaXRsZSk7XHJcbiAgLy8gICB9XHJcbiAgLy8gfSxcclxuXHJcbiAgYmluZEV2ZW50czogZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gRE9NLnNpZGVCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgLy8gICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAvLyAgICAgbGV0IGJ1dHRvblRleHQgPSBidXR0b24udGV4dENvbnRlbnQ7XHJcbiAgICAvLyAgICAgdGhpcy5jaGFuZ2VQYWdlKGJ1dHRvblRleHQpO1xyXG4gICAgLy8gICB9KTtcclxuICAgIC8vIH0pO1xyXG4gICAgRE9NLmFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2stZmllbGQnKSkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzay1pbnB1dCcpLmZvY3VzKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNyZWF0ZU5ld1Byb2plY3QoKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbn07XHJcblxyXG5wYWdlLmJpbmRFdmVudHMoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9