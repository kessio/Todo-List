import getTodo from './getTodo.js';

const setTodo = (newTodo) => {
  const todoArray = getTodo().todo;
  todoArray.push(newTodo);
  localStorage.setItem('todo', JSON.stringify(todoArray));
};

export default setTodo;