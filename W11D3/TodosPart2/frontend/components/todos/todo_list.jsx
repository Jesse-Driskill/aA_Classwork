import React from 'react';
import TodoListItem from './todo_list_item';

class TodoList extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <ul>
                {this.props.todos.map(todo => <TodoListItem key={todo.title} todo={todo} /> )}
                
            </ul>
        )
    }
}

export default TodoList;