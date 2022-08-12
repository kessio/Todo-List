import getTodo from './getTodo.js';

const editTodo = (inputDiv) => {
  const input = inputDiv;
  const setReadonly = input.parentElement.children[1];

  input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const description = input.value;
      const inputId = input.id;
      const list = getTodo();
      const todoArray = list.todo;
      const index = inputId.replace('input', '');
      const newlist = todoArray.filter((item) => parseInt(index, 10) !== item.index);
      if (description !== '') {
        const mtindex = parseInt(index, 10);
        const todoObject = { description, completed: false, index: mtindex };
        newlist.push(todoObject);

        localStorage.setItem('todo', JSON.stringify(newlist));
        window.location.reload();
        setReadonly.setAttribute('readonly', 'true');
      } else {
        document.querySelector('.emptylist').style.display = 'block';
      }
    }
  });
};
export default editTodo;