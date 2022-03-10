import { connect } from 'react-redux';
import stepList from './step_list';
import { stepsByTodoId } from '../../reducers/selectors';
import { receiveStep, removeStep } from '../../actions/todo_actions';

const mapStateToProps = (state, { todo_id }) => ({
    steps: stepsByTodoId(state, todo_id),
    todo_id
});

function mapDispatchToProps(dispatch) {
    return {
        receiveStep: (step) => dispatch(receiveStep(step)) 
        // removeStep: (step) => dispatch(removeStep(step))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(stepList);
