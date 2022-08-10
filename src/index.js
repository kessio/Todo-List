import _ from 'lodash';
import './styles/style.css';


 function component() {
   const element = document.createElement('div');
 

  // Lodash, now imported by this script
  element.classList.add('hello there, testing index.js');
   return element;
 }

 document.body.appendChild(component());