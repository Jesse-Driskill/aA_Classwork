import React from "react";
import ReactDOM from "react-dom";
import Clock from "./frontend/clock.jsx";


class Root extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        // return document.getElementById("main");
        return (
            <div>
                <div>Hello!!!!!!</div>
                <Clock> </Clock>
            </div>
        );
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    
    let main = document.getElementById("main");
    ReactDOM.render( <Root/>, main )
    // ReactDOM.render()
});

