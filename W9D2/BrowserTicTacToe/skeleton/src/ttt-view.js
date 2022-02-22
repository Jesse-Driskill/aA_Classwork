class View {
  constructor(game, el) {

  }

  setupBoard() {
    const container = document.getElementById('ttt');
    const containerUl = document.createElement("ul");
    containerUl.append("ytdwiudhjir");
    container.appendChild(containerUl);

    function makeGrid() {
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

      for (let i = 0; i < cells.length; i++) {
        cells[i].append("Sup");
        containerUl.appendChild(cells[i]);

      }




  
    }
  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}




module.exports = View;

