import showEditTools from "./showEditTools.js";
import getTodo from "./getTodo.js";
//import renderAddedList from "./renderAddedList.js";

const editTodo = (inputDiv) => {
    const input = inputDiv;
    input.addEventListener('keypress', (event) => {
        if(event.key === "Enter"){
            event.preventDefault();
            const description = input.value;
            const completed = false;
            const inputId = input.id;
            const removeid = inputId.replace('input','');
            const list = getTodo();
            const todoArray = list.todo;
            const newlist = todoArray.filter((item) => parseInt(removeid, 10) !== item.index);
            const index = inputId.replace('input','');
            if(description !== ''){
                const todoObject = {description: description, completed: false, index: index};
                newlist.push(todoObject);
                const newarray = newlist.map((item, i) => (item.index = (i + 1)) && item);
                localStorage.setItem('todo', JSON.stringify(newarray));
                location.reload();
            }else{
                document.querySelector('.emptylist').style.display = "block";

            }
           
        }
    })
}
export default editTodo;