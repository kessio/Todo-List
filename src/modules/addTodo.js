import TodoList from "./todoList";
import getTodo from "./getTodo";
import setTodo from "./setTodo";
import renderAddedList from "./renderAddedList";
//import clearInput from "./clearInput";

const addTodoBtn = () => {
const input = document.getElementById('enter-todo');
input.addEventListener('keypress', (event) => {
    if(event.key === "Enter"){
        event.preventDefault();
        const description = document.getElementById('enter-todo').value;
        const completed = false;
        const list = getTodo();
        const index = list.todosize + 1;
        const todoList = new TodoList(description, completed, index);
        setTodo(todoList);
        renderAddedList(todoList);  
    
    }
});
}
export default addTodoBtn;