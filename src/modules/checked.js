import getTodo from "./getTodo.js";
const checked = () => {
    const inputbox = document.querySelector('.save-todo');
    const todo = getTodo().todo;
    if(todo.completed === "true"){
        inputbox.classList.add('checked');
        console.log(todo.completed);
    }

}
export default checked;