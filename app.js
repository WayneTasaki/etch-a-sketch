function fillBoard(size) {
  let gameBoard = document.querySelector('.game-board');
  let squares = gameBoard.querySelectorAll('div');
  squares.forEach(div => div.remove())
  gameBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gameBoard.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  
  let amount = size * size
  for (i = 0; i < amount; i++) {
    let square = document.createElement('div');
    square.style.backgroundColor = '#fafafa';
    square.style.border = '1px solid lightgrey'
    gameBoard.insertAdjacentElement('beforeend', square);
  }
}

let output = document.getElementById('demo')
let slider = document.getElementById('myRange').oninput = function() {
  let value = (this.value - this.min) / (this.max - this.min)*100
  let outputValue = this.value
  output.innerHTML = `${outputValue} x ${outputValue}`;
}
// Adjusts slider value and outputs that value

function changeSize(size) {
  fillBoard(size)
}

