import React from "react";
// import { receiveStep } from "../../actions/step_actions";



class StepListItem extends React.Component{
  constructor(props){
    super(props);
    this.toggleDone = this.toggleDone.bind(this);
  }

  toggleDone(e){
    const toggledStep = Object.assign(
      {},
      this.props.step,
      { done: !this.props.step.done}
    );
    this.props.receiveStep(toggledStep);
  }

  render(){
    let {step} = this.props;

    return(
      <div>
        Step Title: {step.title}
        <br />
        Step Body: {step.body} 
        <br />
        <button onClick={this.toggleDone}> {step.done ? "Undo" : "Done"} </button> 

      </div>
    )
  }
}


export default StepListItem;