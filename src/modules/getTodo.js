const getTodo = () => {
  let todo;
  if (localStorage.getItem('todo') === null) {
    todo = [];
  } else {
    todo = JSON.parse(localStorage.getItem('todo'));
  }
  const todosize = todo.length;
  return { todo, todosize };
};

export default getTodo;