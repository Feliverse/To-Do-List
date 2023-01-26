import './style.css';
import Todo from './modules/todoList.js';
import Completed from './modules/completed.js';

const todoClass = new Todo();
const completed = new Completed();

const addButton = document.querySelector('.addList');
const clearButton = document.querySelector('.clear');

addButton.addEventListener('click', (event) => {
  event.preventDefault();
  const inputValue = document.querySelector('.listInput').value;
  if (inputValue !== '') todoClass.addList();
});

clearButton.addEventListener('click', () => {
  completed.clearCompleted();
});

todoClass.showList();