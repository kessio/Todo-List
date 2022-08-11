import './styles/style.css';
import renderList from './modules/renderLists.js';
import refreshImg from './imgs/refresh.png';
import addTodoBtn from './modules/addTodo.js';
import clickRemoveTodo from './modules/clickRemoveTodo.js';
import showEditTools from './modules/showEditTools.js';
//import renderAddedList from './modules/renderAddedList.js';

renderList();
addTodoBtn();
showEditTools();
clickRemoveTodo();



const imageRefresh = () => {
  const element = document.querySelector('.refresh');

  const myIcon = new Image();
  myIcon.src = refreshImg;

  element.appendChild(myIcon);

  return element;
};
imageRefresh();
