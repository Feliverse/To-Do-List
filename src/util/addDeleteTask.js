import { fillStorage, storage } from '../test/__mocks__/fakelocalstorage.js';

export default class Todo {
  todoListCollection = [];

  constructor() {
    this.todoListCollection = [];
    fillStorage();
  }

  setList = (list) => {
    this.todoListCollection = list;
    return this.todoListCollection;
  }

  getLists = () => this.todoListCollection;

  addList = (description, completed, index) => {
    const newList = {
      description,
      completed,
      index,
    };
    this.todoListCollection.push(newList);
    storage.push(newList);
    localStorage.setItem('localStorageTodo', JSON.stringify(this.todoListCollection));
    const li = document.createElement('li');
    li.textContent = `${this.todoListCollection[this.todoListCollection.length - 1].description}`;
    return li;
  }

  deleteList = (index) => {
    const result = this.todoListCollection.filter((list, i) => i !== index);
    this.todoListCollection = result;
  }
}
