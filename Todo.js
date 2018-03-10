var todos = ['item 1', 'item 2', 'item 3', 'item 4']

//It should have a function to display todos
function displayTodos () {
    console.log ('My Todos: ', todos);
}

//It should have a function to add new todos
function addTodos (todo) {
    todos.push (todo);
    displayTodos ();
}

//It should have a function to change a todo
function changeTodos (position, todo) {
    todos [position] = (todo);
    displayTodos ();
}

//It should have a function to delete a todo
function deleteTodos (position) {
    todos.splice (position, 1);
    displayTodos ();
}





