import getTodo from "./getTodo.js";
//import setTodo from "./setTodo.js";

const removeTodo = (removeid) => {
  const todoList = getTodo();
  const todoArray = todoList.todo;
  const newlist = todoArray.filter((item) => parseInt(removeid, 10) !== item.index);
 /// console.log(newlist);
   const newarray = newlist.map((item, i) => (item.index = (i + 1)) && item);
  // console.log(newarray);
  localStorage.setItem('todo', JSON.stringify(newarray));
};

export default removeTodo;