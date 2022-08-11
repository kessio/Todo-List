import TodoList from "./todoList.js";
import getTodo from "./getTodo.js";
import setTodo from "./setTodo";
//import renderList from "./renderLists.js";
import renderAddedList from "./renderAddedList.js";
//import renderAddedList from "./renderAddedList";
//import clearInput from "./clearInput";

const addTodoBtn = () => {
const input = document.querySelector('.save-todo');
input.addEventListener('keypress', (event) => {
    if(event.key === "Enter"){
        event.preventDefault();
        const description = document.querySelector('.save-todo').value;
        const completed = false;
        const list = getTodo();
        const index = list.todosize + 1;
        const todoList = new TodoList(description, completed, index);
        if(description != ''){
        setTodo(todoList);
        renderAddedList(todoList);
        document.querySelector('.save-todo').value = '';
        }else{
            console.log("It can not be blank")
        }
    }
});
}
export default addTodoBtn;