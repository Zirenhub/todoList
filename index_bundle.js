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

let todayPage = () => {
  _functions_DOM__WEBPACK_IMPORTED_MODULE_1__.DOM.pageTitle.textContent = 'Today';

  let mainPage = _functions_DOM__WEBPACK_IMPORTED_MODULE_1__.DOM.mainPage.children[1];

  const todayPageContent = document.createElement('div');
  todayPageContent.classList.add('today-page-container');

  let cloneToDos = _functions_projectCreate__WEBPACK_IMPORTED_MODULE_2__.toDos.slice();

  cloneToDos.forEach((item) => {
    let taskDate = new Date(item.date);
    let todayDate = new Date();
    if (
      taskDate.getDate() === todayDate.getDate() &&
      taskDate.getMonth() === todayDate.getMonth() &&
      taskDate.getFullYear() === todayDate.getFullYear()
    ) {
      todayPageContent.appendChild(item.createPage());
    }
  });

  mainPage.replaceWith(todayPageContent);
};

let page = {
  changePage: function (buttonText) {
    if (buttonText === 'Important') {
      // TODO
    } else if (buttonText === 'All Tasks') {
      allTasksPage();
    } else {
      todayPage();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXhfYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNpQjtBQUtIO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3RUFBa0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixNQUFNO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsRUFBRSxxRUFBeUI7QUFDM0I7QUFDQSxpQkFBaUIsb0VBQXdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlFQUFXO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxxRUFBeUI7QUFDM0I7QUFDQSxpQkFBaUIsb0VBQXdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlFQUFXO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxJQUFJLG1FQUF1QjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLElBQUksaUZBQXFDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwwRUFBZ0I7QUFDdEIsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUN3Qjs7Ozs7Ozs7Ozs7Ozs7O0FDM0dqQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWNEI7QUFDSztBQUNGO0FBQ087QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDhDQUFRO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixrQkFBa0IsOENBQVE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFFBQVEsMkRBQXlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMkRBQXlCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrREFBWTtBQUNoQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrRUFBZ0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsdUJBQXVCLGlEQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTix1QkFBdUIsaURBQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0REFBMEI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE1BQU0sMkRBQXlCO0FBQy9CLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxtRUFBaUM7QUFDbkM7QUFDQSxJQUFJLGtFQUFnQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFFOzs7Ozs7Ozs7Ozs7Ozs7QUM3bUJhO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzVCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDeENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzE0NTMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Z1bmN0aW9ucy9ET00uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZnVuY3Rpb25zL3Byb2plY3RDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZnVuY3Rpb25zL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Z1bmN0aW9ucy90b2Rvcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgRE9NIH0gZnJvbSAnLi9mdW5jdGlvbnMvRE9NJztcclxuaW1wb3J0IHtcclxuICBjcmVhdGVOZXdQcm9qZWN0LFxyXG4gIHByb2plY3QsXHJcbiAgdG9Eb3MsXHJcbn0gZnJvbSAnLi9mdW5jdGlvbnMvcHJvamVjdENyZWF0ZSc7XHJcblxyXG5jb25zdCBpbXBvcnRlZFByb2plY3RzID0gSlNPTi5wYXJzZShcclxuICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHNEYXRhJylcclxuKTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKGUpID0+IHtcclxuICBjb25zdCBwcm9qZWN0QWRkRnVuYyA9IChuYW1lLCB0YXNrQXJyYXkpID0+XHJcbiAgICBwcm9qZWN0LnByb2plY3RBZGQobmFtZSwgdGFza0FycmF5KTtcclxuICBpZiAoaW1wb3J0ZWRQcm9qZWN0cyAhPT0gbnVsbCkge1xyXG4gICAgaW1wb3J0ZWRQcm9qZWN0cy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGxldCBuYW1lID0gaXRlbS5uYW1lO1xyXG4gICAgICBsZXQgdGFza3MgPSBpdGVtLnRhc2tzO1xyXG4gICAgICBpZiAodGFza3MubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYCR7bmFtZX0gaGFzIHRhc2tzICFgKTtcclxuICAgICAgICBsZXQgdGFza0FycmF5ID0gW107XHJcbiAgICAgICAgdGFza3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgdGFza0FycmF5LnB1c2goaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcHJvamVjdEFkZEZ1bmMobmFtZSwgdGFza0FycmF5KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwcm9qZWN0QWRkRnVuYyhuYW1lKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBhbGxUYXNrc1BhZ2UoKTtcclxuICB9XHJcbiAgYWxsVGFza3NQYWdlKCk7XHJcbn0pO1xyXG5cclxubGV0IGFsbFRhc2tzUGFnZSA9ICgpID0+IHtcclxuICBET00ucGFnZVRpdGxlLnRleHRDb250ZW50ID0gJ0FsbCBUYXNrcyc7XHJcblxyXG4gIGxldCBtYWluUGFnZSA9IERPTS5tYWluUGFnZS5jaGlsZHJlblsxXTtcclxuXHJcbiAgY29uc3QgYWxsVGFza3NQYWdlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGFsbFRhc2tzUGFnZUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnYWxsLXRhc2tzLXBhZ2UtY29udGFpbmVyJyk7XHJcblxyXG4gIGxldCBjbG9uZVRvRG9zID0gdG9Eb3Muc2xpY2UoKTtcclxuXHJcbiAgY2xvbmVUb0Rvcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBhbGxUYXNrc1BhZ2VDb250ZW50LmFwcGVuZENoaWxkKGl0ZW0uY3JlYXRlUGFnZSgpKTtcclxuICB9KTtcclxuXHJcbiAgbWFpblBhZ2UucmVwbGFjZVdpdGgoYWxsVGFza3NQYWdlQ29udGVudCk7XHJcbn07XHJcblxyXG5sZXQgdG9kYXlQYWdlID0gKCkgPT4ge1xyXG4gIERPTS5wYWdlVGl0bGUudGV4dENvbnRlbnQgPSAnVG9kYXknO1xyXG5cclxuICBsZXQgbWFpblBhZ2UgPSBET00ubWFpblBhZ2UuY2hpbGRyZW5bMV07XHJcblxyXG4gIGNvbnN0IHRvZGF5UGFnZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0b2RheVBhZ2VDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3RvZGF5LXBhZ2UtY29udGFpbmVyJyk7XHJcblxyXG4gIGxldCBjbG9uZVRvRG9zID0gdG9Eb3Muc2xpY2UoKTtcclxuXHJcbiAgY2xvbmVUb0Rvcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBsZXQgdGFza0RhdGUgPSBuZXcgRGF0ZShpdGVtLmRhdGUpO1xyXG4gICAgbGV0IHRvZGF5RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRhc2tEYXRlLmdldERhdGUoKSA9PT0gdG9kYXlEYXRlLmdldERhdGUoKSAmJlxyXG4gICAgICB0YXNrRGF0ZS5nZXRNb250aCgpID09PSB0b2RheURhdGUuZ2V0TW9udGgoKSAmJlxyXG4gICAgICB0YXNrRGF0ZS5nZXRGdWxsWWVhcigpID09PSB0b2RheURhdGUuZ2V0RnVsbFllYXIoKVxyXG4gICAgKSB7XHJcbiAgICAgIHRvZGF5UGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQoaXRlbS5jcmVhdGVQYWdlKCkpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBtYWluUGFnZS5yZXBsYWNlV2l0aCh0b2RheVBhZ2VDb250ZW50KTtcclxufTtcclxuXHJcbmxldCBwYWdlID0ge1xyXG4gIGNoYW5nZVBhZ2U6IGZ1bmN0aW9uIChidXR0b25UZXh0KSB7XHJcbiAgICBpZiAoYnV0dG9uVGV4dCA9PT0gJ0ltcG9ydGFudCcpIHtcclxuICAgICAgLy8gVE9ET1xyXG4gICAgfSBlbHNlIGlmIChidXR0b25UZXh0ID09PSAnQWxsIFRhc2tzJykge1xyXG4gICAgICBhbGxUYXNrc1BhZ2UoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRvZGF5UGFnZSgpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGJpbmRFdmVudHM6IGZ1bmN0aW9uICgpIHtcclxuICAgIERPTS5zaWRlQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGxldCBidXR0b25UZXh0ID0gYnV0dG9uLnRleHRDb250ZW50O1xyXG4gICAgICAgIHRoaXMuY2hhbmdlUGFnZShidXR0b25UZXh0KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIERPTS5hZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrLWZpZWxkJykpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2staW5wdXQnKS5mb2N1cygpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjcmVhdGVOZXdQcm9qZWN0KCk7XHJcbiAgICB9KTtcclxuICB9LFxyXG59O1xyXG5cclxucGFnZS5iaW5kRXZlbnRzKCk7XHJcblxyXG5leHBvcnQgeyBhbGxUYXNrc1BhZ2UgfTtcclxuIiwiZXhwb3J0IGxldCBET00gPSB7XHJcbiAgc2lkZUJ1dHRvbnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlLWJ1dHRvbnMnKSxcclxuICBwcm9qZWN0Q29udGFpbmVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZS1wcm9qZWN0cycpLFxyXG4gIGFkZFByb2plY3RCdXR0b246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRQcm9qZWN0cycpLFxyXG4gIHByb2plY3RCdXR0b25zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1idXR0b24nKSxcclxuICBwcm9qZWN0RGVsQnV0dG9uczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICcucHJvamVjdC1kZWxldGUtYnV0dG9uJ1xyXG4gICksXHJcbiAgbWFpblBhZ2U6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcy1jb250YWluZXInKSxcclxuICBwYWdlVGl0bGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYWdlLXRpdGxlJyksXHJcbn07XHJcbiIsImltcG9ydCB7IERPTSB9IGZyb20gJy4vRE9NJztcclxuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0cyc7XHJcbmltcG9ydCB0b0RvQ29ucyBmcm9tICcuL3RvZG9zJztcclxuaW1wb3J0IHsgYWxsVGFza3NQYWdlIH0gZnJvbSAnLi4vYXBwJztcclxuXHJcbmxldCBwcm9qZWN0cyA9IFtdO1xyXG5sZXQgdG9Eb3MgPSBbXTtcclxuXHJcbmxldCB0ZW1wVGl0bGUgPSAnJztcclxubGV0IHRlbXBEZXNjID0gJyc7XHJcbmxldCB0ZW1wRGF0ZSA9ICcnO1xyXG5cclxubGV0IHByb2plY3RzRGF0YTtcclxuXHJcbmNvbnN0IHVwZGF0ZVN0b3JhZ2UgPSAoKSA9PiB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzRGF0YScsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XHJcbiAgcHJvamVjdHNEYXRhID1cclxuICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzRGF0YScpKSB8fCBbXTtcclxufTtcclxuXHJcbmNvbnN0IGVkaXRUb0RvID0gKFxyXG4gIHRvRG9UaXRsZSxcclxuICB0b0RvRGVzYyxcclxuICB0b0RvRGF0ZSxcclxuICBtb2RpZnlFZGl0Q29udGVudCxcclxuICB0b0RvQ29udGFpbmVyXHJcbikgPT4ge1xyXG4gIGlmIChtb2RpZnlFZGl0Q29udGVudCA9PT0gJ0VkaXQnKSB7XHJcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdlZGl0LXRpdGxlJyk7XHJcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcclxuICAgICAgJ3BsYWNlaG9sZGVyJyxcclxuICAgICAgJ0VudGVyIGEgdGl0bGUgZm9yIHlvdXIgVG9EbyEnXHJcbiAgICApO1xyXG5cclxuICAgIHRpdGxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICB0ZW1wVGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZGVzY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGRlc2NJbnB1dC5tYXhMZW5ndGggPSAnNTAnO1xyXG4gICAgZGVzY0lucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZWRpdC1kZXNjJyk7XHJcbiAgICBkZXNjSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICAgIGRlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICdwbGFjZWhvbGRlcicsXHJcbiAgICAgICdBZGQgeW91ciBkZXNjcmlwdGlvbiBoZXJlIChpZiB5b3Ugc28gd2lzaCB0byknXHJcbiAgICApO1xyXG5cclxuICAgIGRlc2NJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgIHRlbXBEZXNjID0gZGVzY0lucHV0LnZhbHVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VkaXQtZGF0ZScpO1xyXG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XHJcbiAgICBkYXRlSW5wdXQuc3R5bGUubWFyZ2luTGVmdCA9ICdhdXRvJztcclxuXHJcbiAgICBkYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICB0ZW1wRGF0ZSA9IGRhdGVJbnB1dC52YWx1ZTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRvRG9UaXRsZS5yZXBsYWNlV2l0aCh0aXRsZUlucHV0KTtcclxuICAgIHRvRG9EZXNjLnJlcGxhY2VXaXRoKGRlc2NJbnB1dCk7XHJcbiAgICB0b0RvRGF0ZS5yZXBsYWNlV2l0aChkYXRlSW5wdXQpO1xyXG4gIH0gZWxzZSBpZiAobW9kaWZ5RWRpdENvbnRlbnQgPT09ICdTYXZlJykge1xyXG4gICAgbGV0IHJlcGxhY2VtZW50VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10aXRsZScpO1xyXG4gICAgbGV0IHJlcGxhY2VtZW50RGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LWRlc2MnKTtcclxuICAgIGxldCByZXBsYWNlbWVudERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1kYXRlJyk7XHJcblxyXG4gICAgbGV0IG1hdGNoSXRlbSA9IHRvRG9zLmZpbmQoXHJcbiAgICAgIChpdGVtKSA9PiBpdGVtLnRvRG9Db250YWluZXIgPT09IHRvRG9Db250YWluZXJcclxuICAgICk7XHJcblxyXG4gICAgaWYgKHJlcGxhY2VtZW50VGl0bGUudmFsdWUgIT09ICcnKSB7XHJcbiAgICAgIHRvRG9UaXRsZS5pbm5lckhUTUwgPSB0ZW1wVGl0bGU7XHJcbiAgICAgIG1hdGNoSXRlbS5jaGFuZ2VOYW1lKHRlbXBUaXRsZSk7XHJcbiAgICAgIHJlcGxhY2VtZW50VGl0bGUucmVwbGFjZVdpdGgodG9Eb1RpdGxlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlcGxhY2VtZW50VGl0bGUucmVwbGFjZVdpdGgodG9Eb1RpdGxlKTtcclxuICAgIH1cclxuICAgIGlmIChyZXBsYWNlbWVudERlc2MudmFsdWUgIT09ICcnKSB7XHJcbiAgICAgIHRvRG9EZXNjLmlubmVySFRNTCA9IHRlbXBEZXNjO1xyXG4gICAgICBtYXRjaEl0ZW0uY2hhbmdlRGVzY3JpcHRpb24odGVtcERlc2MpO1xyXG4gICAgICByZXBsYWNlbWVudERlc2MucmVwbGFjZVdpdGgodG9Eb0Rlc2MpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVwbGFjZW1lbnREZXNjLnJlcGxhY2VXaXRoKHRvRG9EZXNjKTtcclxuICAgIH1cclxuICAgIGlmIChyZXBsYWNlbWVudERhdGUudmFsdWUgIT09ICcnKSB7XHJcbiAgICAgIHRvRG9EYXRlLmlubmVySFRNTCA9IHRlbXBEYXRlO1xyXG4gICAgICBtYXRjaEl0ZW0uY2hhbmdlRGF0ZSh0ZW1wRGF0ZSk7XHJcbiAgICAgIHJlcGxhY2VtZW50RGF0ZS5yZXBsYWNlV2l0aCh0b0RvRGF0ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXBsYWNlbWVudERhdGUucmVwbGFjZVdpdGgodG9Eb0RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSBsb2NhbCBzdG9yYWdlXHJcbiAgICB1cGRhdGVTdG9yYWdlKCk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgcmVtb3ZlVG9EbyA9IChlLCBwYXJlbnRQcm9qZWN0KSA9PiB7XHJcbiAgbGV0IHRhcmdldENvbnRhaW5lciA9IGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcblxyXG4gIC8vIHJlbW92ZSBmcm9tIHRoZSBhcnJheSBvZiB0b2Rvc1xyXG4gIGxldCBtYXRjaEl0ZW0gPSB0b0Rvcy5maW5kKFxyXG4gICAgKGl0ZW0pID0+IGl0ZW0udG9Eb0NvbnRhaW5lciA9PT0gdGFyZ2V0Q29udGFpbmVyXHJcbiAgKTtcclxuXHJcbiAgdG9Eb3Muc3BsaWNlKHRvRG9zLmluZGV4T2YobWF0Y2hJdGVtKSwgMSk7XHJcblxyXG4gIC8vIHJlbW92ZSBmcm9tIGxvY2FsIHN0b3JhZ2UgcHJvamVjdCB0YXNrcyBhcnJheVxyXG4gIGxldCBtYXRjaFByb2plY3REYXRhID0gcHJvamVjdHNEYXRhLmZpbmQoXHJcbiAgICAoaXRlbSkgPT4gaXRlbS5uYW1lID09PSBwYXJlbnRQcm9qZWN0XHJcbiAgKTtcclxuICBsZXQgcHJvamVjdERhdGFUYXNrcyA9IG1hdGNoUHJvamVjdERhdGEudGFza3M7XHJcbiAgbGV0IHRvRG9Qcm9qZWN0SW5kZXggPSBwcm9qZWN0RGF0YVRhc2tzLmZpbmQoXHJcbiAgICAoaXRlbSkgPT4gaXRlbS51aW50MzIgPT09IG1hdGNoSXRlbS51aW50MzJcclxuICApO1xyXG4gIHByb2plY3REYXRhVGFza3Muc3BsaWNlKFxyXG4gICAgcHJvamVjdERhdGFUYXNrcy5pbmRleE9mKHRvRG9Qcm9qZWN0SW5kZXgpLFxyXG4gICAgMVxyXG4gICk7XHJcblxyXG4gIC8vIHJlbW92ZSBmcm9tIHByb2plY3QgaXRzZWxmXHJcbiAgbGV0IG1hdGNoUHJvamVjdCA9IHByb2plY3RzLmZpbmQoXHJcbiAgICAoaXRlbSkgPT4gaXRlbS5uYW1lID09PSBwYXJlbnRQcm9qZWN0XHJcbiAgKTtcclxuICBsZXQgcHJvamVjdFRhc2tzID0gbWF0Y2hQcm9qZWN0LnRhc2tzO1xyXG4gIHByb2plY3RUYXNrcy5zcGxpY2UocHJvamVjdFRhc2tzLmluZGV4T2YobWF0Y2hJdGVtKSwgMSk7XHJcblxyXG4gIC8vIHVwZGF0ZSBsb2NhbCBzdG9yYWdlIHByb2plY3QgZGF0YVxyXG4gIHVwZGF0ZVN0b3JhZ2UoKTtcclxuXHJcbiAgdGFyZ2V0Q29udGFpbmVyLnJlbW92ZSgpO1xyXG5cclxuICBjb25zb2xlLmxvZyh0b0Rvcyk7XHJcbn07XHJcblxyXG5jb25zdCBjaGFuZ2VUb0RvU3RhdHVzID0gKGNoZWNrLCB0b0RvRGV0YWlscywgdG9Eb0NvbnRhaW5lcikgPT4ge1xyXG4gIGNvbnN0IG1hdGNoSXRlbSA9IHRvRG9zLmZpbmQoXHJcbiAgICAoaXRlbSkgPT4gaXRlbS50b0RvQ29udGFpbmVyID09PSB0b0RvQ29udGFpbmVyXHJcbiAgKTtcclxuXHJcbiAgbWF0Y2hJdGVtLmZpbmlzaGVkID09PSB0cnVlXHJcbiAgICA/IChtYXRjaEl0ZW0uZmluaXNoZWQgPSBmYWxzZSlcclxuICAgIDogKG1hdGNoSXRlbS5maW5pc2hlZCA9IHRydWUpO1xyXG5cclxuICBpZiAobWF0Y2hJdGVtLmZpbmlzaGVkID09PSB0cnVlKSB7XHJcbiAgICBjaGVjay5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJyk7XHJcbiAgICB0b0RvRGV0YWlscy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIHRvRG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNoZWNrLmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrZWQnKTtcclxuICAgIHRvRG9EZXRhaWxzLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgdG9Eb0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQnKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVN0b3JhZ2UoKTtcclxuXHJcbiAgcmV0dXJuIG1hdGNoSXRlbS5maW5pc2hlZDtcclxufTtcclxuXHJcbmNvbnN0IHRvRG9Db250YWluZXIgPSAoXHJcbiAgdGl0bGUsXHJcbiAgZGVzY3JpcHRpb24sXHJcbiAgZGF0ZSxcclxuICBwYXJlbnRQcm9qZWN0LFxyXG4gIGZpbmlzaGVkXHJcbikgPT4ge1xyXG4gIGNvbnN0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0b0RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvLWRvLWNvbnRhaW5lcicpO1xyXG5cclxuICBjb25zdCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNoZWNrLmNsYXNzTGlzdC5hZGQoJ2NoZWNrLWJveCcpO1xyXG5cclxuICBjb25zdCB0b0RvRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRvRG9EZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ3RvLWRvLWRldGFpbHMnKTtcclxuXHJcbiAgY29uc3QgdG9Eb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdG9Eb1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvLWRvLXRpdGxlJyk7XHJcbiAgdG9Eb1RpdGxlLmlubmVySFRNTCA9IHRpdGxlO1xyXG5cclxuICBjb25zdCB0b0RvRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRvRG9EZXNjLmNsYXNzTGlzdC5hZGQoJ3RvLWRvLWRlc2MnKTtcclxuICB0b0RvRGVzYy5pbm5lckhUTUwgPSBkZXNjcmlwdGlvbjtcclxuXHJcbiAgdG9Eb0RldGFpbHMuYXBwZW5kQ2hpbGQodG9Eb1RpdGxlKTtcclxuICB0b0RvRGV0YWlscy5hcHBlbmRDaGlsZCh0b0RvRGVzYyk7XHJcblxyXG4gIGNvbnN0IHRvRG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdG9Eb0RhdGUuY2xhc3NMaXN0LmFkZCgndG8tZG8tZGF0ZScpO1xyXG4gIHRvRG9EYXRlLmlubmVySFRNTCA9IGRhdGU7XHJcblxyXG4gIGNvbnN0IG1vZGlmeVRvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtb2RpZnlUb0RvLmNsYXNzTGlzdC5hZGQoJ21vZGlmeS10by1kbycpO1xyXG5cclxuICBjb25zdCBtb2RpZnlFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgbW9kaWZ5RWRpdC5jbGFzc0xpc3QuYWRkKCdtb2RpZnktYnV0dG9ucycpO1xyXG4gIG1vZGlmeUVkaXQuaW5uZXJIVE1MID0gJ0VkaXQnO1xyXG5cclxuICBtb2RpZnlFZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbGV0IG1vZGlmeUVkaXRDb250ZW50ID0gbW9kaWZ5RWRpdC5pbm5lckhUTUw7XHJcbiAgICBpZiAobW9kaWZ5RWRpdENvbnRlbnQgPT09ICdTYXZlJykge1xyXG4gICAgICBlZGl0VG9EbyhcclxuICAgICAgICB0b0RvVGl0bGUsXHJcbiAgICAgICAgdG9Eb0Rlc2MsXHJcbiAgICAgICAgdG9Eb0RhdGUsXHJcbiAgICAgICAgbW9kaWZ5RWRpdENvbnRlbnQsXHJcbiAgICAgICAgdG9Eb0NvbnRhaW5lclxyXG4gICAgICApO1xyXG4gICAgICBtb2RpZnlFZGl0LmlubmVySFRNTCA9ICdFZGl0JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVkaXRUb0RvKFxyXG4gICAgICAgIHRvRG9UaXRsZSxcclxuICAgICAgICB0b0RvRGVzYyxcclxuICAgICAgICB0b0RvRGF0ZSxcclxuICAgICAgICBtb2RpZnlFZGl0Q29udGVudCxcclxuICAgICAgICB0b0RvQ29udGFpbmVyXHJcbiAgICAgICk7XHJcbiAgICAgIG1vZGlmeUVkaXQuaW5uZXJIVE1MID0gJ1NhdmUnO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBtb2RpZnlSZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBtb2RpZnlSZW1vdmUuY2xhc3NMaXN0LmFkZCgnbW9kaWZ5LWJ1dHRvbnMnKTtcclxuICBtb2RpZnlSZW1vdmUuaW5uZXJIVE1MID0gJ1JlbW92ZSc7XHJcblxyXG4gIG1vZGlmeVJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICByZW1vdmVUb0RvKGUsIHBhcmVudFByb2plY3QpO1xyXG4gIH0pO1xyXG5cclxuICAvLyBjaGVja2JveFxyXG4gIGNoZWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY2hhbmdlVG9Eb1N0YXR1cyhjaGVjaywgdG9Eb0RldGFpbHMsIHRvRG9Db250YWluZXIpO1xyXG4gIH0pO1xyXG5cclxuICAvLyBjaGVjayBpZiB0YXNrIGlzIGRvbmVcclxuICBpZiAoZmluaXNoZWQgPT09IHRydWUpIHtcclxuICAgIGNoZWNrLmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcclxuICAgIHRvRG9EZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgdG9Eb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcclxuICB9XHJcblxyXG4gIG1vZGlmeVRvRG8uYXBwZW5kQ2hpbGQobW9kaWZ5RWRpdCk7XHJcbiAgbW9kaWZ5VG9Eby5hcHBlbmRDaGlsZChtb2RpZnlSZW1vdmUpO1xyXG5cclxuICB0b0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrKTtcclxuICB0b0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvRG9EZXRhaWxzKTtcclxuICB0b0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvRG9EYXRlKTtcclxuICB0b0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGlmeVRvRG8pO1xyXG5cclxuICByZXR1cm4gdG9Eb0NvbnRhaW5lcjtcclxufTtcclxuXHJcbmNvbnN0IGFkZFRvRG8gPSAoXHJcbiAgdGl0bGUsXHJcbiAgZGVzY3JpcHRpb24sXHJcbiAgZGF0ZSxcclxuICBwYXJlbnRQcm9qZWN0LFxyXG4gIGZpbmlzaGVkXHJcbikgPT4ge1xyXG4gIGxldCBuZXdUb0RvO1xyXG5cclxuICAvLyBpZiBmaW5pc2hlZCBpcyB0cnVlIHRoZW4gd2UgYXJlIHRha2luZyBmcm9tIGxvY2FsIHN0b3JhZ2UgaWYgaXQgaXMgdW5kZWZpbmVkLFxyXG4gIC8vIHRoZW4gd2UgYXJlIGNyZWF0aW5nIGEgbmV3IHRvZG8gaWYgaXQgaXMgZmFsc2Ugd2UgYXJlIHRha2luZyBmcm9tIGxvY2FsIHN0b3JhZ2UsXHJcbiAgLy8gYnV0IGl0IGRvZXNuJ3QgbWF0dGVyLlxyXG4gIGlmIChmaW5pc2hlZCA9PT0gdHJ1ZSkge1xyXG4gICAgbmV3VG9EbyA9IG5ldyB0b0RvQ29ucyhcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICBkYXRlLFxyXG4gICAgICB0b0RvQ29udGFpbmVyKFxyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGRhdGUsXHJcbiAgICAgICAgcGFyZW50UHJvamVjdCxcclxuICAgICAgICBmaW5pc2hlZFxyXG4gICAgICApLFxyXG4gICAgICBmaW5pc2hlZFxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgbmV3VG9EbyA9IG5ldyB0b0RvQ29ucyhcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICBkYXRlLFxyXG4gICAgICB0b0RvQ29udGFpbmVyKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcGFyZW50UHJvamVjdCksXHJcbiAgICAgIGZhbHNlXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gYWRkIHRvZG8gdG8gdGhlIHBhcmVudCBwcm9qZWN0XHJcbiAgbGV0IG1hdGNoSXRlbSA9IHByb2plY3RzLmZpbmQoXHJcbiAgICAoaXRlbSkgPT4gaXRlbS5uYW1lID09PSBwYXJlbnRQcm9qZWN0XHJcbiAgKTtcclxuICBtYXRjaEl0ZW0uYWRkVGFzayhuZXdUb0RvKTtcclxuXHJcbiAgLy8gcHVzaCB0b2RvIHRvIGFycmF5IG9mIHRvZG8nc1xyXG4gIHRvRG9zLnB1c2gobmV3VG9Ebyk7XHJcblxyXG4gIC8vIGFkZCB0b2RvIHRvIHRoaXMgcHJvamVjdCdzIHByb2plY3QgZGF0YVxyXG4gIGxldCBtYXRjaERhdGEgPSBwcm9qZWN0c0RhdGEuZmluZChcclxuICAgIChpdGVtKSA9PiBpdGVtLm5hbWUgPT09IG1hdGNoSXRlbS5uYW1lXHJcbiAgKTtcclxuICBtYXRjaERhdGEudGFza3MucHVzaChuZXdUb0RvKTtcclxuXHJcbiAgLy8gdXBkYXRlIGxvY2FsIHN0b3JhZ2UgcHJvamVjdHMgZGF0YVxyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0c0RhdGEnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0RhdGEpKTtcclxuXHJcbiAgZG9jdW1lbnRcclxuICAgIC5xdWVyeVNlbGVjdG9yKCcubWFpbi10b2RvLWNvbnRhaW5lcicpXHJcbiAgICAuYXBwZW5kQ2hpbGQobmV3VG9Eby5jcmVhdGVQYWdlKCkpO1xyXG59O1xyXG5cclxuY29uc3QgcHJvamVjdFBhZ2UgPSAobmFtZSkgPT4ge1xyXG4gIGxldCBwYXJlbnRQcm9qZWN0ID0gbmFtZTtcclxuXHJcbiAgY29uc3QgbWFpblRvRG9QYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbWFpblRvRG9QYWdlLmNsYXNzTGlzdC5hZGQoJ21haW4tdG9kby1jb250YWluZXInKTtcclxuXHJcbiAgLy8gYWRkIHRhc2sgYnV0dG9uXHJcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrLWJ0bicpO1xyXG4gIGJ1dHRvbi5pbm5lckhUTUwgPSAnQWRkIFRhc2snO1xyXG5cclxuICAvLyBhZGQgdGFzayBidXR0b24gKyBpY29uXHJcbiAgY29uc3QgYnV0dG9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBidXR0b25JY29uLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQnKTtcclxuICBidXR0b25JY29uLmlubmVySFRNTCA9ICdhZGQnO1xyXG4gIGJ1dHRvbi5hcHBlbmRDaGlsZChidXR0b25JY29uKTtcclxuXHJcbiAgLy8gdGFzayBwb3B1cCBmb3JtIGRpdlxyXG4gIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRhaW5lcicpO1xyXG5cclxuICAvLyB0YXNrIGZvcm0gY29udGFpbmVyXHJcbiAgY29uc3QgdGFza0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGFza0ZpZWxkLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZmllbGQnKTtcclxuXHJcbiAgLy8gdGFzayBsYWJlbCBmb3IgdGl0bGVcclxuICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICB0aXRsZUxhYmVsLmlubmVySFRNTCA9ICdUaXRsZTonO1xyXG5cclxuICAvLyBpbnB1dCBmaWVsZCBmb3IgdGFzayB0aXRsZVxyXG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgndGl0bGUtaW5wdXQnKTtcclxuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAncGxhY2Vob2xkZXInLFxyXG4gICAgJ0VudGVyIGEgdGl0bGUgZm9yIHlvdXIgVG9EbyEnXHJcbiAgKTtcclxuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XHJcblxyXG4gIC8vIG9wdGlvbmFsIGRlc2NyaXB0aW9uIGxhYmVsIGZvciBkZXNjcmlwdGlvblxyXG4gIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIGRlc2NyaXB0aW9uTGFiZWwuaW5uZXJIVE1MID1cclxuICAgICdZb3UgY2FuIGFkZCBkZXNjcmlwdGlvbiBmb3IgeW91ciBUb0RvIGhlcmUuJztcclxuXHJcbiAgLy8gb3B0aW9uYWwgdGV4dGFyZWEgZm9yIGRlc2NyaXB0aW9uXHJcbiAgY29uc3QgZGVzY3JpcHRpb25UZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgZGVzY3JpcHRpb25UZXh0QXJlYS5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbi10ZXh0LWFyZWEnKTtcclxuICBkZXNjcmlwdGlvblRleHRBcmVhLm1heExlbmd0aCA9ICc1MCc7XHJcbiAgZGVzY3JpcHRpb25UZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gIGRlc2NyaXB0aW9uVGV4dEFyZWEuc2V0QXR0cmlidXRlKFxyXG4gICAgJ3BsYWNlaG9sZGVyJyxcclxuICAgICdBZGQgeW91ciBkZXNjcmlwdGlvbiBoZXJlIChpZiB5b3Ugc28gd2lzaCB0byknXHJcbiAgKTtcclxuXHJcbiAgLy8gbGFiZWwgZm9yIGRhdGUgaW5wdXRcclxuICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIGRhdGVMYWJlbC5pbm5lckhUTUwgPSAnRGF0ZTonO1xyXG5cclxuICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGRhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdkYXRlLWlucHV0Jyk7XHJcbiAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XHJcbiAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XHJcblxyXG4gIC8vIGZvcm0gc3VibWl0IGJ1dHRvblxyXG4gIGNvbnN0IFN1Ym1pdEJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIFN1Ym1pdEJ1dHRvbkRpdi5jbGFzc0xpc3QuYWRkKCdzdWJtaXQtY29udGFpbmVyJyk7XHJcblxyXG4gIC8vIHN1Ym1pdCBpbnB1dFxyXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC1idXR0b24nKTtcclxuICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xyXG4gIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0FkZCcpO1xyXG4gIFN1Ym1pdEJ1dHRvbkRpdi5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xyXG5cclxuICAvLyBwcmV2ZW50IHN1Ym1pdCBmcm9tIHNlbmRpbmcgLyByZWZyZXNoaW5nXHJcbiAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBsZXQgdGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlO1xyXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25UZXh0QXJlYS52YWx1ZTtcclxuICAgIGxldCBkYXRlID0gZGF0ZUlucHV0LnZhbHVlO1xyXG5cclxuICAgIGFkZFRvRG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwYXJlbnRQcm9qZWN0KTtcclxuICB9KTtcclxuXHJcbiAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrRmllbGQpO1xyXG4gIHRhc2tGaWVsZC5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcclxuICB0YXNrRmllbGQuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XHJcbiAgdGFza0ZpZWxkLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xyXG4gIHRhc2tGaWVsZC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblRleHRBcmVhKTtcclxuICB0YXNrRmllbGQuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcclxuICB0YXNrRmllbGQuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcclxuICB0YXNrRmllbGQuYXBwZW5kQ2hpbGQoU3VibWl0QnV0dG9uRGl2KTtcclxuXHJcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNvbnRhaW5lcicpKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNvbnRhaW5lcicpLnJlbW92ZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWFpblRvRG9QYWdlLmluc2VydEJlZm9yZSh0YXNrRGl2LCBtYWluVG9Eb1BhZ2UuY2hpbGRyZW5bMV0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBtYWluVG9Eb1BhZ2UuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICByZXR1cm4gbWFpblRvRG9QYWdlO1xyXG59O1xyXG5cclxuY29uc3QgcHJvamVjdERlbGV0ZSA9IChwcm9qZWN0RGVsZXRlQnV0dG9uKSA9PiB7XHJcbiAgbGV0IGRlbGV0ZUJ1dHRvbiA9IHByb2plY3REZWxldGVCdXR0b247XHJcblxyXG4gIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBsZXQgdGFyZ2V0ID0gZGVsZXRlQnV0dG9uLnByZXZpb3VzRWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnQ7XHJcbiAgICBsZXQgdGFyZ2V0Q29udGFpbmVyID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGU7XHJcblxyXG4gICAgLy8gZGVsZXRlIGZyb20gcHJvamVjdHMgYXJyYXlcclxuICAgIGxldCBtYXRjaEl0ZW0gPSBwcm9qZWN0cy5maW5kKChpdGVtKSA9PiBpdGVtLm5hbWUgPT09IHRhcmdldCk7XHJcbiAgICBwcm9qZWN0cy5zcGxpY2UocHJvamVjdHMuaW5kZXhPZihtYXRjaEl0ZW0pLCAxKTtcclxuXHJcbiAgICAvLyBkZWxldGUgZnJvbSBsb2NhbCBzdG9yYWdlIHByb2plY3RzIGFycmF5XHJcbiAgICBsZXQgbWF0Y2hEYXRhID0gcHJvamVjdHNEYXRhLmZpbmQoXHJcbiAgICAgIChpdGVtKSA9PiBpdGVtLm5hbWUgPT09IG1hdGNoSXRlbS5uYW1lXHJcbiAgICApO1xyXG4gICAgcHJvamVjdHNEYXRhLnNwbGljZShwcm9qZWN0c0RhdGEuaW5kZXhPZihtYXRjaERhdGEpLCAxKTtcclxuXHJcbiAgICB1cGRhdGVTdG9yYWdlKCk7XHJcblxyXG4gICAgLy8gZGVsZXRlIHRoZSB0YXNrcyBvZiB0aGUgcHJvamVjdFxyXG4gICAgbGV0IG1hdGNoSXRlbVRhc2tzID0gbWF0Y2hJdGVtLnRhc2tzO1xyXG4gICAgbWF0Y2hJdGVtVGFza3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBsZXQgZmluZFRhc2tGcm9tQXJyYXkgPSB0b0Rvcy5maW5kKFxyXG4gICAgICAgICh0b2RvKSA9PiB0b2RvLnVpbnQzMiA9PT0gaXRlbS51aW50MzJcclxuICAgICAgKTtcclxuICAgICAgdG9Eb3Muc3BsaWNlKHRvRG9zLmluZGV4T2YoZmluZFRhc2tGcm9tQXJyYXkpLCAxKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGlmIHdlIGFyZSBkZWxldGluZyB0aGUgc2FtZSBwYWdlIHdlIGFyZSBvbiByaWdodCBub3dcclxuICAgIGlmIChET00ucGFnZVRpdGxlLnRleHRDb250ZW50ID09PSB0YXJnZXQpIHtcclxuICAgICAgY29uc3QgcmVwbGFjZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgcmVwbGFjZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWFpbi10b2RvLWNvbnRhaW5lcicpO1xyXG4gICAgICBtYXRjaEl0ZW0ucHJvamVjdFBhZ2UucmVwbGFjZVdpdGgocmVwbGFjZW1lbnQpO1xyXG4gICAgICBET00ucGFnZVRpdGxlLnRleHRDb250ZW50ID0gJ1BhZ2UgRGVsZXRlZCc7XHJcbiAgICB9XHJcblxyXG4gICAgdGFyZ2V0Q29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgY29uc29sZS5sb2cocHJvamVjdHMpO1xyXG4gICAgY29uc29sZS5sb2cocHJvamVjdHNEYXRhKTtcclxuXHJcbiAgICAvLyByZWZyZXNoIHRoZSBhbGwgdGFza3MgcGFnZSBpZiB3ZSBhcmUgb24gdGhlIHBhZ2VcclxuICAgIGFsbFRhc2tzUGFnZSgpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgcHJvamVjdE5hbWVDaGVjayA9IChwcm9qZWN0TmFtZSkgPT4ge1xyXG4gIGlmIChwcm9qZWN0TmFtZSA9PT0gJycpIHtcclxuICAgIGFsZXJ0KCdQcm9qZWN0IHNob3VsZCBoYXZlIGEgbmFtZSEnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICBpZiAocHJvamVjdHMuc29tZSgoaXRlbSkgPT4gcHJvamVjdE5hbWUgPT09IGl0ZW0ubmFtZSkpIHtcclxuICAgIGFsZXJ0KFwiWW91IGNhbid0IGhhdmUgc2FtZSBuYW1lZCBwcm9qZWN0cyFcIik7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn07XHJcblxyXG5sZXQgcHJvamVjdCA9IHtcclxuICBwcm9qZWN0QWRkOiBmdW5jdGlvbiAocHJvamVjdE5hbWUsIHRhc2tBcnJheSkge1xyXG4gICAgaWYgKHByb2plY3ROYW1lQ2hlY2socHJvamVjdE5hbWUpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY29udGFpbmVyJyk7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdE5hbWVQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBwcm9qZWN0TmFtZVBhcmEuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1idXR0b24nKTtcclxuICAgIHByb2plY3ROYW1lUGFyYS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3REZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHByb2plY3REZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1kZWxldGUtYnV0dG9uJyk7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdERlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBwcm9qZWN0RGVsZXRlSWNvbi5pbm5lckhUTUwgPSAnY2xvc2UnO1xyXG4gICAgcHJvamVjdERlbGV0ZUljb24uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCcpO1xyXG5cclxuICAgIHByb2plY3REZWxldGVCdXR0b24uYXBwZW5kQ2hpbGQocHJvamVjdERlbGV0ZUljb24pO1xyXG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZVBhcmEpO1xyXG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0RGVsZXRlQnV0dG9uKTtcclxuICAgIERPTS5wcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xyXG5cclxuICAgIGxldCBuYW1lID0gcHJvamVjdE5hbWVQYXJhLnRleHRDb250ZW50O1xyXG5cclxuICAgIGxldCBuZXdQcm9qZWN0O1xyXG5cclxuICAgIGZ1bmN0aW9uIGFkZFByb2plY3QobmV3UHJvamVjdCkge1xyXG4gICAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xyXG4gICAgICB1cGRhdGVTdG9yYWdlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYgbG9jYWwgc3RvcmFnZSBwcm9qZWN0IGhhcyB0YXNrc1xyXG4gICAgaWYgKHRhc2tBcnJheSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGZ1bmN0aW9uIGNyZWF0ZURhdGFUYXNrcygpIHtcclxuICAgICAgICB0YXNrQXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgbGV0IHRpdGxlID0gaXRlbS50aXRsZTtcclxuICAgICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGl0ZW0uZGVzY3JpcHRpb247XHJcbiAgICAgICAgICBsZXQgZGF0ZSA9IGl0ZW0uZGF0ZTtcclxuICAgICAgICAgIGxldCBwYXJlbnRQcm9qZWN0ID0gbmFtZTtcclxuICAgICAgICAgIGxldCBmaW5pc2hlZCA9IGl0ZW0uZmluaXNoZWQ7XHJcbiAgICAgICAgICBhZGRUb0RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcGFyZW50UHJvamVjdCwgZmluaXNoZWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoXHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBwcm9qZWN0TmFtZVBhcmEsXHJcbiAgICAgICAgcHJvamVjdFBhZ2UobmFtZSlcclxuICAgICAgKTtcclxuICAgICAgYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcclxuICAgICAgY3JlYXRlRGF0YVRhc2tzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoXHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBwcm9qZWN0TmFtZVBhcmEsXHJcbiAgICAgICAgcHJvamVjdFBhZ2UobmFtZSlcclxuICAgICAgKTtcclxuICAgICAgYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcclxuICAgIH1cclxuXHJcbiAgICBuZXdQcm9qZWN0LnByb2plY3ROYW1lUGFyYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgbGV0IHJlcGxhY2UgPSBET00ubWFpblBhZ2UuY2hpbGROb2Rlc1szXTtcclxuXHJcbiAgICAgIGxldCByZXBsYWNlUGFnZSA9IG5ld1Byb2plY3QuY3JlYXRlUGFnZShuYW1lKTtcclxuICAgICAgbGV0IHRhc2tzID0gbmV3UHJvamVjdC50YXNrcztcclxuXHJcbiAgICAgIHJlcGxhY2UucmVwbGFjZVdpdGgocmVwbGFjZVBhZ2UpO1xyXG5cclxuICAgICAgdGFza3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIHJlcGxhY2VQYWdlLmFwcGVuZENoaWxkKGl0ZW0uY3JlYXRlUGFnZSgpKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBET00ucGFnZVRpdGxlLnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgIH0pO1xyXG5cclxuICAgIHByb2plY3REZWxldGUocHJvamVjdERlbGV0ZUJ1dHRvbik7XHJcbiAgfSxcclxuXHJcbiAgcHJvamVjdENhbmNlbDogZnVuY3Rpb24gKG5ld1Rhc2tEaXYpIHtcclxuICAgIG5ld1Rhc2tEaXYucmVtb3ZlKCk7XHJcbiAgfSxcclxuXHJcbiAgbGlzdGVuZXI6IGZ1bmN0aW9uIChcclxuICAgIHRhc2tBZGRCdXR0b24sXHJcbiAgICB0YXNrQ2FuY2VsQnV0dG9uLFxyXG4gICAgbmV3VGFza0ZpZWxkLFxyXG4gICAgbmV3VGFza0RpdlxyXG4gICkge1xyXG4gICAgdGFza0FkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgbGV0IHByb2plY3ROYW1lID0gbmV3VGFza0ZpZWxkLnZhbHVlO1xyXG4gICAgICB0aGlzLnByb2plY3RBZGQocHJvamVjdE5hbWUpO1xyXG4gICAgICBuZXdUYXNrRmllbGQudmFsdWUgPSAnJztcclxuICAgIH0pO1xyXG4gICAgdGFza0NhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdGhpcy5wcm9qZWN0Q2FuY2VsKG5ld1Rhc2tEaXYpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QoKSB7XHJcbiAgY29uc3QgbmV3VGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG5ld1Rhc2tEaXYuY2xhc3NMaXN0LmFkZCgnbmV3LXRhc2stZmllbGQnKTtcclxuXHJcbiAgY29uc3QgbmV3VGFza0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBuZXdUYXNrRmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICBuZXdUYXNrRmllbGQuY2xhc3NMaXN0LmFkZCgnbmV3LXRhc2staW5wdXQnKTtcclxuXHJcbiAgY29uc3QgbmV3VGFza0J1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBuZXdUYXNrQnV0dG9ucy5jbGFzc0xpc3QuYWRkKCduZXctdGFzay1idXR0b25zLWNvbnRhaW5lcicpO1xyXG5cclxuICBjb25zdCB0YXNrQWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgdGFza0FkZEJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQnO1xyXG4gIHRhc2tBZGRCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmV3LXRhc2stYnV0dG9uLWFkZCcpO1xyXG5cclxuICBjb25zdCB0YXNrQ2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgdGFza0NhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xyXG4gIHRhc2tDYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmV3LXRhc2stYnV0dG9uLWNhbmNlbCcpO1xyXG5cclxuICBuZXdUYXNrQnV0dG9ucy5hcHBlbmRDaGlsZCh0YXNrQWRkQnV0dG9uKTtcclxuICBuZXdUYXNrQnV0dG9ucy5hcHBlbmRDaGlsZCh0YXNrQ2FuY2VsQnV0dG9uKTtcclxuICBuZXdUYXNrRGl2LmFwcGVuZENoaWxkKG5ld1Rhc2tGaWVsZCk7XHJcbiAgbmV3VGFza0Rpdi5hcHBlbmRDaGlsZChuZXdUYXNrQnV0dG9ucyk7XHJcbiAgRE9NLnByb2plY3RDb250YWluZXIuaW5zZXJ0QmVmb3JlKFxyXG4gICAgbmV3VGFza0RpdixcclxuICAgIERPTS5wcm9qZWN0Q29udGFpbmVyLmNoaWxkcmVuWzJdXHJcbiAgKTtcclxuXHJcbiAgcHJvamVjdC5saXN0ZW5lcihcclxuICAgIHRhc2tBZGRCdXR0b24sXHJcbiAgICB0YXNrQ2FuY2VsQnV0dG9uLFxyXG4gICAgbmV3VGFza0ZpZWxkLFxyXG4gICAgbmV3VGFza0RpdlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgY3JlYXRlTmV3UHJvamVjdCxcclxuICBwcm9qZWN0LFxyXG4gIHByb2plY3RzLFxyXG4gIHRvRG9zLFxyXG4gIHRvRG9Db250YWluZXIsXHJcbiAgcHJvamVjdHNEYXRhLFxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcclxuICBjb25zdHJ1Y3RvcihuYW1lLCBwcm9qZWN0TmFtZVBhcmEsIHByb2plY3RQYWdlLCB0YXNrcyA9IFtdKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5wcm9qZWN0TmFtZVBhcmEgPSBwcm9qZWN0TmFtZVBhcmE7XHJcbiAgICB0aGlzLnByb2plY3RQYWdlID0gcHJvamVjdFBhZ2U7XHJcbiAgICB0aGlzLnRhc2tzID0gdGFza3M7XHJcbiAgfVxyXG5cclxuICBhZGRUYXNrKHRhc2spIHtcclxuICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcclxuICB9XHJcblxyXG4gIC8vIHJlbW92ZVRhc2sodGFzaykge1xyXG4gIC8vICAgdGhpcy50YXNrcy5zcGxpY2UodGhpcy50YXNrcy5pbmRleE9mKHRhc2sudG9Eb0NvbnRhaW5lciksIDEpO1xyXG4gIC8vIH1cclxuXHJcbiAgY3JlYXRlUGFnZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnByb2plY3RQYWdlO1xyXG4gIH1cclxuXHJcbiAgZ2V0TmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VOYW1lKG5hbWUpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyB0b0RvQ29ucyB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCB0b0RvQ29udGFpbmVyLCBmaW5pc2hlZCkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcclxuICAgIHRoaXMudG9Eb0NvbnRhaW5lciA9IHRvRG9Db250YWluZXI7XHJcbiAgICB0aGlzLmZpbmlzaGVkID0gZmluaXNoZWQ7XHJcbiAgICB0aGlzLnVpbnQzMiA9IHRoaXMuZ2V0VW5pcXVlS2V5KCk7XHJcbiAgfVxyXG5cclxuICBnZXRVbmlxdWVLZXkoKSB7XHJcbiAgICBjb25zdCB1aW50MzIgPSB3aW5kb3cuY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhcclxuICAgICAgbmV3IFVpbnQzMkFycmF5KDEpXHJcbiAgICApWzBdO1xyXG4gICAgcmV0dXJuIHVpbnQzMi50b1N0cmluZygxNik7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VGaW5pc2hlZFN0YXR1cyhmaW5pc2hlZCkge1xyXG4gICAgdGhpcy5maW5pc2hlZCA9IGZpbmlzaGVkO1xyXG4gICAgcmV0dXJuIHRoaXMuZmluaXNoZWQ7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVQYWdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9Eb0NvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIGNoYW5nZU5hbWUodGl0bGUpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHJldHVybiB0aGlzLnRpdGxlO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlRGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlRGF0ZShkYXRlKSB7XHJcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0ZTtcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hcHAuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=