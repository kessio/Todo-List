import getTodo from "./getTodo.js";

 const checkbox = () => {
    //const todos = getTodo().todo;

    const checkbox = document.querySelectorAll('.checkboxlabel');
     checkbox.forEach(box => {
        box.addEventListener('change', () => {
           console.log("chnaged");
            
           /*const parentdiv = box.parentElement;
            const checkedboxDiv = parentdiv.children[1];
            const checkboxId = box.id.replace('checkbox-', '');
            const checkboxNumberId = parseInt(checkboxId, 10);
            console.log(checkboxNumberId)
            if(box.checked){
       
            checkedboxDiv.classList.add('checked');
            todos.completed = 'false';
               /* const newar = todos.map(obj => {
                    if(parseInt(checkboxId, 10) === obj.index){
                        return {...obj, completed: 'true'};
                }
                return obj;
            });
           console.log(newar);
           
           // localStorage.setItem('todo', JSON.stringify(newar));

             
              
          }  else{
                checkedboxDiv.classList.remove('checked');
                //console.log("I'm not ceckeed");
               
            }
            */
        })
       
        
    });
    
}
export default checkbox;
