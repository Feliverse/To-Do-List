import { fillStorage, storage, setStorage } from '../test/__mocks__/fakelocalstorage.js';

export default class Todo {
  todoListCollection = [];

  constructor() {
    this.todoListCollection = [
      {
        description: 'task 1',
        completed: false,
        index: 1,
      },
      {
        description: 'task 2',
        completed: false,
        index: 2,
      },
    ];
    fillStorage();
  }

 editList = (index, content) => {
   storage[index].description = content;
   this.todoListCollection[index].description = content;
   localStorage.setItem('localStorageTasks', JSON.stringify(this.todoListCollection));
 }

  showList = (index, state) => {
    storage[index].completed = state;
    this.todoListCollection[index].completed = state;
    localStorage.setItem('localStorageTasks', JSON.stringify(this.todoListCollection));
  }

  clearCompleted = (array) => {
    const result = this.todoListCollection.filter((list, index) => array.indexOf(index) === -1);
    this.todoListCollection = result;
    setStorage(result);
  }

  getTasks = () => this.todoListCollection;

  setTasks = (tasks) => {
    this.todoListCollection = tasks;
  }
}