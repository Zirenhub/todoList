import './style.css';
import { DOM } from './functions/DOM';
import { createNewProject } from './functions/projectCreate';

let allTasksPage = () => {
  if (DOM.pageTitle.textContent === 'All Tasks') {
    return;
  }
  let mainPage = document.querySelector('.main-todo-container');

  DOM.pageTitle.textContent = 'All Tasks';

  const allTasksPageContent = document.createElement('div');
  allTasksPageContent.classList.add('all-tasks-page-container');

  mainPage.replaceWith(allTasksPageContent);
};

let page = {
  changePage: function (buttonText) {
    if (buttonText === 'Important') {
      // TODO
    } else if (buttonText === 'All Tasks') {
      allTasksPage();
    } else {
      changeTitleToday(DOM.pageTitle);
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
