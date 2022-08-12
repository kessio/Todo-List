import getTodo from './getTodo.js';

const selecetedTasks = () => {
  const todos = getTodo().todo;
  const checkboxes = document.querySelectorAll('input[name=checkbox]');
  checkboxes.forEach((box) => {
    box.addEventListener('change', (e) => {
      e.preventDefault();
      const checkboxId = e.target.id.replace('checkbox-', '');
      const checkboxIdInt = parseInt(checkboxId, 10);
      // if box checked
      const parentdiv = box.parentElement;
      // get paragraph that contains task name
      const checkboxTask = parentdiv.children[1];

      if (box.checked) {
        checkboxTask.classList.add('checked');
        const newar = todos.map((obj) => {
          if (checkboxIdInt === obj.index) {
            return { ...obj, completed: true };
          }
          return obj;
        });
        localStorage.setItem('todo', JSON.stringify(newar));
        window.location.reload();
      } else {
        checkboxTask.classList.remove('checked');
        const newarray = todos.map((item) => {
          if (checkboxIdInt === item.index) {
            return { ...item, completed: false };
          }
          return item;
        });
        localStorage.setItem('todo', JSON.stringify(newarray));
        window.location.reload();
      }
    });
  });
};
export default selecetedTasks;