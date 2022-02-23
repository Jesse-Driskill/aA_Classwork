const Game = require('/ttt_node/game.js');


class View {
  constructor(game, el) {
    this.game = game;
    this.setupBoard();
    this.el = el;
  }

  setupBoard() {
  const container = document.getElementById('ttt');
  const containerUl = document.createElement("ul");
  // containerUl.append("ytdwiudhjir");
  container.appendChild(containerUl);

  // function makeGrid() {
    const pos1 = document.createElement("li");
    pos1.setAttribute("id","pos1");
    const pos2 = document.createElement("li");
    pos2.setAttribute("id","pos2");
    const pos3 = document.createElement("li");
    pos3.setAttribute("id","pos3");
    const pos4 = document.createElement("li");
    pos4.setAttribute("id","pos4");
    const pos5 = document.createElement("li");
    pos5.setAttribute("id","pos5");
    const pos6 = document.createElement("li");
    pos6.setAttribute("id","pos6");
    const pos7 = document.createElement("li");
    pos7.setAttribute("id","pos7");
    const pos8 = document.createElement("li");
    pos8.setAttribute("id","pos8");
    const pos9 = document.createElement("li");
    pos9.setAttribute("id","pos9");
    
    let cells = [pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9];
    let pos;
    
    for (let i = 0; i < cells.length; i++) {
      
      containerUl.appendChild(cells[i]);
      cells[i].addEventListener('click', () => {
        if (i === 0) pos = [0,0];
        if (i === 1) pos = [0,1];
        if (i === 2) pos = [0,2];
        if (i === 3) pos = [1,0];
        if (i === 4) pos = [1,1];
        if (i === 5) pos = [1,2];
        if (i === 6) pos = [2,0];
        if (i === 7) pos = [2,1];
        if (i === 8) pos = [2,2];
        if (this.game.board.isEmptyPos(pos)){
          cells[i].append(this.game.currentPlayer);
          cells[i].setAttribute('class', `${this.game.currentPlayer}`)
          this.game.playMove(pos);
        } else {
          alert('Move is invalid!');
        }
      });
    }
  }
  
  // bindEvents() {
  //   this.handleClick()
  // }

  // handleClick(e) {
    
  // }
  
  
  // makeMove(square) {
    
  // }

}




module.exports = View;












// const markAsDone = (e) => {
//   e.preventDefault();

//   let ele = e.target // the thing that triggered the event/the thing that we are listening for

//   ele.classList.toggle('done') // toggle on or toggle off
// }

// // add event listener to cross out a list item
// groceries.addEventListener('click', markAsDone);