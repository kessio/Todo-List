import removeTodo from './removeTodo.js';

const clickRemoveTodo = () => {
  const deleteBtn = document.querySelectorAll('.bin');
  deleteBtn.forEach((element) => {
    element.addEventListener('click', (e) => {
      e.preventDefault();
      const binBtn = e.target;
      const removeid = e.target.id;
      removeTodo(removeid);
      binBtn.parentElement.parentElement.parentElement.remove();
      window.location.reload();
    });
  });
};
export default clickRemoveTodo;
