import React from 'react';
import TodoForm from '../todo_list/todo_form';
import TodoListItem from './todo_list_item';

class TodoList extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        let {todos, receiveTodo, removeTodo} = this.props;

        // let todos = this.props.todos;
        // let receiveTodo = this.props.receiveTodo;
        return(
            <div>
                <ul>
                    {todos.map(todo => 
                        <TodoListItem
                            key={todo.id}
                            todo={todo}
                            receiveTodo={receiveTodo}
                            removeTodo={removeTodo}
                        /> )}
                </ul>
                <TodoForm receiveTodo={receiveTodo}/>
            </div>
        )
    }
}

export default TodoList;