import './style.css';
import { DOM } from './functions/DOM';
import {
  createNewProject,
  project,
  toDos,
} from './functions/projectCreate';

const importedProjects = JSON.parse(
  localStorage.getItem('projectsData')
);

window.addEventListener('load', (e) => {
  const projectAddFunc = (name, taskArray) =>
    project.projectAdd(name, taskArray);
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
  DOM.pageTitle.textContent = 'All Tasks';

  let mainPage = DOM.mainPage.children[1];

  const allTasksPageContent = document.createElement('div');
  allTasksPageContent.classList.add('all-tasks-page-container');

  let cloneToDos = toDos.slice();

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

export { allTasksPage };
