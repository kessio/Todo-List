import menu from '../imgs/menu.png';
const renderAddedList = (addedTodo) => {
       const list = addedTodo;
       const listContainer = document.querySelector('.todo-list');
       listContainer.innerHTML = `
       <div class="list-group">
               <input type="checkbox">
               <label for="checkbox">${list.description}</label>
               <div class="menu"><img src="${menu}"></div>
           </div>`;  
   };
   export default renderAddedList;