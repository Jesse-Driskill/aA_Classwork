const allTodos = (state) => {
    return Object.values(state.todos)
}

const stepsByTodoId = (state, todoId) => {
    let arr = [];

    Object.values(state.steps).forEach(step => {
        if (step.todo_id === todoId){
            arr.push(step)
        }
    })

    return arr;
}

export {allTodos, stepsByTodoId};