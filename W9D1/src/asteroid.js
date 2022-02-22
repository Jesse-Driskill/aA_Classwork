const Util = require('./util.js')
const MovingObject = require("./moving_object.js");

const DEFAULT = {
    COLOR: "gray",
    RADIUS: 30, 
    SPEED: 5
}


function Asteroid(options) {
    //options = options || {};
    options.color = DEFAULT.COLOR;
    options.radius = DEFAULT.RADIUS;
    options.vel = Util.randomVec(DEFAULT.SPEED);
    options.pos = options.pos;
    

    MovingObject.call(this, options);
}

Util.inherits(Asteroid, MovingObject);


const mo = new Asteroid({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00"
});

console.log(mo);

module.exports = Asteroid;