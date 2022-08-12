import getTodo from './getTodo.js';

const clearComplete = () => {
  const clearButton = document.getElementById('clear-complete');
  clearButton.addEventListener('click', () => {
    const todos = getTodo().todo;
    const newlist = todos.filter((item) => item.completed !== true);
    localStorage.setItem('todo', JSON.stringify(newlist));
    window.location.reload();
  });
};
export default clearComplete;