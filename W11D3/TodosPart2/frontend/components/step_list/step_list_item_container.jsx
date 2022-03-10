import { connect } from 'react-redux';
import StepListItem from './step_list_item';
import { removeStep, receiveStep } from '../../actions/todo_actions';


function mapDispatchToProps(dispatch) {
    return {
        removeStep: (step) => dispatch(removeStep(step)), 
        receiveStep: (step) => dispatch(receiveStep(step)) 
    }
}

export default connect(null, mapDispatchToProps)(StepListItem);
