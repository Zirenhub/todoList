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
/* harmony export */   "createNewProject": () => (/* binding */ createNewProject)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/functions/DOM.js");


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
    _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.projectContainer.appendChild(projectDiv);
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

/***/ "./src/pages/allTasksPage.js":
/*!***********************************!*\
  !*** ./src/pages/allTasksPage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeTitleTasks": () => (/* binding */ changeTitleTasks)
/* harmony export */ });
/* harmony import */ var _functions_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/DOM */ "./src/functions/DOM.js");


function changeTitleTasks(pageTitle) {
  pageTitle.textContent = 'All Tasks';
}


/***/ }),

/***/ "./src/pages/importantPage.js":
/*!************************************!*\
  !*** ./src/pages/importantPage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeTitleImportant": () => (/* binding */ changeTitleImportant)
/* harmony export */ });
/* harmony import */ var _functions_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/DOM */ "./src/functions/DOM.js");


function changeTitleImportant(pageTitle) {
  pageTitle.textContent = 'Important';
}


/***/ }),

/***/ "./src/pages/todayPage.js":
/*!********************************!*\
  !*** ./src/pages/todayPage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeTitleToday": () => (/* binding */ changeTitleToday)
/* harmony export */ });
/* harmony import */ var _functions_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/DOM */ "./src/functions/DOM.js");


function changeTitleToday(pageTitle) {
  pageTitle.textContent = 'Today';
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
/* harmony import */ var _pages_importantPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/importantPage */ "./src/pages/importantPage.js");
/* harmony import */ var _pages_allTasksPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/allTasksPage */ "./src/pages/allTasksPage.js");
/* harmony import */ var _pages_todayPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/todayPage */ "./src/pages/todayPage.js");
/* harmony import */ var _functions_projectCreate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/projectCreate */ "./src/functions/projectCreate.js");






let page = {
  changePage: function (buttonText) {
    if (buttonText === 'Important') {
      (0,_pages_importantPage__WEBPACK_IMPORTED_MODULE_1__.changeTitleImportant)(_functions_DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.pageTitle);
    } else if (buttonText === 'All Tasks') {
      (0,_pages_allTasksPage__WEBPACK_IMPORTED_MODULE_2__.changeTitleTasks)(_functions_DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.pageTitle);
    } else {
      (0,_pages_todayPage__WEBPACK_IMPORTED_MODULE_3__.changeTitleToday)(_functions_DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.pageTitle);
    }
  },

  selectedProject: function () {
    const allProjects = _functions_DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.projectButtons;
    console.log(allProjects);
  },

  bindEvents: function () {
    _functions_DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.sideButtons.forEach((button) => {
      button.addEventListener('click', () => {
        let buttonText = button.textContent;
        this.changePage(buttonText);
      });
    });
    _functions_DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.addProjectButton.addEventListener('click', () => {
      if (document.querySelector('.new-task-field')) {
        document.querySelector('.new-task-input').focus();
        return;
      }
      (0,_functions_projectCreate__WEBPACK_IMPORTED_MODULE_4__.createNewProject)();
    });
  },
};

page.bindEvents();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrRUFBZ0M7QUFDcEMsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbUVBQWlDO0FBQ25DO0FBQ0EsSUFBSSxrRUFBZ0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekV1QztBQUN2QztBQUNPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0p1QztBQUN2QztBQUNPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0p1QztBQUN2QztBQUNPO0FBQ1A7QUFDQTs7Ozs7OztVQ0pBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTnNDO0FBQ3VCO0FBQ0w7QUFDSDtBQUNRO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwwRUFBb0IsQ0FBQyx5REFBYTtBQUN4QyxNQUFNO0FBQ04sTUFBTSxxRUFBZ0IsQ0FBQyx5REFBYTtBQUNwQyxNQUFNO0FBQ04sTUFBTSxrRUFBZ0IsQ0FBQyx5REFBYTtBQUNwQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0Esd0JBQXdCLDhEQUFrQjtBQUMxQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBSSxtRUFBdUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxJQUFJLGlGQUFxQztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMEVBQWdCO0FBQ3RCLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZnVuY3Rpb25zL0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9mdW5jdGlvbnMvcHJvamVjdENyZWF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wYWdlcy9hbGxUYXNrc1BhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcGFnZXMvaW1wb3J0YW50UGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wYWdlcy90b2RheVBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGxldCBET00gPSB7XHJcbiAgc2lkZUJ1dHRvbnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlLWJ1dHRvbnMnKSxcclxuICBwcm9qZWN0Q29udGFpbmVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZS1wcm9qZWN0cycpLFxyXG4gIGFkZFByb2plY3RCdXR0b246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRQcm9qZWN0cycpLFxyXG4gIHByb2plY3RCdXR0b25zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1idXR0b24nKSxcclxuICBtYWluUGFnZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzLWNvbnRhaW5lcicpLFxyXG4gIHBhZ2VUaXRsZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhZ2UtdGl0bGUnKSxcclxufTtcclxuIiwiaW1wb3J0IHsgRE9NIH0gZnJvbSAnLi9ET00nO1xyXG5cclxubGV0IHByb2plY3QgPSB7XHJcbiAgcHJvamVjdEFkZDogZnVuY3Rpb24gKHByb2plY3ROYW1lKSB7XHJcbiAgICBpZiAocHJvamVjdE5hbWUgPT09ICcnKSB7XHJcbiAgICAgIGFsZXJ0KCdQcm9qZWN0IHNob3VsZCBoYXZlIGEgbmFtZSEnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNvbnRhaW5lcicpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3ROYW1lUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgcHJvamVjdE5hbWVQYXJhLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYnV0dG9uJyk7XHJcbiAgICBwcm9qZWN0TmFtZVBhcmEudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcclxuXHJcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3ROYW1lUGFyYSk7XHJcbiAgICBET00ucHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcclxuICB9LFxyXG5cclxuICBwcm9qZWN0Q2FuY2VsOiBmdW5jdGlvbiAobmV3VGFza0Rpdikge1xyXG4gICAgbmV3VGFza0Rpdi5yZW1vdmUoKTtcclxuICB9LFxyXG5cclxuICBsaXN0ZW5lcjogZnVuY3Rpb24gKFxyXG4gICAgdGFza0FkZEJ1dHRvbixcclxuICAgIHRhc2tDYW5jZWxCdXR0b24sXHJcbiAgICBuZXdUYXNrRmllbGQsXHJcbiAgICBuZXdUYXNrRGl2XHJcbiAgKSB7XHJcbiAgICB0YXNrQWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBsZXQgcHJvamVjdE5hbWUgPSBuZXdUYXNrRmllbGQudmFsdWU7XHJcbiAgICAgIHRoaXMucHJvamVjdEFkZChwcm9qZWN0TmFtZSk7XHJcbiAgICB9KTtcclxuICAgIHRhc2tDYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvamVjdENhbmNlbChuZXdUYXNrRGl2KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdCgpIHtcclxuICBjb25zdCBuZXdUYXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbmV3VGFza0Rpdi5jbGFzc0xpc3QuYWRkKCduZXctdGFzay1maWVsZCcpO1xyXG5cclxuICBjb25zdCBuZXdUYXNrRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIG5ld1Rhc2tGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gIG5ld1Rhc2tGaWVsZC5jbGFzc0xpc3QuYWRkKCduZXctdGFzay1pbnB1dCcpO1xyXG5cclxuICBjb25zdCBuZXdUYXNrQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG5ld1Rhc2tCdXR0b25zLmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrLWJ1dHRvbnMtY29udGFpbmVyJyk7XHJcblxyXG4gIGNvbnN0IHRhc2tBZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICB0YXNrQWRkQnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCc7XHJcbiAgdGFza0FkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduZXctdGFzay1idXR0b24tYWRkJyk7XHJcblxyXG4gIGNvbnN0IHRhc2tDYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICB0YXNrQ2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XHJcbiAgdGFza0NhbmNlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduZXctdGFzay1idXR0b24tY2FuY2VsJyk7XHJcblxyXG4gIG5ld1Rhc2tCdXR0b25zLmFwcGVuZENoaWxkKHRhc2tBZGRCdXR0b24pO1xyXG4gIG5ld1Rhc2tCdXR0b25zLmFwcGVuZENoaWxkKHRhc2tDYW5jZWxCdXR0b24pO1xyXG4gIG5ld1Rhc2tEaXYuYXBwZW5kQ2hpbGQobmV3VGFza0ZpZWxkKTtcclxuICBuZXdUYXNrRGl2LmFwcGVuZENoaWxkKG5ld1Rhc2tCdXR0b25zKTtcclxuICBET00ucHJvamVjdENvbnRhaW5lci5pbnNlcnRCZWZvcmUoXHJcbiAgICBuZXdUYXNrRGl2LFxyXG4gICAgRE9NLnByb2plY3RDb250YWluZXIuY2hpbGRyZW5bMl1cclxuICApO1xyXG5cclxuICBwcm9qZWN0Lmxpc3RlbmVyKFxyXG4gICAgdGFza0FkZEJ1dHRvbixcclxuICAgIHRhc2tDYW5jZWxCdXR0b24sXHJcbiAgICBuZXdUYXNrRmllbGQsXHJcbiAgICBuZXdUYXNrRGl2XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBET00gfSBmcm9tICcuLi9mdW5jdGlvbnMvRE9NJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VUaXRsZVRhc2tzKHBhZ2VUaXRsZSkge1xyXG4gIHBhZ2VUaXRsZS50ZXh0Q29udGVudCA9ICdBbGwgVGFza3MnO1xyXG59XHJcbiIsImltcG9ydCB7IERPTSB9IGZyb20gJy4uL2Z1bmN0aW9ucy9ET00nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVRpdGxlSW1wb3J0YW50KHBhZ2VUaXRsZSkge1xyXG4gIHBhZ2VUaXRsZS50ZXh0Q29udGVudCA9ICdJbXBvcnRhbnQnO1xyXG59XHJcbiIsImltcG9ydCB7IERPTSB9IGZyb20gJy4uL2Z1bmN0aW9ucy9ET00nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVRpdGxlVG9kYXkocGFnZVRpdGxlKSB7XHJcbiAgcGFnZVRpdGxlLnRleHRDb250ZW50ID0gJ1RvZGF5JztcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IERPTSB9IGZyb20gJy4vZnVuY3Rpb25zL0RPTSc7XHJcbmltcG9ydCB7IGNoYW5nZVRpdGxlSW1wb3J0YW50IH0gZnJvbSAnLi9wYWdlcy9pbXBvcnRhbnRQYWdlJztcclxuaW1wb3J0IHsgY2hhbmdlVGl0bGVUYXNrcyB9IGZyb20gJy4vcGFnZXMvYWxsVGFza3NQYWdlJztcclxuaW1wb3J0IHsgY2hhbmdlVGl0bGVUb2RheSB9IGZyb20gJy4vcGFnZXMvdG9kYXlQYWdlJztcclxuaW1wb3J0IHsgY3JlYXRlTmV3UHJvamVjdCB9IGZyb20gJy4vZnVuY3Rpb25zL3Byb2plY3RDcmVhdGUnO1xyXG5cclxubGV0IHBhZ2UgPSB7XHJcbiAgY2hhbmdlUGFnZTogZnVuY3Rpb24gKGJ1dHRvblRleHQpIHtcclxuICAgIGlmIChidXR0b25UZXh0ID09PSAnSW1wb3J0YW50Jykge1xyXG4gICAgICBjaGFuZ2VUaXRsZUltcG9ydGFudChET00ucGFnZVRpdGxlKTtcclxuICAgIH0gZWxzZSBpZiAoYnV0dG9uVGV4dCA9PT0gJ0FsbCBUYXNrcycpIHtcclxuICAgICAgY2hhbmdlVGl0bGVUYXNrcyhET00ucGFnZVRpdGxlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNoYW5nZVRpdGxlVG9kYXkoRE9NLnBhZ2VUaXRsZSk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgc2VsZWN0ZWRQcm9qZWN0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBhbGxQcm9qZWN0cyA9IERPTS5wcm9qZWN0QnV0dG9ucztcclxuICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcclxuICB9LFxyXG5cclxuICBiaW5kRXZlbnRzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICBET00uc2lkZUJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XHJcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsZXQgYnV0dG9uVGV4dCA9IGJ1dHRvbi50ZXh0Q29udGVudDtcclxuICAgICAgICB0aGlzLmNoYW5nZVBhZ2UoYnV0dG9uVGV4dCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBET00uYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzay1maWVsZCcpKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrLWlucHV0JykuZm9jdXMoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgY3JlYXRlTmV3UHJvamVjdCgpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxufTtcclxuXHJcbnBhZ2UuYmluZEV2ZW50cygpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=