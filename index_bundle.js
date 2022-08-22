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

let tempTitle = '';
let tempDesc = '';
let tempDate = '';

const editToDo = (
  toDoTitle,
  toDoDesc,
  toDoDate,
  modifyEditContent,
  toDoContainer
) => {
  if (modifyEditContent === 'Edit') {
    const titleInput = document.createElement('input');
    titleInput.setAttribute('id', 'edit-title');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute(
      'placeholder',
      'Enter a title for your ToDo!'
    );

    titleInput.addEventListener('change', () => {
      tempTitle = titleInput.value;
    });

    const descInput = document.createElement('input');
    descInput.setAttribute('id', 'edit-desc');
    descInput.setAttribute('type', 'text');
    descInput.setAttribute(
      'placeholder',
      'Add your description here (if you so wish to)'
    );

    descInput.addEventListener('change', () => {
      tempDesc = descInput.value;
    });

    const dateInput = document.createElement('input');
    dateInput.setAttribute('id', 'edit-date');
    dateInput.setAttribute('type', 'date');
    dateInput.style.marginLeft = 'auto';

    dateInput.addEventListener('change', () => {
      tempDate = dateInput.value;
    });

    toDoTitle.replaceWith(titleInput);
    toDoDesc.replaceWith(descInput);
    toDoDate.replaceWith(dateInput);
  } else if (modifyEditContent === 'Save') {
    let replacementTitle = document.querySelector('#edit-title');
    let replacementDesc = document.querySelector('#edit-desc');
    let replacementDate = document.querySelector('#edit-date');

    let matchItem = toDos.find(
      (item) => item.toDoContainer === toDoContainer
    );

    if (replacementTitle.value !== '') {
      toDoTitle.innerHTML = tempTitle;
      matchItem.changeName(tempTitle);
      replacementTitle.replaceWith(toDoTitle);
    } else {
      replacementTitle.replaceWith(toDoTitle);
    }
    if (replacementDesc.value !== '') {
      toDoDesc.innerHTML = tempDesc;
      matchItem.changeDescription(tempDesc);
      replacementDesc.replaceWith(toDoDesc);
    } else {
      replacementDesc.replaceWith(toDoDesc);
    }
    if (replacementDate.value !== '') {
      toDoDate.innerHTML = tempDate;
      matchItem.changeDate(tempDate);
      replacementDate.replaceWith(toDoDate);
    } else {
      replacementDate.replaceWith(toDoDate);
    }
  }
};

const removeToDo = (e) => {
  let targetContainer = e.currentTarget.parentNode.parentNode;

  let matchItem = toDos.find(
    (item) => item.toDoContainer === targetContainer
  );
  toDos.splice(toDos.indexOf(matchItem), 1);

  targetContainer.remove();
  console.log(toDos);
};

const toDoContainer = (title, description, date) => {
  const toDoContainer = document.createElement('div');
  toDoContainer.classList.add('to-do-container');

  const check = document.createElement('div');
  check.classList.add('check-box');

  check.addEventListener('click', () => {
    if (check.classList.contains('checked')) {
      check.classList.remove('checked');
      toDoDetails.classList.remove('active');
      toDoContainer.classList.remove('completed');
    } else {
      check.classList.add('checked');
      toDoDetails.classList.add('active');
      toDoContainer.classList.add('completed');
    }
  });

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

  const modifyEdit = document.createElement('button');
  modifyEdit.classList.add('modify-buttons');
  modifyEdit.innerHTML = 'Edit';

  modifyEdit.addEventListener('click', () => {
    let modifyEditContent = modifyEdit.innerHTML;
    if (modifyEditContent === 'Save') {
      editToDo(
        toDoTitle,
        toDoDesc,
        toDoDate,
        modifyEditContent,
        toDoContainer
      );
      modifyEdit.innerHTML = 'Edit';
    } else {
      editToDo(
        toDoTitle,
        toDoDesc,
        toDoDate,
        modifyEditContent,
        toDoContainer
      );
      modifyEdit.innerHTML = 'Save';
    }
  });

  const modifyRemove = document.createElement('button');
  modifyRemove.classList.add('modify-buttons');
  modifyRemove.innerHTML = 'Remove';

  modifyRemove.addEventListener('click', (e) => {
    removeToDo(e);
  });

  modifyToDo.appendChild(modifyEdit);
  modifyToDo.appendChild(modifyRemove);

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

    addToDo(title, description, date);
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

  changeName(title) {
    this.title = title;
    return this.title;
  }

  changeDescription(description) {
    this.description = description;
    return this.description;
  }

  changeDate(date) {
    this.date = date;
    return this.date;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXhfYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0FPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVjRCO0FBQ0s7QUFDRjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw4Q0FBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyREFBeUI7QUFDakM7QUFDQTtBQUNBO0FBQ0EsTUFBTSwyREFBeUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrRUFBZ0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGlEQUFPO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMkRBQXlCO0FBQy9CLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxtRUFBaUM7QUFDbkM7QUFDQSxJQUFJLGtFQUFnQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrQzs7Ozs7Ozs7Ozs7Ozs7O0FDMWJoQztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDMUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUNpQjtBQUN1QjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLFFBQVE7QUFDUixJQUFJLGlGQUFxQztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMEVBQWdCO0FBQ3RCLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzE0NTMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZnVuY3Rpb25zL0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9mdW5jdGlvbnMvcHJvamVjdENyZWF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9mdW5jdGlvbnMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZnVuY3Rpb25zL3RvZG9zLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBsZXQgRE9NID0ge1xyXG4gIHNpZGVCdXR0b25zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZS1idXR0b25zJyksXHJcbiAgcHJvamVjdENvbnRhaW5lcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGUtcHJvamVjdHMnKSxcclxuICBhZGRQcm9qZWN0QnV0dG9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkUHJvamVjdHMnKSxcclxuICBwcm9qZWN0QnV0dG9uczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtYnV0dG9uJyksXHJcbiAgcHJvamVjdERlbEJ1dHRvbnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAnLnByb2plY3QtZGVsZXRlLWJ1dHRvbidcclxuICApLFxyXG4gIG1haW5QYWdlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MtY29udGFpbmVyJyksXHJcbiAgcGFnZVRpdGxlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFnZS10aXRsZScpLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBET00gfSBmcm9tICcuL0RPTSc7XHJcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdHMnO1xyXG5pbXBvcnQgdG9Eb0NvbnMgZnJvbSAnLi90b2Rvcyc7XHJcblxyXG5sZXQgcHJvamVjdHMgPSBbXTtcclxubGV0IHRvRG9zID0gW107XHJcblxyXG5sZXQgdGVtcFRpdGxlID0gJyc7XHJcbmxldCB0ZW1wRGVzYyA9ICcnO1xyXG5sZXQgdGVtcERhdGUgPSAnJztcclxuXHJcbmNvbnN0IGVkaXRUb0RvID0gKFxyXG4gIHRvRG9UaXRsZSxcclxuICB0b0RvRGVzYyxcclxuICB0b0RvRGF0ZSxcclxuICBtb2RpZnlFZGl0Q29udGVudCxcclxuICB0b0RvQ29udGFpbmVyXHJcbikgPT4ge1xyXG4gIGlmIChtb2RpZnlFZGl0Q29udGVudCA9PT0gJ0VkaXQnKSB7XHJcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdlZGl0LXRpdGxlJyk7XHJcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcclxuICAgICAgJ3BsYWNlaG9sZGVyJyxcclxuICAgICAgJ0VudGVyIGEgdGl0bGUgZm9yIHlvdXIgVG9EbyEnXHJcbiAgICApO1xyXG5cclxuICAgIHRpdGxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICB0ZW1wVGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZGVzY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGRlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VkaXQtZGVzYycpO1xyXG4gICAgZGVzY0lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICBkZXNjSW5wdXQuc2V0QXR0cmlidXRlKFxyXG4gICAgICAncGxhY2Vob2xkZXInLFxyXG4gICAgICAnQWRkIHlvdXIgZGVzY3JpcHRpb24gaGVyZSAoaWYgeW91IHNvIHdpc2ggdG8pJ1xyXG4gICAgKTtcclxuXHJcbiAgICBkZXNjSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICB0ZW1wRGVzYyA9IGRlc2NJbnB1dC52YWx1ZTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdlZGl0LWRhdGUnKTtcclxuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xyXG4gICAgZGF0ZUlucHV0LnN0eWxlLm1hcmdpbkxlZnQgPSAnYXV0byc7XHJcblxyXG4gICAgZGF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgdGVtcERhdGUgPSBkYXRlSW5wdXQudmFsdWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0b0RvVGl0bGUucmVwbGFjZVdpdGgodGl0bGVJbnB1dCk7XHJcbiAgICB0b0RvRGVzYy5yZXBsYWNlV2l0aChkZXNjSW5wdXQpO1xyXG4gICAgdG9Eb0RhdGUucmVwbGFjZVdpdGgoZGF0ZUlucHV0KTtcclxuICB9IGVsc2UgaWYgKG1vZGlmeUVkaXRDb250ZW50ID09PSAnU2F2ZScpIHtcclxuICAgIGxldCByZXBsYWNlbWVudFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGl0bGUnKTtcclxuICAgIGxldCByZXBsYWNlbWVudERlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1kZXNjJyk7XHJcbiAgICBsZXQgcmVwbGFjZW1lbnREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtZGF0ZScpO1xyXG5cclxuICAgIGxldCBtYXRjaEl0ZW0gPSB0b0Rvcy5maW5kKFxyXG4gICAgICAoaXRlbSkgPT4gaXRlbS50b0RvQ29udGFpbmVyID09PSB0b0RvQ29udGFpbmVyXHJcbiAgICApO1xyXG5cclxuICAgIGlmIChyZXBsYWNlbWVudFRpdGxlLnZhbHVlICE9PSAnJykge1xyXG4gICAgICB0b0RvVGl0bGUuaW5uZXJIVE1MID0gdGVtcFRpdGxlO1xyXG4gICAgICBtYXRjaEl0ZW0uY2hhbmdlTmFtZSh0ZW1wVGl0bGUpO1xyXG4gICAgICByZXBsYWNlbWVudFRpdGxlLnJlcGxhY2VXaXRoKHRvRG9UaXRsZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXBsYWNlbWVudFRpdGxlLnJlcGxhY2VXaXRoKHRvRG9UaXRsZSk7XHJcbiAgICB9XHJcbiAgICBpZiAocmVwbGFjZW1lbnREZXNjLnZhbHVlICE9PSAnJykge1xyXG4gICAgICB0b0RvRGVzYy5pbm5lckhUTUwgPSB0ZW1wRGVzYztcclxuICAgICAgbWF0Y2hJdGVtLmNoYW5nZURlc2NyaXB0aW9uKHRlbXBEZXNjKTtcclxuICAgICAgcmVwbGFjZW1lbnREZXNjLnJlcGxhY2VXaXRoKHRvRG9EZXNjKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlcGxhY2VtZW50RGVzYy5yZXBsYWNlV2l0aCh0b0RvRGVzYyk7XHJcbiAgICB9XHJcbiAgICBpZiAocmVwbGFjZW1lbnREYXRlLnZhbHVlICE9PSAnJykge1xyXG4gICAgICB0b0RvRGF0ZS5pbm5lckhUTUwgPSB0ZW1wRGF0ZTtcclxuICAgICAgbWF0Y2hJdGVtLmNoYW5nZURhdGUodGVtcERhdGUpO1xyXG4gICAgICByZXBsYWNlbWVudERhdGUucmVwbGFjZVdpdGgodG9Eb0RhdGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVwbGFjZW1lbnREYXRlLnJlcGxhY2VXaXRoKHRvRG9EYXRlKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5jb25zdCByZW1vdmVUb0RvID0gKGUpID0+IHtcclxuICBsZXQgdGFyZ2V0Q29udGFpbmVyID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuXHJcbiAgbGV0IG1hdGNoSXRlbSA9IHRvRG9zLmZpbmQoXHJcbiAgICAoaXRlbSkgPT4gaXRlbS50b0RvQ29udGFpbmVyID09PSB0YXJnZXRDb250YWluZXJcclxuICApO1xyXG4gIHRvRG9zLnNwbGljZSh0b0Rvcy5pbmRleE9mKG1hdGNoSXRlbSksIDEpO1xyXG5cclxuICB0YXJnZXRDb250YWluZXIucmVtb3ZlKCk7XHJcbiAgY29uc29sZS5sb2codG9Eb3MpO1xyXG59O1xyXG5cclxuY29uc3QgdG9Eb0NvbnRhaW5lciA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUpID0+IHtcclxuICBjb25zdCB0b0RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdG9Eb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0by1kby1jb250YWluZXInKTtcclxuXHJcbiAgY29uc3QgY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjaGVjay5jbGFzc0xpc3QuYWRkKCdjaGVjay1ib3gnKTtcclxuXHJcbiAgY2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZiAoY2hlY2suY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2VkJykpIHtcclxuICAgICAgY2hlY2suY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tlZCcpO1xyXG4gICAgICB0b0RvRGV0YWlscy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgdG9Eb0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNoZWNrLmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcclxuICAgICAgdG9Eb0RldGFpbHMuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIHRvRG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHRvRG9EZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdG9Eb0RldGFpbHMuY2xhc3NMaXN0LmFkZCgndG8tZG8tZGV0YWlscycpO1xyXG5cclxuICBjb25zdCB0b0RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0b0RvVGl0bGUuY2xhc3NMaXN0LmFkZCgndG8tZG8tdGl0bGUnKTtcclxuICB0b0RvVGl0bGUuaW5uZXJIVE1MID0gdGl0bGU7XHJcblxyXG4gIGNvbnN0IHRvRG9EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdG9Eb0Rlc2MuY2xhc3NMaXN0LmFkZCgndG8tZG8tZGVzYycpO1xyXG4gIHRvRG9EZXNjLmlubmVySFRNTCA9IGRlc2NyaXB0aW9uO1xyXG5cclxuICB0b0RvRGV0YWlscy5hcHBlbmRDaGlsZCh0b0RvVGl0bGUpO1xyXG4gIHRvRG9EZXRhaWxzLmFwcGVuZENoaWxkKHRvRG9EZXNjKTtcclxuXHJcbiAgY29uc3QgdG9Eb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0b0RvRGF0ZS5jbGFzc0xpc3QuYWRkKCd0by1kby1kYXRlJyk7XHJcbiAgdG9Eb0RhdGUuaW5uZXJIVE1MID0gZGF0ZTtcclxuXHJcbiAgY29uc3QgbW9kaWZ5VG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1vZGlmeVRvRG8uY2xhc3NMaXN0LmFkZCgnbW9kaWZ5LXRvLWRvJyk7XHJcblxyXG4gIGNvbnN0IG1vZGlmeUVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBtb2RpZnlFZGl0LmNsYXNzTGlzdC5hZGQoJ21vZGlmeS1idXR0b25zJyk7XHJcbiAgbW9kaWZ5RWRpdC5pbm5lckhUTUwgPSAnRWRpdCc7XHJcblxyXG4gIG1vZGlmeUVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBsZXQgbW9kaWZ5RWRpdENvbnRlbnQgPSBtb2RpZnlFZGl0LmlubmVySFRNTDtcclxuICAgIGlmIChtb2RpZnlFZGl0Q29udGVudCA9PT0gJ1NhdmUnKSB7XHJcbiAgICAgIGVkaXRUb0RvKFxyXG4gICAgICAgIHRvRG9UaXRsZSxcclxuICAgICAgICB0b0RvRGVzYyxcclxuICAgICAgICB0b0RvRGF0ZSxcclxuICAgICAgICBtb2RpZnlFZGl0Q29udGVudCxcclxuICAgICAgICB0b0RvQ29udGFpbmVyXHJcbiAgICAgICk7XHJcbiAgICAgIG1vZGlmeUVkaXQuaW5uZXJIVE1MID0gJ0VkaXQnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZWRpdFRvRG8oXHJcbiAgICAgICAgdG9Eb1RpdGxlLFxyXG4gICAgICAgIHRvRG9EZXNjLFxyXG4gICAgICAgIHRvRG9EYXRlLFxyXG4gICAgICAgIG1vZGlmeUVkaXRDb250ZW50LFxyXG4gICAgICAgIHRvRG9Db250YWluZXJcclxuICAgICAgKTtcclxuICAgICAgbW9kaWZ5RWRpdC5pbm5lckhUTUwgPSAnU2F2ZSc7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG1vZGlmeVJlbW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIG1vZGlmeVJlbW92ZS5jbGFzc0xpc3QuYWRkKCdtb2RpZnktYnV0dG9ucycpO1xyXG4gIG1vZGlmeVJlbW92ZS5pbm5lckhUTUwgPSAnUmVtb3ZlJztcclxuXHJcbiAgbW9kaWZ5UmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIHJlbW92ZVRvRG8oZSk7XHJcbiAgfSk7XHJcblxyXG4gIG1vZGlmeVRvRG8uYXBwZW5kQ2hpbGQobW9kaWZ5RWRpdCk7XHJcbiAgbW9kaWZ5VG9Eby5hcHBlbmRDaGlsZChtb2RpZnlSZW1vdmUpO1xyXG5cclxuICB0b0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrKTtcclxuICB0b0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvRG9EZXRhaWxzKTtcclxuICB0b0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvRG9EYXRlKTtcclxuICB0b0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGlmeVRvRG8pO1xyXG5cclxuICByZXR1cm4gdG9Eb0NvbnRhaW5lcjtcclxufTtcclxuXHJcbmNvbnN0IGFkZFRvRG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlKSA9PiB7XHJcbiAgbGV0IG5ld1RvRG8gPSBuZXcgdG9Eb0NvbnMoXHJcbiAgICB0aXRsZSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgZGF0ZSxcclxuICAgIHRvRG9Db250YWluZXIodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlKVxyXG4gICk7XHJcblxyXG4gIHRvRG9zLnB1c2gobmV3VG9Ebyk7XHJcbiAgY29uc29sZS5sb2codG9Eb3MpO1xyXG5cclxuICBkb2N1bWVudFxyXG4gICAgLnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXRvZG8tY29udGFpbmVyJylcclxuICAgIC5hcHBlbmRDaGlsZChuZXdUb0RvLmNyZWF0ZVBhZ2UoKSk7XHJcbn07XHJcblxyXG5jb25zdCBwcm9qZWN0UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBtYWluVG9Eb1BhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtYWluVG9Eb1BhZ2UuY2xhc3NMaXN0LmFkZCgnbWFpbi10b2RvLWNvbnRhaW5lcicpO1xyXG5cclxuICAvLyBhZGQgdGFzayBidXR0b25cclxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stYnRuJyk7XHJcbiAgYnV0dG9uLmlubmVySFRNTCA9ICdBZGQgVGFzayc7XHJcblxyXG4gIC8vIGFkZCB0YXNrIGJ1dHRvbiArIGljb25cclxuICBjb25zdCBidXR0b25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGJ1dHRvbkljb24uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCcpO1xyXG4gIGJ1dHRvbkljb24uaW5uZXJIVE1MID0gJ2FkZCc7XHJcbiAgYnV0dG9uLmFwcGVuZENoaWxkKGJ1dHRvbkljb24pO1xyXG5cclxuICAvLyB0YXNrIHBvcHVwIGZvcm0gZGl2XHJcbiAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGFpbmVyJyk7XHJcblxyXG4gIC8vIHRhc2sgZm9ybSBjb250YWluZXJcclxuICBjb25zdCB0YXNrRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0YXNrRmllbGQuY2xhc3NMaXN0LmFkZCgndGFzay1maWVsZCcpO1xyXG5cclxuICAvLyB0YXNrIGxhYmVsIGZvciB0aXRsZVxyXG4gIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIHRpdGxlTGFiZWwuaW5uZXJIVE1MID0gJ1RpdGxlOic7XHJcblxyXG4gIC8vIGlucHV0IGZpZWxkIGZvciB0YXNrIHRpdGxlXHJcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgdGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKCd0aXRsZS1pbnB1dCcpO1xyXG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcclxuICAgICdwbGFjZWhvbGRlcicsXHJcbiAgICAnRW50ZXIgYSB0aXRsZSBmb3IgeW91ciBUb0RvISdcclxuICApO1xyXG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcclxuXHJcbiAgLy8gb3B0aW9uYWwgZGVzY3JpcHRpb24gbGFiZWwgZm9yIGRlc2NyaXB0aW9uXHJcbiAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgZGVzY3JpcHRpb25MYWJlbC5pbm5lckhUTUwgPVxyXG4gICAgJ1lvdSBjYW4gYWRkIGRlc2NyaXB0aW9uIGZvciB5b3VyIFRvRG8gaGVyZS4nO1xyXG5cclxuICAvLyBvcHRpb25hbCB0ZXh0YXJlYSBmb3IgZGVzY3JpcHRpb25cclxuICBjb25zdCBkZXNjcmlwdGlvblRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICBkZXNjcmlwdGlvblRleHRBcmVhLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uLXRleHQtYXJlYScpO1xyXG4gIGRlc2NyaXB0aW9uVGV4dEFyZWEuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICBkZXNjcmlwdGlvblRleHRBcmVhLnNldEF0dHJpYnV0ZShcclxuICAgICdwbGFjZWhvbGRlcicsXHJcbiAgICAnQWRkIHlvdXIgZGVzY3JpcHRpb24gaGVyZSAoaWYgeW91IHNvIHdpc2ggdG8pJ1xyXG4gICk7XHJcblxyXG4gIC8vIGxhYmVsIGZvciBkYXRlIGlucHV0XHJcbiAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBkYXRlTGFiZWwuaW5uZXJIVE1MID0gJ0RhdGU6JztcclxuXHJcbiAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBkYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCgnZGF0ZS1pbnB1dCcpO1xyXG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xyXG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xyXG5cclxuICAvLyBmb3JtIHN1Ym1pdCBidXR0b25cclxuICBjb25zdCBTdWJtaXRCdXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBTdWJtaXRCdXR0b25EaXYuY2xhc3NMaXN0LmFkZCgnc3VibWl0LWNvbnRhaW5lcicpO1xyXG5cclxuICAvLyBzdWJtaXQgaW5wdXRcclxuICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdWJtaXQtYnV0dG9uJyk7XHJcbiAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcclxuICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdBZGQnKTtcclxuICBTdWJtaXRCdXR0b25EaXYuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcclxuXHJcbiAgLy8gcHJldmVudCBzdWJtaXQgZnJvbSBzZW5kaW5nIC8gcmVmcmVzaGluZ1xyXG4gIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgbGV0IHRpdGxlID0gdGl0bGVJbnB1dC52YWx1ZTtcclxuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uVGV4dEFyZWEudmFsdWU7XHJcbiAgICBsZXQgZGF0ZSA9IGRhdGVJbnB1dC52YWx1ZTtcclxuXHJcbiAgICBhZGRUb0RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSk7XHJcbiAgfSk7XHJcblxyXG4gIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0ZpZWxkKTtcclxuICB0YXNrRmllbGQuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XHJcbiAgdGFza0ZpZWxkLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xyXG4gIHRhc2tGaWVsZC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcclxuICB0YXNrRmllbGQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25UZXh0QXJlYSk7XHJcbiAgdGFza0ZpZWxkLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XHJcbiAgdGFza0ZpZWxkLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XHJcbiAgdGFza0ZpZWxkLmFwcGVuZENoaWxkKFN1Ym1pdEJ1dHRvbkRpdik7XHJcblxyXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1jb250YWluZXInKSkge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1jb250YWluZXInKS5yZW1vdmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1haW5Ub0RvUGFnZS5pbnNlcnRCZWZvcmUodGFza0RpdiwgbWFpblRvRG9QYWdlLmNoaWxkcmVuWzFdKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgbWFpblRvRG9QYWdlLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgcmV0dXJuIG1haW5Ub0RvUGFnZTtcclxufTtcclxuXHJcbmNvbnN0IHByb2plY3REZWxldGUgPSAocHJvamVjdERlbGV0ZUJ1dHRvbikgPT4ge1xyXG4gIGxldCBkZWxldGVCdXR0b24gPSBwcm9qZWN0RGVsZXRlQnV0dG9uO1xyXG5cclxuICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgbGV0IHRhcmdldCA9IGRlbGV0ZUJ1dHRvbi5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnRleHRDb250ZW50O1xyXG4gICAgbGV0IHRhcmdldENvbnRhaW5lciA9IGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlO1xyXG5cclxuICAgIGxldCBtYXRjaEl0ZW0gPSBwcm9qZWN0cy5maW5kKChpdGVtKSA9PiBpdGVtLm5hbWUgPT09IHRhcmdldCk7XHJcbiAgICBwcm9qZWN0cy5zcGxpY2UocHJvamVjdHMuaW5kZXhPZihtYXRjaEl0ZW0pLCAxKTtcclxuXHJcbiAgICAvLyBpZiB3ZSBhcmUgZGVsZXRpbmcgdGhlIHNhbWUgcGFnZSB3ZSBhcmUgb24gcmlnaHQgbm93XHJcbiAgICBpZiAoRE9NLnBhZ2VUaXRsZS50ZXh0Q29udGVudCA9PT0gdGFyZ2V0KSB7XHJcbiAgICAgIGNvbnN0IHJlcGxhY2VtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHJlcGxhY2VtZW50LmNsYXNzTGlzdC5hZGQoJ21haW4tdG9kby1jb250YWluZXInKTtcclxuICAgICAgbWF0Y2hJdGVtLnByb2plY3RQYWdlLnJlcGxhY2VXaXRoKHJlcGxhY2VtZW50KTtcclxuICAgICAgRE9NLnBhZ2VUaXRsZS50ZXh0Q29udGVudCA9ICdQYWdlIERlbGV0ZWQnO1xyXG4gICAgfVxyXG5cclxuICAgIHRhcmdldENvbnRhaW5lci5yZW1vdmUoKTtcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHByb2plY3ROYW1lQ2hlY2sgPSAocHJvamVjdE5hbWUpID0+IHtcclxuICBpZiAocHJvamVjdE5hbWUgPT09ICcnKSB7XHJcbiAgICBhbGVydCgnUHJvamVjdCBzaG91bGQgaGF2ZSBhIG5hbWUhJyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgaWYgKHByb2plY3RzLnNvbWUoKGl0ZW0pID0+IHByb2plY3ROYW1lID09PSBpdGVtLm5hbWUpKSB7XHJcbiAgICBhbGVydChcIllvdSBjYW4ndCBoYXZlIHNhbWUgbmFtZWQgcHJvamVjdHMhXCIpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59O1xyXG5cclxubGV0IHByb2plY3QgPSB7XHJcbiAgcHJvamVjdEFkZDogZnVuY3Rpb24gKHByb2plY3ROYW1lKSB7XHJcbiAgICBpZiAocHJvamVjdE5hbWVDaGVjayhwcm9qZWN0TmFtZSkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250YWluZXInKTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0TmFtZVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHByb2plY3ROYW1lUGFyYS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWJ1dHRvbicpO1xyXG4gICAgcHJvamVjdE5hbWVQYXJhLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdERlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgcHJvamVjdERlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRlbGV0ZS1idXR0b24nKTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0RGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHByb2plY3REZWxldGVJY29uLmlubmVySFRNTCA9ICdjbG9zZSc7XHJcbiAgICBwcm9qZWN0RGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJyk7XHJcblxyXG4gICAgcHJvamVjdERlbGV0ZUJ1dHRvbi5hcHBlbmRDaGlsZChwcm9qZWN0RGVsZXRlSWNvbik7XHJcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3ROYW1lUGFyYSk7XHJcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3REZWxldGVCdXR0b24pO1xyXG4gICAgRE9NLnByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XHJcblxyXG4gICAgbGV0IG5hbWUgPSBwcm9qZWN0TmFtZVBhcmEudGV4dENvbnRlbnQ7XHJcblxyXG4gICAgbGV0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChcclxuICAgICAgbmFtZSxcclxuICAgICAgcHJvamVjdE5hbWVQYXJhLFxyXG4gICAgICBwcm9qZWN0UGFnZSgpXHJcbiAgICApO1xyXG5cclxuICAgIG5ld1Byb2plY3QucHJvamVjdE5hbWVQYXJhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudFxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKCcubWFpbi10b2RvLWNvbnRhaW5lcicpXHJcbiAgICAgICAgLnJlcGxhY2VXaXRoKG5ld1Byb2plY3QuY3JlYXRlUGFnZSgpKTtcclxuICAgICAgRE9NLnBhZ2VUaXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xyXG4gICAgY29uc29sZS5sb2cocHJvamVjdHMpO1xyXG5cclxuICAgIHByb2plY3REZWxldGUocHJvamVjdERlbGV0ZUJ1dHRvbik7XHJcbiAgfSxcclxuXHJcbiAgcHJvamVjdENhbmNlbDogZnVuY3Rpb24gKG5ld1Rhc2tEaXYpIHtcclxuICAgIG5ld1Rhc2tEaXYucmVtb3ZlKCk7XHJcbiAgfSxcclxuXHJcbiAgbGlzdGVuZXI6IGZ1bmN0aW9uIChcclxuICAgIHRhc2tBZGRCdXR0b24sXHJcbiAgICB0YXNrQ2FuY2VsQnV0dG9uLFxyXG4gICAgbmV3VGFza0ZpZWxkLFxyXG4gICAgbmV3VGFza0RpdlxyXG4gICkge1xyXG4gICAgdGFza0FkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgbGV0IHByb2plY3ROYW1lID0gbmV3VGFza0ZpZWxkLnZhbHVlO1xyXG4gICAgICB0aGlzLnByb2plY3RBZGQocHJvamVjdE5hbWUpO1xyXG4gICAgICBuZXdUYXNrRmllbGQudmFsdWUgPSAnJztcclxuICAgIH0pO1xyXG4gICAgdGFza0NhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdGhpcy5wcm9qZWN0Q2FuY2VsKG5ld1Rhc2tEaXYpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QoKSB7XHJcbiAgY29uc3QgbmV3VGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG5ld1Rhc2tEaXYuY2xhc3NMaXN0LmFkZCgnbmV3LXRhc2stZmllbGQnKTtcclxuXHJcbiAgY29uc3QgbmV3VGFza0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBuZXdUYXNrRmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICBuZXdUYXNrRmllbGQuY2xhc3NMaXN0LmFkZCgnbmV3LXRhc2staW5wdXQnKTtcclxuXHJcbiAgY29uc3QgbmV3VGFza0J1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBuZXdUYXNrQnV0dG9ucy5jbGFzc0xpc3QuYWRkKCduZXctdGFzay1idXR0b25zLWNvbnRhaW5lcicpO1xyXG5cclxuICBjb25zdCB0YXNrQWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgdGFza0FkZEJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQnO1xyXG4gIHRhc2tBZGRCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmV3LXRhc2stYnV0dG9uLWFkZCcpO1xyXG5cclxuICBjb25zdCB0YXNrQ2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgdGFza0NhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xyXG4gIHRhc2tDYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmV3LXRhc2stYnV0dG9uLWNhbmNlbCcpO1xyXG5cclxuICBuZXdUYXNrQnV0dG9ucy5hcHBlbmRDaGlsZCh0YXNrQWRkQnV0dG9uKTtcclxuICBuZXdUYXNrQnV0dG9ucy5hcHBlbmRDaGlsZCh0YXNrQ2FuY2VsQnV0dG9uKTtcclxuICBuZXdUYXNrRGl2LmFwcGVuZENoaWxkKG5ld1Rhc2tGaWVsZCk7XHJcbiAgbmV3VGFza0Rpdi5hcHBlbmRDaGlsZChuZXdUYXNrQnV0dG9ucyk7XHJcbiAgRE9NLnByb2plY3RDb250YWluZXIuaW5zZXJ0QmVmb3JlKFxyXG4gICAgbmV3VGFza0RpdixcclxuICAgIERPTS5wcm9qZWN0Q29udGFpbmVyLmNoaWxkcmVuWzJdXHJcbiAgKTtcclxuXHJcbiAgcHJvamVjdC5saXN0ZW5lcihcclxuICAgIHRhc2tBZGRCdXR0b24sXHJcbiAgICB0YXNrQ2FuY2VsQnV0dG9uLFxyXG4gICAgbmV3VGFza0ZpZWxkLFxyXG4gICAgbmV3VGFza0RpdlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZU5ld1Byb2plY3QsIHByb2plY3QsIHByb2plY3RzIH07XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUsIHByb2plY3ROYW1lUGFyYSwgcHJvamVjdFBhZ2UpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLnByb2plY3ROYW1lUGFyYSA9IHByb2plY3ROYW1lUGFyYTtcclxuICAgIHRoaXMucHJvamVjdFBhZ2UgPSBwcm9qZWN0UGFnZTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVBhZ2UoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0UGFnZTtcclxuICB9XHJcblxyXG4gIGdldE5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlTmFtZShuYW1lKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgdG9Eb0NvbnMge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgdG9Eb0NvbnRhaW5lcikge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcclxuICAgIHRoaXMudG9Eb0NvbnRhaW5lciA9IHRvRG9Db250YWluZXI7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVQYWdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9Eb0NvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIGNoYW5nZU5hbWUodGl0bGUpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHJldHVybiB0aGlzLnRpdGxlO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlRGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlRGF0ZShkYXRlKSB7XHJcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0ZTtcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgRE9NIH0gZnJvbSAnLi9mdW5jdGlvbnMvRE9NJztcclxuaW1wb3J0IHsgY3JlYXRlTmV3UHJvamVjdCB9IGZyb20gJy4vZnVuY3Rpb25zL3Byb2plY3RDcmVhdGUnO1xyXG5cclxubGV0IHBhZ2UgPSB7XHJcbiAgLy8gY2hhbmdlUGFnZTogZnVuY3Rpb24gKGJ1dHRvblRleHQpIHtcclxuICAvLyAgIGlmIChidXR0b25UZXh0ID09PSAnSW1wb3J0YW50Jykge1xyXG4gIC8vICAgICBjaGFuZ2VUaXRsZUltcG9ydGFudChET00ucGFnZVRpdGxlKTtcclxuICAvLyAgIH0gZWxzZSBpZiAoYnV0dG9uVGV4dCA9PT0gJ0FsbCBUYXNrcycpIHtcclxuICAvLyAgICAgY2hhbmdlVGl0bGVUYXNrcyhET00ucGFnZVRpdGxlKTtcclxuICAvLyAgIH0gZWxzZSB7XHJcbiAgLy8gICAgIGNoYW5nZVRpdGxlVG9kYXkoRE9NLnBhZ2VUaXRsZSk7XHJcbiAgLy8gICB9XHJcbiAgLy8gfSxcclxuXHJcbiAgYmluZEV2ZW50czogZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gRE9NLnNpZGVCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgLy8gICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAvLyAgICAgbGV0IGJ1dHRvblRleHQgPSBidXR0b24udGV4dENvbnRlbnQ7XHJcbiAgICAvLyAgICAgdGhpcy5jaGFuZ2VQYWdlKGJ1dHRvblRleHQpO1xyXG4gICAgLy8gICB9KTtcclxuICAgIC8vIH0pO1xyXG4gICAgRE9NLmFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2stZmllbGQnKSkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzay1pbnB1dCcpLmZvY3VzKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNyZWF0ZU5ld1Byb2plY3QoKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbn07XHJcblxyXG5wYWdlLmJpbmRFdmVudHMoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9