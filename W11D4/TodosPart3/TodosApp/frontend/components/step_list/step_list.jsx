import React from 'react';
import StepListItemContainer from './step_list_item_container';
import StepForm from './step_form';
// import TodoForm from '../todo_list/todo_form';
// import TodoListItem from './todo_list_item';

class StepList extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        let {steps, receiveStep, todo_id} = this.props;
        return (
          <div>
            <ul>
              {steps.map(step => <StepListItemContainer step={step} key={step.id} />)}
            </ul>
            <StepForm todo_id={ todo_id } receiveStep={ receiveStep } />

            {/* Render step form */}
          </div>
        )
    }
}

export default StepList;