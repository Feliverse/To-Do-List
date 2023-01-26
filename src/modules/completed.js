import Todo from './todoList.js';

export default class Completed {
    clearCompleted = () => {
      const todo = new Todo();
      const listCollection = JSON.parse(localStorage.getItem('Lists'));
      const listUpdated = listCollection
        .filter((list) => !list.completed)
        .map((list, index) => ({
          ...list,
          index: index + 1,
        }));
      localStorage.setItem('Lists', JSON.stringify(listUpdated));
      todo.showList();
    };
}