import { DOM } from './DOM';

let buttonListener = {
  addButton: document.querySelector('.new-task-button-add'),
  cancelButton: document.querySelector('.new-task-button-cancel'),

  listener: function () {
    this.addButton.addEventListener('click', () => {
      console.log('TODO ADD');
    });
    this.cancelButton.addEventListener('click', () => {
      console.log('TODO CANCEL');
    });
  },
};

export function createNewProject() {
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
  DOM.projectContainer.appendChild(newTaskDiv);

  buttonListener.listener();
}
