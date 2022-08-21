/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
Object(function webpackMissingModule() { var e = new Error("Cannot find module './DOM'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/functions/projects.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ "./src/functions/render.js");




let projects = [];

let project = {
  projectAdd: function (projectName) {
    if (projectName === '') {
      alert('Project should have a name!');
      return;
    }
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project-container');

    const projectNamePara = document.createElement('button');
    projectNamePara.classList.add('project-button');
    projectNamePara.textContent = projectName;

    projectDiv.appendChild(projectNamePara);
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './DOM'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(projectDiv);

    let title = projectNamePara.textContent;

    let newProject = new _projects__WEBPACK_IMPORTED_MODULE_1__["default"](title, projectNamePara);
    // newProject.projectNamePara.addEventListener('click', () => {
    //   // DOM.mainPage.appendChild(newProject.getPage());
    // });

    projects.push(newProject);
    console.log(projects);
    (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderPage)(newProject);
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
  Object(function webpackMissingModule() { var e = new Error("Cannot find module './DOM'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(
    newTaskDiv,
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './DOM'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
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
Object(function webpackMissingModule() { var e = new Error("Cannot find module './DOM'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


class Project {
  constructor(name, projectNamePara, todoList = []) {
    this.name = name;
    this.todoList = todoList;
    this.projectNamePara = projectNamePara;
  }

  getName() {
    return this.name;
  }

  changeName(name) {
    this.name = name;
    return this.name;
  }

  getPage() {
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
    // DOM.mainPage.appendChild(mainToDoPage);
  }
}


/***/ }),

/***/ "./src/functions/render.js":
/*!*********************************!*\
  !*** ./src/functions/render.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderPage": () => (/* binding */ renderPage)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module './DOM'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _projectCreate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectCreate */ "./src/functions/projectCreate.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ "./src/functions/projects.js");




const renderPage = (newProject) => {
  //   if (document.querySelector('.main-todo-container')) {
  //     document
  //       .querySelector('.main-todo-container')
  //       .replaceWith(newProject.getPage());
  //   } else {
  //     newProject.getPage();
  //   }

  newProject.projectNamePara.addEventListener('click', () => {
    document
      .querySelector('.main-todo-container')
      .replaceWith(newProject.getPage());
  });
};




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
Object(function webpackMissingModule() { var e = new Error("Cannot find module './functions/DOM'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './pages/importantPage'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './pages/allTasksPage'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './pages/todayPage'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _functions_projectCreate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/projectCreate */ "./src/functions/projectCreate.js");






let page = {
  changePage: function (buttonText) {
    if (buttonText === 'Important') {
      Object(function webpackMissingModule() { var e = new Error("Cannot find module './pages/importantPage'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module './functions/DOM'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
    } else if (buttonText === 'All Tasks') {
      Object(function webpackMissingModule() { var e = new Error("Cannot find module './pages/allTasksPage'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module './functions/DOM'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
    } else {
      Object(function webpackMissingModule() { var e = new Error("Cannot find module './pages/todayPage'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module './functions/DOM'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
    }
  },

  selectedProject: function () {
    const allProjects = Object(function webpackMissingModule() { var e = new Error("Cannot find module './functions/DOM'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
    console.log(allProjects);
  },

  bindEvents: function () {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './functions/DOM'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())((button) => {
      button.addEventListener('click', () => {
        let buttonText = button.textContent;
        this.changePage(buttonText);
      });
    });
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './functions/DOM'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('click', () => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ0s7QUFDSztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvSUFBZ0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGlEQUFPO0FBQ2hDO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtREFBVTtBQUNkLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0lBQWlDO0FBQ25DO0FBQ0EsSUFBSSxvSUFBZ0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDK0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRm5CO0FBQzVCO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkM0QjtBQUNlO0FBQ047QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDc0I7Ozs7Ozs7VUNwQnRCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTnNDO0FBQ3VCO0FBQ0w7QUFDSDtBQUNRO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxvSkFBb0IsQ0FBQyw4SUFBYTtBQUN4QyxNQUFNO0FBQ04sTUFBTSxtSkFBZ0IsQ0FBQyw4SUFBYTtBQUNwQyxNQUFNO0FBQ04sTUFBTSxnSkFBZ0IsQ0FBQyw4SUFBYTtBQUNwQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0Esd0JBQXdCLDhJQUFrQjtBQUMxQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBSSw4SUFBdUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxJQUFJLDhJQUFxQztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMEVBQWdCO0FBQ3RCLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZnVuY3Rpb25zL3Byb2plY3RDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZnVuY3Rpb25zL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Z1bmN0aW9ucy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9NIH0gZnJvbSAnLi9ET00nO1xyXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3RzJztcclxuaW1wb3J0IHsgcmVuZGVyUGFnZSB9IGZyb20gJy4vcmVuZGVyJztcclxuXHJcbmxldCBwcm9qZWN0cyA9IFtdO1xyXG5cclxubGV0IHByb2plY3QgPSB7XHJcbiAgcHJvamVjdEFkZDogZnVuY3Rpb24gKHByb2plY3ROYW1lKSB7XHJcbiAgICBpZiAocHJvamVjdE5hbWUgPT09ICcnKSB7XHJcbiAgICAgIGFsZXJ0KCdQcm9qZWN0IHNob3VsZCBoYXZlIGEgbmFtZSEnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNvbnRhaW5lcicpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3ROYW1lUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgcHJvamVjdE5hbWVQYXJhLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYnV0dG9uJyk7XHJcbiAgICBwcm9qZWN0TmFtZVBhcmEudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcclxuXHJcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3ROYW1lUGFyYSk7XHJcbiAgICBET00ucHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcclxuXHJcbiAgICBsZXQgdGl0bGUgPSBwcm9qZWN0TmFtZVBhcmEudGV4dENvbnRlbnQ7XHJcblxyXG4gICAgbGV0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdCh0aXRsZSwgcHJvamVjdE5hbWVQYXJhKTtcclxuICAgIC8vIG5ld1Byb2plY3QucHJvamVjdE5hbWVQYXJhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgLy8gICAvLyBET00ubWFpblBhZ2UuYXBwZW5kQ2hpbGQobmV3UHJvamVjdC5nZXRQYWdlKCkpO1xyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcclxuICAgIHJlbmRlclBhZ2UobmV3UHJvamVjdCk7XHJcbiAgfSxcclxuXHJcbiAgcHJvamVjdENhbmNlbDogZnVuY3Rpb24gKG5ld1Rhc2tEaXYpIHtcclxuICAgIG5ld1Rhc2tEaXYucmVtb3ZlKCk7XHJcbiAgfSxcclxuXHJcbiAgbGlzdGVuZXI6IGZ1bmN0aW9uIChcclxuICAgIHRhc2tBZGRCdXR0b24sXHJcbiAgICB0YXNrQ2FuY2VsQnV0dG9uLFxyXG4gICAgbmV3VGFza0ZpZWxkLFxyXG4gICAgbmV3VGFza0RpdlxyXG4gICkge1xyXG4gICAgdGFza0FkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgbGV0IHByb2plY3ROYW1lID0gbmV3VGFza0ZpZWxkLnZhbHVlO1xyXG4gICAgICB0aGlzLnByb2plY3RBZGQocHJvamVjdE5hbWUpO1xyXG4gICAgICBuZXdUYXNrRmllbGQudmFsdWUgPSAnJztcclxuICAgIH0pO1xyXG4gICAgdGFza0NhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdGhpcy5wcm9qZWN0Q2FuY2VsKG5ld1Rhc2tEaXYpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QoKSB7XHJcbiAgY29uc3QgbmV3VGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG5ld1Rhc2tEaXYuY2xhc3NMaXN0LmFkZCgnbmV3LXRhc2stZmllbGQnKTtcclxuXHJcbiAgY29uc3QgbmV3VGFza0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBuZXdUYXNrRmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICBuZXdUYXNrRmllbGQuY2xhc3NMaXN0LmFkZCgnbmV3LXRhc2staW5wdXQnKTtcclxuXHJcbiAgY29uc3QgbmV3VGFza0J1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBuZXdUYXNrQnV0dG9ucy5jbGFzc0xpc3QuYWRkKCduZXctdGFzay1idXR0b25zLWNvbnRhaW5lcicpO1xyXG5cclxuICBjb25zdCB0YXNrQWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgdGFza0FkZEJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQnO1xyXG4gIHRhc2tBZGRCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmV3LXRhc2stYnV0dG9uLWFkZCcpO1xyXG5cclxuICBjb25zdCB0YXNrQ2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgdGFza0NhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xyXG4gIHRhc2tDYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmV3LXRhc2stYnV0dG9uLWNhbmNlbCcpO1xyXG5cclxuICBuZXdUYXNrQnV0dG9ucy5hcHBlbmRDaGlsZCh0YXNrQWRkQnV0dG9uKTtcclxuICBuZXdUYXNrQnV0dG9ucy5hcHBlbmRDaGlsZCh0YXNrQ2FuY2VsQnV0dG9uKTtcclxuICBuZXdUYXNrRGl2LmFwcGVuZENoaWxkKG5ld1Rhc2tGaWVsZCk7XHJcbiAgbmV3VGFza0Rpdi5hcHBlbmRDaGlsZChuZXdUYXNrQnV0dG9ucyk7XHJcbiAgRE9NLnByb2plY3RDb250YWluZXIuaW5zZXJ0QmVmb3JlKFxyXG4gICAgbmV3VGFza0RpdixcclxuICAgIERPTS5wcm9qZWN0Q29udGFpbmVyLmNoaWxkcmVuWzJdXHJcbiAgKTtcclxuXHJcbiAgcHJvamVjdC5saXN0ZW5lcihcclxuICAgIHRhc2tBZGRCdXR0b24sXHJcbiAgICB0YXNrQ2FuY2VsQnV0dG9uLFxyXG4gICAgbmV3VGFza0ZpZWxkLFxyXG4gICAgbmV3VGFza0RpdlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZU5ld1Byb2plY3QsIHByb2plY3QsIHByb2plY3RzIH07XHJcbiIsImltcG9ydCB7IERPTSB9IGZyb20gJy4vRE9NJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUsIHByb2plY3ROYW1lUGFyYSwgdG9kb0xpc3QgPSBbXSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMudG9kb0xpc3QgPSB0b2RvTGlzdDtcclxuICAgIHRoaXMucHJvamVjdE5hbWVQYXJhID0gcHJvamVjdE5hbWVQYXJhO1xyXG4gIH1cclxuXHJcbiAgZ2V0TmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VOYW1lKG5hbWUpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGFnZSgpIHtcclxuICAgIGNvbnN0IG1haW5Ub0RvUGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWFpblRvRG9QYWdlLmNsYXNzTGlzdC5hZGQoJ21haW4tdG9kby1jb250YWluZXInKTtcclxuXHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAndGVzdCc7XHJcblxyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCBwYXJhVGVzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgcGFyYVRlc3QuaW5uZXJIVE1MID0gJ1RoaXMgaXMgYSB0ZXN0JztcclxuICAgICAgbWFpblRvRG9QYWdlLmFwcGVuZENoaWxkKHBhcmFUZXN0KTtcclxuICAgIH0pO1xyXG5cclxuICAgIG1haW5Ub0RvUGFnZS5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgcmV0dXJuIG1haW5Ub0RvUGFnZTtcclxuICAgIC8vIERPTS5tYWluUGFnZS5hcHBlbmRDaGlsZChtYWluVG9Eb1BhZ2UpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBET00gfSBmcm9tICcuL0RPTSc7XHJcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSAnLi9wcm9qZWN0Q3JlYXRlJztcclxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vcHJvamVjdHMnO1xyXG5cclxuY29uc3QgcmVuZGVyUGFnZSA9IChuZXdQcm9qZWN0KSA9PiB7XHJcbiAgLy8gICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tdG9kby1jb250YWluZXInKSkge1xyXG4gIC8vICAgICBkb2N1bWVudFxyXG4gIC8vICAgICAgIC5xdWVyeVNlbGVjdG9yKCcubWFpbi10b2RvLWNvbnRhaW5lcicpXHJcbiAgLy8gICAgICAgLnJlcGxhY2VXaXRoKG5ld1Byb2plY3QuZ2V0UGFnZSgpKTtcclxuICAvLyAgIH0gZWxzZSB7XHJcbiAgLy8gICAgIG5ld1Byb2plY3QuZ2V0UGFnZSgpO1xyXG4gIC8vICAgfVxyXG5cclxuICBuZXdQcm9qZWN0LnByb2plY3ROYW1lUGFyYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcubWFpbi10b2RvLWNvbnRhaW5lcicpXHJcbiAgICAgIC5yZXBsYWNlV2l0aChuZXdQcm9qZWN0LmdldFBhZ2UoKSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgeyByZW5kZXJQYWdlIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgRE9NIH0gZnJvbSAnLi9mdW5jdGlvbnMvRE9NJztcclxuaW1wb3J0IHsgY2hhbmdlVGl0bGVJbXBvcnRhbnQgfSBmcm9tICcuL3BhZ2VzL2ltcG9ydGFudFBhZ2UnO1xyXG5pbXBvcnQgeyBjaGFuZ2VUaXRsZVRhc2tzIH0gZnJvbSAnLi9wYWdlcy9hbGxUYXNrc1BhZ2UnO1xyXG5pbXBvcnQgeyBjaGFuZ2VUaXRsZVRvZGF5IH0gZnJvbSAnLi9wYWdlcy90b2RheVBhZ2UnO1xyXG5pbXBvcnQgeyBjcmVhdGVOZXdQcm9qZWN0IH0gZnJvbSAnLi9mdW5jdGlvbnMvcHJvamVjdENyZWF0ZSc7XHJcblxyXG5sZXQgcGFnZSA9IHtcclxuICBjaGFuZ2VQYWdlOiBmdW5jdGlvbiAoYnV0dG9uVGV4dCkge1xyXG4gICAgaWYgKGJ1dHRvblRleHQgPT09ICdJbXBvcnRhbnQnKSB7XHJcbiAgICAgIGNoYW5nZVRpdGxlSW1wb3J0YW50KERPTS5wYWdlVGl0bGUpO1xyXG4gICAgfSBlbHNlIGlmIChidXR0b25UZXh0ID09PSAnQWxsIFRhc2tzJykge1xyXG4gICAgICBjaGFuZ2VUaXRsZVRhc2tzKERPTS5wYWdlVGl0bGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2hhbmdlVGl0bGVUb2RheShET00ucGFnZVRpdGxlKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBzZWxlY3RlZFByb2plY3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGFsbFByb2plY3RzID0gRE9NLnByb2plY3RCdXR0b25zO1xyXG4gICAgY29uc29sZS5sb2coYWxsUHJvamVjdHMpO1xyXG4gIH0sXHJcblxyXG4gIGJpbmRFdmVudHM6IGZ1bmN0aW9uICgpIHtcclxuICAgIERPTS5zaWRlQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGxldCBidXR0b25UZXh0ID0gYnV0dG9uLnRleHRDb250ZW50O1xyXG4gICAgICAgIHRoaXMuY2hhbmdlUGFnZShidXR0b25UZXh0KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIERPTS5hZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrLWZpZWxkJykpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2staW5wdXQnKS5mb2N1cygpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjcmVhdGVOZXdQcm9qZWN0KCk7XHJcbiAgICB9KTtcclxuICB9LFxyXG59O1xyXG5cclxucGFnZS5iaW5kRXZlbnRzKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==