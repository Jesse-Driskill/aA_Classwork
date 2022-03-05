import React from "react";


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // time: new Date().getHours() 
            time: new Date()
        }
        // this.tick();
    }

    render() {
        return (
            <div>{this.state.time.getDate()}</div>
        );
    }

    tick() {
        this.setState({time: new Date() })
        
    }
}


export default Clock;