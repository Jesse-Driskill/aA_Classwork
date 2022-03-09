import React from "react";
import uniqueId from "../../util/util";

class TodoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: uniqueId(),
      title: "saaaaaa"
    }
    
    this.updateTitle = this.updateTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateTitle(e){
    this.setState({title: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.receiveTodo(this.state)
    this.setState({
      id: uniqueId(),
      title: ''
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
        <br />
        <input type="submit" value="Yo Soy Submit"/>
      </form>
    )
  }
}

export default TodoForm;