import removeTodo from "./removeTodo.js";

const clickRemoveTodo = (binElement) => {
  //  const deleteBtn = document.querySelectorAll('.menu-img');
      binElement.addEventListener('click', (e) => {
         const binBtn = e.target;
         const removeid = e.target.id;
         removeTodo(removeid);
         binBtn.parentElement.parentElement.remove();
        
})

}
export default clickRemoveTodo;

