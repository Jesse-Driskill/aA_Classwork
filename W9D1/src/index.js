
const MovingObject = require("./moving_object");
const Asteroid = require("./asteroid");
const Game = require("./game");
const GameView = require("./game_view");
const Bullet = require("./bullet");
const Ship = require("./ship");
const Util = require("./util");




console.log("Webpack is working!");
window.addEventListener('DOMContentLoaded', (event) => {
    
    console.log('DOM fully loaded and parsed');
    ctx = document.getElementById("game-canvas").getContext('2d');
    sup = new GameView(new Game(), ctx);
    sup.game.draw(ctx);
    sup.start(sup);

    // sup.game.addAsteroids();
});







window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.Game = Game;
window.GameView = GameView;

