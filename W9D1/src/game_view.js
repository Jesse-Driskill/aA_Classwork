const Game = require("./game");

function GameView(game, ctx) {
    this.game = game;
    this.ctx = ctx;

}



GameView.prototype.start = function(context) {
    let that = context;
    setInterval(function () {that.game.moveObjects(that.game);
    that.game.draw(ctx)}, 200);

    // setInterval(this.moveObjects(this), 10);
}

module.exports = GameView;