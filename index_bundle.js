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
/* harmony export */   "toDoListData": () => (/* binding */ toDoListData),
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

let toDoListData;
let projectsData;

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
    let dataMatch = toDoListData.find(
      (item) => item.uint32 === matchItem.uint32
    );

    if (replacementTitle.value !== '') {
      toDoTitle.innerHTML = tempTitle;
      matchItem.changeName(tempTitle);
      dataMatch.title = tempTitle;
      replacementTitle.replaceWith(toDoTitle);
    } else {
      replacementTitle.replaceWith(toDoTitle);
    }
    if (replacementDesc.value !== '') {
      toDoDesc.innerHTML = tempDesc;
      matchItem.changeDescription(tempDesc);
      dataMatch.description = tempDesc;
      replacementDesc.replaceWith(toDoDesc);
    } else {
      replacementDesc.replaceWith(toDoDesc);
    }
    if (replacementDate.value !== '') {
      toDoDate.innerHTML = tempDate;
      matchItem.changeDate(tempDate);
      dataMatch.date = tempDate;
      replacementDate.replaceWith(toDoDate);
    } else {
      replacementDate.replaceWith(toDoDate);
    }
    console.log(toDoListData);
  }
};

const removeToDo = (e, parentProject) => {
  let targetContainer = e.currentTarget.parentNode.parentNode;

  // remove from the array of todos
  let matchItem = toDos.find(
    (item) => item.toDoContainer === targetContainer
  );

  toDos.splice(toDos.indexOf(matchItem), 1);

  // remove from local storage array
  let matchData = toDoListData.find(
    (item) => item.uint32 === matchItem.uint32
  );
  toDoListData.splice(toDoListData.indexOf(matchData), 1);

  // remove from local storage project tasks array
  let matchProjectData = projectsData.find(
    (item) => item.name === parentProject
  );
  let projectDataTasks = matchProjectData.tasks;
  let toDoProjectIndex = projectDataTasks.find(
    (item) => item.uint32 === matchItem.uint32
  );
  projectDataTasks.splice(
    projectDataTasks.indexOf(toDoProjectIndex),
    1
  );

  // remove from project itself
  let matchProject = projects.find(
    (item) => item.name === parentProject
  );
  let projectTasks = matchProject.tasks;
  projectTasks.splice(projectTasks.indexOf(matchItem), 1);

  targetContainer.remove();

  console.log(toDos);
};

const toDoContainer = (title, description, date, parentProject) => {
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
    removeToDo(e, parentProject);
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
    toDoContainer(title, description, date, parentProject)
  );

  let matchItem = projects.find(
    (item) => item.name === parentProject
  );
  matchItem.addTask(newToDo);
  toDos.push(newToDo);

  let matchData = projectsData.find(
    (item) => item.name === matchItem.name
  );
  matchData.tasks.push(newToDo);
  console.log(projectsData);

  localStorage.setItem('toDoList', JSON.stringify(toDos));
  toDoListData = JSON.parse(localStorage.getItem('toDoList'));

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

    // delete from projects array
    let matchItem = projects.find((item) => item.name === target);
    projects.splice(projects.indexOf(matchItem), 1);

    // delete from local storage projects array
    let matchData = projectsData.find(
      (item) => item.name === matchItem.name
    );
    projectsData.splice(projectsData.indexOf(matchData), 1);

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

      let replacePage = newProject.createPage(name);
      let tasks = newProject.tasks;

      replace.replaceWith(replacePage);

      tasks.forEach((item) => {
        replacePage.appendChild(item.createPage());
      });

      _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.pageTitle.textContent = name;
    });

    projects.push(newProject);
    console.log(projects);

    localStorage.setItem('projectsList', JSON.stringify(projects));
    projectsData = JSON.parse(localStorage.getItem('projectsList'));

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

  // removeTask(task) {
  //   this.tasks.splice(this.tasks.indexOf(task.toDoContainer), 1);
  // }

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
    this.uint32 = this.getUniqueKey();
  }

  getUniqueKey() {
    const uint32 = window.crypto.getRandomValues(
      new Uint32Array(1)
    )[0];
    return uint32.toString(16);
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




window.addEventListener('load', (e) => {});

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
    allTasksPageContent.appendChild(item.createPage());
  });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXhfYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0FPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVjRCO0FBQ0s7QUFDRjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDhDQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ2lCO0FBTUg7QUFDbkM7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBLE1BQU0scUVBQXlCO0FBQy9CO0FBQ0E7QUFDQSxFQUFFLHFFQUF5QjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUVBQVc7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBSSxtRUFBdUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxJQUFJLGlGQUFxQztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMEVBQWdCO0FBQ3RCLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzE0NTMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZnVuY3Rpb25zL0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9mdW5jdGlvbnMvcHJvamVjdENyZWF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9mdW5jdGlvbnMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZnVuY3Rpb25zL3RvZG9zLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBsZXQgRE9NID0ge1xyXG4gIHNpZGVCdXR0b25zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZS1idXR0b25zJyksXHJcbiAgcHJvamVjdENvbnRhaW5lcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGUtcHJvamVjdHMnKSxcclxuICBhZGRQcm9qZWN0QnV0dG9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkUHJvamVjdHMnKSxcclxuICBwcm9qZWN0QnV0dG9uczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtYnV0dG9uJyksXHJcbiAgcHJvamVjdERlbEJ1dHRvbnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAnLnByb2plY3QtZGVsZXRlLWJ1dHRvbidcclxuICApLFxyXG4gIG1haW5QYWdlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MtY29udGFpbmVyJyksXHJcbiAgcGFnZVRpdGxlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFnZS10aXRsZScpLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBET00gfSBmcm9tICcuL0RPTSc7XHJcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdHMnO1xyXG5pbXBvcnQgdG9Eb0NvbnMgZnJvbSAnLi90b2Rvcyc7XHJcblxyXG5sZXQgcHJvamVjdHMgPSBbXTtcclxubGV0IHRvRG9zID0gW107XHJcblxyXG5sZXQgdGVtcFRpdGxlID0gJyc7XHJcbmxldCB0ZW1wRGVzYyA9ICcnO1xyXG5sZXQgdGVtcERhdGUgPSAnJztcclxuXHJcbmxldCB0b0RvTGlzdERhdGE7XHJcbmxldCBwcm9qZWN0c0RhdGE7XHJcblxyXG5jb25zdCBlZGl0VG9EbyA9IChcclxuICB0b0RvVGl0bGUsXHJcbiAgdG9Eb0Rlc2MsXHJcbiAgdG9Eb0RhdGUsXHJcbiAgbW9kaWZ5RWRpdENvbnRlbnQsXHJcbiAgdG9Eb0NvbnRhaW5lclxyXG4pID0+IHtcclxuICBpZiAobW9kaWZ5RWRpdENvbnRlbnQgPT09ICdFZGl0Jykge1xyXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZWRpdC10aXRsZScpO1xyXG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICdwbGFjZWhvbGRlcicsXHJcbiAgICAgICdFbnRlciBhIHRpdGxlIGZvciB5b3VyIFRvRG8hJ1xyXG4gICAgKTtcclxuXHJcbiAgICB0aXRsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgdGVtcFRpdGxlID0gdGl0bGVJbnB1dC52YWx1ZTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGRlc2NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBkZXNjSW5wdXQubWF4TGVuZ3RoID0gJzUwJztcclxuICAgIGRlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VkaXQtZGVzYycpO1xyXG4gICAgZGVzY0lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICBkZXNjSW5wdXQuc2V0QXR0cmlidXRlKFxyXG4gICAgICAncGxhY2Vob2xkZXInLFxyXG4gICAgICAnQWRkIHlvdXIgZGVzY3JpcHRpb24gaGVyZSAoaWYgeW91IHNvIHdpc2ggdG8pJ1xyXG4gICAgKTtcclxuXHJcbiAgICBkZXNjSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICB0ZW1wRGVzYyA9IGRlc2NJbnB1dC52YWx1ZTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdlZGl0LWRhdGUnKTtcclxuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xyXG4gICAgZGF0ZUlucHV0LnN0eWxlLm1hcmdpbkxlZnQgPSAnYXV0byc7XHJcblxyXG4gICAgZGF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgdGVtcERhdGUgPSBkYXRlSW5wdXQudmFsdWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0b0RvVGl0bGUucmVwbGFjZVdpdGgodGl0bGVJbnB1dCk7XHJcbiAgICB0b0RvRGVzYy5yZXBsYWNlV2l0aChkZXNjSW5wdXQpO1xyXG4gICAgdG9Eb0RhdGUucmVwbGFjZVdpdGgoZGF0ZUlucHV0KTtcclxuICB9IGVsc2UgaWYgKG1vZGlmeUVkaXRDb250ZW50ID09PSAnU2F2ZScpIHtcclxuICAgIGxldCByZXBsYWNlbWVudFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGl0bGUnKTtcclxuICAgIGxldCByZXBsYWNlbWVudERlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1kZXNjJyk7XHJcbiAgICBsZXQgcmVwbGFjZW1lbnREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtZGF0ZScpO1xyXG5cclxuICAgIGxldCBtYXRjaEl0ZW0gPSB0b0Rvcy5maW5kKFxyXG4gICAgICAoaXRlbSkgPT4gaXRlbS50b0RvQ29udGFpbmVyID09PSB0b0RvQ29udGFpbmVyXHJcbiAgICApO1xyXG4gICAgbGV0IGRhdGFNYXRjaCA9IHRvRG9MaXN0RGF0YS5maW5kKFxyXG4gICAgICAoaXRlbSkgPT4gaXRlbS51aW50MzIgPT09IG1hdGNoSXRlbS51aW50MzJcclxuICAgICk7XHJcblxyXG4gICAgaWYgKHJlcGxhY2VtZW50VGl0bGUudmFsdWUgIT09ICcnKSB7XHJcbiAgICAgIHRvRG9UaXRsZS5pbm5lckhUTUwgPSB0ZW1wVGl0bGU7XHJcbiAgICAgIG1hdGNoSXRlbS5jaGFuZ2VOYW1lKHRlbXBUaXRsZSk7XHJcbiAgICAgIGRhdGFNYXRjaC50aXRsZSA9IHRlbXBUaXRsZTtcclxuICAgICAgcmVwbGFjZW1lbnRUaXRsZS5yZXBsYWNlV2l0aCh0b0RvVGl0bGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVwbGFjZW1lbnRUaXRsZS5yZXBsYWNlV2l0aCh0b0RvVGl0bGUpO1xyXG4gICAgfVxyXG4gICAgaWYgKHJlcGxhY2VtZW50RGVzYy52YWx1ZSAhPT0gJycpIHtcclxuICAgICAgdG9Eb0Rlc2MuaW5uZXJIVE1MID0gdGVtcERlc2M7XHJcbiAgICAgIG1hdGNoSXRlbS5jaGFuZ2VEZXNjcmlwdGlvbih0ZW1wRGVzYyk7XHJcbiAgICAgIGRhdGFNYXRjaC5kZXNjcmlwdGlvbiA9IHRlbXBEZXNjO1xyXG4gICAgICByZXBsYWNlbWVudERlc2MucmVwbGFjZVdpdGgodG9Eb0Rlc2MpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVwbGFjZW1lbnREZXNjLnJlcGxhY2VXaXRoKHRvRG9EZXNjKTtcclxuICAgIH1cclxuICAgIGlmIChyZXBsYWNlbWVudERhdGUudmFsdWUgIT09ICcnKSB7XHJcbiAgICAgIHRvRG9EYXRlLmlubmVySFRNTCA9IHRlbXBEYXRlO1xyXG4gICAgICBtYXRjaEl0ZW0uY2hhbmdlRGF0ZSh0ZW1wRGF0ZSk7XHJcbiAgICAgIGRhdGFNYXRjaC5kYXRlID0gdGVtcERhdGU7XHJcbiAgICAgIHJlcGxhY2VtZW50RGF0ZS5yZXBsYWNlV2l0aCh0b0RvRGF0ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXBsYWNlbWVudERhdGUucmVwbGFjZVdpdGgodG9Eb0RhdGUpO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2codG9Eb0xpc3REYXRhKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCByZW1vdmVUb0RvID0gKGUsIHBhcmVudFByb2plY3QpID0+IHtcclxuICBsZXQgdGFyZ2V0Q29udGFpbmVyID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuXHJcbiAgLy8gcmVtb3ZlIGZyb20gdGhlIGFycmF5IG9mIHRvZG9zXHJcbiAgbGV0IG1hdGNoSXRlbSA9IHRvRG9zLmZpbmQoXHJcbiAgICAoaXRlbSkgPT4gaXRlbS50b0RvQ29udGFpbmVyID09PSB0YXJnZXRDb250YWluZXJcclxuICApO1xyXG5cclxuICB0b0Rvcy5zcGxpY2UodG9Eb3MuaW5kZXhPZihtYXRjaEl0ZW0pLCAxKTtcclxuXHJcbiAgLy8gcmVtb3ZlIGZyb20gbG9jYWwgc3RvcmFnZSBhcnJheVxyXG4gIGxldCBtYXRjaERhdGEgPSB0b0RvTGlzdERhdGEuZmluZChcclxuICAgIChpdGVtKSA9PiBpdGVtLnVpbnQzMiA9PT0gbWF0Y2hJdGVtLnVpbnQzMlxyXG4gICk7XHJcbiAgdG9Eb0xpc3REYXRhLnNwbGljZSh0b0RvTGlzdERhdGEuaW5kZXhPZihtYXRjaERhdGEpLCAxKTtcclxuXHJcbiAgLy8gcmVtb3ZlIGZyb20gbG9jYWwgc3RvcmFnZSBwcm9qZWN0IHRhc2tzIGFycmF5XHJcbiAgbGV0IG1hdGNoUHJvamVjdERhdGEgPSBwcm9qZWN0c0RhdGEuZmluZChcclxuICAgIChpdGVtKSA9PiBpdGVtLm5hbWUgPT09IHBhcmVudFByb2plY3RcclxuICApO1xyXG4gIGxldCBwcm9qZWN0RGF0YVRhc2tzID0gbWF0Y2hQcm9qZWN0RGF0YS50YXNrcztcclxuICBsZXQgdG9Eb1Byb2plY3RJbmRleCA9IHByb2plY3REYXRhVGFza3MuZmluZChcclxuICAgIChpdGVtKSA9PiBpdGVtLnVpbnQzMiA9PT0gbWF0Y2hJdGVtLnVpbnQzMlxyXG4gICk7XHJcbiAgcHJvamVjdERhdGFUYXNrcy5zcGxpY2UoXHJcbiAgICBwcm9qZWN0RGF0YVRhc2tzLmluZGV4T2YodG9Eb1Byb2plY3RJbmRleCksXHJcbiAgICAxXHJcbiAgKTtcclxuXHJcbiAgLy8gcmVtb3ZlIGZyb20gcHJvamVjdCBpdHNlbGZcclxuICBsZXQgbWF0Y2hQcm9qZWN0ID0gcHJvamVjdHMuZmluZChcclxuICAgIChpdGVtKSA9PiBpdGVtLm5hbWUgPT09IHBhcmVudFByb2plY3RcclxuICApO1xyXG4gIGxldCBwcm9qZWN0VGFza3MgPSBtYXRjaFByb2plY3QudGFza3M7XHJcbiAgcHJvamVjdFRhc2tzLnNwbGljZShwcm9qZWN0VGFza3MuaW5kZXhPZihtYXRjaEl0ZW0pLCAxKTtcclxuXHJcbiAgdGFyZ2V0Q29udGFpbmVyLnJlbW92ZSgpO1xyXG5cclxuICBjb25zb2xlLmxvZyh0b0Rvcyk7XHJcbn07XHJcblxyXG5jb25zdCB0b0RvQ29udGFpbmVyID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcGFyZW50UHJvamVjdCkgPT4ge1xyXG4gIGNvbnN0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0b0RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvLWRvLWNvbnRhaW5lcicpO1xyXG5cclxuICBjb25zdCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNoZWNrLmNsYXNzTGlzdC5hZGQoJ2NoZWNrLWJveCcpO1xyXG5cclxuICBjaGVjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmIChjaGVjay5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrZWQnKSkge1xyXG4gICAgICBjaGVjay5jbGFzc0xpc3QucmVtb3ZlKCdjaGVja2VkJyk7XHJcbiAgICAgIHRvRG9EZXRhaWxzLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICB0b0RvQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2hlY2suY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpO1xyXG4gICAgICB0b0RvRGV0YWlscy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgdG9Eb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29uc3QgdG9Eb0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0b0RvRGV0YWlscy5jbGFzc0xpc3QuYWRkKCd0by1kby1kZXRhaWxzJyk7XHJcblxyXG4gIGNvbnN0IHRvRG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRvRG9UaXRsZS5jbGFzc0xpc3QuYWRkKCd0by1kby10aXRsZScpO1xyXG4gIHRvRG9UaXRsZS5pbm5lckhUTUwgPSB0aXRsZTtcclxuXHJcbiAgY29uc3QgdG9Eb0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0b0RvRGVzYy5jbGFzc0xpc3QuYWRkKCd0by1kby1kZXNjJyk7XHJcbiAgdG9Eb0Rlc2MuaW5uZXJIVE1MID0gZGVzY3JpcHRpb247XHJcblxyXG4gIHRvRG9EZXRhaWxzLmFwcGVuZENoaWxkKHRvRG9UaXRsZSk7XHJcbiAgdG9Eb0RldGFpbHMuYXBwZW5kQ2hpbGQodG9Eb0Rlc2MpO1xyXG5cclxuICBjb25zdCB0b0RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRvRG9EYXRlLmNsYXNzTGlzdC5hZGQoJ3RvLWRvLWRhdGUnKTtcclxuICB0b0RvRGF0ZS5pbm5lckhUTUwgPSBkYXRlO1xyXG5cclxuICBjb25zdCBtb2RpZnlUb0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbW9kaWZ5VG9Eby5jbGFzc0xpc3QuYWRkKCdtb2RpZnktdG8tZG8nKTtcclxuXHJcbiAgY29uc3QgbW9kaWZ5RWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIG1vZGlmeUVkaXQuY2xhc3NMaXN0LmFkZCgnbW9kaWZ5LWJ1dHRvbnMnKTtcclxuICBtb2RpZnlFZGl0LmlubmVySFRNTCA9ICdFZGl0JztcclxuXHJcbiAgbW9kaWZ5RWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGxldCBtb2RpZnlFZGl0Q29udGVudCA9IG1vZGlmeUVkaXQuaW5uZXJIVE1MO1xyXG4gICAgaWYgKG1vZGlmeUVkaXRDb250ZW50ID09PSAnU2F2ZScpIHtcclxuICAgICAgZWRpdFRvRG8oXHJcbiAgICAgICAgdG9Eb1RpdGxlLFxyXG4gICAgICAgIHRvRG9EZXNjLFxyXG4gICAgICAgIHRvRG9EYXRlLFxyXG4gICAgICAgIG1vZGlmeUVkaXRDb250ZW50LFxyXG4gICAgICAgIHRvRG9Db250YWluZXJcclxuICAgICAgKTtcclxuICAgICAgbW9kaWZ5RWRpdC5pbm5lckhUTUwgPSAnRWRpdCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlZGl0VG9EbyhcclxuICAgICAgICB0b0RvVGl0bGUsXHJcbiAgICAgICAgdG9Eb0Rlc2MsXHJcbiAgICAgICAgdG9Eb0RhdGUsXHJcbiAgICAgICAgbW9kaWZ5RWRpdENvbnRlbnQsXHJcbiAgICAgICAgdG9Eb0NvbnRhaW5lclxyXG4gICAgICApO1xyXG4gICAgICBtb2RpZnlFZGl0LmlubmVySFRNTCA9ICdTYXZlJztcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29uc3QgbW9kaWZ5UmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgbW9kaWZ5UmVtb3ZlLmNsYXNzTGlzdC5hZGQoJ21vZGlmeS1idXR0b25zJyk7XHJcbiAgbW9kaWZ5UmVtb3ZlLmlubmVySFRNTCA9ICdSZW1vdmUnO1xyXG5cclxuICBtb2RpZnlSZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgcmVtb3ZlVG9EbyhlLCBwYXJlbnRQcm9qZWN0KTtcclxuICB9KTtcclxuXHJcbiAgbW9kaWZ5VG9Eby5hcHBlbmRDaGlsZChtb2RpZnlFZGl0KTtcclxuICBtb2RpZnlUb0RvLmFwcGVuZENoaWxkKG1vZGlmeVJlbW92ZSk7XHJcblxyXG4gIHRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2spO1xyXG4gIHRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9Eb0RldGFpbHMpO1xyXG4gIHRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9Eb0RhdGUpO1xyXG4gIHRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQobW9kaWZ5VG9Ebyk7XHJcblxyXG4gIHJldHVybiB0b0RvQ29udGFpbmVyO1xyXG59O1xyXG5cclxuY29uc3QgYWRkVG9EbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHBhcmVudFByb2plY3QpID0+IHtcclxuICBsZXQgbmV3VG9EbyA9IG5ldyB0b0RvQ29ucyhcclxuICAgIHRpdGxlLFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgICBkYXRlLFxyXG4gICAgdG9Eb0NvbnRhaW5lcih0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHBhcmVudFByb2plY3QpXHJcbiAgKTtcclxuXHJcbiAgbGV0IG1hdGNoSXRlbSA9IHByb2plY3RzLmZpbmQoXHJcbiAgICAoaXRlbSkgPT4gaXRlbS5uYW1lID09PSBwYXJlbnRQcm9qZWN0XHJcbiAgKTtcclxuICBtYXRjaEl0ZW0uYWRkVGFzayhuZXdUb0RvKTtcclxuICB0b0Rvcy5wdXNoKG5ld1RvRG8pO1xyXG5cclxuICBsZXQgbWF0Y2hEYXRhID0gcHJvamVjdHNEYXRhLmZpbmQoXHJcbiAgICAoaXRlbSkgPT4gaXRlbS5uYW1lID09PSBtYXRjaEl0ZW0ubmFtZVxyXG4gICk7XHJcbiAgbWF0Y2hEYXRhLnRhc2tzLnB1c2gobmV3VG9Ebyk7XHJcbiAgY29uc29sZS5sb2cocHJvamVjdHNEYXRhKTtcclxuXHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9MaXN0JywgSlNPTi5zdHJpbmdpZnkodG9Eb3MpKTtcclxuICB0b0RvTGlzdERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvTGlzdCcpKTtcclxuXHJcbiAgY29uc29sZS5sb2codG9Eb3MpO1xyXG5cclxuICBkb2N1bWVudFxyXG4gICAgLnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXRvZG8tY29udGFpbmVyJylcclxuICAgIC5hcHBlbmRDaGlsZChuZXdUb0RvLmNyZWF0ZVBhZ2UoKSk7XHJcbn07XHJcblxyXG5jb25zdCBwcm9qZWN0UGFnZSA9IChuYW1lKSA9PiB7XHJcbiAgbGV0IHBhcmVudFByb2plY3QgPSBuYW1lO1xyXG5cclxuICBjb25zdCBtYWluVG9Eb1BhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtYWluVG9Eb1BhZ2UuY2xhc3NMaXN0LmFkZCgnbWFpbi10b2RvLWNvbnRhaW5lcicpO1xyXG5cclxuICAvLyBhZGQgdGFzayBidXR0b25cclxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stYnRuJyk7XHJcbiAgYnV0dG9uLmlubmVySFRNTCA9ICdBZGQgVGFzayc7XHJcblxyXG4gIC8vIGFkZCB0YXNrIGJ1dHRvbiArIGljb25cclxuICBjb25zdCBidXR0b25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGJ1dHRvbkljb24uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCcpO1xyXG4gIGJ1dHRvbkljb24uaW5uZXJIVE1MID0gJ2FkZCc7XHJcbiAgYnV0dG9uLmFwcGVuZENoaWxkKGJ1dHRvbkljb24pO1xyXG5cclxuICAvLyB0YXNrIHBvcHVwIGZvcm0gZGl2XHJcbiAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGFpbmVyJyk7XHJcblxyXG4gIC8vIHRhc2sgZm9ybSBjb250YWluZXJcclxuICBjb25zdCB0YXNrRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0YXNrRmllbGQuY2xhc3NMaXN0LmFkZCgndGFzay1maWVsZCcpO1xyXG5cclxuICAvLyB0YXNrIGxhYmVsIGZvciB0aXRsZVxyXG4gIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIHRpdGxlTGFiZWwuaW5uZXJIVE1MID0gJ1RpdGxlOic7XHJcblxyXG4gIC8vIGlucHV0IGZpZWxkIGZvciB0YXNrIHRpdGxlXHJcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgdGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKCd0aXRsZS1pbnB1dCcpO1xyXG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcclxuICAgICdwbGFjZWhvbGRlcicsXHJcbiAgICAnRW50ZXIgYSB0aXRsZSBmb3IgeW91ciBUb0RvISdcclxuICApO1xyXG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcclxuXHJcbiAgLy8gb3B0aW9uYWwgZGVzY3JpcHRpb24gbGFiZWwgZm9yIGRlc2NyaXB0aW9uXHJcbiAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgZGVzY3JpcHRpb25MYWJlbC5pbm5lckhUTUwgPVxyXG4gICAgJ1lvdSBjYW4gYWRkIGRlc2NyaXB0aW9uIGZvciB5b3VyIFRvRG8gaGVyZS4nO1xyXG5cclxuICAvLyBvcHRpb25hbCB0ZXh0YXJlYSBmb3IgZGVzY3JpcHRpb25cclxuICBjb25zdCBkZXNjcmlwdGlvblRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICBkZXNjcmlwdGlvblRleHRBcmVhLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uLXRleHQtYXJlYScpO1xyXG4gIGRlc2NyaXB0aW9uVGV4dEFyZWEubWF4TGVuZ3RoID0gJzUwJztcclxuICBkZXNjcmlwdGlvblRleHRBcmVhLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgZGVzY3JpcHRpb25UZXh0QXJlYS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAncGxhY2Vob2xkZXInLFxyXG4gICAgJ0FkZCB5b3VyIGRlc2NyaXB0aW9uIGhlcmUgKGlmIHlvdSBzbyB3aXNoIHRvKSdcclxuICApO1xyXG5cclxuICAvLyBsYWJlbCBmb3IgZGF0ZSBpbnB1dFxyXG4gIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgZGF0ZUxhYmVsLmlubmVySFRNTCA9ICdEYXRlOic7XHJcblxyXG4gIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgZGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2RhdGUtaW5wdXQnKTtcclxuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcclxuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcclxuXHJcbiAgLy8gZm9ybSBzdWJtaXQgYnV0dG9uXHJcbiAgY29uc3QgU3VibWl0QnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgU3VibWl0QnV0dG9uRGl2LmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC1jb250YWluZXInKTtcclxuXHJcbiAgLy8gc3VibWl0IGlucHV0XHJcbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnc3VibWl0LWJ1dHRvbicpO1xyXG4gIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XHJcbiAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnQWRkJyk7XHJcbiAgU3VibWl0QnV0dG9uRGl2LmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XHJcblxyXG4gIC8vIHByZXZlbnQgc3VibWl0IGZyb20gc2VuZGluZyAvIHJlZnJlc2hpbmdcclxuICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGxldCB0aXRsZSA9IHRpdGxlSW5wdXQudmFsdWU7XHJcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblRleHRBcmVhLnZhbHVlO1xyXG4gICAgbGV0IGRhdGUgPSBkYXRlSW5wdXQudmFsdWU7XHJcblxyXG4gICAgYWRkVG9Ebyh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHBhcmVudFByb2plY3QpO1xyXG4gIH0pO1xyXG5cclxuICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tGaWVsZCk7XHJcbiAgdGFza0ZpZWxkLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xyXG4gIHRhc2tGaWVsZC5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcclxuICB0YXNrRmllbGQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XHJcbiAgdGFza0ZpZWxkLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVGV4dEFyZWEpO1xyXG4gIHRhc2tGaWVsZC5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xyXG4gIHRhc2tGaWVsZC5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xyXG4gIHRhc2tGaWVsZC5hcHBlbmRDaGlsZChTdWJtaXRCdXR0b25EaXYpO1xyXG5cclxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stY29udGFpbmVyJykpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stY29udGFpbmVyJykucmVtb3ZlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtYWluVG9Eb1BhZ2UuaW5zZXJ0QmVmb3JlKHRhc2tEaXYsIG1haW5Ub0RvUGFnZS5jaGlsZHJlblsxXSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIG1haW5Ub0RvUGFnZS5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gIHJldHVybiBtYWluVG9Eb1BhZ2U7XHJcbn07XHJcblxyXG5jb25zdCBwcm9qZWN0RGVsZXRlID0gKHByb2plY3REZWxldGVCdXR0b24pID0+IHtcclxuICBsZXQgZGVsZXRlQnV0dG9uID0gcHJvamVjdERlbGV0ZUJ1dHRvbjtcclxuXHJcbiAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGxldCB0YXJnZXQgPSBkZWxldGVCdXR0b24ucHJldmlvdXNFbGVtZW50U2libGluZy50ZXh0Q29udGVudDtcclxuICAgIGxldCB0YXJnZXRDb250YWluZXIgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZTtcclxuXHJcbiAgICAvLyBkZWxldGUgZnJvbSBwcm9qZWN0cyBhcnJheVxyXG4gICAgbGV0IG1hdGNoSXRlbSA9IHByb2plY3RzLmZpbmQoKGl0ZW0pID0+IGl0ZW0ubmFtZSA9PT0gdGFyZ2V0KTtcclxuICAgIHByb2plY3RzLnNwbGljZShwcm9qZWN0cy5pbmRleE9mKG1hdGNoSXRlbSksIDEpO1xyXG5cclxuICAgIC8vIGRlbGV0ZSBmcm9tIGxvY2FsIHN0b3JhZ2UgcHJvamVjdHMgYXJyYXlcclxuICAgIGxldCBtYXRjaERhdGEgPSBwcm9qZWN0c0RhdGEuZmluZChcclxuICAgICAgKGl0ZW0pID0+IGl0ZW0ubmFtZSA9PT0gbWF0Y2hJdGVtLm5hbWVcclxuICAgICk7XHJcbiAgICBwcm9qZWN0c0RhdGEuc3BsaWNlKHByb2plY3RzRGF0YS5pbmRleE9mKG1hdGNoRGF0YSksIDEpO1xyXG5cclxuICAgIC8vIGlmIHdlIGFyZSBkZWxldGluZyB0aGUgc2FtZSBwYWdlIHdlIGFyZSBvbiByaWdodCBub3dcclxuICAgIGlmIChET00ucGFnZVRpdGxlLnRleHRDb250ZW50ID09PSB0YXJnZXQpIHtcclxuICAgICAgY29uc3QgcmVwbGFjZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgcmVwbGFjZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWFpbi10b2RvLWNvbnRhaW5lcicpO1xyXG4gICAgICBtYXRjaEl0ZW0ucHJvamVjdFBhZ2UucmVwbGFjZVdpdGgocmVwbGFjZW1lbnQpO1xyXG4gICAgICBET00ucGFnZVRpdGxlLnRleHRDb250ZW50ID0gJ1BhZ2UgRGVsZXRlZCc7XHJcbiAgICB9XHJcblxyXG4gICAgdGFyZ2V0Q29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgY29uc29sZS5sb2cocHJvamVjdHMpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgcHJvamVjdE5hbWVDaGVjayA9IChwcm9qZWN0TmFtZSkgPT4ge1xyXG4gIGlmIChwcm9qZWN0TmFtZSA9PT0gJycpIHtcclxuICAgIGFsZXJ0KCdQcm9qZWN0IHNob3VsZCBoYXZlIGEgbmFtZSEnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICBpZiAocHJvamVjdHMuc29tZSgoaXRlbSkgPT4gcHJvamVjdE5hbWUgPT09IGl0ZW0ubmFtZSkpIHtcclxuICAgIGFsZXJ0KFwiWW91IGNhbid0IGhhdmUgc2FtZSBuYW1lZCBwcm9qZWN0cyFcIik7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn07XHJcblxyXG5sZXQgcHJvamVjdCA9IHtcclxuICBwcm9qZWN0QWRkOiBmdW5jdGlvbiAocHJvamVjdE5hbWUpIHtcclxuICAgIGlmIChwcm9qZWN0TmFtZUNoZWNrKHByb2plY3ROYW1lKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNvbnRhaW5lcicpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3ROYW1lUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgcHJvamVjdE5hbWVQYXJhLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYnV0dG9uJyk7XHJcbiAgICBwcm9qZWN0TmFtZVBhcmEudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0RGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBwcm9qZWN0RGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZGVsZXRlLWJ1dHRvbicpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3REZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgcHJvamVjdERlbGV0ZUljb24uaW5uZXJIVE1MID0gJ2Nsb3NlJztcclxuICAgIHByb2plY3REZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQnKTtcclxuXHJcbiAgICBwcm9qZWN0RGVsZXRlQnV0dG9uLmFwcGVuZENoaWxkKHByb2plY3REZWxldGVJY29uKTtcclxuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVQYXJhKTtcclxuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdERlbGV0ZUJ1dHRvbik7XHJcbiAgICBET00ucHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcclxuXHJcbiAgICBsZXQgbmFtZSA9IHByb2plY3ROYW1lUGFyYS50ZXh0Q29udGVudDtcclxuXHJcbiAgICBsZXQgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KFxyXG4gICAgICBuYW1lLFxyXG4gICAgICBwcm9qZWN0TmFtZVBhcmEsXHJcbiAgICAgIHByb2plY3RQYWdlKG5hbWUpXHJcbiAgICApO1xyXG5cclxuICAgIG5ld1Byb2plY3QucHJvamVjdE5hbWVQYXJhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBsZXQgcmVwbGFjZSA9IERPTS5tYWluUGFnZS5jaGlsZE5vZGVzWzNdO1xyXG5cclxuICAgICAgbGV0IHJlcGxhY2VQYWdlID0gbmV3UHJvamVjdC5jcmVhdGVQYWdlKG5hbWUpO1xyXG4gICAgICBsZXQgdGFza3MgPSBuZXdQcm9qZWN0LnRhc2tzO1xyXG5cclxuICAgICAgcmVwbGFjZS5yZXBsYWNlV2l0aChyZXBsYWNlUGFnZSk7XHJcblxyXG4gICAgICB0YXNrcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgcmVwbGFjZVBhZ2UuYXBwZW5kQ2hpbGQoaXRlbS5jcmVhdGVQYWdlKCkpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIERPTS5wYWdlVGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHNMaXN0JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcclxuICAgIHByb2plY3RzRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzTGlzdCcpKTtcclxuXHJcbiAgICBwcm9qZWN0RGVsZXRlKHByb2plY3REZWxldGVCdXR0b24pO1xyXG4gIH0sXHJcblxyXG4gIHByb2plY3RDYW5jZWw6IGZ1bmN0aW9uIChuZXdUYXNrRGl2KSB7XHJcbiAgICBuZXdUYXNrRGl2LnJlbW92ZSgpO1xyXG4gIH0sXHJcblxyXG4gIGxpc3RlbmVyOiBmdW5jdGlvbiAoXHJcbiAgICB0YXNrQWRkQnV0dG9uLFxyXG4gICAgdGFza0NhbmNlbEJ1dHRvbixcclxuICAgIG5ld1Rhc2tGaWVsZCxcclxuICAgIG5ld1Rhc2tEaXZcclxuICApIHtcclxuICAgIHRhc2tBZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGxldCBwcm9qZWN0TmFtZSA9IG5ld1Rhc2tGaWVsZC52YWx1ZTtcclxuICAgICAgdGhpcy5wcm9qZWN0QWRkKHByb2plY3ROYW1lKTtcclxuICAgICAgbmV3VGFza0ZpZWxkLnZhbHVlID0gJyc7XHJcbiAgICB9KTtcclxuICAgIHRhc2tDYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvamVjdENhbmNlbChuZXdUYXNrRGl2KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbn07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KCkge1xyXG4gIGNvbnN0IG5ld1Rhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBuZXdUYXNrRGl2LmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrLWZpZWxkJyk7XHJcblxyXG4gIGNvbnN0IG5ld1Rhc2tGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgbmV3VGFza0ZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgbmV3VGFza0ZpZWxkLmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrLWlucHV0Jyk7XHJcblxyXG4gIGNvbnN0IG5ld1Rhc2tCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbmV3VGFza0J1dHRvbnMuY2xhc3NMaXN0LmFkZCgnbmV3LXRhc2stYnV0dG9ucy1jb250YWluZXInKTtcclxuXHJcbiAgY29uc3QgdGFza0FkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHRhc2tBZGRCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkJztcclxuICB0YXNrQWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrLWJ1dHRvbi1hZGQnKTtcclxuXHJcbiAgY29uc3QgdGFza0NhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHRhc2tDYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcclxuICB0YXNrQ2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrLWJ1dHRvbi1jYW5jZWwnKTtcclxuXHJcbiAgbmV3VGFza0J1dHRvbnMuYXBwZW5kQ2hpbGQodGFza0FkZEJ1dHRvbik7XHJcbiAgbmV3VGFza0J1dHRvbnMuYXBwZW5kQ2hpbGQodGFza0NhbmNlbEJ1dHRvbik7XHJcbiAgbmV3VGFza0Rpdi5hcHBlbmRDaGlsZChuZXdUYXNrRmllbGQpO1xyXG4gIG5ld1Rhc2tEaXYuYXBwZW5kQ2hpbGQobmV3VGFza0J1dHRvbnMpO1xyXG4gIERPTS5wcm9qZWN0Q29udGFpbmVyLmluc2VydEJlZm9yZShcclxuICAgIG5ld1Rhc2tEaXYsXHJcbiAgICBET00ucHJvamVjdENvbnRhaW5lci5jaGlsZHJlblsyXVxyXG4gICk7XHJcblxyXG4gIHByb2plY3QubGlzdGVuZXIoXHJcbiAgICB0YXNrQWRkQnV0dG9uLFxyXG4gICAgdGFza0NhbmNlbEJ1dHRvbixcclxuICAgIG5ld1Rhc2tGaWVsZCxcclxuICAgIG5ld1Rhc2tEaXZcclxuICApO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIGNyZWF0ZU5ld1Byb2plY3QsXHJcbiAgcHJvamVjdCxcclxuICBwcm9qZWN0cyxcclxuICB0b0RvcyxcclxuICB0b0RvQ29udGFpbmVyLFxyXG4gIHRvRG9MaXN0RGF0YSxcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XHJcbiAgY29uc3RydWN0b3IobmFtZSwgcHJvamVjdE5hbWVQYXJhLCBwcm9qZWN0UGFnZSwgdGFza3MgPSBbXSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMucHJvamVjdE5hbWVQYXJhID0gcHJvamVjdE5hbWVQYXJhO1xyXG4gICAgdGhpcy5wcm9qZWN0UGFnZSA9IHByb2plY3RQYWdlO1xyXG4gICAgdGhpcy50YXNrcyA9IHRhc2tzO1xyXG4gIH1cclxuXHJcbiAgYWRkVGFzayh0YXNrKSB7XHJcbiAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XHJcbiAgfVxyXG5cclxuICAvLyByZW1vdmVUYXNrKHRhc2spIHtcclxuICAvLyAgIHRoaXMudGFza3Muc3BsaWNlKHRoaXMudGFza3MuaW5kZXhPZih0YXNrLnRvRG9Db250YWluZXIpLCAxKTtcclxuICAvLyB9XHJcblxyXG4gIGNyZWF0ZVBhZ2UoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0UGFnZTtcclxuICB9XHJcblxyXG4gIGdldE5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlTmFtZShuYW1lKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgdG9Eb0NvbnMge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgdG9Eb0NvbnRhaW5lcikge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcclxuICAgIHRoaXMudG9Eb0NvbnRhaW5lciA9IHRvRG9Db250YWluZXI7XHJcbiAgICB0aGlzLnVpbnQzMiA9IHRoaXMuZ2V0VW5pcXVlS2V5KCk7XHJcbiAgfVxyXG5cclxuICBnZXRVbmlxdWVLZXkoKSB7XHJcbiAgICBjb25zdCB1aW50MzIgPSB3aW5kb3cuY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhcclxuICAgICAgbmV3IFVpbnQzMkFycmF5KDEpXHJcbiAgICApWzBdO1xyXG4gICAgcmV0dXJuIHVpbnQzMi50b1N0cmluZygxNik7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVQYWdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9Eb0NvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIGNoYW5nZU5hbWUodGl0bGUpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHJldHVybiB0aGlzLnRpdGxlO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlRGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlRGF0ZShkYXRlKSB7XHJcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0ZTtcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgRE9NIH0gZnJvbSAnLi9mdW5jdGlvbnMvRE9NJztcclxuaW1wb3J0IHtcclxuICBjcmVhdGVOZXdQcm9qZWN0LFxyXG4gIHRvRG9zLFxyXG4gIHRvRG9MaXN0RGF0YSxcclxuICBwcm9qZWN0c0RhdGEsXHJcbn0gZnJvbSAnLi9mdW5jdGlvbnMvcHJvamVjdENyZWF0ZSc7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIChlKSA9PiB7fSk7XHJcblxyXG5sZXQgYWxsVGFza3NQYWdlID0gKCkgPT4ge1xyXG4gIGlmIChET00ucGFnZVRpdGxlLnRleHRDb250ZW50ID09PSAnQWxsIFRhc2tzJykge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBET00ucGFnZVRpdGxlLnRleHRDb250ZW50ID0gJ0FsbCBUYXNrcyc7XHJcblxyXG4gIGxldCBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXRvZG8tY29udGFpbmVyJyk7XHJcblxyXG4gIGNvbnN0IGFsbFRhc2tzUGFnZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBhbGxUYXNrc1BhZ2VDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2FsbC10YXNrcy1wYWdlLWNvbnRhaW5lcicpO1xyXG5cclxuICBsZXQgY2xvbmVUb0RvcyA9IHRvRG9zLnNsaWNlKCk7XHJcblxyXG4gIGNsb25lVG9Eb3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgYWxsVGFza3NQYWdlQ29udGVudC5hcHBlbmRDaGlsZChpdGVtLmNyZWF0ZVBhZ2UoKSk7XHJcbiAgfSk7XHJcblxyXG4gIG1haW5QYWdlLnJlcGxhY2VXaXRoKGFsbFRhc2tzUGFnZUNvbnRlbnQpO1xyXG59O1xyXG5cclxubGV0IHBhZ2UgPSB7XHJcbiAgY2hhbmdlUGFnZTogZnVuY3Rpb24gKGJ1dHRvblRleHQpIHtcclxuICAgIGlmIChidXR0b25UZXh0ID09PSAnSW1wb3J0YW50Jykge1xyXG4gICAgICAvLyBUT0RPXHJcbiAgICB9IGVsc2UgaWYgKGJ1dHRvblRleHQgPT09ICdBbGwgVGFza3MnKSB7XHJcbiAgICAgIGFsbFRhc2tzUGFnZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gVE9ET1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGJpbmRFdmVudHM6IGZ1bmN0aW9uICgpIHtcclxuICAgIERPTS5zaWRlQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGxldCBidXR0b25UZXh0ID0gYnV0dG9uLnRleHRDb250ZW50O1xyXG4gICAgICAgIHRoaXMuY2hhbmdlUGFnZShidXR0b25UZXh0KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIERPTS5hZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrLWZpZWxkJykpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2staW5wdXQnKS5mb2N1cygpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjcmVhdGVOZXdQcm9qZWN0KCk7XHJcbiAgICB9KTtcclxuICB9LFxyXG59O1xyXG5cclxucGFnZS5iaW5kRXZlbnRzKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==