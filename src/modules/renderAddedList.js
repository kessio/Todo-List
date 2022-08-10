import menu from '../imgs/menu.png';

const renderAddedList = (addedList) => {
       const list = addedList;
       const listContainer = document.querySelector('.todo-list');
        listContainer.innerHTML += `
        <div class="list-group">
                <input type="checkbox">
                <label for="checkbox">${list.description}</label>
                <div class="menu"><img src="${menu}"></div>
            </div>`;  
   };
   export default renderAddedList;