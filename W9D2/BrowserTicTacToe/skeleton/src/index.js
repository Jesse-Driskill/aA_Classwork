const View = require('./ttt-view');
const Game = require('/ttt_node/game.js'); //Not sure idk lol

document.addEventListener("DOMContentLoaded", () => {
  // Your code here

  window.View = View;
  window.Game = Game;

  let game = new Game();
  let ele = document.getElementById('ttt');
  let view = new View(game, ele);
  view.setupBoard();
  
});


