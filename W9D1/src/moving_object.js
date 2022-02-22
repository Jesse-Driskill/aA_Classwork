const Util = require("./util");

function MovingObject(options) {

    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
}

MovingObject.prototype.draw = function() {
    let gameCanvas = document.getElementById("game-canvas");
    let ctx = gameCanvas.getContext('2d');
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
    ctx.lineWidth = 10;
    ctx.stroke();
    
    ctx.fill();
}

MovingObject.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];

    Util.wrap(this.pos);
}


module.exports = MovingObject;