import React from "react";
import uniqueId from "../../util/util";

class TodoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: uniqueId(),
      title: "",
      body: "",
      done: false

    }
    
    this.updateTitle = this.updateTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.updateDone = this.updateDone.bind(this);
  }

  updateTitle(e){
    this.setState({title: e.target.value})
  }

  updateBody(e){
    this.setState({body: e.target.value})
  }

  updateDone(e){
    
    this.setState({done: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.receiveTodo(this.state)
    this.setState({
      id: uniqueId(),
      title: '',
      body: '',
      done: false
    });
  }

  render(){
    let {receiveTodo} = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Enter a new task here:
          <input 
            type="text"
            value={this.state.title}  
            onChange={this.updateTitle}
          />
          
        </label>

        <br/>
        
        <label>
          Enter the task body:
          <input
            type="text"
            value={this.state.body}  
            onChange={this.updateBody}
          />
        </label>

        

        <br />
        <input type="submit" value="Yo Soy Submit"/>
      </form>
    )
  }
}

export default TodoForm;