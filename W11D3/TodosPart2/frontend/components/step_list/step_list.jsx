import React from 'react';
// import TodoForm from '../todo_list/todo_form';
// import TodoListItem from './todo_list_item';

class StepList extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        let {steps, receiveStep} = this.props;
        return (
          <div>
            <ul>
              {steps.map(step => <StepListItemContainer key={step.id} />)}
            </ul>
            {/* Render step form */}
          </div>
        )
    }
}

export default StepList;