import React from 'react';
import Board2 from './board.jsx';
import { Tile, Board } from '../../src/minesweeper/minesweeper';


class Game extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            board: new Board(2, 30),
        }
        
    };

    updateGame() {

    };

    render() {
        console.log("Sup")
        return (
            <Board2
                updateGame = {() => this.updateGame()}
                board = {this.state.board}
            />
        )
    };
}

export default Game;