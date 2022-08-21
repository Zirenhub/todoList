import { DOM } from './DOM';

export default class Project {
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
