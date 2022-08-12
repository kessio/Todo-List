import menu from '../imgs/menu.png';
import bin from '../imgs/bin.png';
import showEditTools from './showEditTools.js';
import clickRemoveTodo from './clickRemoveTodo.js';
import strikeCheckedItems from './strikeCheckedItems.js';

const renderAddedList = (addedList) => {
  const list = addedList;
  const listContainer = document.querySelector('.todo-list');
  const isCompleted = list.completed === true ? 'checked' : '';
  const completed = list.completed === true ? '-done' : '';
  listContainer.innerHTML += `
        <div class="list-group">
        <div class="list-cont">
            <input type="checkbox" name="checkbox" class="checkboxlabel" id="checkbox-${list.index}" ${isCompleted}>
            <input type="text" readonly="true" class="checkbox-task ${isCompleted}" id="input${list.index}" value="${list.description}">
            <div class="menu${completed}"><img src="${menu}" class="menu-img" id="menu-${list.index}"> <img src="${bin}" class="bin" id="${list.index}"></div>
            </div>
        </div>`;

  showEditTools();
  clickRemoveTodo();
  strikeCheckedItems();
};
export default renderAddedList;