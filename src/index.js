import './styles/style.css';
import renderList from './lists.js';
import refreshImg from './imgs/refresh.png';

renderList();

const imageRefresh = () => {
  const element = document.querySelector('.refresh');

 // Add the image to our existing div.
 const myIcon = new Image();
 myIcon.src = refreshImg;

 element.appendChild(myIcon);

  return element;
}
imageRefresh();
