import menu from '../imgs/menu.png';
import bin from '../imgs/bin.png';
import showEditTools from './showEditTools.js';
import clickRemoveTodo from './clickRemoveTodo.js';

const renderAddedList = (addedList) => {
       const list = addedList;
       const listContainer = document.querySelector('.todo-list');
        listContainer.innerHTML += `
        <div class="list-group">
        <div class="list-cont">
            <input type="checkbox" id="checkbox-${list.index}">
            <input type="text" readonly="true" id="input${list.index}" value="${list.description}">
            <div class="menu"><img src="${menu}" class="menu-img" id="menu-${list.index}"> <img src="${bin}" class="bin" id="${list.index}"></div>
            </div>
        </div>`;
            
        showEditTools();
        clickRemoveTodo();  
   };
   export default renderAddedList;