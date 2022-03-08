import { resolveShowConfigPath } from '@babel/core/lib/config/files';
import Tile from './tile';
import React from 'react';

export default class Board extends React.Component{
    constructor(props) {
        super(props);
        // console.log(this.props.board);
    }
    getRows() {
        return this.props.board.grid.map ( (row, index) => {
            return(
                <ul
                    key = {index}
                >
                    {this.getTiles(row, index)}
                </ul>    
            )

        })
        
                
    }

    getTiles(row, idx) {
        
        return row.map( (tile, index) => {
            let currentTile = this.props.board.grid[idx][index]; 
            
            console.log("Tyhis is from bvoard", this.props.updateGame)
            
            return (
                <Tile
                    // board = {this.props.board}
                    key = {index}
                    index = {index}
                    tile = {currentTile}
                    updateGame = {(tile, flagged) => this.props.updateGame(tile, flagged)}

                />

            )
        })
    }






    render() {
        let rows = this.getRows();
        console.log(rows)

        return (<div className="board-container">
                    {rows}
                </div>)

    }
}


