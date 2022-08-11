import TodoList from './todoList.js';
import getTodo from './getTodo.js';
import setTodo from './setTodo.js';
import renderAddedList from './renderAddedList.js';

const addTodoBtn = () => {
  const input = document.querySelector('.save-todo');
  input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const description = document.querySelector('.save-todo').value;
      const completed = false;
      const list = getTodo();
      const index = list.todosize + 1;
      if (description !== '') {
        const todoList = new TodoList(description, completed, index);
        setTodo(todoList);
        renderAddedList(todoList);
        document.querySelector('.save-todo').value = '';
      } else {
        document.querySelector('.emptylist').style.display = 'block';
      }
    }
  });
};
export default addTodoBtn;