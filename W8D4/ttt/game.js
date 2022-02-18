let Board = require("./board");
const readline = require("readline");


class Game {
    constructor(reader) {
        this.board = new Board;
        this.currentPlayer = 'x';
    }

    run(reader, callback) {
        const that = this;
        const that2 = callback;
        console.log(this.board);

        reader.question("What position did you wanna go?", function(userPos) {
            while (!that.board.won()) {
                let entryPos = [parseInt(userPos[0]), parseInt(userPos[userPos.length - 1])]
                that.board.setPos(entryPos, that.currentPlayer);
                console.log(that.board);
                if (that.board.won()) {
                    that2();
                    return that.board.winner();
                }
                that.switchPlayer();
            }
        });

    }

    switchPlayer() {
        if (this.currentPlayer === 'x') {
            this.currentPlayer = 'o';
        } else {
            this.currentPlayer = 'x';
        }
    }
}

reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let g = new Game(reader);
g.run(reader, completion);

function completion() {
    reader.question("Play again? y or n: ", restartGame => {
        if (restartGame === "y") {
            g = new Game();
            g.run(reader, completion);
        } else {
            reader.close();
        }
    });
};

