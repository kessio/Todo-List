import menu from '../imgs/menu.png';
import bin from '../imgs/bin.png';
import getTodo from './getTodo.js';

const renderList = () => {
  const todoList = getTodo();
  const mylist = todoList.todo;
  if (todoList.todosize !== 0) {
    mylist.forEach((list) => {
      const listContainer = document.querySelector('.todo-list');
      listContainer.innerHTML += `
    <div class="list-group">
    <div class="list-cont">
            <input type="checkbox" id="checkbox-${list.index}">
            <input type="text" class ="save-todo" id="input${list.index}" value="${list.description}" readonly="true" >
            <div class="menu">
            <img src="${menu}" class="menu-img" id="menu-${list.index}"><img src="${bin}" class="bin" id="${list.index}">
            </div>
            </div>
        </div>`;
    });
  }
};
export default renderList;