import { DOM } from './functions/DOM';
import { changeTitleImportant } from './pages/importantPage';
import { changeTitleTasks } from './pages/allTasksPage';
import { changeTitleToday } from './pages/todayPage';
import { createNewProject } from './functions/projectCreate';

let page = {
  changePage: function (buttonText) {
    if (buttonText === 'Important') {
      changeTitleImportant(DOM.pageTitle);
    } else if (buttonText === 'All Tasks') {
      changeTitleTasks(DOM.pageTitle);
    } else {
      changeTitleToday(DOM.pageTitle);
    }
  },

  selectedProject: function () {
    const allProjects = DOM.projectButtons;
    console.log(allProjects);
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
