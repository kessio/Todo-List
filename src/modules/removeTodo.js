import getTodo from './getTodo.js';
// import setTodo from "./setTodo.js";

const removeTodo = (removeid) => {
  const todoList = getTodo();
  const todoArray = todoList.todo;
  const newlist = todoArray.filter((item) => parseInt(removeid, 10) !== item.index);
  newlist.forEach((task, i) => { task.index = i + 1; });
  localStorage.setItem('todo', JSON.stringify(newlist));
};

export default removeTodo;