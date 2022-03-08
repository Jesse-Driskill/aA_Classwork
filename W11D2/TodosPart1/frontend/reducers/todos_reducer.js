
import { RECEIVE_TODOS, RECEIVE_TODO } from './../actions/todo_actions'



const todosReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_TODOS:
            //Do stuff
        case RECEIVE_TODO:
            //Do more stuff
        default:
            return state;
    }
}

export default todosReducer;