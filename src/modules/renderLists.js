import menu from '../imgs/menu.png';
import getTodo from './getTodo.js';

const renderList = () => {
 const todoList = getTodo();
 const mylist = todoList.todo;
 if(todoList.todosize !== 0){
  mylist.forEach((list) => {
    const listContainer = document.querySelector('.todo-list');
    listContainer.innerHTML += `
    <div class="list-group">
            <input type="checkbox">
            <label for="checkbox">${list.description}</label>
            <div class="menu"><img src="${menu}"></div>
        </div>`;
  });
} 
};
export default renderList;