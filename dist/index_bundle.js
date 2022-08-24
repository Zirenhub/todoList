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

const changeToDoStatus = (check, toDoDetails, toDoContainer) => {
  const matchItem = toDos.find(
    (item) => item.toDoContainer === toDoContainer
  );

  matchItem.finished === true
    ? (matchItem.finished = false)
    : (matchItem.finished = true);

  if (matchItem.finished === true) {
    check.classList.add('checked');
    toDoDetails.classList.add('active');
    toDoContainer.classList.add('completed');
  } else {
    check.classList.remove('checked');
    toDoDetails.classList.remove('active');
    toDoContainer.classList.remove('completed');
  }

  updateStorage();

  return matchItem.finished;
};

const toDoContainer = (
  title,
  description,
  date,
  parentProject,
  finished
) => {
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

  // checkbox
  check.addEventListener('click', () => {
    changeToDoStatus(check, toDoDetails, toDoContainer);
  });

  // check if task is done
  if (finished === true) {
    check.classList.add('checked');
    toDoDetails.classList.add('active');
    toDoContainer.classList.add('completed');
  }

  modifyToDo.appendChild(modifyEdit);
  modifyToDo.appendChild(modifyRemove);

  toDoContainer.appendChild(check);
  toDoContainer.appendChild(toDoDetails);
  toDoContainer.appendChild(toDoDate);
  toDoContainer.appendChild(modifyToDo);

  return toDoContainer;
};

const addToDo = (
  title,
  description,
  date,
  parentProject,
  finished
) => {
  let newToDo;

  // if finished is true then we are taking from local storage if it is undefined,
  // then we are creating a new todo if it is false we are taking from local storage,
  // but it doesn't matter.
  if (finished === true) {
    newToDo = new _todos__WEBPACK_IMPORTED_MODULE_2__["default"](
      title,
      description,
      date,
      toDoContainer(
        title,
        description,
        date,
        parentProject,
        finished
      ),
      finished
    );
  } else {
    newToDo = new _todos__WEBPACK_IMPORTED_MODULE_2__["default"](
      title,
      description,
      date,
      toDoContainer(title, description, date, parentProject),
      false
    );
  }

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

  // update local storage projects data
  localStorage.setItem('projectsData', JSON.stringify(projectsData));

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
          let finished = item.finished;
          addToDo(title, description, date, parentProject, finished);
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
  constructor(title, description, date, toDoContainer, finished) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.toDoContainer = toDoContainer;
    this.finished = finished;
    this.uint32 = this.getUniqueKey();
  }

  getUniqueKey() {
    const uint32 = window.crypto.getRandomValues(
      new Uint32Array(1)
    )[0];
    return uint32.toString(16);
  }

  changeFinishedStatus(finished) {
    this.finished = finished;
    return this.finished;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXhfYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNpQjtBQUtIO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3RUFBa0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixNQUFNO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsRUFBRSxxRUFBeUI7QUFDM0I7QUFDQSxpQkFBaUIsb0VBQXdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlFQUFXO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUksbUVBQXVCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsSUFBSSxpRkFBcUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDBFQUFnQjtBQUN0QixLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ3dCOzs7Ozs7Ozs7Ozs7Ozs7QUNsRmpCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1Y0QjtBQUNLO0FBQ0Y7QUFDTztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsOENBQVE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLGtCQUFrQiw4Q0FBUTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsUUFBUSwyREFBeUI7QUFDakM7QUFDQTtBQUNBO0FBQ0EsTUFBTSwyREFBeUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFZO0FBQ2hCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtFQUFnQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSx1QkFBdUIsaURBQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLHVCQUF1QixpREFBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDREQUEwQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsTUFBTSwyREFBeUI7QUFDL0IsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG1FQUFpQztBQUNuQztBQUNBLElBQUksa0VBQWdDO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUU7Ozs7Ozs7Ozs7Ozs7OztBQzdtQmE7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDNUJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUN4Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/MTQ1MyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZnVuY3Rpb25zL0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9mdW5jdGlvbnMvcHJvamVjdENyZWF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9mdW5jdGlvbnMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZnVuY3Rpb25zL3RvZG9zLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBET00gfSBmcm9tICcuL2Z1bmN0aW9ucy9ET00nO1xyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZU5ld1Byb2plY3QsXHJcbiAgcHJvamVjdCxcclxuICB0b0RvcyxcclxufSBmcm9tICcuL2Z1bmN0aW9ucy9wcm9qZWN0Q3JlYXRlJztcclxuXHJcbmNvbnN0IGltcG9ydGVkUHJvamVjdHMgPSBKU09OLnBhcnNlKFxyXG4gIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0c0RhdGEnKVxyXG4pO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoZSkgPT4ge1xyXG4gIGNvbnN0IHByb2plY3RBZGRGdW5jID0gKG5hbWUsIHRhc2tBcnJheSkgPT5cclxuICAgIHByb2plY3QucHJvamVjdEFkZChuYW1lLCB0YXNrQXJyYXkpO1xyXG4gIGlmIChpbXBvcnRlZFByb2plY3RzICE9PSBudWxsKSB7XHJcbiAgICBpbXBvcnRlZFByb2plY3RzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgbGV0IG5hbWUgPSBpdGVtLm5hbWU7XHJcbiAgICAgIGxldCB0YXNrcyA9IGl0ZW0udGFza3M7XHJcbiAgICAgIGlmICh0YXNrcy5sZW5ndGgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgJHtuYW1lfSBoYXMgdGFza3MgIWApO1xyXG4gICAgICAgIGxldCB0YXNrQXJyYXkgPSBbXTtcclxuICAgICAgICB0YXNrcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICB0YXNrQXJyYXkucHVzaChpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBwcm9qZWN0QWRkRnVuYyhuYW1lLCB0YXNrQXJyYXkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHByb2plY3RBZGRGdW5jKG5hbWUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGFsbFRhc2tzUGFnZSgpO1xyXG4gIH1cclxuICBhbGxUYXNrc1BhZ2UoKTtcclxufSk7XHJcblxyXG5sZXQgYWxsVGFza3NQYWdlID0gKCkgPT4ge1xyXG4gIERPTS5wYWdlVGl0bGUudGV4dENvbnRlbnQgPSAnQWxsIFRhc2tzJztcclxuXHJcbiAgbGV0IG1haW5QYWdlID0gRE9NLm1haW5QYWdlLmNoaWxkcmVuWzFdO1xyXG5cclxuICBjb25zdCBhbGxUYXNrc1BhZ2VDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYWxsVGFza3NQYWdlQ29udGVudC5jbGFzc0xpc3QuYWRkKCdhbGwtdGFza3MtcGFnZS1jb250YWluZXInKTtcclxuXHJcbiAgbGV0IGNsb25lVG9Eb3MgPSB0b0Rvcy5zbGljZSgpO1xyXG5cclxuICBjbG9uZVRvRG9zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGFsbFRhc2tzUGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQoaXRlbS5jcmVhdGVQYWdlKCkpO1xyXG4gIH0pO1xyXG5cclxuICBtYWluUGFnZS5yZXBsYWNlV2l0aChhbGxUYXNrc1BhZ2VDb250ZW50KTtcclxufTtcclxuXHJcbmxldCBwYWdlID0ge1xyXG4gIGNoYW5nZVBhZ2U6IGZ1bmN0aW9uIChidXR0b25UZXh0KSB7XHJcbiAgICBpZiAoYnV0dG9uVGV4dCA9PT0gJ0ltcG9ydGFudCcpIHtcclxuICAgICAgLy8gVE9ET1xyXG4gICAgfSBlbHNlIGlmIChidXR0b25UZXh0ID09PSAnQWxsIFRhc2tzJykge1xyXG4gICAgICBhbGxUYXNrc1BhZ2UoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFRPRE9cclxuICAgIH1cclxuICB9LFxyXG5cclxuICBiaW5kRXZlbnRzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICBET00uc2lkZUJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XHJcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsZXQgYnV0dG9uVGV4dCA9IGJ1dHRvbi50ZXh0Q29udGVudDtcclxuICAgICAgICB0aGlzLmNoYW5nZVBhZ2UoYnV0dG9uVGV4dCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBET00uYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzay1maWVsZCcpKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrLWlucHV0JykuZm9jdXMoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgY3JlYXRlTmV3UHJvamVjdCgpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxufTtcclxuXHJcbnBhZ2UuYmluZEV2ZW50cygpO1xyXG5cclxuZXhwb3J0IHsgYWxsVGFza3NQYWdlIH07XHJcbiIsImV4cG9ydCBsZXQgRE9NID0ge1xyXG4gIHNpZGVCdXR0b25zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZS1idXR0b25zJyksXHJcbiAgcHJvamVjdENvbnRhaW5lcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGUtcHJvamVjdHMnKSxcclxuICBhZGRQcm9qZWN0QnV0dG9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkUHJvamVjdHMnKSxcclxuICBwcm9qZWN0QnV0dG9uczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtYnV0dG9uJyksXHJcbiAgcHJvamVjdERlbEJ1dHRvbnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAnLnByb2plY3QtZGVsZXRlLWJ1dHRvbidcclxuICApLFxyXG4gIG1haW5QYWdlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MtY29udGFpbmVyJyksXHJcbiAgcGFnZVRpdGxlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFnZS10aXRsZScpLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBET00gfSBmcm9tICcuL0RPTSc7XHJcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdHMnO1xyXG5pbXBvcnQgdG9Eb0NvbnMgZnJvbSAnLi90b2Rvcyc7XHJcbmltcG9ydCB7IGFsbFRhc2tzUGFnZSB9IGZyb20gJy4uL2FwcCc7XHJcblxyXG5sZXQgcHJvamVjdHMgPSBbXTtcclxubGV0IHRvRG9zID0gW107XHJcblxyXG5sZXQgdGVtcFRpdGxlID0gJyc7XHJcbmxldCB0ZW1wRGVzYyA9ICcnO1xyXG5sZXQgdGVtcERhdGUgPSAnJztcclxuXHJcbmxldCBwcm9qZWN0c0RhdGE7XHJcblxyXG5jb25zdCB1cGRhdGVTdG9yYWdlID0gKCkgPT4ge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0c0RhdGEnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xyXG4gIHByb2plY3RzRGF0YSA9XHJcbiAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0c0RhdGEnKSkgfHwgW107XHJcbn07XHJcblxyXG5jb25zdCBlZGl0VG9EbyA9IChcclxuICB0b0RvVGl0bGUsXHJcbiAgdG9Eb0Rlc2MsXHJcbiAgdG9Eb0RhdGUsXHJcbiAgbW9kaWZ5RWRpdENvbnRlbnQsXHJcbiAgdG9Eb0NvbnRhaW5lclxyXG4pID0+IHtcclxuICBpZiAobW9kaWZ5RWRpdENvbnRlbnQgPT09ICdFZGl0Jykge1xyXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZWRpdC10aXRsZScpO1xyXG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICdwbGFjZWhvbGRlcicsXHJcbiAgICAgICdFbnRlciBhIHRpdGxlIGZvciB5b3VyIFRvRG8hJ1xyXG4gICAgKTtcclxuXHJcbiAgICB0aXRsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgdGVtcFRpdGxlID0gdGl0bGVJbnB1dC52YWx1ZTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGRlc2NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBkZXNjSW5wdXQubWF4TGVuZ3RoID0gJzUwJztcclxuICAgIGRlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VkaXQtZGVzYycpO1xyXG4gICAgZGVzY0lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICBkZXNjSW5wdXQuc2V0QXR0cmlidXRlKFxyXG4gICAgICAncGxhY2Vob2xkZXInLFxyXG4gICAgICAnQWRkIHlvdXIgZGVzY3JpcHRpb24gaGVyZSAoaWYgeW91IHNvIHdpc2ggdG8pJ1xyXG4gICAgKTtcclxuXHJcbiAgICBkZXNjSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICB0ZW1wRGVzYyA9IGRlc2NJbnB1dC52YWx1ZTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdlZGl0LWRhdGUnKTtcclxuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xyXG4gICAgZGF0ZUlucHV0LnN0eWxlLm1hcmdpbkxlZnQgPSAnYXV0byc7XHJcblxyXG4gICAgZGF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgdGVtcERhdGUgPSBkYXRlSW5wdXQudmFsdWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0b0RvVGl0bGUucmVwbGFjZVdpdGgodGl0bGVJbnB1dCk7XHJcbiAgICB0b0RvRGVzYy5yZXBsYWNlV2l0aChkZXNjSW5wdXQpO1xyXG4gICAgdG9Eb0RhdGUucmVwbGFjZVdpdGgoZGF0ZUlucHV0KTtcclxuICB9IGVsc2UgaWYgKG1vZGlmeUVkaXRDb250ZW50ID09PSAnU2F2ZScpIHtcclxuICAgIGxldCByZXBsYWNlbWVudFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGl0bGUnKTtcclxuICAgIGxldCByZXBsYWNlbWVudERlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1kZXNjJyk7XHJcbiAgICBsZXQgcmVwbGFjZW1lbnREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtZGF0ZScpO1xyXG5cclxuICAgIGxldCBtYXRjaEl0ZW0gPSB0b0Rvcy5maW5kKFxyXG4gICAgICAoaXRlbSkgPT4gaXRlbS50b0RvQ29udGFpbmVyID09PSB0b0RvQ29udGFpbmVyXHJcbiAgICApO1xyXG5cclxuICAgIGlmIChyZXBsYWNlbWVudFRpdGxlLnZhbHVlICE9PSAnJykge1xyXG4gICAgICB0b0RvVGl0bGUuaW5uZXJIVE1MID0gdGVtcFRpdGxlO1xyXG4gICAgICBtYXRjaEl0ZW0uY2hhbmdlTmFtZSh0ZW1wVGl0bGUpO1xyXG4gICAgICByZXBsYWNlbWVudFRpdGxlLnJlcGxhY2VXaXRoKHRvRG9UaXRsZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXBsYWNlbWVudFRpdGxlLnJlcGxhY2VXaXRoKHRvRG9UaXRsZSk7XHJcbiAgICB9XHJcbiAgICBpZiAocmVwbGFjZW1lbnREZXNjLnZhbHVlICE9PSAnJykge1xyXG4gICAgICB0b0RvRGVzYy5pbm5lckhUTUwgPSB0ZW1wRGVzYztcclxuICAgICAgbWF0Y2hJdGVtLmNoYW5nZURlc2NyaXB0aW9uKHRlbXBEZXNjKTtcclxuICAgICAgcmVwbGFjZW1lbnREZXNjLnJlcGxhY2VXaXRoKHRvRG9EZXNjKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlcGxhY2VtZW50RGVzYy5yZXBsYWNlV2l0aCh0b0RvRGVzYyk7XHJcbiAgICB9XHJcbiAgICBpZiAocmVwbGFjZW1lbnREYXRlLnZhbHVlICE9PSAnJykge1xyXG4gICAgICB0b0RvRGF0ZS5pbm5lckhUTUwgPSB0ZW1wRGF0ZTtcclxuICAgICAgbWF0Y2hJdGVtLmNoYW5nZURhdGUodGVtcERhdGUpO1xyXG4gICAgICByZXBsYWNlbWVudERhdGUucmVwbGFjZVdpdGgodG9Eb0RhdGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVwbGFjZW1lbnREYXRlLnJlcGxhY2VXaXRoKHRvRG9EYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgbG9jYWwgc3RvcmFnZVxyXG4gICAgdXBkYXRlU3RvcmFnZSgpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHJlbW92ZVRvRG8gPSAoZSwgcGFyZW50UHJvamVjdCkgPT4ge1xyXG4gIGxldCB0YXJnZXRDb250YWluZXIgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG5cclxuICAvLyByZW1vdmUgZnJvbSB0aGUgYXJyYXkgb2YgdG9kb3NcclxuICBsZXQgbWF0Y2hJdGVtID0gdG9Eb3MuZmluZChcclxuICAgIChpdGVtKSA9PiBpdGVtLnRvRG9Db250YWluZXIgPT09IHRhcmdldENvbnRhaW5lclxyXG4gICk7XHJcblxyXG4gIHRvRG9zLnNwbGljZSh0b0Rvcy5pbmRleE9mKG1hdGNoSXRlbSksIDEpO1xyXG5cclxuICAvLyByZW1vdmUgZnJvbSBsb2NhbCBzdG9yYWdlIHByb2plY3QgdGFza3MgYXJyYXlcclxuICBsZXQgbWF0Y2hQcm9qZWN0RGF0YSA9IHByb2plY3RzRGF0YS5maW5kKFxyXG4gICAgKGl0ZW0pID0+IGl0ZW0ubmFtZSA9PT0gcGFyZW50UHJvamVjdFxyXG4gICk7XHJcbiAgbGV0IHByb2plY3REYXRhVGFza3MgPSBtYXRjaFByb2plY3REYXRhLnRhc2tzO1xyXG4gIGxldCB0b0RvUHJvamVjdEluZGV4ID0gcHJvamVjdERhdGFUYXNrcy5maW5kKFxyXG4gICAgKGl0ZW0pID0+IGl0ZW0udWludDMyID09PSBtYXRjaEl0ZW0udWludDMyXHJcbiAgKTtcclxuICBwcm9qZWN0RGF0YVRhc2tzLnNwbGljZShcclxuICAgIHByb2plY3REYXRhVGFza3MuaW5kZXhPZih0b0RvUHJvamVjdEluZGV4KSxcclxuICAgIDFcclxuICApO1xyXG5cclxuICAvLyByZW1vdmUgZnJvbSBwcm9qZWN0IGl0c2VsZlxyXG4gIGxldCBtYXRjaFByb2plY3QgPSBwcm9qZWN0cy5maW5kKFxyXG4gICAgKGl0ZW0pID0+IGl0ZW0ubmFtZSA9PT0gcGFyZW50UHJvamVjdFxyXG4gICk7XHJcbiAgbGV0IHByb2plY3RUYXNrcyA9IG1hdGNoUHJvamVjdC50YXNrcztcclxuICBwcm9qZWN0VGFza3Muc3BsaWNlKHByb2plY3RUYXNrcy5pbmRleE9mKG1hdGNoSXRlbSksIDEpO1xyXG5cclxuICAvLyB1cGRhdGUgbG9jYWwgc3RvcmFnZSBwcm9qZWN0IGRhdGFcclxuICB1cGRhdGVTdG9yYWdlKCk7XHJcblxyXG4gIHRhcmdldENvbnRhaW5lci5yZW1vdmUoKTtcclxuXHJcbiAgY29uc29sZS5sb2codG9Eb3MpO1xyXG59O1xyXG5cclxuY29uc3QgY2hhbmdlVG9Eb1N0YXR1cyA9IChjaGVjaywgdG9Eb0RldGFpbHMsIHRvRG9Db250YWluZXIpID0+IHtcclxuICBjb25zdCBtYXRjaEl0ZW0gPSB0b0Rvcy5maW5kKFxyXG4gICAgKGl0ZW0pID0+IGl0ZW0udG9Eb0NvbnRhaW5lciA9PT0gdG9Eb0NvbnRhaW5lclxyXG4gICk7XHJcblxyXG4gIG1hdGNoSXRlbS5maW5pc2hlZCA9PT0gdHJ1ZVxyXG4gICAgPyAobWF0Y2hJdGVtLmZpbmlzaGVkID0gZmFsc2UpXHJcbiAgICA6IChtYXRjaEl0ZW0uZmluaXNoZWQgPSB0cnVlKTtcclxuXHJcbiAgaWYgKG1hdGNoSXRlbS5maW5pc2hlZCA9PT0gdHJ1ZSkge1xyXG4gICAgY2hlY2suY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpO1xyXG4gICAgdG9Eb0RldGFpbHMuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB0b0RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjaGVjay5jbGFzc0xpc3QucmVtb3ZlKCdjaGVja2VkJyk7XHJcbiAgICB0b0RvRGV0YWlscy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIHRvRG9Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkJyk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTdG9yYWdlKCk7XHJcblxyXG4gIHJldHVybiBtYXRjaEl0ZW0uZmluaXNoZWQ7XHJcbn07XHJcblxyXG5jb25zdCB0b0RvQ29udGFpbmVyID0gKFxyXG4gIHRpdGxlLFxyXG4gIGRlc2NyaXB0aW9uLFxyXG4gIGRhdGUsXHJcbiAgcGFyZW50UHJvamVjdCxcclxuICBmaW5pc2hlZFxyXG4pID0+IHtcclxuICBjb25zdCB0b0RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdG9Eb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0by1kby1jb250YWluZXInKTtcclxuXHJcbiAgY29uc3QgY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjaGVjay5jbGFzc0xpc3QuYWRkKCdjaGVjay1ib3gnKTtcclxuXHJcbiAgY29uc3QgdG9Eb0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0b0RvRGV0YWlscy5jbGFzc0xpc3QuYWRkKCd0by1kby1kZXRhaWxzJyk7XHJcblxyXG4gIGNvbnN0IHRvRG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRvRG9UaXRsZS5jbGFzc0xpc3QuYWRkKCd0by1kby10aXRsZScpO1xyXG4gIHRvRG9UaXRsZS5pbm5lckhUTUwgPSB0aXRsZTtcclxuXHJcbiAgY29uc3QgdG9Eb0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0b0RvRGVzYy5jbGFzc0xpc3QuYWRkKCd0by1kby1kZXNjJyk7XHJcbiAgdG9Eb0Rlc2MuaW5uZXJIVE1MID0gZGVzY3JpcHRpb247XHJcblxyXG4gIHRvRG9EZXRhaWxzLmFwcGVuZENoaWxkKHRvRG9UaXRsZSk7XHJcbiAgdG9Eb0RldGFpbHMuYXBwZW5kQ2hpbGQodG9Eb0Rlc2MpO1xyXG5cclxuICBjb25zdCB0b0RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRvRG9EYXRlLmNsYXNzTGlzdC5hZGQoJ3RvLWRvLWRhdGUnKTtcclxuICB0b0RvRGF0ZS5pbm5lckhUTUwgPSBkYXRlO1xyXG5cclxuICBjb25zdCBtb2RpZnlUb0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbW9kaWZ5VG9Eby5jbGFzc0xpc3QuYWRkKCdtb2RpZnktdG8tZG8nKTtcclxuXHJcbiAgY29uc3QgbW9kaWZ5RWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIG1vZGlmeUVkaXQuY2xhc3NMaXN0LmFkZCgnbW9kaWZ5LWJ1dHRvbnMnKTtcclxuICBtb2RpZnlFZGl0LmlubmVySFRNTCA9ICdFZGl0JztcclxuXHJcbiAgbW9kaWZ5RWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGxldCBtb2RpZnlFZGl0Q29udGVudCA9IG1vZGlmeUVkaXQuaW5uZXJIVE1MO1xyXG4gICAgaWYgKG1vZGlmeUVkaXRDb250ZW50ID09PSAnU2F2ZScpIHtcclxuICAgICAgZWRpdFRvRG8oXHJcbiAgICAgICAgdG9Eb1RpdGxlLFxyXG4gICAgICAgIHRvRG9EZXNjLFxyXG4gICAgICAgIHRvRG9EYXRlLFxyXG4gICAgICAgIG1vZGlmeUVkaXRDb250ZW50LFxyXG4gICAgICAgIHRvRG9Db250YWluZXJcclxuICAgICAgKTtcclxuICAgICAgbW9kaWZ5RWRpdC5pbm5lckhUTUwgPSAnRWRpdCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlZGl0VG9EbyhcclxuICAgICAgICB0b0RvVGl0bGUsXHJcbiAgICAgICAgdG9Eb0Rlc2MsXHJcbiAgICAgICAgdG9Eb0RhdGUsXHJcbiAgICAgICAgbW9kaWZ5RWRpdENvbnRlbnQsXHJcbiAgICAgICAgdG9Eb0NvbnRhaW5lclxyXG4gICAgICApO1xyXG4gICAgICBtb2RpZnlFZGl0LmlubmVySFRNTCA9ICdTYXZlJztcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29uc3QgbW9kaWZ5UmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgbW9kaWZ5UmVtb3ZlLmNsYXNzTGlzdC5hZGQoJ21vZGlmeS1idXR0b25zJyk7XHJcbiAgbW9kaWZ5UmVtb3ZlLmlubmVySFRNTCA9ICdSZW1vdmUnO1xyXG5cclxuICBtb2RpZnlSZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgcmVtb3ZlVG9EbyhlLCBwYXJlbnRQcm9qZWN0KTtcclxuICB9KTtcclxuXHJcbiAgLy8gY2hlY2tib3hcclxuICBjaGVjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNoYW5nZVRvRG9TdGF0dXMoY2hlY2ssIHRvRG9EZXRhaWxzLCB0b0RvQ29udGFpbmVyKTtcclxuICB9KTtcclxuXHJcbiAgLy8gY2hlY2sgaWYgdGFzayBpcyBkb25lXHJcbiAgaWYgKGZpbmlzaGVkID09PSB0cnVlKSB7XHJcbiAgICBjaGVjay5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJyk7XHJcbiAgICB0b0RvRGV0YWlscy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIHRvRG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7XHJcbiAgfVxyXG5cclxuICBtb2RpZnlUb0RvLmFwcGVuZENoaWxkKG1vZGlmeUVkaXQpO1xyXG4gIG1vZGlmeVRvRG8uYXBwZW5kQ2hpbGQobW9kaWZ5UmVtb3ZlKTtcclxuXHJcbiAgdG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVjayk7XHJcbiAgdG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b0RvRGV0YWlscyk7XHJcbiAgdG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b0RvRGF0ZSk7XHJcbiAgdG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RpZnlUb0RvKTtcclxuXHJcbiAgcmV0dXJuIHRvRG9Db250YWluZXI7XHJcbn07XHJcblxyXG5jb25zdCBhZGRUb0RvID0gKFxyXG4gIHRpdGxlLFxyXG4gIGRlc2NyaXB0aW9uLFxyXG4gIGRhdGUsXHJcbiAgcGFyZW50UHJvamVjdCxcclxuICBmaW5pc2hlZFxyXG4pID0+IHtcclxuICBsZXQgbmV3VG9EbztcclxuXHJcbiAgLy8gaWYgZmluaXNoZWQgaXMgdHJ1ZSB0aGVuIHdlIGFyZSB0YWtpbmcgZnJvbSBsb2NhbCBzdG9yYWdlIGlmIGl0IGlzIHVuZGVmaW5lZCxcclxuICAvLyB0aGVuIHdlIGFyZSBjcmVhdGluZyBhIG5ldyB0b2RvIGlmIGl0IGlzIGZhbHNlIHdlIGFyZSB0YWtpbmcgZnJvbSBsb2NhbCBzdG9yYWdlLFxyXG4gIC8vIGJ1dCBpdCBkb2Vzbid0IG1hdHRlci5cclxuICBpZiAoZmluaXNoZWQgPT09IHRydWUpIHtcclxuICAgIG5ld1RvRG8gPSBuZXcgdG9Eb0NvbnMoXHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgZGF0ZSxcclxuICAgICAgdG9Eb0NvbnRhaW5lcihcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICBkYXRlLFxyXG4gICAgICAgIHBhcmVudFByb2plY3QsXHJcbiAgICAgICAgZmluaXNoZWRcclxuICAgICAgKSxcclxuICAgICAgZmluaXNoZWRcclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIG5ld1RvRG8gPSBuZXcgdG9Eb0NvbnMoXHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgZGF0ZSxcclxuICAgICAgdG9Eb0NvbnRhaW5lcih0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHBhcmVudFByb2plY3QpLFxyXG4gICAgICBmYWxzZVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vIGFkZCB0b2RvIHRvIHRoZSBwYXJlbnQgcHJvamVjdFxyXG4gIGxldCBtYXRjaEl0ZW0gPSBwcm9qZWN0cy5maW5kKFxyXG4gICAgKGl0ZW0pID0+IGl0ZW0ubmFtZSA9PT0gcGFyZW50UHJvamVjdFxyXG4gICk7XHJcbiAgbWF0Y2hJdGVtLmFkZFRhc2sobmV3VG9Ebyk7XHJcblxyXG4gIC8vIHB1c2ggdG9kbyB0byBhcnJheSBvZiB0b2RvJ3NcclxuICB0b0Rvcy5wdXNoKG5ld1RvRG8pO1xyXG5cclxuICAvLyBhZGQgdG9kbyB0byB0aGlzIHByb2plY3QncyBwcm9qZWN0IGRhdGFcclxuICBsZXQgbWF0Y2hEYXRhID0gcHJvamVjdHNEYXRhLmZpbmQoXHJcbiAgICAoaXRlbSkgPT4gaXRlbS5uYW1lID09PSBtYXRjaEl0ZW0ubmFtZVxyXG4gICk7XHJcbiAgbWF0Y2hEYXRhLnRhc2tzLnB1c2gobmV3VG9Ebyk7XHJcblxyXG4gIC8vIHVwZGF0ZSBsb2NhbCBzdG9yYWdlIHByb2plY3RzIGRhdGFcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHNEYXRhJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNEYXRhKSk7XHJcblxyXG4gIGRvY3VtZW50XHJcbiAgICAucXVlcnlTZWxlY3RvcignLm1haW4tdG9kby1jb250YWluZXInKVxyXG4gICAgLmFwcGVuZENoaWxkKG5ld1RvRG8uY3JlYXRlUGFnZSgpKTtcclxufTtcclxuXHJcbmNvbnN0IHByb2plY3RQYWdlID0gKG5hbWUpID0+IHtcclxuICBsZXQgcGFyZW50UHJvamVjdCA9IG5hbWU7XHJcblxyXG4gIGNvbnN0IG1haW5Ub0RvUGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1haW5Ub0RvUGFnZS5jbGFzc0xpc3QuYWRkKCdtYWluLXRvZG8tY29udGFpbmVyJyk7XHJcblxyXG4gIC8vIGFkZCB0YXNrIGJ1dHRvblxyXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzay1idG4nKTtcclxuICBidXR0b24uaW5uZXJIVE1MID0gJ0FkZCBUYXNrJztcclxuXHJcbiAgLy8gYWRkIHRhc2sgYnV0dG9uICsgaWNvblxyXG4gIGNvbnN0IGJ1dHRvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgYnV0dG9uSWNvbi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJyk7XHJcbiAgYnV0dG9uSWNvbi5pbm5lckhUTUwgPSAnYWRkJztcclxuICBidXR0b24uYXBwZW5kQ2hpbGQoYnV0dG9uSWNvbik7XHJcblxyXG4gIC8vIHRhc2sgcG9wdXAgZm9ybSBkaXZcclxuICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgndGFzay1jb250YWluZXInKTtcclxuXHJcbiAgLy8gdGFzayBmb3JtIGNvbnRhaW5lclxyXG4gIGNvbnN0IHRhc2tGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRhc2tGaWVsZC5jbGFzc0xpc3QuYWRkKCd0YXNrLWZpZWxkJyk7XHJcblxyXG4gIC8vIHRhc2sgbGFiZWwgZm9yIHRpdGxlXHJcbiAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgdGl0bGVMYWJlbC5pbm5lckhUTUwgPSAnVGl0bGU6JztcclxuXHJcbiAgLy8gaW5wdXQgZmllbGQgZm9yIHRhc2sgdGl0bGVcclxuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICB0aXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWlucHV0Jyk7XHJcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFxyXG4gICAgJ3BsYWNlaG9sZGVyJyxcclxuICAgICdFbnRlciBhIHRpdGxlIGZvciB5b3VyIFRvRG8hJ1xyXG4gICk7XHJcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xyXG5cclxuICAvLyBvcHRpb25hbCBkZXNjcmlwdGlvbiBsYWJlbCBmb3IgZGVzY3JpcHRpb25cclxuICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBkZXNjcmlwdGlvbkxhYmVsLmlubmVySFRNTCA9XHJcbiAgICAnWW91IGNhbiBhZGQgZGVzY3JpcHRpb24gZm9yIHlvdXIgVG9EbyBoZXJlLic7XHJcblxyXG4gIC8vIG9wdGlvbmFsIHRleHRhcmVhIGZvciBkZXNjcmlwdGlvblxyXG4gIGNvbnN0IGRlc2NyaXB0aW9uVGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gIGRlc2NyaXB0aW9uVGV4dEFyZWEuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24tdGV4dC1hcmVhJyk7XHJcbiAgZGVzY3JpcHRpb25UZXh0QXJlYS5tYXhMZW5ndGggPSAnNTAnO1xyXG4gIGRlc2NyaXB0aW9uVGV4dEFyZWEuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICBkZXNjcmlwdGlvblRleHRBcmVhLnNldEF0dHJpYnV0ZShcclxuICAgICdwbGFjZWhvbGRlcicsXHJcbiAgICAnQWRkIHlvdXIgZGVzY3JpcHRpb24gaGVyZSAoaWYgeW91IHNvIHdpc2ggdG8pJ1xyXG4gICk7XHJcblxyXG4gIC8vIGxhYmVsIGZvciBkYXRlIGlucHV0XHJcbiAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBkYXRlTGFiZWwuaW5uZXJIVE1MID0gJ0RhdGU6JztcclxuXHJcbiAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBkYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCgnZGF0ZS1pbnB1dCcpO1xyXG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xyXG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xyXG5cclxuICAvLyBmb3JtIHN1Ym1pdCBidXR0b25cclxuICBjb25zdCBTdWJtaXRCdXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBTdWJtaXRCdXR0b25EaXYuY2xhc3NMaXN0LmFkZCgnc3VibWl0LWNvbnRhaW5lcicpO1xyXG5cclxuICAvLyBzdWJtaXQgaW5wdXRcclxuICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdWJtaXQtYnV0dG9uJyk7XHJcbiAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcclxuICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdBZGQnKTtcclxuICBTdWJtaXRCdXR0b25EaXYuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcclxuXHJcbiAgLy8gcHJldmVudCBzdWJtaXQgZnJvbSBzZW5kaW5nIC8gcmVmcmVzaGluZ1xyXG4gIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgbGV0IHRpdGxlID0gdGl0bGVJbnB1dC52YWx1ZTtcclxuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uVGV4dEFyZWEudmFsdWU7XHJcbiAgICBsZXQgZGF0ZSA9IGRhdGVJbnB1dC52YWx1ZTtcclxuXHJcbiAgICBhZGRUb0RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcGFyZW50UHJvamVjdCk7XHJcbiAgfSk7XHJcblxyXG4gIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0ZpZWxkKTtcclxuICB0YXNrRmllbGQuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XHJcbiAgdGFza0ZpZWxkLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xyXG4gIHRhc2tGaWVsZC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcclxuICB0YXNrRmllbGQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25UZXh0QXJlYSk7XHJcbiAgdGFza0ZpZWxkLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XHJcbiAgdGFza0ZpZWxkLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XHJcbiAgdGFza0ZpZWxkLmFwcGVuZENoaWxkKFN1Ym1pdEJ1dHRvbkRpdik7XHJcblxyXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1jb250YWluZXInKSkge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1jb250YWluZXInKS5yZW1vdmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1haW5Ub0RvUGFnZS5pbnNlcnRCZWZvcmUodGFza0RpdiwgbWFpblRvRG9QYWdlLmNoaWxkcmVuWzFdKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgbWFpblRvRG9QYWdlLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgcmV0dXJuIG1haW5Ub0RvUGFnZTtcclxufTtcclxuXHJcbmNvbnN0IHByb2plY3REZWxldGUgPSAocHJvamVjdERlbGV0ZUJ1dHRvbikgPT4ge1xyXG4gIGxldCBkZWxldGVCdXR0b24gPSBwcm9qZWN0RGVsZXRlQnV0dG9uO1xyXG5cclxuICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgbGV0IHRhcmdldCA9IGRlbGV0ZUJ1dHRvbi5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnRleHRDb250ZW50O1xyXG4gICAgbGV0IHRhcmdldENvbnRhaW5lciA9IGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlO1xyXG5cclxuICAgIC8vIGRlbGV0ZSBmcm9tIHByb2plY3RzIGFycmF5XHJcbiAgICBsZXQgbWF0Y2hJdGVtID0gcHJvamVjdHMuZmluZCgoaXRlbSkgPT4gaXRlbS5uYW1lID09PSB0YXJnZXQpO1xyXG4gICAgcHJvamVjdHMuc3BsaWNlKHByb2plY3RzLmluZGV4T2YobWF0Y2hJdGVtKSwgMSk7XHJcblxyXG4gICAgLy8gZGVsZXRlIGZyb20gbG9jYWwgc3RvcmFnZSBwcm9qZWN0cyBhcnJheVxyXG4gICAgbGV0IG1hdGNoRGF0YSA9IHByb2plY3RzRGF0YS5maW5kKFxyXG4gICAgICAoaXRlbSkgPT4gaXRlbS5uYW1lID09PSBtYXRjaEl0ZW0ubmFtZVxyXG4gICAgKTtcclxuICAgIHByb2plY3RzRGF0YS5zcGxpY2UocHJvamVjdHNEYXRhLmluZGV4T2YobWF0Y2hEYXRhKSwgMSk7XHJcblxyXG4gICAgdXBkYXRlU3RvcmFnZSgpO1xyXG5cclxuICAgIC8vIGRlbGV0ZSB0aGUgdGFza3Mgb2YgdGhlIHByb2plY3RcclxuICAgIGxldCBtYXRjaEl0ZW1UYXNrcyA9IG1hdGNoSXRlbS50YXNrcztcclxuICAgIG1hdGNoSXRlbVRhc2tzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgbGV0IGZpbmRUYXNrRnJvbUFycmF5ID0gdG9Eb3MuZmluZChcclxuICAgICAgICAodG9kbykgPT4gdG9kby51aW50MzIgPT09IGl0ZW0udWludDMyXHJcbiAgICAgICk7XHJcbiAgICAgIHRvRG9zLnNwbGljZSh0b0Rvcy5pbmRleE9mKGZpbmRUYXNrRnJvbUFycmF5KSwgMSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBpZiB3ZSBhcmUgZGVsZXRpbmcgdGhlIHNhbWUgcGFnZSB3ZSBhcmUgb24gcmlnaHQgbm93XHJcbiAgICBpZiAoRE9NLnBhZ2VUaXRsZS50ZXh0Q29udGVudCA9PT0gdGFyZ2V0KSB7XHJcbiAgICAgIGNvbnN0IHJlcGxhY2VtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHJlcGxhY2VtZW50LmNsYXNzTGlzdC5hZGQoJ21haW4tdG9kby1jb250YWluZXInKTtcclxuICAgICAgbWF0Y2hJdGVtLnByb2plY3RQYWdlLnJlcGxhY2VXaXRoKHJlcGxhY2VtZW50KTtcclxuICAgICAgRE9NLnBhZ2VUaXRsZS50ZXh0Q29udGVudCA9ICdQYWdlIERlbGV0ZWQnO1xyXG4gICAgfVxyXG5cclxuICAgIHRhcmdldENvbnRhaW5lci5yZW1vdmUoKTtcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3RzRGF0YSk7XHJcblxyXG4gICAgLy8gcmVmcmVzaCB0aGUgYWxsIHRhc2tzIHBhZ2UgaWYgd2UgYXJlIG9uIHRoZSBwYWdlXHJcbiAgICBhbGxUYXNrc1BhZ2UoKTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHByb2plY3ROYW1lQ2hlY2sgPSAocHJvamVjdE5hbWUpID0+IHtcclxuICBpZiAocHJvamVjdE5hbWUgPT09ICcnKSB7XHJcbiAgICBhbGVydCgnUHJvamVjdCBzaG91bGQgaGF2ZSBhIG5hbWUhJyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgaWYgKHByb2plY3RzLnNvbWUoKGl0ZW0pID0+IHByb2plY3ROYW1lID09PSBpdGVtLm5hbWUpKSB7XHJcbiAgICBhbGVydChcIllvdSBjYW4ndCBoYXZlIHNhbWUgbmFtZWQgcHJvamVjdHMhXCIpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59O1xyXG5cclxubGV0IHByb2plY3QgPSB7XHJcbiAgcHJvamVjdEFkZDogZnVuY3Rpb24gKHByb2plY3ROYW1lLCB0YXNrQXJyYXkpIHtcclxuICAgIGlmIChwcm9qZWN0TmFtZUNoZWNrKHByb2plY3ROYW1lKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNvbnRhaW5lcicpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3ROYW1lUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgcHJvamVjdE5hbWVQYXJhLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYnV0dG9uJyk7XHJcbiAgICBwcm9qZWN0TmFtZVBhcmEudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0RGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBwcm9qZWN0RGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZGVsZXRlLWJ1dHRvbicpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3REZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgcHJvamVjdERlbGV0ZUljb24uaW5uZXJIVE1MID0gJ2Nsb3NlJztcclxuICAgIHByb2plY3REZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQnKTtcclxuXHJcbiAgICBwcm9qZWN0RGVsZXRlQnV0dG9uLmFwcGVuZENoaWxkKHByb2plY3REZWxldGVJY29uKTtcclxuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVQYXJhKTtcclxuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdERlbGV0ZUJ1dHRvbik7XHJcbiAgICBET00ucHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcclxuXHJcbiAgICBsZXQgbmFtZSA9IHByb2plY3ROYW1lUGFyYS50ZXh0Q29udGVudDtcclxuXHJcbiAgICBsZXQgbmV3UHJvamVjdDtcclxuXHJcbiAgICBmdW5jdGlvbiBhZGRQcm9qZWN0KG5ld1Byb2plY3QpIHtcclxuICAgICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcclxuICAgICAgdXBkYXRlU3RvcmFnZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGlmIGxvY2FsIHN0b3JhZ2UgcHJvamVjdCBoYXMgdGFza3NcclxuICAgIGlmICh0YXNrQXJyYXkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBmdW5jdGlvbiBjcmVhdGVEYXRhVGFza3MoKSB7XHJcbiAgICAgICAgdGFza0FycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgIGxldCB0aXRsZSA9IGl0ZW0udGl0bGU7XHJcbiAgICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBpdGVtLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgbGV0IGRhdGUgPSBpdGVtLmRhdGU7XHJcbiAgICAgICAgICBsZXQgcGFyZW50UHJvamVjdCA9IG5hbWU7XHJcbiAgICAgICAgICBsZXQgZmluaXNoZWQgPSBpdGVtLmZpbmlzaGVkO1xyXG4gICAgICAgICAgYWRkVG9Ebyh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHBhcmVudFByb2plY3QsIGZpbmlzaGVkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KFxyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgcHJvamVjdE5hbWVQYXJhLFxyXG4gICAgICAgIHByb2plY3RQYWdlKG5hbWUpXHJcbiAgICAgICk7XHJcbiAgICAgIGFkZFByb2plY3QobmV3UHJvamVjdCk7XHJcbiAgICAgIGNyZWF0ZURhdGFUYXNrcygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KFxyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgcHJvamVjdE5hbWVQYXJhLFxyXG4gICAgICAgIHByb2plY3RQYWdlKG5hbWUpXHJcbiAgICAgICk7XHJcbiAgICAgIGFkZFByb2plY3QobmV3UHJvamVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmV3UHJvamVjdC5wcm9qZWN0TmFtZVBhcmEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGxldCByZXBsYWNlID0gRE9NLm1haW5QYWdlLmNoaWxkTm9kZXNbM107XHJcblxyXG4gICAgICBsZXQgcmVwbGFjZVBhZ2UgPSBuZXdQcm9qZWN0LmNyZWF0ZVBhZ2UobmFtZSk7XHJcbiAgICAgIGxldCB0YXNrcyA9IG5ld1Byb2plY3QudGFza3M7XHJcblxyXG4gICAgICByZXBsYWNlLnJlcGxhY2VXaXRoKHJlcGxhY2VQYWdlKTtcclxuXHJcbiAgICAgIHRhc2tzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICByZXBsYWNlUGFnZS5hcHBlbmRDaGlsZChpdGVtLmNyZWF0ZVBhZ2UoKSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgRE9NLnBhZ2VUaXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICBwcm9qZWN0RGVsZXRlKHByb2plY3REZWxldGVCdXR0b24pO1xyXG4gIH0sXHJcblxyXG4gIHByb2plY3RDYW5jZWw6IGZ1bmN0aW9uIChuZXdUYXNrRGl2KSB7XHJcbiAgICBuZXdUYXNrRGl2LnJlbW92ZSgpO1xyXG4gIH0sXHJcblxyXG4gIGxpc3RlbmVyOiBmdW5jdGlvbiAoXHJcbiAgICB0YXNrQWRkQnV0dG9uLFxyXG4gICAgdGFza0NhbmNlbEJ1dHRvbixcclxuICAgIG5ld1Rhc2tGaWVsZCxcclxuICAgIG5ld1Rhc2tEaXZcclxuICApIHtcclxuICAgIHRhc2tBZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGxldCBwcm9qZWN0TmFtZSA9IG5ld1Rhc2tGaWVsZC52YWx1ZTtcclxuICAgICAgdGhpcy5wcm9qZWN0QWRkKHByb2plY3ROYW1lKTtcclxuICAgICAgbmV3VGFza0ZpZWxkLnZhbHVlID0gJyc7XHJcbiAgICB9KTtcclxuICAgIHRhc2tDYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvamVjdENhbmNlbChuZXdUYXNrRGl2KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbn07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KCkge1xyXG4gIGNvbnN0IG5ld1Rhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBuZXdUYXNrRGl2LmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrLWZpZWxkJyk7XHJcblxyXG4gIGNvbnN0IG5ld1Rhc2tGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgbmV3VGFza0ZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgbmV3VGFza0ZpZWxkLmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrLWlucHV0Jyk7XHJcblxyXG4gIGNvbnN0IG5ld1Rhc2tCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbmV3VGFza0J1dHRvbnMuY2xhc3NMaXN0LmFkZCgnbmV3LXRhc2stYnV0dG9ucy1jb250YWluZXInKTtcclxuXHJcbiAgY29uc3QgdGFza0FkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHRhc2tBZGRCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkJztcclxuICB0YXNrQWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrLWJ1dHRvbi1hZGQnKTtcclxuXHJcbiAgY29uc3QgdGFza0NhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHRhc2tDYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcclxuICB0YXNrQ2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrLWJ1dHRvbi1jYW5jZWwnKTtcclxuXHJcbiAgbmV3VGFza0J1dHRvbnMuYXBwZW5kQ2hpbGQodGFza0FkZEJ1dHRvbik7XHJcbiAgbmV3VGFza0J1dHRvbnMuYXBwZW5kQ2hpbGQodGFza0NhbmNlbEJ1dHRvbik7XHJcbiAgbmV3VGFza0Rpdi5hcHBlbmRDaGlsZChuZXdUYXNrRmllbGQpO1xyXG4gIG5ld1Rhc2tEaXYuYXBwZW5kQ2hpbGQobmV3VGFza0J1dHRvbnMpO1xyXG4gIERPTS5wcm9qZWN0Q29udGFpbmVyLmluc2VydEJlZm9yZShcclxuICAgIG5ld1Rhc2tEaXYsXHJcbiAgICBET00ucHJvamVjdENvbnRhaW5lci5jaGlsZHJlblsyXVxyXG4gICk7XHJcblxyXG4gIHByb2plY3QubGlzdGVuZXIoXHJcbiAgICB0YXNrQWRkQnV0dG9uLFxyXG4gICAgdGFza0NhbmNlbEJ1dHRvbixcclxuICAgIG5ld1Rhc2tGaWVsZCxcclxuICAgIG5ld1Rhc2tEaXZcclxuICApO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIGNyZWF0ZU5ld1Byb2plY3QsXHJcbiAgcHJvamVjdCxcclxuICBwcm9qZWN0cyxcclxuICB0b0RvcyxcclxuICB0b0RvQ29udGFpbmVyLFxyXG4gIHByb2plY3RzRGF0YSxcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XHJcbiAgY29uc3RydWN0b3IobmFtZSwgcHJvamVjdE5hbWVQYXJhLCBwcm9qZWN0UGFnZSwgdGFza3MgPSBbXSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMucHJvamVjdE5hbWVQYXJhID0gcHJvamVjdE5hbWVQYXJhO1xyXG4gICAgdGhpcy5wcm9qZWN0UGFnZSA9IHByb2plY3RQYWdlO1xyXG4gICAgdGhpcy50YXNrcyA9IHRhc2tzO1xyXG4gIH1cclxuXHJcbiAgYWRkVGFzayh0YXNrKSB7XHJcbiAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XHJcbiAgfVxyXG5cclxuICAvLyByZW1vdmVUYXNrKHRhc2spIHtcclxuICAvLyAgIHRoaXMudGFza3Muc3BsaWNlKHRoaXMudGFza3MuaW5kZXhPZih0YXNrLnRvRG9Db250YWluZXIpLCAxKTtcclxuICAvLyB9XHJcblxyXG4gIGNyZWF0ZVBhZ2UoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0UGFnZTtcclxuICB9XHJcblxyXG4gIGdldE5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlTmFtZShuYW1lKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgdG9Eb0NvbnMge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgdG9Eb0NvbnRhaW5lciwgZmluaXNoZWQpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XHJcbiAgICB0aGlzLnRvRG9Db250YWluZXIgPSB0b0RvQ29udGFpbmVyO1xyXG4gICAgdGhpcy5maW5pc2hlZCA9IGZpbmlzaGVkO1xyXG4gICAgdGhpcy51aW50MzIgPSB0aGlzLmdldFVuaXF1ZUtleSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VW5pcXVlS2V5KCkge1xyXG4gICAgY29uc3QgdWludDMyID0gd2luZG93LmNyeXB0by5nZXRSYW5kb21WYWx1ZXMoXHJcbiAgICAgIG5ldyBVaW50MzJBcnJheSgxKVxyXG4gICAgKVswXTtcclxuICAgIHJldHVybiB1aW50MzIudG9TdHJpbmcoMTYpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlRmluaXNoZWRTdGF0dXMoZmluaXNoZWQpIHtcclxuICAgIHRoaXMuZmluaXNoZWQgPSBmaW5pc2hlZDtcclxuICAgIHJldHVybiB0aGlzLmZpbmlzaGVkO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlUGFnZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnRvRG9Db250YWluZXI7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VOYW1lKHRpdGxlKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICByZXR1cm4gdGhpcy50aXRsZTtcclxuICB9XHJcblxyXG4gIGNoYW5nZURlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcclxuICB9XHJcblxyXG4gIGNoYW5nZURhdGUoZGF0ZSkge1xyXG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcclxuICAgIHJldHVybiB0aGlzLmRhdGU7XHJcbiAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9