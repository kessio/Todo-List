import './styles/style.css';
import refreshImg from './imgs/refresh.png';
import addTodoBtn from './modules/addTodo.js';
import clickRemoveTodo from './modules/clickRemoveTodo.js';
import showEditTools from './modules/showEditTools.js';
import renderAddedList from './modules/renderAddedList.js';
import getTodo from './modules/getTodo.js';
import strikeCheckedItems from './modules/strikeCheckedItems.js';
import clearComplete from './modules/clearComplete.js';

addTodoBtn();
showEditTools();
clickRemoveTodo();
strikeCheckedItems();
clearComplete();

const displayLists = () => {
  const todos = getTodo().todo;
  todos.forEach((item) => { renderAddedList(item); });
};
displayLists();

const imageRefresh = () => {
  const element = document.querySelector('.refresh');

  const myIcon = new Image();
  myIcon.src = refreshImg;

  element.appendChild(myIcon);

  return element;
};
imageRefresh();

const refresh = document.querySelector('.refresh');
refresh.addEventListener('click', () => {
  window.location.reload();
});
