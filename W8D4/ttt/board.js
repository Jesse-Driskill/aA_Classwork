class Board {
    constructor() {
        this.grid = [ ['_', '_', '_'], ['_', '_', '_'], ['_', '_', '_'] ]
    }

    getPos(pos) {
        return this.grid[pos[0]][pos[1]];
    }

    setPos(pos, mark) {
        this.grid[pos[0]][pos[1]] = mark;
    }

    openPositions() {
        let positions = [];

        for (let i = 0; i < this.grid.length; i++) {
            for (let k = 0; k < this.grid.length; k++) {
                if (this.getPos([i, k]) === '_') {
                    positions.push([i, k]);
                }
            }
        }
        return positions;
    }

    winCols() {
        for (let i = 0; i < this.grid.length; i++) {
            let ele1 = this.grid[i][0];
            let ele2 = this.grid[i][1];
            let ele3 = this.grid[i][2];

            if (ele1 !== '_' && ele1 === ele2 && ele2 === ele3) {
                this.winningMark = ele1;
                return true;
            }
        }
        return false;
    }

    winRows() {
        for (let i = 0; i < this.grid.length; i++) {
            let row = this.grid[i];
            if (row[0] !== '_' && row[0] === row[1] && row[1] === row[2]) {
                this.winningMark = row[0];
                return true;
            }
        }

        return false;
    }

    winDiags() {
        // let ele = this.grid[0][0];
        // for (let i = 1; i < this.grid.length; i++) {
        //     if (this.grid[i][i] != ele) {
        //         break;
        //     }
        // }
        if ((this.grid[0][0] === this.grid[1][1] && this.grid[1][1] === this.grid[2][2]) ||(this.grid[0][2] === this.grid[1][1] && this.grid[1][1] === this.grid[2][0])) {
            this.winningMark = this.grid[0][0];
            return true;
        }

        return false;
    }

    won() {
        if (this.winCols() || this.winDiags() || this.winRows()) {
            return true;
        }

        return false;
    }

    winner() {
        if (won) {
            return `${this.winningMark} has won!`;
        }
    }

    empty(pos) {
        if (this.getPos(pos) === '_') {
            return true;
        }

        return false;
    }

    tied() {
        for (let i = 0; i < this.grid.length; i++) {
            if (this.grid[i].includes('_') && !this.won()) {
                return false;
            }
        }

        return true;
    }

}

module.exports = Board;

// function winCols(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let ele1 = arr[i][0];
//         let ele2 = arr[i][1];
//         let ele3 = arr[i][2];

//         if (ele1 === ele2 && ele2 === ele3 && ele1 !== '_') {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(winCols([ ['x', 'z', 'z'], ['z', 'z', 'z'], ['z', 'z', 'z'] ]));
