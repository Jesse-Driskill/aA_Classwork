import * as TodoApiUtil from '../util/todo_api_util';

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const fetchTodos = () => (dispatch, getState) => {
    return TodoApiUtil.fetchTodos()
        .then(todos => dispatch(receiveTodos(todos))) 
}

export const createTodo = (todo) => (dispatch, getState) => {
    return TodoApiUtil.createTodo(todo)
        .then(todo => dispatch(receiveTodo(todo))) 

}

export const receiveTodos = (todos) => {
    return {
        type: RECEIVE_TODOS,
        todos: todos 
        // Object.assign({}, todos)
    }
}

export const receiveTodo = (todo) => {
    return {
        type: RECEIVE_TODO,
        todo: todo
    }
}

export const removeTodo = (todo) => {
    return {
        type: REMOVE_TODO,
        todo: todo
    }
}

