import React from "react";
import { receiveStep } from "../../actions/step_actions";


class StepListItem extends React.Component{
  constructor(props){
    super(props);
    this.toggleDone = this.toggleDone.bind(this);
  }

  toggleDone(e){
    let {receiveTodo} = this.props;
    let newObj = {done: !step.done}
    let newStep = {
        ...step,
        ...newObj
    }
   receiveStep(newStep);
  }

  render(){
    let {step} = this.props;

    return(
      <div>
        Step Title: {step.title} Step Body: {step.body} 
        <br />
        <button onClick={this.toggleDone}> Toggle Step </button> 

      </div>
    )
  }
}