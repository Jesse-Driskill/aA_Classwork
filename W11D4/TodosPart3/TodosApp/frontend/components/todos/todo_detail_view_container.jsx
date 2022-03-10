import { connect } from 'react-redux';
import TodoDetailView from './todo_detail_view';
import { removeTodo } from '../../actions/todo_actions';
import {receiveSteps } from '../../actions/step_actions';

function mapDispatchToProps(dispatch) {
    return {
        removeTodo: (todo) => dispatch(removeTodo(todo)),
        receiveSteps: (steps) => dispatch(receiveSteps(steps))
    }
}

export default connect(null, mapDispatchToProps)(TodoDetailView);
