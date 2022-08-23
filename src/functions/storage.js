import { projects } from './projectCreate';
import { Project } from './projects';

class Storage {
  static saveProjects() {
    localStorage.setItem('projectsList', JSON.stringify(projects));
  }
}

export { Storage };
