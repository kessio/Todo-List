import './styles/style.css';
import refreshImg from './imgs/refresh.png';
import addTodoBtn from './modules/addTodo.js';
import clickRemoveTodo from './modules/clickRemoveTodo.js';
import showEditTools from './modules/showEditTools.js';
import renderAddedList from './modules/renderAddedList.js';
import getTodo from './modules/getTodo.js';
import strikeCheckedItems from './modules/strikeCheckedItems.js';

addTodoBtn();
showEditTools();
clickRemoveTodo();
strikeCheckedItems();

const displayLists = () => {
  const todos = getTodo().todo;
  todos.forEach(item => { renderAddedList(item) });
     
}
displayLists();

const imageRefresh = () => {
  const element = document.querySelector('.refresh');

  const myIcon = new Image();
  myIcon.src = refreshImg;

  element.appendChild(myIcon);

  return element;
};
imageRefresh();
