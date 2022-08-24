export default class toDoCons {
  constructor(title, description, date, toDoContainer, finished) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.toDoContainer = toDoContainer;
    this.finished = finished;
    this.uint32 = this.getUniqueKey();
  }

  getUniqueKey() {
    const uint32 = window.crypto.getRandomValues(
      new Uint32Array(1)
    )[0];
    return uint32.toString(16);
  }

  changeFinishedStatus(finished) {
    this.finished = finished;
    return this.finished;
  }

  createPage() {
    return this.toDoContainer;
  }

  changeName(title) {
    this.title = title;
    return this.title;
  }

  changeDescription(description) {
    this.description = description;
    return this.description;
  }

  changeDate(date) {
    this.date = date;
    return this.date;
  }
}
