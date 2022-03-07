import { resolveShowConfigPath } from '@babel/core/lib/config/files';
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
            return (
                <li className='tile'
                    key = {index}
                    tile={row[index]}
                    onClick={this.props.updateGame}
                >{this.getText(idx, index)}</li>
            )
        })
    }

    getText(idx1, idx2) {
        let currentTile =this.props.board.grid[idx1][idx2] 
        if(!currentTile.explored) {
            if(currentTile.bombed)  return '💣';
            return currentTile.adjacentBombCount()
        }
        if(currentTile.flagged) return '🚩'
        return '';
    }




    render() {
        let rows = this.getRows();
        console.log(rows)

        return (<div>
                    {rows}
                </div>)

    }
}


