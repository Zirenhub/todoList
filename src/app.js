import './style.css';
import { DOM } from './functions/DOM';
import {
  createNewProject,
  toDos,
  toDoContainer,
} from './functions/projectCreate';
import toDoCons from './functions/todos';

let allTasksPage = () => {
  if (DOM.pageTitle.textContent === 'All Tasks') {
    return;
  }
  DOM.pageTitle.textContent = 'All Tasks';
  let mainPage = document.querySelector('.main-todo-container');
  const allTasksPageContent = document.createElement('div');
  allTasksPageContent.classList.add('all-tasks-page-container');

  let cloneToDos = JSON.parse(JSON.stringify(toDos));

  cloneToDos.forEach((item) => {
    item = new toDoCons(
      item.title,
      item.description,
      item.date,
      toDoContainer
    );
    allTasksPageContent.appendChild(
      item.toDoContainer(item.title, item.description, item.date)
    );
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
    DOM.sideButtons.forEach((button) => {
      button.addEventListener('click', () => {
        let buttonText = button.textContent;
        this.changePage(buttonText);
      });
    });
    DOM.addProjectButton.addEventListener('click', () => {
      if (document.querySelector('.new-task-field')) {
        document.querySelector('.new-task-input').focus();
        return;
      }
      createNewProject();
    });
  },
};

page.bindEvents();
