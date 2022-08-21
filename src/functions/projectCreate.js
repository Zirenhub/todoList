import { DOM } from './DOM';
import Project from './projects';

let projects = [];

const projectPage = () => {
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
};

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
    DOM.projectContainer.appendChild(projectDiv);

    let title = projectNamePara.textContent;

    let newProject = new Project(
      title,
      projectNamePara,
      projectPage()
    );
    newProject.projectNamePara.addEventListener('click', () => {
      document
        .querySelector('.main-todo-container')
        .replaceWith(newProject.createPage());
    });

    projects.push(newProject);
    console.log(projects);
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
  DOM.projectContainer.insertBefore(
    newTaskDiv,
    DOM.projectContainer.children[2]
  );

  project.listener(
    taskAddButton,
    taskCancelButton,
    newTaskField,
    newTaskDiv
  );
}

export { createNewProject, project, projects };