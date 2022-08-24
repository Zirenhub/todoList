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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allTasksPage": () => (/* binding */ allTasksPage)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _functions_DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/DOM */ "./src/functions/DOM.js");
/* harmony import */ var _functions_projectCreate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/projectCreate */ "./src/functions/projectCreate.js");




const importedProjects = JSON.parse(
  localStorage.getItem('projectsData')
);

window.addEventListener('load', (e) => {
  console.log(importedProjects);
  const projectAddFunc = (name, taskArray) =>
    _functions_projectCreate__WEBPACK_IMPORTED_MODULE_2__.project.projectAdd(name, taskArray);
  if (importedProjects !== null) {
    importedProjects.forEach((item) => {
      let name = item.name;
      let tasks = item.tasks;
      if (tasks.length) {
        console.log(`${name} has tasks !`);
        let taskArray = [];
        tasks.forEach((item) => {
          taskArray.push(item);
        });
        projectAddFunc(name, taskArray);
      } else {
        projectAddFunc(name);
      }
    });
    allTasksPage();
  }
  allTasksPage();
});

let allTasksPage = () => {
  _functions_DOM__WEBPACK_IMPORTED_MODULE_1__.DOM.pageTitle.textContent = 'All Tasks';

  let mainPage = _functions_DOM__WEBPACK_IMPORTED_MODULE_1__.DOM.mainPage.children[1];

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
/* harmony export */   "projectsData": () => (/* binding */ projectsData),
/* harmony export */   "toDoContainer": () => (/* binding */ toDoContainer),
/* harmony export */   "toDos": () => (/* binding */ toDos)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/functions/DOM.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/functions/projects.js");
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todos */ "./src/functions/todos.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app */ "./src/app.js");





let projects = [];
let toDos = [];

let tempTitle = '';
let tempDesc = '';
let tempDate = '';

let projectsData;

const updateStorage = () => {
  localStorage.setItem('projectsData', JSON.stringify(projects));
  projectsData =
    JSON.parse(localStorage.getItem('projectsData')) || [];
};

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

    // update local storage
    updateStorage();
  }
};

const removeToDo = (e, parentProject) => {
  let targetContainer = e.currentTarget.parentNode.parentNode;

  // remove from the array of todos
  let matchItem = toDos.find(
    (item) => item.toDoContainer === targetContainer
  );

  toDos.splice(toDos.indexOf(matchItem), 1);

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

  // update local storage project data
  updateStorage();

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

  // add todo to the parent project
  let matchItem = projects.find(
    (item) => item.name === parentProject
  );
  matchItem.addTask(newToDo);

  // push todo to array of todo's
  toDos.push(newToDo);

  // add todo to this project's project data
  let matchData = projectsData.find(
    (item) => item.name === matchItem.name
  );
  matchData.tasks.push(newToDo);
  console.log(projectsData);

  // update local storage projects data
  localStorage.setItem('projectsData', JSON.stringify(projectsData));

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

    updateStorage();

    // delete the tasks of the project
    let matchItemTasks = matchItem.tasks;
    matchItemTasks.forEach((item) => {
      let findTaskFromArray = toDos.find(
        (todo) => todo.uint32 === item.uint32
      );
      toDos.splice(toDos.indexOf(findTaskFromArray), 1);
    });

    // if we are deleting the same page we are on right now
    if (_DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.pageTitle.textContent === target) {
      const replacement = document.createElement('div');
      replacement.classList.add('main-todo-container');
      matchItem.projectPage.replaceWith(replacement);
      _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.pageTitle.textContent = 'Page Deleted';
    }

    targetContainer.remove();
    console.log(projects);
    console.log(projectsData);

    // refresh the all tasks page if we are on the page
    (0,_app__WEBPACK_IMPORTED_MODULE_3__.allTasksPage)();
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
  projectAdd: function (projectName, taskArray) {
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

    let newProject;

    function addProject(newProject) {
      projects.push(newProject);
      updateStorage();
    }

    // if local storage project has tasks
    if (taskArray !== undefined) {
      function createDataTasks() {
        taskArray.forEach((item) => {
          let title = item.title;
          let description = item.description;
          let date = item.date;
          let parentProject = name;
          addToDo(title, description, date, parentProject);
        });
      }

      newProject = new _projects__WEBPACK_IMPORTED_MODULE_1__["default"](
        name,
        projectNamePara,
        projectPage(name)
      );
      addProject(newProject);
      createDataTasks();
    } else {
      newProject = new _projects__WEBPACK_IMPORTED_MODULE_1__["default"](
        name,
        projectNamePara,
        projectPage(name)
      );
      addProject(newProject);
    }

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXhfYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNpQjtBQUtIO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdFQUFrQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE1BQU07QUFDN0I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxFQUFFLHFFQUF5QjtBQUMzQjtBQUNBLGlCQUFpQixvRUFBd0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUVBQVc7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBSSxtRUFBdUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxJQUFJLGlGQUFxQztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMEVBQWdCO0FBQ3RCLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDd0I7Ozs7Ozs7Ozs7Ozs7OztBQ25GakI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVjRCO0FBQ0s7QUFDRjtBQUNPO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw4Q0FBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxRQUFRLDJEQUF5QjtBQUNqQztBQUNBO0FBQ0E7QUFDQSxNQUFNLDJEQUF5QjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0RBQVk7QUFDaEIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0VBQWdDO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSx1QkFBdUIsaURBQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLHVCQUF1QixpREFBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDREQUEwQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsTUFBTSwyREFBeUI7QUFDL0IsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG1FQUFpQztBQUNuQztBQUNBLElBQUksa0VBQWdDO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUU7Ozs7Ozs7Ozs7Ozs7OztBQ3JqQmE7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDNUJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNsQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/MTQ1MyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZnVuY3Rpb25zL0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9mdW5jdGlvbnMvcHJvamVjdENyZWF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9mdW5jdGlvbnMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZnVuY3Rpb25zL3RvZG9zLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBET00gfSBmcm9tICcuL2Z1bmN0aW9ucy9ET00nO1xyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZU5ld1Byb2plY3QsXHJcbiAgcHJvamVjdCxcclxuICB0b0RvcyxcclxufSBmcm9tICcuL2Z1bmN0aW9ucy9wcm9qZWN0Q3JlYXRlJztcclxuXHJcbmNvbnN0IGltcG9ydGVkUHJvamVjdHMgPSBKU09OLnBhcnNlKFxyXG4gIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0c0RhdGEnKVxyXG4pO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoZSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGltcG9ydGVkUHJvamVjdHMpO1xyXG4gIGNvbnN0IHByb2plY3RBZGRGdW5jID0gKG5hbWUsIHRhc2tBcnJheSkgPT5cclxuICAgIHByb2plY3QucHJvamVjdEFkZChuYW1lLCB0YXNrQXJyYXkpO1xyXG4gIGlmIChpbXBvcnRlZFByb2plY3RzICE9PSBudWxsKSB7XHJcbiAgICBpbXBvcnRlZFByb2plY3RzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgbGV0IG5hbWUgPSBpdGVtLm5hbWU7XHJcbiAgICAgIGxldCB0YXNrcyA9IGl0ZW0udGFza3M7XHJcbiAgICAgIGlmICh0YXNrcy5sZW5ndGgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgJHtuYW1lfSBoYXMgdGFza3MgIWApO1xyXG4gICAgICAgIGxldCB0YXNrQXJyYXkgPSBbXTtcclxuICAgICAgICB0YXNrcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICB0YXNrQXJyYXkucHVzaChpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBwcm9qZWN0QWRkRnVuYyhuYW1lLCB0YXNrQXJyYXkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHByb2plY3RBZGRGdW5jKG5hbWUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGFsbFRhc2tzUGFnZSgpO1xyXG4gIH1cclxuICBhbGxUYXNrc1BhZ2UoKTtcclxufSk7XHJcblxyXG5sZXQgYWxsVGFza3NQYWdlID0gKCkgPT4ge1xyXG4gIERPTS5wYWdlVGl0bGUudGV4dENvbnRlbnQgPSAnQWxsIFRhc2tzJztcclxuXHJcbiAgbGV0IG1haW5QYWdlID0gRE9NLm1haW5QYWdlLmNoaWxkcmVuWzFdO1xyXG5cclxuICBjb25zdCBhbGxUYXNrc1BhZ2VDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYWxsVGFza3NQYWdlQ29udGVudC5jbGFzc0xpc3QuYWRkKCdhbGwtdGFza3MtcGFnZS1jb250YWluZXInKTtcclxuXHJcbiAgbGV0IGNsb25lVG9Eb3MgPSB0b0Rvcy5zbGljZSgpO1xyXG5cclxuICBjbG9uZVRvRG9zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGFsbFRhc2tzUGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQoaXRlbS5jcmVhdGVQYWdlKCkpO1xyXG4gIH0pO1xyXG5cclxuICBtYWluUGFnZS5yZXBsYWNlV2l0aChhbGxUYXNrc1BhZ2VDb250ZW50KTtcclxufTtcclxuXHJcbmxldCBwYWdlID0ge1xyXG4gIGNoYW5nZVBhZ2U6IGZ1bmN0aW9uIChidXR0b25UZXh0KSB7XHJcbiAgICBpZiAoYnV0dG9uVGV4dCA9PT0gJ0ltcG9ydGFudCcpIHtcclxuICAgICAgLy8gVE9ET1xyXG4gICAgfSBlbHNlIGlmIChidXR0b25UZXh0ID09PSAnQWxsIFRhc2tzJykge1xyXG4gICAgICBhbGxUYXNrc1BhZ2UoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFRPRE9cclxuICAgIH1cclxuICB9LFxyXG5cclxuICBiaW5kRXZlbnRzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICBET00uc2lkZUJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XHJcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsZXQgYnV0dG9uVGV4dCA9IGJ1dHRvbi50ZXh0Q29udGVudDtcclxuICAgICAgICB0aGlzLmNoYW5nZVBhZ2UoYnV0dG9uVGV4dCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBET00uYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzay1maWVsZCcpKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrLWlucHV0JykuZm9jdXMoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgY3JlYXRlTmV3UHJvamVjdCgpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxufTtcclxuXHJcbnBhZ2UuYmluZEV2ZW50cygpO1xyXG5cclxuZXhwb3J0IHsgYWxsVGFza3NQYWdlIH07XHJcbiIsImV4cG9ydCBsZXQgRE9NID0ge1xyXG4gIHNpZGVCdXR0b25zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZS1idXR0b25zJyksXHJcbiAgcHJvamVjdENvbnRhaW5lcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGUtcHJvamVjdHMnKSxcclxuICBhZGRQcm9qZWN0QnV0dG9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkUHJvamVjdHMnKSxcclxuICBwcm9qZWN0QnV0dG9uczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtYnV0dG9uJyksXHJcbiAgcHJvamVjdERlbEJ1dHRvbnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAnLnByb2plY3QtZGVsZXRlLWJ1dHRvbidcclxuICApLFxyXG4gIG1haW5QYWdlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MtY29udGFpbmVyJyksXHJcbiAgcGFnZVRpdGxlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFnZS10aXRsZScpLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBET00gfSBmcm9tICcuL0RPTSc7XHJcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdHMnO1xyXG5pbXBvcnQgdG9Eb0NvbnMgZnJvbSAnLi90b2Rvcyc7XHJcbmltcG9ydCB7IGFsbFRhc2tzUGFnZSB9IGZyb20gJy4uL2FwcCc7XHJcblxyXG5sZXQgcHJvamVjdHMgPSBbXTtcclxubGV0IHRvRG9zID0gW107XHJcblxyXG5sZXQgdGVtcFRpdGxlID0gJyc7XHJcbmxldCB0ZW1wRGVzYyA9ICcnO1xyXG5sZXQgdGVtcERhdGUgPSAnJztcclxuXHJcbmxldCBwcm9qZWN0c0RhdGE7XHJcblxyXG5jb25zdCB1cGRhdGVTdG9yYWdlID0gKCkgPT4ge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0c0RhdGEnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xyXG4gIHByb2plY3RzRGF0YSA9XHJcbiAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0c0RhdGEnKSkgfHwgW107XHJcbn07XHJcblxyXG5jb25zdCBlZGl0VG9EbyA9IChcclxuICB0b0RvVGl0bGUsXHJcbiAgdG9Eb0Rlc2MsXHJcbiAgdG9Eb0RhdGUsXHJcbiAgbW9kaWZ5RWRpdENvbnRlbnQsXHJcbiAgdG9Eb0NvbnRhaW5lclxyXG4pID0+IHtcclxuICBpZiAobW9kaWZ5RWRpdENvbnRlbnQgPT09ICdFZGl0Jykge1xyXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZWRpdC10aXRsZScpO1xyXG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICdwbGFjZWhvbGRlcicsXHJcbiAgICAgICdFbnRlciBhIHRpdGxlIGZvciB5b3VyIFRvRG8hJ1xyXG4gICAgKTtcclxuXHJcbiAgICB0aXRsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgdGVtcFRpdGxlID0gdGl0bGVJbnB1dC52YWx1ZTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGRlc2NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBkZXNjSW5wdXQubWF4TGVuZ3RoID0gJzUwJztcclxuICAgIGRlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VkaXQtZGVzYycpO1xyXG4gICAgZGVzY0lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICBkZXNjSW5wdXQuc2V0QXR0cmlidXRlKFxyXG4gICAgICAncGxhY2Vob2xkZXInLFxyXG4gICAgICAnQWRkIHlvdXIgZGVzY3JpcHRpb24gaGVyZSAoaWYgeW91IHNvIHdpc2ggdG8pJ1xyXG4gICAgKTtcclxuXHJcbiAgICBkZXNjSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICB0ZW1wRGVzYyA9IGRlc2NJbnB1dC52YWx1ZTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdlZGl0LWRhdGUnKTtcclxuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xyXG4gICAgZGF0ZUlucHV0LnN0eWxlLm1hcmdpbkxlZnQgPSAnYXV0byc7XHJcblxyXG4gICAgZGF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgdGVtcERhdGUgPSBkYXRlSW5wdXQudmFsdWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0b0RvVGl0bGUucmVwbGFjZVdpdGgodGl0bGVJbnB1dCk7XHJcbiAgICB0b0RvRGVzYy5yZXBsYWNlV2l0aChkZXNjSW5wdXQpO1xyXG4gICAgdG9Eb0RhdGUucmVwbGFjZVdpdGgoZGF0ZUlucHV0KTtcclxuICB9IGVsc2UgaWYgKG1vZGlmeUVkaXRDb250ZW50ID09PSAnU2F2ZScpIHtcclxuICAgIGxldCByZXBsYWNlbWVudFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGl0bGUnKTtcclxuICAgIGxldCByZXBsYWNlbWVudERlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1kZXNjJyk7XHJcbiAgICBsZXQgcmVwbGFjZW1lbnREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtZGF0ZScpO1xyXG5cclxuICAgIGxldCBtYXRjaEl0ZW0gPSB0b0Rvcy5maW5kKFxyXG4gICAgICAoaXRlbSkgPT4gaXRlbS50b0RvQ29udGFpbmVyID09PSB0b0RvQ29udGFpbmVyXHJcbiAgICApO1xyXG5cclxuICAgIGlmIChyZXBsYWNlbWVudFRpdGxlLnZhbHVlICE9PSAnJykge1xyXG4gICAgICB0b0RvVGl0bGUuaW5uZXJIVE1MID0gdGVtcFRpdGxlO1xyXG4gICAgICBtYXRjaEl0ZW0uY2hhbmdlTmFtZSh0ZW1wVGl0bGUpO1xyXG4gICAgICByZXBsYWNlbWVudFRpdGxlLnJlcGxhY2VXaXRoKHRvRG9UaXRsZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXBsYWNlbWVudFRpdGxlLnJlcGxhY2VXaXRoKHRvRG9UaXRsZSk7XHJcbiAgICB9XHJcbiAgICBpZiAocmVwbGFjZW1lbnREZXNjLnZhbHVlICE9PSAnJykge1xyXG4gICAgICB0b0RvRGVzYy5pbm5lckhUTUwgPSB0ZW1wRGVzYztcclxuICAgICAgbWF0Y2hJdGVtLmNoYW5nZURlc2NyaXB0aW9uKHRlbXBEZXNjKTtcclxuICAgICAgcmVwbGFjZW1lbnREZXNjLnJlcGxhY2VXaXRoKHRvRG9EZXNjKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlcGxhY2VtZW50RGVzYy5yZXBsYWNlV2l0aCh0b0RvRGVzYyk7XHJcbiAgICB9XHJcbiAgICBpZiAocmVwbGFjZW1lbnREYXRlLnZhbHVlICE9PSAnJykge1xyXG4gICAgICB0b0RvRGF0ZS5pbm5lckhUTUwgPSB0ZW1wRGF0ZTtcclxuICAgICAgbWF0Y2hJdGVtLmNoYW5nZURhdGUodGVtcERhdGUpO1xyXG4gICAgICByZXBsYWNlbWVudERhdGUucmVwbGFjZVdpdGgodG9Eb0RhdGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVwbGFjZW1lbnREYXRlLnJlcGxhY2VXaXRoKHRvRG9EYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgbG9jYWwgc3RvcmFnZVxyXG4gICAgdXBkYXRlU3RvcmFnZSgpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHJlbW92ZVRvRG8gPSAoZSwgcGFyZW50UHJvamVjdCkgPT4ge1xyXG4gIGxldCB0YXJnZXRDb250YWluZXIgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG5cclxuICAvLyByZW1vdmUgZnJvbSB0aGUgYXJyYXkgb2YgdG9kb3NcclxuICBsZXQgbWF0Y2hJdGVtID0gdG9Eb3MuZmluZChcclxuICAgIChpdGVtKSA9PiBpdGVtLnRvRG9Db250YWluZXIgPT09IHRhcmdldENvbnRhaW5lclxyXG4gICk7XHJcblxyXG4gIHRvRG9zLnNwbGljZSh0b0Rvcy5pbmRleE9mKG1hdGNoSXRlbSksIDEpO1xyXG5cclxuICAvLyByZW1vdmUgZnJvbSBsb2NhbCBzdG9yYWdlIHByb2plY3QgdGFza3MgYXJyYXlcclxuICBsZXQgbWF0Y2hQcm9qZWN0RGF0YSA9IHByb2plY3RzRGF0YS5maW5kKFxyXG4gICAgKGl0ZW0pID0+IGl0ZW0ubmFtZSA9PT0gcGFyZW50UHJvamVjdFxyXG4gICk7XHJcbiAgbGV0IHByb2plY3REYXRhVGFza3MgPSBtYXRjaFByb2plY3REYXRhLnRhc2tzO1xyXG4gIGxldCB0b0RvUHJvamVjdEluZGV4ID0gcHJvamVjdERhdGFUYXNrcy5maW5kKFxyXG4gICAgKGl0ZW0pID0+IGl0ZW0udWludDMyID09PSBtYXRjaEl0ZW0udWludDMyXHJcbiAgKTtcclxuICBwcm9qZWN0RGF0YVRhc2tzLnNwbGljZShcclxuICAgIHByb2plY3REYXRhVGFza3MuaW5kZXhPZih0b0RvUHJvamVjdEluZGV4KSxcclxuICAgIDFcclxuICApO1xyXG5cclxuICAvLyByZW1vdmUgZnJvbSBwcm9qZWN0IGl0c2VsZlxyXG4gIGxldCBtYXRjaFByb2plY3QgPSBwcm9qZWN0cy5maW5kKFxyXG4gICAgKGl0ZW0pID0+IGl0ZW0ubmFtZSA9PT0gcGFyZW50UHJvamVjdFxyXG4gICk7XHJcbiAgbGV0IHByb2plY3RUYXNrcyA9IG1hdGNoUHJvamVjdC50YXNrcztcclxuICBwcm9qZWN0VGFza3Muc3BsaWNlKHByb2plY3RUYXNrcy5pbmRleE9mKG1hdGNoSXRlbSksIDEpO1xyXG5cclxuICAvLyB1cGRhdGUgbG9jYWwgc3RvcmFnZSBwcm9qZWN0IGRhdGFcclxuICB1cGRhdGVTdG9yYWdlKCk7XHJcblxyXG4gIHRhcmdldENvbnRhaW5lci5yZW1vdmUoKTtcclxuXHJcbiAgY29uc29sZS5sb2codG9Eb3MpO1xyXG59O1xyXG5cclxuY29uc3QgdG9Eb0NvbnRhaW5lciA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHBhcmVudFByb2plY3QpID0+IHtcclxuICBjb25zdCB0b0RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdG9Eb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0by1kby1jb250YWluZXInKTtcclxuXHJcbiAgY29uc3QgY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjaGVjay5jbGFzc0xpc3QuYWRkKCdjaGVjay1ib3gnKTtcclxuXHJcbiAgY2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZiAoY2hlY2suY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2VkJykpIHtcclxuICAgICAgY2hlY2suY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tlZCcpO1xyXG4gICAgICB0b0RvRGV0YWlscy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgdG9Eb0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNoZWNrLmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcclxuICAgICAgdG9Eb0RldGFpbHMuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIHRvRG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHRvRG9EZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdG9Eb0RldGFpbHMuY2xhc3NMaXN0LmFkZCgndG8tZG8tZGV0YWlscycpO1xyXG5cclxuICBjb25zdCB0b0RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0b0RvVGl0bGUuY2xhc3NMaXN0LmFkZCgndG8tZG8tdGl0bGUnKTtcclxuICB0b0RvVGl0bGUuaW5uZXJIVE1MID0gdGl0bGU7XHJcblxyXG4gIGNvbnN0IHRvRG9EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdG9Eb0Rlc2MuY2xhc3NMaXN0LmFkZCgndG8tZG8tZGVzYycpO1xyXG4gIHRvRG9EZXNjLmlubmVySFRNTCA9IGRlc2NyaXB0aW9uO1xyXG5cclxuICB0b0RvRGV0YWlscy5hcHBlbmRDaGlsZCh0b0RvVGl0bGUpO1xyXG4gIHRvRG9EZXRhaWxzLmFwcGVuZENoaWxkKHRvRG9EZXNjKTtcclxuXHJcbiAgY29uc3QgdG9Eb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0b0RvRGF0ZS5jbGFzc0xpc3QuYWRkKCd0by1kby1kYXRlJyk7XHJcbiAgdG9Eb0RhdGUuaW5uZXJIVE1MID0gZGF0ZTtcclxuXHJcbiAgY29uc3QgbW9kaWZ5VG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1vZGlmeVRvRG8uY2xhc3NMaXN0LmFkZCgnbW9kaWZ5LXRvLWRvJyk7XHJcblxyXG4gIGNvbnN0IG1vZGlmeUVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBtb2RpZnlFZGl0LmNsYXNzTGlzdC5hZGQoJ21vZGlmeS1idXR0b25zJyk7XHJcbiAgbW9kaWZ5RWRpdC5pbm5lckhUTUwgPSAnRWRpdCc7XHJcblxyXG4gIG1vZGlmeUVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBsZXQgbW9kaWZ5RWRpdENvbnRlbnQgPSBtb2RpZnlFZGl0LmlubmVySFRNTDtcclxuICAgIGlmIChtb2RpZnlFZGl0Q29udGVudCA9PT0gJ1NhdmUnKSB7XHJcbiAgICAgIGVkaXRUb0RvKFxyXG4gICAgICAgIHRvRG9UaXRsZSxcclxuICAgICAgICB0b0RvRGVzYyxcclxuICAgICAgICB0b0RvRGF0ZSxcclxuICAgICAgICBtb2RpZnlFZGl0Q29udGVudCxcclxuICAgICAgICB0b0RvQ29udGFpbmVyXHJcbiAgICAgICk7XHJcbiAgICAgIG1vZGlmeUVkaXQuaW5uZXJIVE1MID0gJ0VkaXQnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZWRpdFRvRG8oXHJcbiAgICAgICAgdG9Eb1RpdGxlLFxyXG4gICAgICAgIHRvRG9EZXNjLFxyXG4gICAgICAgIHRvRG9EYXRlLFxyXG4gICAgICAgIG1vZGlmeUVkaXRDb250ZW50LFxyXG4gICAgICAgIHRvRG9Db250YWluZXJcclxuICAgICAgKTtcclxuICAgICAgbW9kaWZ5RWRpdC5pbm5lckhUTUwgPSAnU2F2ZSc7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG1vZGlmeVJlbW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIG1vZGlmeVJlbW92ZS5jbGFzc0xpc3QuYWRkKCdtb2RpZnktYnV0dG9ucycpO1xyXG4gIG1vZGlmeVJlbW92ZS5pbm5lckhUTUwgPSAnUmVtb3ZlJztcclxuXHJcbiAgbW9kaWZ5UmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIHJlbW92ZVRvRG8oZSwgcGFyZW50UHJvamVjdCk7XHJcbiAgfSk7XHJcblxyXG4gIG1vZGlmeVRvRG8uYXBwZW5kQ2hpbGQobW9kaWZ5RWRpdCk7XHJcbiAgbW9kaWZ5VG9Eby5hcHBlbmRDaGlsZChtb2RpZnlSZW1vdmUpO1xyXG5cclxuICB0b0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrKTtcclxuICB0b0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvRG9EZXRhaWxzKTtcclxuICB0b0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvRG9EYXRlKTtcclxuICB0b0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGlmeVRvRG8pO1xyXG5cclxuICByZXR1cm4gdG9Eb0NvbnRhaW5lcjtcclxufTtcclxuXHJcbmNvbnN0IGFkZFRvRG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwYXJlbnRQcm9qZWN0KSA9PiB7XHJcbiAgbGV0IG5ld1RvRG8gPSBuZXcgdG9Eb0NvbnMoXHJcbiAgICB0aXRsZSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgZGF0ZSxcclxuICAgIHRvRG9Db250YWluZXIodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwYXJlbnRQcm9qZWN0KVxyXG4gICk7XHJcblxyXG4gIC8vIGFkZCB0b2RvIHRvIHRoZSBwYXJlbnQgcHJvamVjdFxyXG4gIGxldCBtYXRjaEl0ZW0gPSBwcm9qZWN0cy5maW5kKFxyXG4gICAgKGl0ZW0pID0+IGl0ZW0ubmFtZSA9PT0gcGFyZW50UHJvamVjdFxyXG4gICk7XHJcbiAgbWF0Y2hJdGVtLmFkZFRhc2sobmV3VG9Ebyk7XHJcblxyXG4gIC8vIHB1c2ggdG9kbyB0byBhcnJheSBvZiB0b2RvJ3NcclxuICB0b0Rvcy5wdXNoKG5ld1RvRG8pO1xyXG5cclxuICAvLyBhZGQgdG9kbyB0byB0aGlzIHByb2plY3QncyBwcm9qZWN0IGRhdGFcclxuICBsZXQgbWF0Y2hEYXRhID0gcHJvamVjdHNEYXRhLmZpbmQoXHJcbiAgICAoaXRlbSkgPT4gaXRlbS5uYW1lID09PSBtYXRjaEl0ZW0ubmFtZVxyXG4gICk7XHJcbiAgbWF0Y2hEYXRhLnRhc2tzLnB1c2gobmV3VG9Ebyk7XHJcbiAgY29uc29sZS5sb2cocHJvamVjdHNEYXRhKTtcclxuXHJcbiAgLy8gdXBkYXRlIGxvY2FsIHN0b3JhZ2UgcHJvamVjdHMgZGF0YVxyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0c0RhdGEnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0RhdGEpKTtcclxuXHJcbiAgY29uc29sZS5sb2codG9Eb3MpO1xyXG5cclxuICBkb2N1bWVudFxyXG4gICAgLnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXRvZG8tY29udGFpbmVyJylcclxuICAgIC5hcHBlbmRDaGlsZChuZXdUb0RvLmNyZWF0ZVBhZ2UoKSk7XHJcbn07XHJcblxyXG5jb25zdCBwcm9qZWN0UGFnZSA9IChuYW1lKSA9PiB7XHJcbiAgbGV0IHBhcmVudFByb2plY3QgPSBuYW1lO1xyXG5cclxuICBjb25zdCBtYWluVG9Eb1BhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtYWluVG9Eb1BhZ2UuY2xhc3NMaXN0LmFkZCgnbWFpbi10b2RvLWNvbnRhaW5lcicpO1xyXG5cclxuICAvLyBhZGQgdGFzayBidXR0b25cclxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stYnRuJyk7XHJcbiAgYnV0dG9uLmlubmVySFRNTCA9ICdBZGQgVGFzayc7XHJcblxyXG4gIC8vIGFkZCB0YXNrIGJ1dHRvbiArIGljb25cclxuICBjb25zdCBidXR0b25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGJ1dHRvbkljb24uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCcpO1xyXG4gIGJ1dHRvbkljb24uaW5uZXJIVE1MID0gJ2FkZCc7XHJcbiAgYnV0dG9uLmFwcGVuZENoaWxkKGJ1dHRvbkljb24pO1xyXG5cclxuICAvLyB0YXNrIHBvcHVwIGZvcm0gZGl2XHJcbiAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGFpbmVyJyk7XHJcblxyXG4gIC8vIHRhc2sgZm9ybSBjb250YWluZXJcclxuICBjb25zdCB0YXNrRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0YXNrRmllbGQuY2xhc3NMaXN0LmFkZCgndGFzay1maWVsZCcpO1xyXG5cclxuICAvLyB0YXNrIGxhYmVsIGZvciB0aXRsZVxyXG4gIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIHRpdGxlTGFiZWwuaW5uZXJIVE1MID0gJ1RpdGxlOic7XHJcblxyXG4gIC8vIGlucHV0IGZpZWxkIGZvciB0YXNrIHRpdGxlXHJcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgdGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKCd0aXRsZS1pbnB1dCcpO1xyXG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcclxuICAgICdwbGFjZWhvbGRlcicsXHJcbiAgICAnRW50ZXIgYSB0aXRsZSBmb3IgeW91ciBUb0RvISdcclxuICApO1xyXG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcclxuXHJcbiAgLy8gb3B0aW9uYWwgZGVzY3JpcHRpb24gbGFiZWwgZm9yIGRlc2NyaXB0aW9uXHJcbiAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgZGVzY3JpcHRpb25MYWJlbC5pbm5lckhUTUwgPVxyXG4gICAgJ1lvdSBjYW4gYWRkIGRlc2NyaXB0aW9uIGZvciB5b3VyIFRvRG8gaGVyZS4nO1xyXG5cclxuICAvLyBvcHRpb25hbCB0ZXh0YXJlYSBmb3IgZGVzY3JpcHRpb25cclxuICBjb25zdCBkZXNjcmlwdGlvblRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICBkZXNjcmlwdGlvblRleHRBcmVhLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uLXRleHQtYXJlYScpO1xyXG4gIGRlc2NyaXB0aW9uVGV4dEFyZWEubWF4TGVuZ3RoID0gJzUwJztcclxuICBkZXNjcmlwdGlvblRleHRBcmVhLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgZGVzY3JpcHRpb25UZXh0QXJlYS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAncGxhY2Vob2xkZXInLFxyXG4gICAgJ0FkZCB5b3VyIGRlc2NyaXB0aW9uIGhlcmUgKGlmIHlvdSBzbyB3aXNoIHRvKSdcclxuICApO1xyXG5cclxuICAvLyBsYWJlbCBmb3IgZGF0ZSBpbnB1dFxyXG4gIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgZGF0ZUxhYmVsLmlubmVySFRNTCA9ICdEYXRlOic7XHJcblxyXG4gIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgZGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2RhdGUtaW5wdXQnKTtcclxuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcclxuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcclxuXHJcbiAgLy8gZm9ybSBzdWJtaXQgYnV0dG9uXHJcbiAgY29uc3QgU3VibWl0QnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgU3VibWl0QnV0dG9uRGl2LmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC1jb250YWluZXInKTtcclxuXHJcbiAgLy8gc3VibWl0IGlucHV0XHJcbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnc3VibWl0LWJ1dHRvbicpO1xyXG4gIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XHJcbiAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnQWRkJyk7XHJcbiAgU3VibWl0QnV0dG9uRGl2LmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XHJcblxyXG4gIC8vIHByZXZlbnQgc3VibWl0IGZyb20gc2VuZGluZyAvIHJlZnJlc2hpbmdcclxuICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGxldCB0aXRsZSA9IHRpdGxlSW5wdXQudmFsdWU7XHJcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblRleHRBcmVhLnZhbHVlO1xyXG4gICAgbGV0IGRhdGUgPSBkYXRlSW5wdXQudmFsdWU7XHJcblxyXG4gICAgYWRkVG9Ebyh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHBhcmVudFByb2plY3QpO1xyXG4gIH0pO1xyXG5cclxuICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tGaWVsZCk7XHJcbiAgdGFza0ZpZWxkLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xyXG4gIHRhc2tGaWVsZC5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcclxuICB0YXNrRmllbGQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XHJcbiAgdGFza0ZpZWxkLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVGV4dEFyZWEpO1xyXG4gIHRhc2tGaWVsZC5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xyXG4gIHRhc2tGaWVsZC5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xyXG4gIHRhc2tGaWVsZC5hcHBlbmRDaGlsZChTdWJtaXRCdXR0b25EaXYpO1xyXG5cclxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stY29udGFpbmVyJykpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stY29udGFpbmVyJykucmVtb3ZlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtYWluVG9Eb1BhZ2UuaW5zZXJ0QmVmb3JlKHRhc2tEaXYsIG1haW5Ub0RvUGFnZS5jaGlsZHJlblsxXSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIG1haW5Ub0RvUGFnZS5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gIHJldHVybiBtYWluVG9Eb1BhZ2U7XHJcbn07XHJcblxyXG5jb25zdCBwcm9qZWN0RGVsZXRlID0gKHByb2plY3REZWxldGVCdXR0b24pID0+IHtcclxuICBsZXQgZGVsZXRlQnV0dG9uID0gcHJvamVjdERlbGV0ZUJ1dHRvbjtcclxuXHJcbiAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGxldCB0YXJnZXQgPSBkZWxldGVCdXR0b24ucHJldmlvdXNFbGVtZW50U2libGluZy50ZXh0Q29udGVudDtcclxuICAgIGxldCB0YXJnZXRDb250YWluZXIgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZTtcclxuXHJcbiAgICAvLyBkZWxldGUgZnJvbSBwcm9qZWN0cyBhcnJheVxyXG4gICAgbGV0IG1hdGNoSXRlbSA9IHByb2plY3RzLmZpbmQoKGl0ZW0pID0+IGl0ZW0ubmFtZSA9PT0gdGFyZ2V0KTtcclxuICAgIHByb2plY3RzLnNwbGljZShwcm9qZWN0cy5pbmRleE9mKG1hdGNoSXRlbSksIDEpO1xyXG5cclxuICAgIC8vIGRlbGV0ZSBmcm9tIGxvY2FsIHN0b3JhZ2UgcHJvamVjdHMgYXJyYXlcclxuICAgIGxldCBtYXRjaERhdGEgPSBwcm9qZWN0c0RhdGEuZmluZChcclxuICAgICAgKGl0ZW0pID0+IGl0ZW0ubmFtZSA9PT0gbWF0Y2hJdGVtLm5hbWVcclxuICAgICk7XHJcbiAgICBwcm9qZWN0c0RhdGEuc3BsaWNlKHByb2plY3RzRGF0YS5pbmRleE9mKG1hdGNoRGF0YSksIDEpO1xyXG5cclxuICAgIHVwZGF0ZVN0b3JhZ2UoKTtcclxuXHJcbiAgICAvLyBkZWxldGUgdGhlIHRhc2tzIG9mIHRoZSBwcm9qZWN0XHJcbiAgICBsZXQgbWF0Y2hJdGVtVGFza3MgPSBtYXRjaEl0ZW0udGFza3M7XHJcbiAgICBtYXRjaEl0ZW1UYXNrcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGxldCBmaW5kVGFza0Zyb21BcnJheSA9IHRvRG9zLmZpbmQoXHJcbiAgICAgICAgKHRvZG8pID0+IHRvZG8udWludDMyID09PSBpdGVtLnVpbnQzMlxyXG4gICAgICApO1xyXG4gICAgICB0b0Rvcy5zcGxpY2UodG9Eb3MuaW5kZXhPZihmaW5kVGFza0Zyb21BcnJheSksIDEpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gaWYgd2UgYXJlIGRlbGV0aW5nIHRoZSBzYW1lIHBhZ2Ugd2UgYXJlIG9uIHJpZ2h0IG5vd1xyXG4gICAgaWYgKERPTS5wYWdlVGl0bGUudGV4dENvbnRlbnQgPT09IHRhcmdldCkge1xyXG4gICAgICBjb25zdCByZXBsYWNlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICByZXBsYWNlbWVudC5jbGFzc0xpc3QuYWRkKCdtYWluLXRvZG8tY29udGFpbmVyJyk7XHJcbiAgICAgIG1hdGNoSXRlbS5wcm9qZWN0UGFnZS5yZXBsYWNlV2l0aChyZXBsYWNlbWVudCk7XHJcbiAgICAgIERPTS5wYWdlVGl0bGUudGV4dENvbnRlbnQgPSAnUGFnZSBEZWxldGVkJztcclxuICAgIH1cclxuXHJcbiAgICB0YXJnZXRDb250YWluZXIucmVtb3ZlKCk7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0c0RhdGEpO1xyXG5cclxuICAgIC8vIHJlZnJlc2ggdGhlIGFsbCB0YXNrcyBwYWdlIGlmIHdlIGFyZSBvbiB0aGUgcGFnZVxyXG4gICAgYWxsVGFza3NQYWdlKCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBwcm9qZWN0TmFtZUNoZWNrID0gKHByb2plY3ROYW1lKSA9PiB7XHJcbiAgaWYgKHByb2plY3ROYW1lID09PSAnJykge1xyXG4gICAgYWxlcnQoJ1Byb2plY3Qgc2hvdWxkIGhhdmUgYSBuYW1lIScpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIGlmIChwcm9qZWN0cy5zb21lKChpdGVtKSA9PiBwcm9qZWN0TmFtZSA9PT0gaXRlbS5uYW1lKSkge1xyXG4gICAgYWxlcnQoXCJZb3UgY2FuJ3QgaGF2ZSBzYW1lIG5hbWVkIHByb2plY3RzIVwiKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufTtcclxuXHJcbmxldCBwcm9qZWN0ID0ge1xyXG4gIHByb2plY3RBZGQ6IGZ1bmN0aW9uIChwcm9qZWN0TmFtZSwgdGFza0FycmF5KSB7XHJcbiAgICBpZiAocHJvamVjdE5hbWVDaGVjayhwcm9qZWN0TmFtZSkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250YWluZXInKTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0TmFtZVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHByb2plY3ROYW1lUGFyYS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWJ1dHRvbicpO1xyXG4gICAgcHJvamVjdE5hbWVQYXJhLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdERlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgcHJvamVjdERlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRlbGV0ZS1idXR0b24nKTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0RGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHByb2plY3REZWxldGVJY29uLmlubmVySFRNTCA9ICdjbG9zZSc7XHJcbiAgICBwcm9qZWN0RGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJyk7XHJcblxyXG4gICAgcHJvamVjdERlbGV0ZUJ1dHRvbi5hcHBlbmRDaGlsZChwcm9qZWN0RGVsZXRlSWNvbik7XHJcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3ROYW1lUGFyYSk7XHJcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3REZWxldGVCdXR0b24pO1xyXG4gICAgRE9NLnByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XHJcblxyXG4gICAgbGV0IG5hbWUgPSBwcm9qZWN0TmFtZVBhcmEudGV4dENvbnRlbnQ7XHJcblxyXG4gICAgbGV0IG5ld1Byb2plY3Q7XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdChuZXdQcm9qZWN0KSB7XHJcbiAgICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XHJcbiAgICAgIHVwZGF0ZVN0b3JhZ2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpZiBsb2NhbCBzdG9yYWdlIHByb2plY3QgaGFzIHRhc2tzXHJcbiAgICBpZiAodGFza0FycmF5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgZnVuY3Rpb24gY3JlYXRlRGF0YVRhc2tzKCkge1xyXG4gICAgICAgIHRhc2tBcnJheS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICBsZXQgdGl0bGUgPSBpdGVtLnRpdGxlO1xyXG4gICAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gaXRlbS5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgIGxldCBkYXRlID0gaXRlbS5kYXRlO1xyXG4gICAgICAgICAgbGV0IHBhcmVudFByb2plY3QgPSBuYW1lO1xyXG4gICAgICAgICAgYWRkVG9Ebyh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHBhcmVudFByb2plY3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoXHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBwcm9qZWN0TmFtZVBhcmEsXHJcbiAgICAgICAgcHJvamVjdFBhZ2UobmFtZSlcclxuICAgICAgKTtcclxuICAgICAgYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcclxuICAgICAgY3JlYXRlRGF0YVRhc2tzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoXHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBwcm9qZWN0TmFtZVBhcmEsXHJcbiAgICAgICAgcHJvamVjdFBhZ2UobmFtZSlcclxuICAgICAgKTtcclxuICAgICAgYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcclxuICAgIH1cclxuXHJcbiAgICBuZXdQcm9qZWN0LnByb2plY3ROYW1lUGFyYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgbGV0IHJlcGxhY2UgPSBET00ubWFpblBhZ2UuY2hpbGROb2Rlc1szXTtcclxuXHJcbiAgICAgIGxldCByZXBsYWNlUGFnZSA9IG5ld1Byb2plY3QuY3JlYXRlUGFnZShuYW1lKTtcclxuICAgICAgbGV0IHRhc2tzID0gbmV3UHJvamVjdC50YXNrcztcclxuXHJcbiAgICAgIHJlcGxhY2UucmVwbGFjZVdpdGgocmVwbGFjZVBhZ2UpO1xyXG5cclxuICAgICAgdGFza3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIHJlcGxhY2VQYWdlLmFwcGVuZENoaWxkKGl0ZW0uY3JlYXRlUGFnZSgpKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBET00ucGFnZVRpdGxlLnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgIH0pO1xyXG5cclxuICAgIHByb2plY3REZWxldGUocHJvamVjdERlbGV0ZUJ1dHRvbik7XHJcbiAgfSxcclxuXHJcbiAgcHJvamVjdENhbmNlbDogZnVuY3Rpb24gKG5ld1Rhc2tEaXYpIHtcclxuICAgIG5ld1Rhc2tEaXYucmVtb3ZlKCk7XHJcbiAgfSxcclxuXHJcbiAgbGlzdGVuZXI6IGZ1bmN0aW9uIChcclxuICAgIHRhc2tBZGRCdXR0b24sXHJcbiAgICB0YXNrQ2FuY2VsQnV0dG9uLFxyXG4gICAgbmV3VGFza0ZpZWxkLFxyXG4gICAgbmV3VGFza0RpdlxyXG4gICkge1xyXG4gICAgdGFza0FkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgbGV0IHByb2plY3ROYW1lID0gbmV3VGFza0ZpZWxkLnZhbHVlO1xyXG4gICAgICB0aGlzLnByb2plY3RBZGQocHJvamVjdE5hbWUpO1xyXG4gICAgICBuZXdUYXNrRmllbGQudmFsdWUgPSAnJztcclxuICAgIH0pO1xyXG4gICAgdGFza0NhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdGhpcy5wcm9qZWN0Q2FuY2VsKG5ld1Rhc2tEaXYpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QoKSB7XHJcbiAgY29uc3QgbmV3VGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG5ld1Rhc2tEaXYuY2xhc3NMaXN0LmFkZCgnbmV3LXRhc2stZmllbGQnKTtcclxuXHJcbiAgY29uc3QgbmV3VGFza0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBuZXdUYXNrRmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICBuZXdUYXNrRmllbGQuY2xhc3NMaXN0LmFkZCgnbmV3LXRhc2staW5wdXQnKTtcclxuXHJcbiAgY29uc3QgbmV3VGFza0J1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBuZXdUYXNrQnV0dG9ucy5jbGFzc0xpc3QuYWRkKCduZXctdGFzay1idXR0b25zLWNvbnRhaW5lcicpO1xyXG5cclxuICBjb25zdCB0YXNrQWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgdGFza0FkZEJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQnO1xyXG4gIHRhc2tBZGRCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmV3LXRhc2stYnV0dG9uLWFkZCcpO1xyXG5cclxuICBjb25zdCB0YXNrQ2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgdGFza0NhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xyXG4gIHRhc2tDYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmV3LXRhc2stYnV0dG9uLWNhbmNlbCcpO1xyXG5cclxuICBuZXdUYXNrQnV0dG9ucy5hcHBlbmRDaGlsZCh0YXNrQWRkQnV0dG9uKTtcclxuICBuZXdUYXNrQnV0dG9ucy5hcHBlbmRDaGlsZCh0YXNrQ2FuY2VsQnV0dG9uKTtcclxuICBuZXdUYXNrRGl2LmFwcGVuZENoaWxkKG5ld1Rhc2tGaWVsZCk7XHJcbiAgbmV3VGFza0Rpdi5hcHBlbmRDaGlsZChuZXdUYXNrQnV0dG9ucyk7XHJcbiAgRE9NLnByb2plY3RDb250YWluZXIuaW5zZXJ0QmVmb3JlKFxyXG4gICAgbmV3VGFza0RpdixcclxuICAgIERPTS5wcm9qZWN0Q29udGFpbmVyLmNoaWxkcmVuWzJdXHJcbiAgKTtcclxuXHJcbiAgcHJvamVjdC5saXN0ZW5lcihcclxuICAgIHRhc2tBZGRCdXR0b24sXHJcbiAgICB0YXNrQ2FuY2VsQnV0dG9uLFxyXG4gICAgbmV3VGFza0ZpZWxkLFxyXG4gICAgbmV3VGFza0RpdlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgY3JlYXRlTmV3UHJvamVjdCxcclxuICBwcm9qZWN0LFxyXG4gIHByb2plY3RzLFxyXG4gIHRvRG9zLFxyXG4gIHRvRG9Db250YWluZXIsXHJcbiAgcHJvamVjdHNEYXRhLFxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcclxuICBjb25zdHJ1Y3RvcihuYW1lLCBwcm9qZWN0TmFtZVBhcmEsIHByb2plY3RQYWdlLCB0YXNrcyA9IFtdKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5wcm9qZWN0TmFtZVBhcmEgPSBwcm9qZWN0TmFtZVBhcmE7XHJcbiAgICB0aGlzLnByb2plY3RQYWdlID0gcHJvamVjdFBhZ2U7XHJcbiAgICB0aGlzLnRhc2tzID0gdGFza3M7XHJcbiAgfVxyXG5cclxuICBhZGRUYXNrKHRhc2spIHtcclxuICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcclxuICB9XHJcblxyXG4gIC8vIHJlbW92ZVRhc2sodGFzaykge1xyXG4gIC8vICAgdGhpcy50YXNrcy5zcGxpY2UodGhpcy50YXNrcy5pbmRleE9mKHRhc2sudG9Eb0NvbnRhaW5lciksIDEpO1xyXG4gIC8vIH1cclxuXHJcbiAgY3JlYXRlUGFnZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnByb2plY3RQYWdlO1xyXG4gIH1cclxuXHJcbiAgZ2V0TmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VOYW1lKG5hbWUpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyB0b0RvQ29ucyB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCB0b0RvQ29udGFpbmVyKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xyXG4gICAgdGhpcy50b0RvQ29udGFpbmVyID0gdG9Eb0NvbnRhaW5lcjtcclxuICAgIHRoaXMudWludDMyID0gdGhpcy5nZXRVbmlxdWVLZXkoKTtcclxuICB9XHJcblxyXG4gIGdldFVuaXF1ZUtleSgpIHtcclxuICAgIGNvbnN0IHVpbnQzMiA9IHdpbmRvdy5jcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKFxyXG4gICAgICBuZXcgVWludDMyQXJyYXkoMSlcclxuICAgIClbMF07XHJcbiAgICByZXR1cm4gdWludDMyLnRvU3RyaW5nKDE2KTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVBhZ2UoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b0RvQ29udGFpbmVyO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlTmFtZSh0aXRsZSkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgcmV0dXJuIHRoaXMudGl0bGU7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VEZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VEYXRlKGRhdGUpIHtcclxuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRlO1xyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2FwcC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==