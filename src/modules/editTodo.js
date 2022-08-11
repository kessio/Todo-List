import getTodo from './getTodo.js';

const editTodo = (inputDiv) => {
  const input = inputDiv;
  input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const description = input.value;
      const inputId = input.id;
      const removeid = inputId.replace('input', '');
      const list = getTodo();
      const todoArray = list.todo;
      const newlist = todoArray.filter((item) => parseInt(removeid, 10) !== item.index);
      const index = inputId.replace('input', '');
      if (description !== '') {
        const todoObject = { description, completed: false, index };
        newlist.push(todoObject);
        newlist.forEach((task, i) => {
          task.index = i + 1;
        });
        localStorage.setItem('todo', JSON.stringify(newlist));
        window.location.reload();
      } else {
        document.querySelector('.emptylist').style.display = 'block';
      }
    }
  });
};
export default editTodo;