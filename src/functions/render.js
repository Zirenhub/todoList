import { DOM } from './DOM';
import { projects } from './projectCreate';
import { Project } from './projects';

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

export { renderPage };
