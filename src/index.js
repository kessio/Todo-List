import './styles/style.css';
import renderList from './modules/renderLists.js';
import refreshImg from './imgs/refresh.png';
//import getTodo from './modules/getTodo.js';

//console.log(getTodo());

renderList();

const imageRefresh = () => {
  const element = document.querySelector('.refresh');

  const myIcon = new Image();
  myIcon.src = refreshImg;

  element.appendChild(myIcon);

  return element;
};
imageRefresh();
