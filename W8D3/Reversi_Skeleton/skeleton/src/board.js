// DON'T TOUCH THIS CODE
if (typeof window === 'undefined'){
  var Piece = require("./piece");
}
// DON'T TOUCH THIS CODE

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  let array = new Array([],[],[],[],[],[],[],[]);

  for (let i = 0; i < array.length; i++) {
    for (let k = 0; k < array.length; k++) {
      array[i][k] = undefined;
    }
  }

  array[3][4] = new Piece("black");
  array[4][3] = new Piece("black");
  array[3][3] = new Piece("white");
  array[4][4] = new Piece("white");

  return array;
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  if ((pos[0] < 0) || (pos[1] < 0)) {
    return false;
  } else if ((pos[0] > 7) || (pos[1] > 7)) {
    return false;
  }
  return true;
};

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  if (this.isValidPos(pos)) {
    return this.grid[pos[0]][pos[1]];
  } else {
    throw new Error('Not valid pos!');
  }
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  if (this.getPiece(pos) === undefined) {
    return false;
  }
  return this.getPiece(pos).color === color;
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  return this.getPiece(pos) !== undefined;
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns an empty array if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns empty array if it hits an empty position.
 *
 * Returns empty array if no pieces of the opposite color are found.
 */

// Board.DIRS = [
//   [ 0,  1], [ 1,  1], [ 1,  0],
//   [ 1, -1], [ 0, -1], [-1, -1],
//   [-1,  0], [-1,  1]
// ];

// One of the conditionals will use pieacesToFlip.length

Board.prototype._positionsToFlip = function(pos, color, dir, piecesToFlip){
  let x = pos[0] + dir[0];
  let y = pos[1] + dir[1];
  let newPos = [x, y];
  
  if (piecesToFlip === undefined) {
    piecesToFlip = [];
  }

  if (!this.isValidPos(newPos) || !this.isOccupied(newPos)) {
    return [];

  } else if (this.getPiece(newPos).color !== color) {
    piecesToFlip.push(newPos);
  }
  else if (this.getPiece(newPos).color === color) {
    return piecesToFlip;
  }
  
  
  // console.log(piecesToFlip);
  return this._positionsToFlip(newPos, color, dir, piecesToFlip);
};

// let arrrrrrrr = [
//       [new Piece("white"), new Piece("white"), new Piece("white"), new Piece("white"), new Piece("white"), new Piece("white"), new Piece("white"), new Piece("white")], 
//       [new Piece("white"), new Piece("white"), new Piece("white"), new Piece("white"), new Piece("white"), new Piece("white"), new Piece("white"), new Piece("white")], 
//       [new Piece("white"), new Piece("white"), new Piece("white"), new Piece("white"), new Piece("white"), new Piece("white"), new Piece("white"), new Piece("white")], 
//       [new Piece("white"), new Piece("white"), new Piece("white"), new Piece("white"), new Piece("white"), new Piece("white"), new Piece("white"), new Piece("white")], 
//       [new Piece("white"), new Piece("white"), new Piece("white"), new Piece("white"), new Piece("white"), new Piece("white"), new Piece("white"), new Piece("white")], 
//       [new Piece("white"), new Piece("white"), new Piece("white"), new Piece("white"), new Piece("white"), new Piece("white"), new Piece("white"), new Piece("white")], 
//       [new Piece("white"), new Piece("white"), new Piece("white"), new Piece("white"), new Piece("white"), new Piece("white"), new Piece("white"), new Piece("white")], 
//       [new Piece("black"), new Piece("white"), new Piece("white"), new Piece("white"), new Piece("white"), new Piece("white"), new Piece("white"), new Piece("black")], 


// ];

// With each recursive call, we're going to change position by dir input
// We'll call pieceflipping function on each piece we encounter as long as it is the opposite color
// When we hit one of our own pieces, we return all the positions we found
// When we hit an empty piece of the edge of the board, return empty array

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */

// pos, color, dir, piecesToFlip
Board.prototype.validMove = function (pos, color) {
  if (!this.isValidPos(pos) || this.isOccupied(pos)) {
    return false;
  }

  for (let i = 0; i < Board.DIRS.length; i++) {
    if (this._positionsToFlip(pos, color, Board.DIRS[i]).length > 0) {
      return true;
    }
  }
  return false;
};

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
  let validArr = [];
  if (this.validMove(pos, color)) {
    this.grid[pos[0]][pos[1]] =  new Piece(color);

    for (let i = 0; i < Board.DIRS.length; i++) {
      if (this._positionsToFlip(pos, color, Board.DIRS[i]).length > 0) {
        validArr = validArr.concat(this._positionsToFlip(pos, color, Board.DIRS[i]));
      }
    }

    // validArr.forEach((el) => {
    //   this.getPiece(el).flip;
    // });
    for (let i = 0; i < validArr.length; i++) {
      el = validArr[i];
      this.grid[el[0]][el[1]].flip();
    }
  }
  else {
    throw new Error("Invalid move!")
  }
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */


Board.prototype.validMoves = function (color) {
  let posArr = [];
  for (let i = 0; i < 8; i++) {
    for (let k = 0; k < 8; k++)  {
      if (this.validMove([i, k], color)) {
        posArr.push([i, k]);
      }
    }
  }
  return posArr;

};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
  return this.validMoves(color).length > 0;
};



/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
  return (this.validMoves('white').length === 0) && (this.validMoves('black').length === 0);
};




/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
  console.log("    0 1 2 3 4 5 6 7 ");
  console.log("  ------------------");
  for (let i = 0; i < 8; i++) {
    // console.log(`| ${this.grid[i].join(" , ")} |`)
    let rowStr = ""
    for (let j = 0; j < 8; j++) {
      if (this.grid[i][j] === undefined ) {
        rowStr += '_ ';
      } else {
        rowStr += this.grid[i][j].toString() + " ";
      }
    }
    console.log(`${i} | ${rowStr}`);
  }
  console.log("  ------------------");
};

// def display_board
//         i = 0
//         puts "   0  1  2  3  4  5  6  7"
//         @grid.each do |sub_arr|
//             #i += 1
//             # puts i.to_s + "  " + sub_arr.join("  ")
//             symbols = []
//             k = 0
//             while k < sub_arr.length
//                 if sub_arr[k].is_a?(Piece)
//                     symbols << sub_arr[k].symbol
//                 else
//                     symbols << sub_arr[k]
//                 end
//                 k += 1
//             end

//             puts i.to_s + "  " + symbols.join("  ")
//             i += 1
//         end
//     end

// DON'T TOUCH THIS CODE
if (typeof window === 'undefined'){
  module.exports = Board;
}
// DON'T TOUCH THIS CODE