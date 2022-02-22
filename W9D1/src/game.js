const Asteroid = require('./asteroid');
const Util = require('./util');


function Game () {
    this.asteroids = [];
    this.addAsteroids();
}

const DIM_X = 1500;
const DIM_Y = 1500;
const NUM_ASTEROIDS = 10;

Game.prototype.randomPosition = function() {
    return [DIM_X * Math.random(), DIM_Y * Math.random()];
}

Game.prototype.addAsteroids = function() {
    for (let i = 0; i < NUM_ASTEROIDS; i++) {
        this.asteroids.push(new Asteroid({
            pos: this.randomPosition()
        }));
    }
}
//sup = new GameView(new Game(), document.getElementById('game-canvas').getContext('2d'));
//sup.draw(document.getElementById('game-canvas').getContext('2d'));
Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, DIM_X, DIM_Y);
    //ctx.clearRect(0, 0, 500, 500);
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, DIM_X, DIM_Y);

    this.asteroids.forEach(ele => {
        ele.draw();
    })
}

Game.prototype.moveObjects = function (context) {
    context.asteroids.forEach(ele => {
        ele.move();
    });
    console.log(context);
    console.log(context.asteroids);
}

// Game.prototype.wrap = function(pos) {
//     if (pos[0] < 0) {
//         pos[0] = DIM_X;

//     }
//     else if (pos[0] > DIM_X) {
//         pos[0] = 0;
//     }

//     if (pos[1] < 0) {
//         pos[1] = DIM_Y;

//     }
//     else if (pos[1] > DIM_Y) {
//         pos[1] = 0;
//     }

//     return pos;
// }

module.exports = Game;

// let newGame = new Game();
// console.log(newGame.addAsteroids());
// console.log(newGame.asteroids);