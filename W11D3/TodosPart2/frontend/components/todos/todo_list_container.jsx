import { connect } from 'react-redux';
import todoList from './todo_list';
import allTodos from '../../reducers/selectors';
import { receiveTodo } from '../../actions/todo_actions';

function mapStateToProps(state) {
    return {
        todos: allTodos(state),
    }
}

function mapDispatchToProps(dispatch) {
    return {
        receiveTodo: (todo) => dispatch(receiveTodo(todo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(todoList);
