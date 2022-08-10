import menu from './imgs/menu.png';

const renderList = () => {
  const todoList = [
    {
      description: 'Read Books',
      completed: false,
      index: 1,
    },
    {
      description: 'Listen to Music',
      completed: false,
      index: 2,
    },
    {
      description: 'Learn Javascript',
      completed: false,
      index: 3,
    },
    {
      description: 'Wash the dishes',
      completed: false,
      index: 4,
    },
  ];

  todoList.forEach((list) => {
    const listContainer = document.querySelector('.todo-list');
    listContainer.innerHTML += `
    <div class="list-group">
            <input type="checkbox">
            <label for="checkbox">${list.description}</label>
            <div class="menu"><img src="${menu}"></div>
        </div>`;
  });
};
export default renderList;