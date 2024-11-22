function loadTodos() {
    //this function will load the todos from the browser 
    const todos = JSON.parse(localStorage.getItem("todos")) || { "todolist": [] }; //bom acces local storage 
    console.log(todos);
    return todos;

}

function addTodoToLocalStorage(todostext) {
    const todos = loadTodos();
    todos.todolist.push(todotext);
    localStorage.setItem("todos", JSON.stringify(todos));

}
 function appendTodoInHtml(todostext) {
    
    const todolist =document.getElementById("todolist");

    const todo =document.createElement("li");

    todolist.appendChild("li");


    
 }

document.addEventListener("DOMContentLoaded", () => {


    const todoinput = document.getElementById("todoinput");

    const submitbutton = document.getElementById("addtodos");

    submitbutton.addEventListener("click", (event) => {
        const todotext = todoinput.value;
        if (todotext == '') {
            alert("please write something for the todo ");
        } else {
            addTodoToLocalStorage(todotext);
            appendTodoInHtml(todotext);
        }
    });

    todoinput.addEventListener("change", (event) => {
        //this call back method  is everytime there is a change in the input tag 
        const todostext = event.target.value;
        event.target.value = todostext.trim()
        console.log(event.target.value)
    });

    loadTodos();
});