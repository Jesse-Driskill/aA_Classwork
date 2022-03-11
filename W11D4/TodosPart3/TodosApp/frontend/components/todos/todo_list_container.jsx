import { connect } from 'react-redux';
import todoList from './todo_list';
import { allTodos } from '../../reducers/selectors';
import { fetchTodos, createTodo, receiveTodo, receiveTodos, removeTodo } from '../../actions/todo_actions';
// import { fetchTodos } from '../../util/todo_api_util';

function mapStateToProps(state) {
    return {
        todos: allTodos(state),
    }
}

function mapDispatchToProps(dispatch) {
    return {
        receiveTodo: (todo) => dispatch(receiveTodo(todo)), 
        removeTodo: (todo) => dispatch(removeTodo(todo)),
        createTodo: (todo) => dispatch(createTodo(todo)),
        fetchTodos: () => dispatch(fetchTodos())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(todoList);
