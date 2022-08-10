  import clickRemoveTodo from './clickRemoveTodo.js';
  const showEditTools = () => {
    const editTools = document.querySelectorAll('.menu');
    editTools.forEach((element) => {
    element.addEventListener('click', () => {
      const menuchild = element.firstElementChild;
      const binchild = element.lastElementChild;
      menuchild.style.display = 'none';
      binchild.style.display = 'block';
      clickRemoveTodo(binchild);
    })
    
})

}
export default showEditTools;