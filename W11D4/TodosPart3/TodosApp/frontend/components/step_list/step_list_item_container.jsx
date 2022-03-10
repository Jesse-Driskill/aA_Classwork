import { connect } from 'react-redux';
import StepListItem from './step_list_item';
import { removeStep, receiveStep, receiveSteps } from '../../actions/todo_actions';



function mapDispatchToProps(dispatch, { step }) {
    return {
        removeStep: () => dispatch(removeStep(step)), 
        receiveStep: step => dispatch(receiveStep(step)) 
    }
}



export default connect(null, mapDispatchToProps)(StepListItem);
