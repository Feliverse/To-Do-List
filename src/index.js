import './style.css';

const tasks = [
  {
    index: 0,
    completed: false,
    description: 'review this project',
  },
  {
    index: 1,
    completed: true,
    description: 'aprobe this project',
  },
];

const printTodoList = () => {
  const listContainer = document.querySelector('.todo-list');
  tasks.forEach((todo) => {
    listContainer.innerHTML += `<li>
    <div class="taskCont">
      <input type="checkbox">
      <div class="task">${todo.description}</div>
    </div>
    <div class="icon">&#8942</div>
  </li>
`;
  });
};
printTodoList();
