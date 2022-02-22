
DIM_X = 1500;
DIM_Y = 1500;

const Util = {
    inherits(childClass, parentClass) {
        childClass.prototype = Object.create(parentClass.prototype);
        childClass.prototype.constructor = childClass;
    },

    randomVec(length) {
        const deg = 2 * Math.PI * Math.random();
        return Util.scale([Math.sin(deg), Math.cos(deg)], length);
    },
      // Scale the length of a vector by the given amount.
    scale(vec, m) {
        return [vec[0] * m, vec[1] * m];
    },

    wrap(pos) {
        if (pos[0] < 0) {
            pos[0] = DIM_X;
    
        }
        else if (pos[0] > DIM_X) {
            pos[0] = 0;
        }
    
        if (pos[1] < 0) {
            pos[1] = DIM_Y;
    
        }
        else if (pos[1] > DIM_Y) {
            pos[1] = 0;
        }
    
        return pos;
    }
};

module.exports = Util;
