import React from 'react';


const TodoListItem = ( {todo, removeTodo, receiveTodo} ) => {
    return(
        <li>

            Title: {todo.title}, Body: {todo.body}, Status: {todo.done}
            <button >Delete</button>
            <button >Done</button>
        </li>
    )
}

export default TodoListItem;