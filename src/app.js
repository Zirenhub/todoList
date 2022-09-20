import './style.css';
import { DOM } from './functions/DOM';
import { createNewProject, project, toDos } from './functions/projectCreate';

const importedProjects = JSON.parse(localStorage.getItem('projectsData'));

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

let todayPage = () => {
  DOM.pageTitle.textContent = 'Today';

  let mainPage = DOM.mainPage.children[1];

  const todayPageContent = document.createElement('div');
  todayPageContent.classList.add('today-page-container');

  let cloneToDos = toDos.slice();

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
