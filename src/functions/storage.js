import { projects } from './projectCreate';

class Storage {
  static saveProjects() {
    localStorage.setItem('projectsList', JSON.stringify(projects));
  }
}

export { Storage };
