import editTodo from './editTodo.js';

const showEditTools = () => {
  const editTools = document.querySelectorAll('.menu');
  editTools.forEach((myelem) => {
    myelem.addEventListener('click', (e) => {
      e.preventDefault();

      const menuchild = myelem.firstElementChild;
      menuchild.style.display = 'none';
      const binchild = myelem.lastElementChild;
      binchild.style.display = 'block';

      const parentdiv = binchild.parentElement.parentElement;
      const inpuDiv = parentdiv.children[1];
      inpuDiv.removeAttribute('readonly');
      const end = inpuDiv.value.length;
      inpuDiv.setSelectionRange(end, end);
      inpuDiv.focus();

      editTodo(inpuDiv);
    });
  });
};
export default showEditTools;