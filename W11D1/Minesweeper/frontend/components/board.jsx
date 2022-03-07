import { resolveShowConfigPath } from '@babel/core/lib/config/files';
import React from 'react';

export default class Board extends React.Component{
    constructor(props) {
        super(props);
        console.log(this.props.board);
    }

    render() {
        // return this.props.board.map((row, rowIdx) => {
        //     (<ul>{}</ul>)
        //     // rows.map((tile, tileIdx) => {

        //     // });
        // }); 

        // return (
        //     <ul>{this.props.board.map((row, rowIdx) => {
        //         row.map((tile, tileIdx) => {

        //         })
        //     })}</ul>
        // )

        return (<div></div>)

    }
}


