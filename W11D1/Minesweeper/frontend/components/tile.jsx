import React from 'React';


export default class Tile extends React.Component{

    constructor(props) {
        super(props);
    }

    handleClick(e) {
        console.log(e);
        let flagged;
        if (e.altkey) {
            flagged = true;
        }
        else {
            flagged = false;
        }
        console.log("this is this.props.updateGame in handleClick", this.props.updateGame);
        console.log(this.props.tile, flagged);
        return this.props.updateGame(this.props.tile, flagged);
    }

    render() {
        // console.log(this.props.index);
        return (
        <li className={this.getClasses()}
        key={this.props.index}
        tile={this.props.tile}
        onClick={(e) => this.handleClick(e)}
        >{this.getText()}</li>)
    }

    getText() {
        if(this.props.tile.explored) {
            if(this.props.tile.bombed)  return '💣';
            let currentBombCount = this.props.tile.adjacentBombCount();
            return currentBombCount > 0 ? currentBombCount : "";
            
            
        }
        if(this.props.tile.flagged) return '🚩';

        return '';
    }

    getClasses() {
        let classes = ["tile"];
        if (this.props.tile.explored) {
            classes.push("explored");
        }
        if (this.props.tile.bombed) {
            classes.push("bombed");
        }
        if (this.props.tile.flagged) {
            classes.push("flagged");
        }

        return classes.join(" ");
    }
}