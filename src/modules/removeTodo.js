import getTodo from "./getTodo.js";
//import setTodo from "./setTodo.js";

const removeTodo = (removeid) => {
  const booksList = getTodo();
  const booksArray = booksList.todo;
  const newlist = booksArray.filter((item) => parseInt(removeid, 10) !== item.index);
 /// console.log(newlist);
   const newarray = newlist.map((item, i) => (item.index = (i + 1)) && item);
  // console.log(newarray);
  localStorage.setItem('todo', JSON.stringify(newarray));
};

export default removeTodo;