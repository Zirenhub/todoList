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
let toDos = [];

const addToDo = () => {};

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
      mainToDoPage.appendChild(taskDiv);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05zQztBQUN1QjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLFFBQVE7QUFDUixJQUFJLGlGQUFxQztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMEVBQWdCO0FBQ3RCLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZnVuY3Rpb25zL0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9mdW5jdGlvbnMvcHJvamVjdENyZWF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9mdW5jdGlvbnMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGxldCBET00gPSB7XHJcbiAgc2lkZUJ1dHRvbnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlLWJ1dHRvbnMnKSxcclxuICBwcm9qZWN0Q29udGFpbmVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZS1wcm9qZWN0cycpLFxyXG4gIGFkZFByb2plY3RCdXR0b246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRQcm9qZWN0cycpLFxyXG4gIHByb2plY3RCdXR0b25zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1idXR0b24nKSxcclxuICBwcm9qZWN0RGVsQnV0dG9uczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICcucHJvamVjdC1kZWxldGUtYnV0dG9uJ1xyXG4gICksXHJcbiAgbWFpblBhZ2U6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcy1jb250YWluZXInKSxcclxuICBwYWdlVGl0bGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYWdlLXRpdGxlJyksXHJcbn07XHJcbiIsImltcG9ydCB7IERPTSB9IGZyb20gJy4vRE9NJztcclxuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0cyc7XHJcblxyXG5sZXQgcHJvamVjdHMgPSBbXTtcclxubGV0IHRvRG9zID0gW107XHJcblxyXG5jb25zdCBhZGRUb0RvID0gKCkgPT4ge307XHJcblxyXG5jb25zdCBwcm9qZWN0UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBtYWluVG9Eb1BhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtYWluVG9Eb1BhZ2UuY2xhc3NMaXN0LmFkZCgnbWFpbi10b2RvLWNvbnRhaW5lcicpO1xyXG5cclxuICAvLyBhZGQgdGFzayBidXR0b25cclxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stYnRuJyk7XHJcbiAgYnV0dG9uLmlubmVySFRNTCA9ICdBZGQgVGFzayc7XHJcblxyXG4gIC8vIGFkZCB0YXNrIGJ1dHRvbiArIGljb25cclxuICBjb25zdCBidXR0b25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGJ1dHRvbkljb24uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCcpO1xyXG4gIGJ1dHRvbkljb24uaW5uZXJIVE1MID0gJ2FkZCc7XHJcbiAgYnV0dG9uLmFwcGVuZENoaWxkKGJ1dHRvbkljb24pO1xyXG5cclxuICAvLyB0YXNrIHBvcHVwIGZvcm0gZGl2XHJcbiAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGFpbmVyJyk7XHJcblxyXG4gIC8vIHRhc2sgZm9ybSBjb250YWluZXJcclxuICBjb25zdCB0YXNrRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0YXNrRmllbGQuY2xhc3NMaXN0LmFkZCgndGFzay1maWVsZCcpO1xyXG5cclxuICAvLyB0YXNrIGxhYmVsIGZvciB0aXRsZVxyXG4gIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIHRpdGxlTGFiZWwuaW5uZXJIVE1MID0gJ1RpdGxlOic7XHJcblxyXG4gIC8vIGlucHV0IGZpZWxkIGZvciB0YXNrIHRpdGxlXHJcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgdGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKCd0aXRsZS1pbnB1dCcpO1xyXG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcclxuICAgICdwbGFjZWhvbGRlcicsXHJcbiAgICAnRW50ZXIgYSB0aXRsZSBmb3IgeW91ciBUb0RvISdcclxuICApO1xyXG5cclxuICAvLyBvcHRpb25hbCBkZXNjcmlwdGlvbiBsYWJlbCBmb3IgZGVzY3JpcHRpb25cclxuICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBkZXNjcmlwdGlvbkxhYmVsLmlubmVySFRNTCA9XHJcbiAgICAnWW91IGNhbiBhZGQgZGVzY3JpcHRpb24gZm9yIHlvdXIgVG9EbyBoZXJlLic7XHJcblxyXG4gIC8vIG9wdGlvbmFsIHRleHRhcmVhIGZvciBkZXNjcmlwdGlvblxyXG4gIGNvbnN0IGRlc2NyaXB0aW9uVGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gIGRlc2NyaXB0aW9uVGV4dEFyZWEuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24tdGV4dC1hcmVhJyk7XHJcbiAgZGVzY3JpcHRpb25UZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gIGRlc2NyaXB0aW9uVGV4dEFyZWEuc2V0QXR0cmlidXRlKFxyXG4gICAgJ3BsYWNlaG9sZGVyJyxcclxuICAgICdBZGQgeW91ciBkZXNjcmlwdGlvbiBoZXJlIChpZiB5b3Ugc28gd2lzaCB0byknXHJcbiAgKTtcclxuXHJcbiAgLy8gbGFiZWwgZm9yIGRhdGUgaW5wdXRcclxuICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIGRhdGVMYWJlbC5pbm5lckhUTUwgPSAnRGF0ZTonO1xyXG5cclxuICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGRhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdkYXRlLWlucHV0Jyk7XHJcbiAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XHJcblxyXG4gIC8vIGZvcm0gc3VibWl0IGJ1dHRvblxyXG4gIGNvbnN0IFN1Ym1pdEJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIFN1Ym1pdEJ1dHRvbkRpdi5jbGFzc0xpc3QuYWRkKCdzdWJtaXQtY29udGFpbmVyJyk7XHJcblxyXG4gIC8vIHN1Ym1pdCBpbnB1dFxyXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC1idXR0b24nKTtcclxuICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xyXG4gIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0FkZCcpO1xyXG4gIFN1Ym1pdEJ1dHRvbkRpdi5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xyXG5cclxuICAvLyBwcmV2ZW50IHN1Ym1pdCBmcm9tIHNlbmRpbmcgLyByZWZyZXNoaW5nXHJcbiAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9KTtcclxuXHJcbiAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrRmllbGQpO1xyXG4gIHRhc2tGaWVsZC5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcclxuICB0YXNrRmllbGQuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XHJcbiAgdGFza0ZpZWxkLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xyXG4gIHRhc2tGaWVsZC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblRleHRBcmVhKTtcclxuICB0YXNrRmllbGQuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcclxuICB0YXNrRmllbGQuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcclxuICB0YXNrRmllbGQuYXBwZW5kQ2hpbGQoU3VibWl0QnV0dG9uRGl2KTtcclxuXHJcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNvbnRhaW5lcicpKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNvbnRhaW5lcicpLnJlbW92ZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWFpblRvRG9QYWdlLmFwcGVuZENoaWxkKHRhc2tEaXYpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBtYWluVG9Eb1BhZ2UuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICByZXR1cm4gbWFpblRvRG9QYWdlO1xyXG59O1xyXG5cclxuY29uc3QgcHJvamVjdERlbGV0ZSA9IChwcm9qZWN0RGVsZXRlQnV0dG9uKSA9PiB7XHJcbiAgbGV0IGRlbGV0ZUJ1dHRvbiA9IHByb2plY3REZWxldGVCdXR0b247XHJcblxyXG4gIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBsZXQgdGFyZ2V0ID0gZGVsZXRlQnV0dG9uLnByZXZpb3VzRWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnQ7XHJcbiAgICBsZXQgdGFyZ2V0Q29udGFpbmVyID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGU7XHJcblxyXG4gICAgbGV0IG1hdGNoSXRlbSA9IHByb2plY3RzLmZpbmQoKGl0ZW0pID0+IGl0ZW0ubmFtZSA9PT0gdGFyZ2V0KTtcclxuICAgIHByb2plY3RzLnNwbGljZShwcm9qZWN0cy5pbmRleE9mKG1hdGNoSXRlbSksIDEpO1xyXG5cclxuICAgIC8vIGlmIHdlIGFyZSBkZWxldGluZyB0aGUgc2FtZSBwYWdlIHdlIGFyZSBvbiByaWdodCBub3dcclxuICAgIGlmIChET00ucGFnZVRpdGxlLnRleHRDb250ZW50ID09PSB0YXJnZXQpIHtcclxuICAgICAgY29uc3QgcmVwbGFjZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgcmVwbGFjZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWFpbi10b2RvLWNvbnRhaW5lcicpO1xyXG4gICAgICBtYXRjaEl0ZW0ucHJvamVjdFBhZ2UucmVwbGFjZVdpdGgocmVwbGFjZW1lbnQpO1xyXG4gICAgICBET00ucGFnZVRpdGxlLnRleHRDb250ZW50ID0gJ1BhZ2UgRGVsZXRlZCc7XHJcbiAgICB9XHJcblxyXG4gICAgdGFyZ2V0Q29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgY29uc29sZS5sb2cocHJvamVjdHMpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgcHJvamVjdE5hbWVDaGVjayA9IChwcm9qZWN0TmFtZSkgPT4ge1xyXG4gIGlmIChwcm9qZWN0TmFtZSA9PT0gJycpIHtcclxuICAgIGFsZXJ0KCdQcm9qZWN0IHNob3VsZCBoYXZlIGEgbmFtZSEnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICBpZiAocHJvamVjdHMuc29tZSgoaXRlbSkgPT4gcHJvamVjdE5hbWUgPT09IGl0ZW0ubmFtZSkpIHtcclxuICAgIGFsZXJ0KFwiWW91IGNhbid0IGhhdmUgc2FtZSBuYW1lZCBwcm9qZWN0cyFcIik7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn07XHJcblxyXG5sZXQgcHJvamVjdCA9IHtcclxuICBwcm9qZWN0QWRkOiBmdW5jdGlvbiAocHJvamVjdE5hbWUpIHtcclxuICAgIGlmIChwcm9qZWN0TmFtZUNoZWNrKHByb2plY3ROYW1lKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNvbnRhaW5lcicpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3ROYW1lUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgcHJvamVjdE5hbWVQYXJhLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYnV0dG9uJyk7XHJcbiAgICBwcm9qZWN0TmFtZVBhcmEudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0RGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBwcm9qZWN0RGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZGVsZXRlLWJ1dHRvbicpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3REZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgcHJvamVjdERlbGV0ZUljb24uaW5uZXJIVE1MID0gJ2Nsb3NlJztcclxuICAgIHByb2plY3REZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQnKTtcclxuXHJcbiAgICBwcm9qZWN0RGVsZXRlQnV0dG9uLmFwcGVuZENoaWxkKHByb2plY3REZWxldGVJY29uKTtcclxuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVQYXJhKTtcclxuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdERlbGV0ZUJ1dHRvbik7XHJcbiAgICBET00ucHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcclxuXHJcbiAgICBsZXQgbmFtZSA9IHByb2plY3ROYW1lUGFyYS50ZXh0Q29udGVudDtcclxuXHJcbiAgICBsZXQgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KFxyXG4gICAgICBuYW1lLFxyXG4gICAgICBwcm9qZWN0TmFtZVBhcmEsXHJcbiAgICAgIHByb2plY3RQYWdlKClcclxuICAgICk7XHJcblxyXG4gICAgbmV3UHJvamVjdC5wcm9qZWN0TmFtZVBhcmEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXRvZG8tY29udGFpbmVyJylcclxuICAgICAgICAucmVwbGFjZVdpdGgobmV3UHJvamVjdC5jcmVhdGVQYWdlKCkpO1xyXG4gICAgICBET00ucGFnZVRpdGxlLnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgIH0pO1xyXG5cclxuICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XHJcblxyXG4gICAgcHJvamVjdERlbGV0ZShwcm9qZWN0RGVsZXRlQnV0dG9uKTtcclxuICB9LFxyXG5cclxuICBwcm9qZWN0Q2FuY2VsOiBmdW5jdGlvbiAobmV3VGFza0Rpdikge1xyXG4gICAgbmV3VGFza0Rpdi5yZW1vdmUoKTtcclxuICB9LFxyXG5cclxuICBsaXN0ZW5lcjogZnVuY3Rpb24gKFxyXG4gICAgdGFza0FkZEJ1dHRvbixcclxuICAgIHRhc2tDYW5jZWxCdXR0b24sXHJcbiAgICBuZXdUYXNrRmllbGQsXHJcbiAgICBuZXdUYXNrRGl2XHJcbiAgKSB7XHJcbiAgICB0YXNrQWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBsZXQgcHJvamVjdE5hbWUgPSBuZXdUYXNrRmllbGQudmFsdWU7XHJcbiAgICAgIHRoaXMucHJvamVjdEFkZChwcm9qZWN0TmFtZSk7XHJcbiAgICAgIG5ld1Rhc2tGaWVsZC52YWx1ZSA9ICcnO1xyXG4gICAgfSk7XHJcbiAgICB0YXNrQ2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLnByb2plY3RDYW5jZWwobmV3VGFza0Rpdik7XHJcbiAgICB9KTtcclxuICB9LFxyXG59O1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdCgpIHtcclxuICBjb25zdCBuZXdUYXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbmV3VGFza0Rpdi5jbGFzc0xpc3QuYWRkKCduZXctdGFzay1maWVsZCcpO1xyXG5cclxuICBjb25zdCBuZXdUYXNrRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIG5ld1Rhc2tGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gIG5ld1Rhc2tGaWVsZC5jbGFzc0xpc3QuYWRkKCduZXctdGFzay1pbnB1dCcpO1xyXG5cclxuICBjb25zdCBuZXdUYXNrQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG5ld1Rhc2tCdXR0b25zLmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrLWJ1dHRvbnMtY29udGFpbmVyJyk7XHJcblxyXG4gIGNvbnN0IHRhc2tBZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICB0YXNrQWRkQnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCc7XHJcbiAgdGFza0FkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduZXctdGFzay1idXR0b24tYWRkJyk7XHJcblxyXG4gIGNvbnN0IHRhc2tDYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICB0YXNrQ2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XHJcbiAgdGFza0NhbmNlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduZXctdGFzay1idXR0b24tY2FuY2VsJyk7XHJcblxyXG4gIG5ld1Rhc2tCdXR0b25zLmFwcGVuZENoaWxkKHRhc2tBZGRCdXR0b24pO1xyXG4gIG5ld1Rhc2tCdXR0b25zLmFwcGVuZENoaWxkKHRhc2tDYW5jZWxCdXR0b24pO1xyXG4gIG5ld1Rhc2tEaXYuYXBwZW5kQ2hpbGQobmV3VGFza0ZpZWxkKTtcclxuICBuZXdUYXNrRGl2LmFwcGVuZENoaWxkKG5ld1Rhc2tCdXR0b25zKTtcclxuICBET00ucHJvamVjdENvbnRhaW5lci5pbnNlcnRCZWZvcmUoXHJcbiAgICBuZXdUYXNrRGl2LFxyXG4gICAgRE9NLnByb2plY3RDb250YWluZXIuY2hpbGRyZW5bMl1cclxuICApO1xyXG5cclxuICBwcm9qZWN0Lmxpc3RlbmVyKFxyXG4gICAgdGFza0FkZEJ1dHRvbixcclxuICAgIHRhc2tDYW5jZWxCdXR0b24sXHJcbiAgICBuZXdUYXNrRmllbGQsXHJcbiAgICBuZXdUYXNrRGl2XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlTmV3UHJvamVjdCwgcHJvamVjdCwgcHJvamVjdHMgfTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XHJcbiAgY29uc3RydWN0b3IobmFtZSwgcHJvamVjdE5hbWVQYXJhLCBwcm9qZWN0UGFnZSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMucHJvamVjdE5hbWVQYXJhID0gcHJvamVjdE5hbWVQYXJhO1xyXG4gICAgdGhpcy5wcm9qZWN0UGFnZSA9IHByb2plY3RQYWdlO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlUGFnZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnByb2plY3RQYWdlO1xyXG4gIH1cclxuXHJcbiAgZ2V0TmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VOYW1lKG5hbWUpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IERPTSB9IGZyb20gJy4vZnVuY3Rpb25zL0RPTSc7XHJcbmltcG9ydCB7IGNyZWF0ZU5ld1Byb2plY3QgfSBmcm9tICcuL2Z1bmN0aW9ucy9wcm9qZWN0Q3JlYXRlJztcclxuXHJcbmxldCBwYWdlID0ge1xyXG4gIC8vIGNoYW5nZVBhZ2U6IGZ1bmN0aW9uIChidXR0b25UZXh0KSB7XHJcbiAgLy8gICBpZiAoYnV0dG9uVGV4dCA9PT0gJ0ltcG9ydGFudCcpIHtcclxuICAvLyAgICAgY2hhbmdlVGl0bGVJbXBvcnRhbnQoRE9NLnBhZ2VUaXRsZSk7XHJcbiAgLy8gICB9IGVsc2UgaWYgKGJ1dHRvblRleHQgPT09ICdBbGwgVGFza3MnKSB7XHJcbiAgLy8gICAgIGNoYW5nZVRpdGxlVGFza3MoRE9NLnBhZ2VUaXRsZSk7XHJcbiAgLy8gICB9IGVsc2Uge1xyXG4gIC8vICAgICBjaGFuZ2VUaXRsZVRvZGF5KERPTS5wYWdlVGl0bGUpO1xyXG4gIC8vICAgfVxyXG4gIC8vIH0sXHJcblxyXG4gIGJpbmRFdmVudHM6IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIERPTS5zaWRlQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICAgIC8vICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgLy8gICAgIGxldCBidXR0b25UZXh0ID0gYnV0dG9uLnRleHRDb250ZW50O1xyXG4gICAgLy8gICAgIHRoaXMuY2hhbmdlUGFnZShidXR0b25UZXh0KTtcclxuICAgIC8vICAgfSk7XHJcbiAgICAvLyB9KTtcclxuICAgIERPTS5hZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrLWZpZWxkJykpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2staW5wdXQnKS5mb2N1cygpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjcmVhdGVOZXdQcm9qZWN0KCk7XHJcbiAgICB9KTtcclxuICB9LFxyXG59O1xyXG5cclxucGFnZS5iaW5kRXZlbnRzKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==