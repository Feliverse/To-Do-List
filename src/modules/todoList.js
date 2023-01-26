import Status from './status.js';

export default class Todo {
  constructor() {
    this.todoListCollection = [];
  }

  #setList = (list) => {
    localStorage.setItem('Lists', JSON.stringify(list));
  };

  #getLists = () => {
    const lists = JSON.parse(localStorage.getItem('Lists'));
    if (lists) return lists;
    return [];
  };

  #updateTodolistStorage = (list) => {
    if (list === '') return this.#getLists();
    this.todoListCollection = this.#getLists();
    this.todoListCollection.push(list);
    return this.#setList(this.todoListCollection);
  };

  addList() {
    const newList = {
      description: document.querySelector('.listInput').value,
      completed: false,
      index: this.#getLists().length + 1,
    };
    this.#updateTodolistStorage(newList);
    this.showList();
    document.querySelector('.listInput').value = '';
  }

  deleteList = (listIndex) => {
    const listCollection = this.#getLists();
    const listUpdated = listCollection
      .filter((list, index) => index + 1 !== listIndex)
      .map((list) => {
        if (list.index > listIndex) {
          return {
            ...list,
            index: list.index - 1,
          };
        }
        return list;
      });
    this.#setList(listUpdated);
    this.showList();
  };

  editList = (listIndex) => {
    const listCollection = this.#getLists();
    const { description } = listCollection[listIndex - 1];
    const editForm = document.querySelector(`.c-${listIndex}`);
    editForm.innerHTML = `
        <form>
          <i class="fa-solid fa-edit"></i>
          <input class="editInput" type="text" value="${description}"/>
          <button class="editList"></i></button>
       </form>
     `;
    const editListButton = document.querySelector('.editList');
    editListButton.addEventListener('click', (event) => {
      event.preventDefault();
      const editedValue = document.querySelector('.editInput').value;
      if (editedValue !== '') {
        const listCollection = this.#getLists();
        const listUpdated = listCollection.map((list) => {
          if (list.index === listIndex) {
            return {
              ...list,
              description: editedValue,
            };
          }
          return list;
        });
        this.#setList(listUpdated);
        this.showList();
      }
    });
  };

  showList() {
    const todoLists = this.#getLists();
    if (todoLists.length > 0) {
      todoLists.sort((a, b) => a.index - b.index);
      const todoListsWrapper = document.querySelector('.lists');
      todoListsWrapper.innerHTML = '';
      todoLists.forEach((list) => {
        const listWrapper = document.createElement('li');
        listWrapper.innerHTML = '';
        listWrapper.classList.add('list');
        listWrapper.innerHTML = `
            <div class="content c-${list.index}">
              <input type="checkbox" id="checkbox-${list.index}" class="checkbox">
              <p class="description desc-${list.index}">${list.description}</p>
            </div>
            <div class="editButton button-${list.index}">
                <button type="button" class="delete"><i class="fa-solid fa-trash-can"></i></button>  
            </div>
              `;
        todoListsWrapper.appendChild(listWrapper);
      });

      const checkboxAll = document.querySelectorAll('.checkbox');
      checkboxAll.forEach((checkBox, index) => {
        if (todoLists[index].completed) {
          checkBox.checked = true;
          const description = document.querySelector(`.desc-${index + 1}`);
          description.classList.add('completed');
        }
      });

      const deleteButton = document.querySelectorAll('.delete');
      deleteButton.forEach((btn, index) => {
        btn.addEventListener('click', () => {
          this.deleteList(index + 1);
        });
      });

      const descriptions = document.querySelectorAll('.description');
      descriptions.forEach((description, index) => {
        description.addEventListener('click', () => {
          this.editList(index + 1);
        });
      });

      const checkboxButtons = document.querySelectorAll('.checkbox');
      checkboxButtons.forEach((btn, index) => {
        btn.addEventListener('click', (event) => {
          const statusUpdate = new Status();
          statusUpdate.status(index + 1, event.target.checked);
        });
      });
    } else {
      const todoListsWrapper = document.querySelector('.lists');
      todoListsWrapper.innerHTML = '';
    }
  }
}