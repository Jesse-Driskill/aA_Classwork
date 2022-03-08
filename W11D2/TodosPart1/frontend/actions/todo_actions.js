
export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";



export const receiveToDos = (todos) => {
    return {
        type: RECEIVE_TODOS,
        todos: Object.assign({}, todos)
    }
}

export const receiveToDo = (todo) => {
    return {
        type: RECEIVE_TODO,
        todo: todo
    }
}

