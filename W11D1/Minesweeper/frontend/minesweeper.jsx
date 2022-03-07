import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/game.jsx';







class Root extends React.Component {
    render() {
        return(<div><Game/></div>)
    }
}


document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<Root/>, document.getElementById('root'));
    
});