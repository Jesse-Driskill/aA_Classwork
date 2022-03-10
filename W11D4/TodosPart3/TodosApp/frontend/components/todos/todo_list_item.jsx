import React from 'react';
import TodoDetailViewContainer from './todo_detail_view_container';

function status(done) {
    if(done){
        return "Done"
    } else {
        return "Undone"
    }
}

class TodoListItem extends React.Component  {
    constructor(props){
        super(props)
        this.state = {
            detail: false
        }
        this.renderTodoDetailView = this.renderTodoDetailView.bind(this);
    }

    renderTodoDetailView(){
        this.setState({detail: !this.state.detail})
    }

    render(){
        let {todo, removeTodo, receiveTodo} = this.props;
        
        return(
            <li>
                <span onClick={this.renderTodoDetailView}>Title: {todo.title}</span>
                <br />
                {this.state.detail && <TodoDetailViewContainer todo={todo} />}
                <button onClick={()=>{
                    let newObj = {done: !todo.done}
                    let newTodo = {
                        ...todo,
                        ...newObj
                    }
                    return receiveTodo(newTodo)
                }}> {todo.done ? "Mark as Undone" : "Mark as Done"} </button>
            </li>
        )
    }
}

export default TodoListItem;


