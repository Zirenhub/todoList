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
  addProjectButton: document.querySelector('#addProjects'),
  projectContainer: document.querySelector('.side-projects'),
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


let buttonListener = {
  addButton: document.querySelector('.new-task-button-add'),
  cancelButton: document.querySelector('.new-task-button-cancel'),

  listener: function () {
    this.addButton.addEventListener('click', () => {
      console.log('TODO ADD');
    });
    this.cancelButton.addEventListener('click', () => {
      console.log('TODO CANCEL');
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
  _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.projectContainer.appendChild(newTaskDiv);

  buttonListener.listener();
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

  bindEvents: function () {
    _functions_DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.sideButtons.forEach((button) => {
      button.addEventListener('click', () => {
        let buttonText = button.textContent;
        this.changePage(buttonText);
      });
    });
    _functions_DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.addProjectButton.addEventListener('click', () => {
      (0,_functions_projectCreate__WEBPACK_IMPORTED_MODULE_4__.createNewProject)();
    });
  },
};

page.bindEvents();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTjRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGtFQUFnQztBQUNsQztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ3VDO0FBQ3ZDO0FBQ087QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDSnVDO0FBQ3ZDO0FBQ087QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDSnVDO0FBQ3ZDO0FBQ087QUFDUDtBQUNBOzs7Ozs7O1VDSkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOc0M7QUFDdUI7QUFDTDtBQUNIO0FBQ1E7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDBFQUFvQixDQUFDLHlEQUFhO0FBQ3hDLE1BQU07QUFDTixNQUFNLHFFQUFnQixDQUFDLHlEQUFhO0FBQ3BDLE1BQU07QUFDTixNQUFNLGtFQUFnQixDQUFDLHlEQUFhO0FBQ3BDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxJQUFJLG1FQUF1QjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLElBQUksaUZBQXFDO0FBQ3pDLE1BQU0sMEVBQWdCO0FBQ3RCLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZnVuY3Rpb25zL0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9mdW5jdGlvbnMvcHJvamVjdENyZWF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wYWdlcy9hbGxUYXNrc1BhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcGFnZXMvaW1wb3J0YW50UGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wYWdlcy90b2RheVBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGxldCBET00gPSB7XHJcbiAgc2lkZUJ1dHRvbnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlLWJ1dHRvbnMnKSxcclxuICBhZGRQcm9qZWN0QnV0dG9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkUHJvamVjdHMnKSxcclxuICBwcm9qZWN0Q29udGFpbmVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZS1wcm9qZWN0cycpLFxyXG4gIG1haW5QYWdlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MtY29udGFpbmVyJyksXHJcbiAgcGFnZVRpdGxlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFnZS10aXRsZScpLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBET00gfSBmcm9tICcuL0RPTSc7XHJcblxyXG5sZXQgYnV0dG9uTGlzdGVuZXIgPSB7XHJcbiAgYWRkQnV0dG9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2stYnV0dG9uLWFkZCcpLFxyXG4gIGNhbmNlbEJ1dHRvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrLWJ1dHRvbi1jYW5jZWwnKSxcclxuXHJcbiAgbGlzdGVuZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnVE9ETyBBREQnKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdUT0RPIENBTkNFTCcpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KCkge1xyXG4gIGNvbnN0IG5ld1Rhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBuZXdUYXNrRGl2LmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrLWZpZWxkJyk7XHJcblxyXG4gIGNvbnN0IG5ld1Rhc2tGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgbmV3VGFza0ZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgbmV3VGFza0ZpZWxkLmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrLWlucHV0Jyk7XHJcblxyXG4gIGNvbnN0IG5ld1Rhc2tCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbmV3VGFza0J1dHRvbnMuY2xhc3NMaXN0LmFkZCgnbmV3LXRhc2stYnV0dG9ucy1jb250YWluZXInKTtcclxuXHJcbiAgY29uc3QgdGFza0FkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHRhc2tBZGRCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkJztcclxuICB0YXNrQWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrLWJ1dHRvbi1hZGQnKTtcclxuXHJcbiAgY29uc3QgdGFza0NhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHRhc2tDYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcclxuICB0YXNrQ2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrLWJ1dHRvbi1jYW5jZWwnKTtcclxuXHJcbiAgbmV3VGFza0J1dHRvbnMuYXBwZW5kQ2hpbGQodGFza0FkZEJ1dHRvbik7XHJcbiAgbmV3VGFza0J1dHRvbnMuYXBwZW5kQ2hpbGQodGFza0NhbmNlbEJ1dHRvbik7XHJcbiAgbmV3VGFza0Rpdi5hcHBlbmRDaGlsZChuZXdUYXNrRmllbGQpO1xyXG4gIG5ld1Rhc2tEaXYuYXBwZW5kQ2hpbGQobmV3VGFza0J1dHRvbnMpO1xyXG4gIERPTS5wcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2tEaXYpO1xyXG5cclxuICBidXR0b25MaXN0ZW5lci5saXN0ZW5lcigpO1xyXG59XHJcbiIsImltcG9ydCB7IERPTSB9IGZyb20gJy4uL2Z1bmN0aW9ucy9ET00nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVRpdGxlVGFza3MocGFnZVRpdGxlKSB7XHJcbiAgcGFnZVRpdGxlLnRleHRDb250ZW50ID0gJ0FsbCBUYXNrcyc7XHJcbn1cclxuIiwiaW1wb3J0IHsgRE9NIH0gZnJvbSAnLi4vZnVuY3Rpb25zL0RPTSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVGl0bGVJbXBvcnRhbnQocGFnZVRpdGxlKSB7XHJcbiAgcGFnZVRpdGxlLnRleHRDb250ZW50ID0gJ0ltcG9ydGFudCc7XHJcbn1cclxuIiwiaW1wb3J0IHsgRE9NIH0gZnJvbSAnLi4vZnVuY3Rpb25zL0RPTSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVGl0bGVUb2RheShwYWdlVGl0bGUpIHtcclxuICBwYWdlVGl0bGUudGV4dENvbnRlbnQgPSAnVG9kYXknO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgRE9NIH0gZnJvbSAnLi9mdW5jdGlvbnMvRE9NJztcclxuaW1wb3J0IHsgY2hhbmdlVGl0bGVJbXBvcnRhbnQgfSBmcm9tICcuL3BhZ2VzL2ltcG9ydGFudFBhZ2UnO1xyXG5pbXBvcnQgeyBjaGFuZ2VUaXRsZVRhc2tzIH0gZnJvbSAnLi9wYWdlcy9hbGxUYXNrc1BhZ2UnO1xyXG5pbXBvcnQgeyBjaGFuZ2VUaXRsZVRvZGF5IH0gZnJvbSAnLi9wYWdlcy90b2RheVBhZ2UnO1xyXG5pbXBvcnQgeyBjcmVhdGVOZXdQcm9qZWN0IH0gZnJvbSAnLi9mdW5jdGlvbnMvcHJvamVjdENyZWF0ZSc7XHJcblxyXG5sZXQgcGFnZSA9IHtcclxuICBjaGFuZ2VQYWdlOiBmdW5jdGlvbiAoYnV0dG9uVGV4dCkge1xyXG4gICAgaWYgKGJ1dHRvblRleHQgPT09ICdJbXBvcnRhbnQnKSB7XHJcbiAgICAgIGNoYW5nZVRpdGxlSW1wb3J0YW50KERPTS5wYWdlVGl0bGUpO1xyXG4gICAgfSBlbHNlIGlmIChidXR0b25UZXh0ID09PSAnQWxsIFRhc2tzJykge1xyXG4gICAgICBjaGFuZ2VUaXRsZVRhc2tzKERPTS5wYWdlVGl0bGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2hhbmdlVGl0bGVUb2RheShET00ucGFnZVRpdGxlKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBiaW5kRXZlbnRzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICBET00uc2lkZUJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XHJcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsZXQgYnV0dG9uVGV4dCA9IGJ1dHRvbi50ZXh0Q29udGVudDtcclxuICAgICAgICB0aGlzLmNoYW5nZVBhZ2UoYnV0dG9uVGV4dCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBET00uYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY3JlYXRlTmV3UHJvamVjdCgpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxufTtcclxuXHJcbnBhZ2UuYmluZEV2ZW50cygpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=