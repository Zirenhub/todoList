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
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "toDoContainer": () => (/* binding */ toDoContainer),
/* harmony export */   "toDos": () => (/* binding */ toDos)
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
    descInput.maxLength = '50';
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

const addToDo = (title, description, date, parentProject) => {
  let newToDo = new _todos__WEBPACK_IMPORTED_MODULE_2__["default"](
    title,
    description,
    date,
    toDoContainer(title, description, date)
  );

  let matchItem = projects.find(
    (item) => item.name === parentProject
  );
  matchItem.addTask(newToDo);
  toDos.push(newToDo);
  console.log(toDos);

  document
    .querySelector('.main-todo-container')
    .appendChild(newToDo.createPage());
};

const projectPage = (name) => {
  let parentProject = name;

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
  descriptionTextArea.maxLength = '50';
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

    addToDo(title, description, date, parentProject);
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
      projectPage(name)
    );

    newProject.projectNamePara.addEventListener('click', () => {
      let replace = _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.mainPage.childNodes[3];

      if (replace.className === 'all-tasks-page-container') {
        replace.replaceWith(newProject.createPage(name));
        let replacePage = document.querySelector(
          '.main-todo-container'
        );
        let tasks = newProject.tasks;
        tasks.forEach((item) => {
          replacePage.appendChild(item.createPage());
        });
      } else {
        let replacePage = newProject.createPage(name);
        replace.replaceWith(replacePage);
        let tasks = newProject.tasks;
        tasks.forEach((item) => {
          replacePage.appendChild(item.createPage());
        });
      }

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
  constructor(name, projectNamePara, projectPage, tasks = []) {
    this.name = name;
    this.projectNamePara = projectNamePara;
    this.projectPage = projectPage;
    this.tasks = tasks;
  }

  addTask(task) {
    this.tasks.push(task);
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




let allTasksPage = () => {
  if (_functions_DOM__WEBPACK_IMPORTED_MODULE_1__.DOM.pageTitle.textContent === 'All Tasks') {
    return;
  }
  _functions_DOM__WEBPACK_IMPORTED_MODULE_1__.DOM.pageTitle.textContent = 'All Tasks';
  let mainPage = document.querySelector('.main-todo-container');
  const allTasksPageContent = document.createElement('div');
  allTasksPageContent.classList.add('all-tasks-page-container');

  let cloneToDos = _functions_projectCreate__WEBPACK_IMPORTED_MODULE_2__.toDos.slice();

  cloneToDos.forEach((item) => {
    // item = new toDoCons(
    //   item.title,
    //   item.description,
    //   item.date,
    //   toDoContainer
    // );
    // allTasksPageContent.appendChild(
    //   item.toDoContainer(item.title, item.description, item.date)
    // );

    allTasksPageContent.appendChild(item.createPage());
  });
  console.log(cloneToDos);
  console.log(_functions_projectCreate__WEBPACK_IMPORTED_MODULE_2__.toDos);

  mainPage.replaceWith(allTasksPageContent);
};

let page = {
  changePage: function (buttonText) {
    if (buttonText === 'Important') {
      // TODO
    } else if (buttonText === 'All Tasks') {
      allTasksPage();
    } else {
      // TODO
    }
  },

  bindEvents: function () {
    _functions_DOM__WEBPACK_IMPORTED_MODULE_1__.DOM.sideButtons.forEach((button) => {
      button.addEventListener('click', () => {
        let buttonText = button.textContent;
        this.changePage(buttonText);
      });
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXhfYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0FPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWNEI7QUFDSztBQUNGO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsOENBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFD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QUFDQSxJQUFJLG1FQUF1QjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLElBQUksaUZBQXFDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwwRUFBZ0I7QUFDdEIsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/MTQ1MyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9mdW5jdGlvbnMvRE9NLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Z1bmN0aW9ucy9wcm9qZWN0Q3JlYXRlLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Z1bmN0aW9ucy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9mdW5jdGlvbnMvdG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZXhwb3J0IGxldCBET00gPSB7XHJcbiAgc2lkZUJ1dHRvbnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlLWJ1dHRvbnMnKSxcclxuICBwcm9qZWN0Q29udGFpbmVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZS1wcm9qZWN0cycpLFxyXG4gIGFkZFByb2plY3RCdXR0b246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRQcm9qZWN0cycpLFxyXG4gIHByb2plY3RCdXR0b25zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1idXR0b24nKSxcclxuICBwcm9qZWN0RGVsQnV0dG9uczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICcucHJvamVjdC1kZWxldGUtYnV0dG9uJ1xyXG4gICksXHJcbiAgbWFpblBhZ2U6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcy1jb250YWluZXInKSxcclxuICBwYWdlVGl0bGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYWdlLXRpdGxlJyksXHJcbn07XHJcbiIsImltcG9ydCB7IERPTSB9IGZyb20gJy4vRE9NJztcclxuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0cyc7XHJcbmltcG9ydCB0b0RvQ29ucyBmcm9tICcuL3RvZG9zJztcclxuXHJcbmxldCBwcm9qZWN0cyA9IFtdO1xyXG5sZXQgdG9Eb3MgPSBbXTtcclxuXHJcbmxldCB0ZW1wVGl0bGUgPSAnJztcclxubGV0IHRlbXBEZXNjID0gJyc7XHJcbmxldCB0ZW1wRGF0ZSA9ICcnO1xyXG5cclxuY29uc3QgZWRpdFRvRG8gPSAoXHJcbiAgdG9Eb1RpdGxlLFxyXG4gIHRvRG9EZXNjLFxyXG4gIHRvRG9EYXRlLFxyXG4gIG1vZGlmeUVkaXRDb250ZW50LFxyXG4gIHRvRG9Db250YWluZXJcclxuKSA9PiB7XHJcbiAgaWYgKG1vZGlmeUVkaXRDb250ZW50ID09PSAnRWRpdCcpIHtcclxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VkaXQtdGl0bGUnKTtcclxuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFxyXG4gICAgICAncGxhY2Vob2xkZXInLFxyXG4gICAgICAnRW50ZXIgYSB0aXRsZSBmb3IgeW91ciBUb0RvISdcclxuICAgICk7XHJcblxyXG4gICAgdGl0bGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgIHRlbXBUaXRsZSA9IHRpdGxlSW5wdXQudmFsdWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBkZXNjSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgZGVzY0lucHV0Lm1heExlbmd0aCA9ICc1MCc7XHJcbiAgICBkZXNjSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdlZGl0LWRlc2MnKTtcclxuICAgIGRlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgZGVzY0lucHV0LnNldEF0dHJpYnV0ZShcclxuICAgICAgJ3BsYWNlaG9sZGVyJyxcclxuICAgICAgJ0FkZCB5b3VyIGRlc2NyaXB0aW9uIGhlcmUgKGlmIHlvdSBzbyB3aXNoIHRvKSdcclxuICAgICk7XHJcblxyXG4gICAgZGVzY0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgdGVtcERlc2MgPSBkZXNjSW5wdXQudmFsdWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZWRpdC1kYXRlJyk7XHJcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcclxuICAgIGRhdGVJbnB1dC5zdHlsZS5tYXJnaW5MZWZ0ID0gJ2F1dG8nO1xyXG5cclxuICAgIGRhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgIHRlbXBEYXRlID0gZGF0ZUlucHV0LnZhbHVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdG9Eb1RpdGxlLnJlcGxhY2VXaXRoKHRpdGxlSW5wdXQpO1xyXG4gICAgdG9Eb0Rlc2MucmVwbGFjZVdpdGgoZGVzY0lucHV0KTtcclxuICAgIHRvRG9EYXRlLnJlcGxhY2VXaXRoKGRhdGVJbnB1dCk7XHJcbiAgfSBlbHNlIGlmIChtb2RpZnlFZGl0Q29udGVudCA9PT0gJ1NhdmUnKSB7XHJcbiAgICBsZXQgcmVwbGFjZW1lbnRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRpdGxlJyk7XHJcbiAgICBsZXQgcmVwbGFjZW1lbnREZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtZGVzYycpO1xyXG4gICAgbGV0IHJlcGxhY2VtZW50RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LWRhdGUnKTtcclxuXHJcbiAgICBsZXQgbWF0Y2hJdGVtID0gdG9Eb3MuZmluZChcclxuICAgICAgKGl0ZW0pID0+IGl0ZW0udG9Eb0NvbnRhaW5lciA9PT0gdG9Eb0NvbnRhaW5lclxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAocmVwbGFjZW1lbnRUaXRsZS52YWx1ZSAhPT0gJycpIHtcclxuICAgICAgdG9Eb1RpdGxlLmlubmVySFRNTCA9IHRlbXBUaXRsZTtcclxuICAgICAgbWF0Y2hJdGVtLmNoYW5nZU5hbWUodGVtcFRpdGxlKTtcclxuICAgICAgcmVwbGFjZW1lbnRUaXRsZS5yZXBsYWNlV2l0aCh0b0RvVGl0bGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVwbGFjZW1lbnRUaXRsZS5yZXBsYWNlV2l0aCh0b0RvVGl0bGUpO1xyXG4gICAgfVxyXG4gICAgaWYgKHJlcGxhY2VtZW50RGVzYy52YWx1ZSAhPT0gJycpIHtcclxuICAgICAgdG9Eb0Rlc2MuaW5uZXJIVE1MID0gdGVtcERlc2M7XHJcbiAgICAgIG1hdGNoSXRlbS5jaGFuZ2VEZXNjcmlwdGlvbih0ZW1wRGVzYyk7XHJcbiAgICAgIHJlcGxhY2VtZW50RGVzYy5yZXBsYWNlV2l0aCh0b0RvRGVzYyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXBsYWNlbWVudERlc2MucmVwbGFjZVdpdGgodG9Eb0Rlc2MpO1xyXG4gICAgfVxyXG4gICAgaWYgKHJlcGxhY2VtZW50RGF0ZS52YWx1ZSAhPT0gJycpIHtcclxuICAgICAgdG9Eb0RhdGUuaW5uZXJIVE1MID0gdGVtcERhdGU7XHJcbiAgICAgIG1hdGNoSXRlbS5jaGFuZ2VEYXRlKHRlbXBEYXRlKTtcclxuICAgICAgcmVwbGFjZW1lbnREYXRlLnJlcGxhY2VXaXRoKHRvRG9EYXRlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlcGxhY2VtZW50RGF0ZS5yZXBsYWNlV2l0aCh0b0RvRGF0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgcmVtb3ZlVG9EbyA9IChlKSA9PiB7XHJcbiAgbGV0IHRhcmdldENvbnRhaW5lciA9IGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcblxyXG4gIGxldCBtYXRjaEl0ZW0gPSB0b0Rvcy5maW5kKFxyXG4gICAgKGl0ZW0pID0+IGl0ZW0udG9Eb0NvbnRhaW5lciA9PT0gdGFyZ2V0Q29udGFpbmVyXHJcbiAgKTtcclxuICB0b0Rvcy5zcGxpY2UodG9Eb3MuaW5kZXhPZihtYXRjaEl0ZW0pLCAxKTtcclxuXHJcbiAgdGFyZ2V0Q29udGFpbmVyLnJlbW92ZSgpO1xyXG4gIGNvbnNvbGUubG9nKHRvRG9zKTtcclxufTtcclxuXHJcbmNvbnN0IHRvRG9Db250YWluZXIgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlKSA9PiB7XHJcbiAgY29uc3QgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRvRG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG8tZG8tY29udGFpbmVyJyk7XHJcblxyXG4gIGNvbnN0IGNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY2hlY2suY2xhc3NMaXN0LmFkZCgnY2hlY2stYm94Jyk7XHJcblxyXG4gIGNoZWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYgKGNoZWNrLmNsYXNzTGlzdC5jb250YWlucygnY2hlY2tlZCcpKSB7XHJcbiAgICAgIGNoZWNrLmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrZWQnKTtcclxuICAgICAgdG9Eb0RldGFpbHMuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIHRvRG9Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjaGVjay5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJyk7XHJcbiAgICAgIHRvRG9EZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICB0b0RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB0b0RvRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRvRG9EZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ3RvLWRvLWRldGFpbHMnKTtcclxuXHJcbiAgY29uc3QgdG9Eb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdG9Eb1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvLWRvLXRpdGxlJyk7XHJcbiAgdG9Eb1RpdGxlLmlubmVySFRNTCA9IHRpdGxlO1xyXG5cclxuICBjb25zdCB0b0RvRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRvRG9EZXNjLmNsYXNzTGlzdC5hZGQoJ3RvLWRvLWRlc2MnKTtcclxuICB0b0RvRGVzYy5pbm5lckhUTUwgPSBkZXNjcmlwdGlvbjtcclxuXHJcbiAgdG9Eb0RldGFpbHMuYXBwZW5kQ2hpbGQodG9Eb1RpdGxlKTtcclxuICB0b0RvRGV0YWlscy5hcHBlbmRDaGlsZCh0b0RvRGVzYyk7XHJcblxyXG4gIGNvbnN0IHRvRG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdG9Eb0RhdGUuY2xhc3NMaXN0LmFkZCgndG8tZG8tZGF0ZScpO1xyXG4gIHRvRG9EYXRlLmlubmVySFRNTCA9IGRhdGU7XHJcblxyXG4gIGNvbnN0IG1vZGlmeVRvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtb2RpZnlUb0RvLmNsYXNzTGlzdC5hZGQoJ21vZGlmeS10by1kbycpO1xyXG5cclxuICBjb25zdCBtb2RpZnlFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgbW9kaWZ5RWRpdC5jbGFzc0xpc3QuYWRkKCdtb2RpZnktYnV0dG9ucycpO1xyXG4gIG1vZGlmeUVkaXQuaW5uZXJIVE1MID0gJ0VkaXQnO1xyXG5cclxuICBtb2RpZnlFZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbGV0IG1vZGlmeUVkaXRDb250ZW50ID0gbW9kaWZ5RWRpdC5pbm5lckhUTUw7XHJcbiAgICBpZiAobW9kaWZ5RWRpdENvbnRlbnQgPT09ICdTYXZlJykge1xyXG4gICAgICBlZGl0VG9EbyhcclxuICAgICAgICB0b0RvVGl0bGUsXHJcbiAgICAgICAgdG9Eb0Rlc2MsXHJcbiAgICAgICAgdG9Eb0RhdGUsXHJcbiAgICAgICAgbW9kaWZ5RWRpdENvbnRlbnQsXHJcbiAgICAgICAgdG9Eb0NvbnRhaW5lclxyXG4gICAgICApO1xyXG4gICAgICBtb2RpZnlFZGl0LmlubmVySFRNTCA9ICdFZGl0JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVkaXRUb0RvKFxyXG4gICAgICAgIHRvRG9UaXRsZSxcclxuICAgICAgICB0b0RvRGVzYyxcclxuICAgICAgICB0b0RvRGF0ZSxcclxuICAgICAgICBtb2RpZnlFZGl0Q29udGVudCxcclxuICAgICAgICB0b0RvQ29udGFpbmVyXHJcbiAgICAgICk7XHJcbiAgICAgIG1vZGlmeUVkaXQuaW5uZXJIVE1MID0gJ1NhdmUnO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBtb2RpZnlSZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBtb2RpZnlSZW1vdmUuY2xhc3NMaXN0LmFkZCgnbW9kaWZ5LWJ1dHRvbnMnKTtcclxuICBtb2RpZnlSZW1vdmUuaW5uZXJIVE1MID0gJ1JlbW92ZSc7XHJcblxyXG4gIG1vZGlmeVJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICByZW1vdmVUb0RvKGUpO1xyXG4gIH0pO1xyXG5cclxuICBtb2RpZnlUb0RvLmFwcGVuZENoaWxkKG1vZGlmeUVkaXQpO1xyXG4gIG1vZGlmeVRvRG8uYXBwZW5kQ2hpbGQobW9kaWZ5UmVtb3ZlKTtcclxuXHJcbiAgdG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVjayk7XHJcbiAgdG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b0RvRGV0YWlscyk7XHJcbiAgdG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b0RvRGF0ZSk7XHJcbiAgdG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RpZnlUb0RvKTtcclxuXHJcbiAgcmV0dXJuIHRvRG9Db250YWluZXI7XHJcbn07XHJcblxyXG5jb25zdCBhZGRUb0RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcGFyZW50UHJvamVjdCkgPT4ge1xyXG4gIGxldCBuZXdUb0RvID0gbmV3IHRvRG9Db25zKFxyXG4gICAgdGl0bGUsXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICAgIGRhdGUsXHJcbiAgICB0b0RvQ29udGFpbmVyKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSlcclxuICApO1xyXG5cclxuICBsZXQgbWF0Y2hJdGVtID0gcHJvamVjdHMuZmluZChcclxuICAgIChpdGVtKSA9PiBpdGVtLm5hbWUgPT09IHBhcmVudFByb2plY3RcclxuICApO1xyXG4gIG1hdGNoSXRlbS5hZGRUYXNrKG5ld1RvRG8pO1xyXG4gIHRvRG9zLnB1c2gobmV3VG9Ebyk7XHJcbiAgY29uc29sZS5sb2codG9Eb3MpO1xyXG5cclxuICBkb2N1bWVudFxyXG4gICAgLnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXRvZG8tY29udGFpbmVyJylcclxuICAgIC5hcHBlbmRDaGlsZChuZXdUb0RvLmNyZWF0ZVBhZ2UoKSk7XHJcbn07XHJcblxyXG5jb25zdCBwcm9qZWN0UGFnZSA9IChuYW1lKSA9PiB7XHJcbiAgbGV0IHBhcmVudFByb2plY3QgPSBuYW1lO1xyXG5cclxuICBjb25zdCBtYWluVG9Eb1BhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtYWluVG9Eb1BhZ2UuY2xhc3NMaXN0LmFkZCgnbWFpbi10b2RvLWNvbnRhaW5lcicpO1xyXG5cclxuICAvLyBhZGQgdGFzayBidXR0b25cclxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stYnRuJyk7XHJcbiAgYnV0dG9uLmlubmVySFRNTCA9ICdBZGQgVGFzayc7XHJcblxyXG4gIC8vIGFkZCB0YXNrIGJ1dHRvbiArIGljb25cclxuICBjb25zdCBidXR0b25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGJ1dHRvbkljb24uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCcpO1xyXG4gIGJ1dHRvbkljb24uaW5uZXJIVE1MID0gJ2FkZCc7XHJcbiAgYnV0dG9uLmFwcGVuZENoaWxkKGJ1dHRvbkljb24pO1xyXG5cclxuICAvLyB0YXNrIHBvcHVwIGZvcm0gZGl2XHJcbiAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGFpbmVyJyk7XHJcblxyXG4gIC8vIHRhc2sgZm9ybSBjb250YWluZXJcclxuICBjb25zdCB0YXNrRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0YXNrRmllbGQuY2xhc3NMaXN0LmFkZCgndGFzay1maWVsZCcpO1xyXG5cclxuICAvLyB0YXNrIGxhYmVsIGZvciB0aXRsZVxyXG4gIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIHRpdGxlTGFiZWwuaW5uZXJIVE1MID0gJ1RpdGxlOic7XHJcblxyXG4gIC8vIGlucHV0IGZpZWxkIGZvciB0YXNrIHRpdGxlXHJcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgdGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKCd0aXRsZS1pbnB1dCcpO1xyXG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcclxuICAgICdwbGFjZWhvbGRlcicsXHJcbiAgICAnRW50ZXIgYSB0aXRsZSBmb3IgeW91ciBUb0RvISdcclxuICApO1xyXG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcclxuXHJcbiAgLy8gb3B0aW9uYWwgZGVzY3JpcHRpb24gbGFiZWwgZm9yIGRlc2NyaXB0aW9uXHJcbiAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgZGVzY3JpcHRpb25MYWJlbC5pbm5lckhUTUwgPVxyXG4gICAgJ1lvdSBjYW4gYWRkIGRlc2NyaXB0aW9uIGZvciB5b3VyIFRvRG8gaGVyZS4nO1xyXG5cclxuICAvLyBvcHRpb25hbCB0ZXh0YXJlYSBmb3IgZGVzY3JpcHRpb25cclxuICBjb25zdCBkZXNjcmlwdGlvblRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICBkZXNjcmlwdGlvblRleHRBcmVhLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uLXRleHQtYXJlYScpO1xyXG4gIGRlc2NyaXB0aW9uVGV4dEFyZWEubWF4TGVuZ3RoID0gJzUwJztcclxuICBkZXNjcmlwdGlvblRleHRBcmVhLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgZGVzY3JpcHRpb25UZXh0QXJlYS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAncGxhY2Vob2xkZXInLFxyXG4gICAgJ0FkZCB5b3VyIGRlc2NyaXB0aW9uIGhlcmUgKGlmIHlvdSBzbyB3aXNoIHRvKSdcclxuICApO1xyXG5cclxuICAvLyBsYWJlbCBmb3IgZGF0ZSBpbnB1dFxyXG4gIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgZGF0ZUxhYmVsLmlubmVySFRNTCA9ICdEYXRlOic7XHJcblxyXG4gIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgZGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2RhdGUtaW5wdXQnKTtcclxuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcclxuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcclxuXHJcbiAgLy8gZm9ybSBzdWJtaXQgYnV0dG9uXHJcbiAgY29uc3QgU3VibWl0QnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgU3VibWl0QnV0dG9uRGl2LmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC1jb250YWluZXInKTtcclxuXHJcbiAgLy8gc3VibWl0IGlucHV0XHJcbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnc3VibWl0LWJ1dHRvbicpO1xyXG4gIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XHJcbiAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnQWRkJyk7XHJcbiAgU3VibWl0QnV0dG9uRGl2LmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XHJcblxyXG4gIC8vIHByZXZlbnQgc3VibWl0IGZyb20gc2VuZGluZyAvIHJlZnJlc2hpbmdcclxuICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGxldCB0aXRsZSA9IHRpdGxlSW5wdXQudmFsdWU7XHJcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblRleHRBcmVhLnZhbHVlO1xyXG4gICAgbGV0IGRhdGUgPSBkYXRlSW5wdXQudmFsdWU7XHJcblxyXG4gICAgYWRkVG9Ebyh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHBhcmVudFByb2plY3QpO1xyXG4gIH0pO1xyXG5cclxuICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tGaWVsZCk7XHJcbiAgdGFza0ZpZWxkLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xyXG4gIHRhc2tGaWVsZC5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcclxuICB0YXNrRmllbGQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XHJcbiAgdGFza0ZpZWxkLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVGV4dEFyZWEpO1xyXG4gIHRhc2tGaWVsZC5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xyXG4gIHRhc2tGaWVsZC5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xyXG4gIHRhc2tGaWVsZC5hcHBlbmRDaGlsZChTdWJtaXRCdXR0b25EaXYpO1xyXG5cclxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stY29udGFpbmVyJykpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stY29udGFpbmVyJykucmVtb3ZlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtYWluVG9Eb1BhZ2UuaW5zZXJ0QmVmb3JlKHRhc2tEaXYsIG1haW5Ub0RvUGFnZS5jaGlsZHJlblsxXSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIG1haW5Ub0RvUGFnZS5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gIHJldHVybiBtYWluVG9Eb1BhZ2U7XHJcbn07XHJcblxyXG5jb25zdCBwcm9qZWN0RGVsZXRlID0gKHByb2plY3REZWxldGVCdXR0b24pID0+IHtcclxuICBsZXQgZGVsZXRlQnV0dG9uID0gcHJvamVjdERlbGV0ZUJ1dHRvbjtcclxuXHJcbiAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGxldCB0YXJnZXQgPSBkZWxldGVCdXR0b24ucHJldmlvdXNFbGVtZW50U2libGluZy50ZXh0Q29udGVudDtcclxuICAgIGxldCB0YXJnZXRDb250YWluZXIgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZTtcclxuXHJcbiAgICBsZXQgbWF0Y2hJdGVtID0gcHJvamVjdHMuZmluZCgoaXRlbSkgPT4gaXRlbS5uYW1lID09PSB0YXJnZXQpO1xyXG4gICAgcHJvamVjdHMuc3BsaWNlKHByb2plY3RzLmluZGV4T2YobWF0Y2hJdGVtKSwgMSk7XHJcblxyXG4gICAgLy8gaWYgd2UgYXJlIGRlbGV0aW5nIHRoZSBzYW1lIHBhZ2Ugd2UgYXJlIG9uIHJpZ2h0IG5vd1xyXG4gICAgaWYgKERPTS5wYWdlVGl0bGUudGV4dENvbnRlbnQgPT09IHRhcmdldCkge1xyXG4gICAgICBjb25zdCByZXBsYWNlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICByZXBsYWNlbWVudC5jbGFzc0xpc3QuYWRkKCdtYWluLXRvZG8tY29udGFpbmVyJyk7XHJcbiAgICAgIG1hdGNoSXRlbS5wcm9qZWN0UGFnZS5yZXBsYWNlV2l0aChyZXBsYWNlbWVudCk7XHJcbiAgICAgIERPTS5wYWdlVGl0bGUudGV4dENvbnRlbnQgPSAnUGFnZSBEZWxldGVkJztcclxuICAgIH1cclxuXHJcbiAgICB0YXJnZXRDb250YWluZXIucmVtb3ZlKCk7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBwcm9qZWN0TmFtZUNoZWNrID0gKHByb2plY3ROYW1lKSA9PiB7XHJcbiAgaWYgKHByb2plY3ROYW1lID09PSAnJykge1xyXG4gICAgYWxlcnQoJ1Byb2plY3Qgc2hvdWxkIGhhdmUgYSBuYW1lIScpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIGlmIChwcm9qZWN0cy5zb21lKChpdGVtKSA9PiBwcm9qZWN0TmFtZSA9PT0gaXRlbS5uYW1lKSkge1xyXG4gICAgYWxlcnQoXCJZb3UgY2FuJ3QgaGF2ZSBzYW1lIG5hbWVkIHByb2plY3RzIVwiKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufTtcclxuXHJcbmxldCBwcm9qZWN0ID0ge1xyXG4gIHByb2plY3RBZGQ6IGZ1bmN0aW9uIChwcm9qZWN0TmFtZSkge1xyXG4gICAgaWYgKHByb2plY3ROYW1lQ2hlY2socHJvamVjdE5hbWUpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY29udGFpbmVyJyk7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdE5hbWVQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBwcm9qZWN0TmFtZVBhcmEuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1idXR0b24nKTtcclxuICAgIHByb2plY3ROYW1lUGFyYS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3REZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHByb2plY3REZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1kZWxldGUtYnV0dG9uJyk7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdERlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBwcm9qZWN0RGVsZXRlSWNvbi5pbm5lckhUTUwgPSAnY2xvc2UnO1xyXG4gICAgcHJvamVjdERlbGV0ZUljb24uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCcpO1xyXG5cclxuICAgIHByb2plY3REZWxldGVCdXR0b24uYXBwZW5kQ2hpbGQocHJvamVjdERlbGV0ZUljb24pO1xyXG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZVBhcmEpO1xyXG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0RGVsZXRlQnV0dG9uKTtcclxuICAgIERPTS5wcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xyXG5cclxuICAgIGxldCBuYW1lID0gcHJvamVjdE5hbWVQYXJhLnRleHRDb250ZW50O1xyXG5cclxuICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoXHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHByb2plY3ROYW1lUGFyYSxcclxuICAgICAgcHJvamVjdFBhZ2UobmFtZSlcclxuICAgICk7XHJcblxyXG4gICAgbmV3UHJvamVjdC5wcm9qZWN0TmFtZVBhcmEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGxldCByZXBsYWNlID0gRE9NLm1haW5QYWdlLmNoaWxkTm9kZXNbM107XHJcblxyXG4gICAgICBpZiAocmVwbGFjZS5jbGFzc05hbWUgPT09ICdhbGwtdGFza3MtcGFnZS1jb250YWluZXInKSB7XHJcbiAgICAgICAgcmVwbGFjZS5yZXBsYWNlV2l0aChuZXdQcm9qZWN0LmNyZWF0ZVBhZ2UobmFtZSkpO1xyXG4gICAgICAgIGxldCByZXBsYWNlUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAnLm1haW4tdG9kby1jb250YWluZXInXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsZXQgdGFza3MgPSBuZXdQcm9qZWN0LnRhc2tzO1xyXG4gICAgICAgIHRhc2tzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgIHJlcGxhY2VQYWdlLmFwcGVuZENoaWxkKGl0ZW0uY3JlYXRlUGFnZSgpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgcmVwbGFjZVBhZ2UgPSBuZXdQcm9qZWN0LmNyZWF0ZVBhZ2UobmFtZSk7XHJcbiAgICAgICAgcmVwbGFjZS5yZXBsYWNlV2l0aChyZXBsYWNlUGFnZSk7XHJcbiAgICAgICAgbGV0IHRhc2tzID0gbmV3UHJvamVjdC50YXNrcztcclxuICAgICAgICB0YXNrcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICByZXBsYWNlUGFnZS5hcHBlbmRDaGlsZChpdGVtLmNyZWF0ZVBhZ2UoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIERPTS5wYWdlVGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcclxuXHJcbiAgICBwcm9qZWN0RGVsZXRlKHByb2plY3REZWxldGVCdXR0b24pO1xyXG4gIH0sXHJcblxyXG4gIHByb2plY3RDYW5jZWw6IGZ1bmN0aW9uIChuZXdUYXNrRGl2KSB7XHJcbiAgICBuZXdUYXNrRGl2LnJlbW92ZSgpO1xyXG4gIH0sXHJcblxyXG4gIGxpc3RlbmVyOiBmdW5jdGlvbiAoXHJcbiAgICB0YXNrQWRkQnV0dG9uLFxyXG4gICAgdGFza0NhbmNlbEJ1dHRvbixcclxuICAgIG5ld1Rhc2tGaWVsZCxcclxuICAgIG5ld1Rhc2tEaXZcclxuICApIHtcclxuICAgIHRhc2tBZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGxldCBwcm9qZWN0TmFtZSA9IG5ld1Rhc2tGaWVsZC52YWx1ZTtcclxuICAgICAgdGhpcy5wcm9qZWN0QWRkKHByb2plY3ROYW1lKTtcclxuICAgICAgbmV3VGFza0ZpZWxkLnZhbHVlID0gJyc7XHJcbiAgICB9KTtcclxuICAgIHRhc2tDYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvamVjdENhbmNlbChuZXdUYXNrRGl2KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbn07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KCkge1xyXG4gIGNvbnN0IG5ld1Rhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBuZXdUYXNrRGl2LmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrLWZpZWxkJyk7XHJcblxyXG4gIGNvbnN0IG5ld1Rhc2tGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgbmV3VGFza0ZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgbmV3VGFza0ZpZWxkLmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrLWlucHV0Jyk7XHJcblxyXG4gIGNvbnN0IG5ld1Rhc2tCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbmV3VGFza0J1dHRvbnMuY2xhc3NMaXN0LmFkZCgnbmV3LXRhc2stYnV0dG9ucy1jb250YWluZXInKTtcclxuXHJcbiAgY29uc3QgdGFza0FkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHRhc2tBZGRCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkJztcclxuICB0YXNrQWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrLWJ1dHRvbi1hZGQnKTtcclxuXHJcbiAgY29uc3QgdGFza0NhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHRhc2tDYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcclxuICB0YXNrQ2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrLWJ1dHRvbi1jYW5jZWwnKTtcclxuXHJcbiAgbmV3VGFza0J1dHRvbnMuYXBwZW5kQ2hpbGQodGFza0FkZEJ1dHRvbik7XHJcbiAgbmV3VGFza0J1dHRvbnMuYXBwZW5kQ2hpbGQodGFza0NhbmNlbEJ1dHRvbik7XHJcbiAgbmV3VGFza0Rpdi5hcHBlbmRDaGlsZChuZXdUYXNrRmllbGQpO1xyXG4gIG5ld1Rhc2tEaXYuYXBwZW5kQ2hpbGQobmV3VGFza0J1dHRvbnMpO1xyXG4gIERPTS5wcm9qZWN0Q29udGFpbmVyLmluc2VydEJlZm9yZShcclxuICAgIG5ld1Rhc2tEaXYsXHJcbiAgICBET00ucHJvamVjdENvbnRhaW5lci5jaGlsZHJlblsyXVxyXG4gICk7XHJcblxyXG4gIHByb2plY3QubGlzdGVuZXIoXHJcbiAgICB0YXNrQWRkQnV0dG9uLFxyXG4gICAgdGFza0NhbmNlbEJ1dHRvbixcclxuICAgIG5ld1Rhc2tGaWVsZCxcclxuICAgIG5ld1Rhc2tEaXZcclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVOZXdQcm9qZWN0LCBwcm9qZWN0LCBwcm9qZWN0cywgdG9Eb3MsIHRvRG9Db250YWluZXIgfTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XHJcbiAgY29uc3RydWN0b3IobmFtZSwgcHJvamVjdE5hbWVQYXJhLCBwcm9qZWN0UGFnZSwgdGFza3MgPSBbXSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMucHJvamVjdE5hbWVQYXJhID0gcHJvamVjdE5hbWVQYXJhO1xyXG4gICAgdGhpcy5wcm9qZWN0UGFnZSA9IHByb2plY3RQYWdlO1xyXG4gICAgdGhpcy50YXNrcyA9IHRhc2tzO1xyXG4gIH1cclxuXHJcbiAgYWRkVGFzayh0YXNrKSB7XHJcbiAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVQYWdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvamVjdFBhZ2U7XHJcbiAgfVxyXG5cclxuICBnZXROYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICB9XHJcblxyXG4gIGNoYW5nZU5hbWUobmFtZSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHRvRG9Db25zIHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHRvRG9Db250YWluZXIpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XHJcbiAgICB0aGlzLnRvRG9Db250YWluZXIgPSB0b0RvQ29udGFpbmVyO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlUGFnZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnRvRG9Db250YWluZXI7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VOYW1lKHRpdGxlKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICByZXR1cm4gdGhpcy50aXRsZTtcclxuICB9XHJcblxyXG4gIGNoYW5nZURlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcclxuICB9XHJcblxyXG4gIGNoYW5nZURhdGUoZGF0ZSkge1xyXG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcclxuICAgIHJldHVybiB0aGlzLmRhdGU7XHJcbiAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IERPTSB9IGZyb20gJy4vZnVuY3Rpb25zL0RPTSc7XHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlTmV3UHJvamVjdCxcclxuICB0b0RvcyxcclxuICB0b0RvQ29udGFpbmVyLFxyXG59IGZyb20gJy4vZnVuY3Rpb25zL3Byb2plY3RDcmVhdGUnO1xyXG5cclxubGV0IGFsbFRhc2tzUGFnZSA9ICgpID0+IHtcclxuICBpZiAoRE9NLnBhZ2VUaXRsZS50ZXh0Q29udGVudCA9PT0gJ0FsbCBUYXNrcycpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgRE9NLnBhZ2VUaXRsZS50ZXh0Q29udGVudCA9ICdBbGwgVGFza3MnO1xyXG4gIGxldCBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXRvZG8tY29udGFpbmVyJyk7XHJcbiAgY29uc3QgYWxsVGFza3NQYWdlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGFsbFRhc2tzUGFnZUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnYWxsLXRhc2tzLXBhZ2UtY29udGFpbmVyJyk7XHJcblxyXG4gIGxldCBjbG9uZVRvRG9zID0gdG9Eb3Muc2xpY2UoKTtcclxuXHJcbiAgY2xvbmVUb0Rvcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAvLyBpdGVtID0gbmV3IHRvRG9Db25zKFxyXG4gICAgLy8gICBpdGVtLnRpdGxlLFxyXG4gICAgLy8gICBpdGVtLmRlc2NyaXB0aW9uLFxyXG4gICAgLy8gICBpdGVtLmRhdGUsXHJcbiAgICAvLyAgIHRvRG9Db250YWluZXJcclxuICAgIC8vICk7XHJcbiAgICAvLyBhbGxUYXNrc1BhZ2VDb250ZW50LmFwcGVuZENoaWxkKFxyXG4gICAgLy8gICBpdGVtLnRvRG9Db250YWluZXIoaXRlbS50aXRsZSwgaXRlbS5kZXNjcmlwdGlvbiwgaXRlbS5kYXRlKVxyXG4gICAgLy8gKTtcclxuXHJcbiAgICBhbGxUYXNrc1BhZ2VDb250ZW50LmFwcGVuZENoaWxkKGl0ZW0uY3JlYXRlUGFnZSgpKTtcclxuICB9KTtcclxuICBjb25zb2xlLmxvZyhjbG9uZVRvRG9zKTtcclxuICBjb25zb2xlLmxvZyh0b0Rvcyk7XHJcblxyXG4gIG1haW5QYWdlLnJlcGxhY2VXaXRoKGFsbFRhc2tzUGFnZUNvbnRlbnQpO1xyXG59O1xyXG5cclxubGV0IHBhZ2UgPSB7XHJcbiAgY2hhbmdlUGFnZTogZnVuY3Rpb24gKGJ1dHRvblRleHQpIHtcclxuICAgIGlmIChidXR0b25UZXh0ID09PSAnSW1wb3J0YW50Jykge1xyXG4gICAgICAvLyBUT0RPXHJcbiAgICB9IGVsc2UgaWYgKGJ1dHRvblRleHQgPT09ICdBbGwgVGFza3MnKSB7XHJcbiAgICAgIGFsbFRhc2tzUGFnZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gVE9ET1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGJpbmRFdmVudHM6IGZ1bmN0aW9uICgpIHtcclxuICAgIERPTS5zaWRlQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGxldCBidXR0b25UZXh0ID0gYnV0dG9uLnRleHRDb250ZW50O1xyXG4gICAgICAgIHRoaXMuY2hhbmdlUGFnZShidXR0b25UZXh0KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIERPTS5hZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrLWZpZWxkJykpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2staW5wdXQnKS5mb2N1cygpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjcmVhdGVOZXdQcm9qZWN0KCk7XHJcbiAgICB9KTtcclxuICB9LFxyXG59O1xyXG5cclxucGFnZS5iaW5kRXZlbnRzKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==