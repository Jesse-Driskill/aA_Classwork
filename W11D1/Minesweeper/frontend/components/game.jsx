import React from 'react';
import Board from './board.jsx';
import * as Minesweeper from '../../src/minesweeper/minesweeper';



class Game extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            board: new Minesweeper.Board(8, 3)
        }
    };

    updateGame(tile, flagged) {
        console.log(tile, flagged);
    };

    render() {
        // console.log("Sup")

        return (
            <Board
                updateGame = {() => this.updateGame()}
                board = {this.state.board}
            />
        )
        // return (<h1>Hello</h1>)
        // return (<h1>Hello!!!!!!!!!!!!!!!!!!!!!!!!!</h1>)
    };
}

export default Game;