import React from 'react';

export default class Board extends React.Component{
    constructor(props) {
        super(props);
        console.log(this.props.board);
    }

    render() {
        const rows = this.props.board.map((row, rowIdx) => {
            return (<ul></ul>)
            rows.map((tile, tileIdx) => {

            });
        }); 
        // return(
        //     <ul>
        //         <ul>
                    
        //         </ul>





        //         <ul></ul>
        //     </ul>
        // )
    }
}


